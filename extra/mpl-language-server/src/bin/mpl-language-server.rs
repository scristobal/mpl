use eyre::Result;
use lsp_server::{
    Connection, Message, Notification as ServerNotification, Request as ServerRequest, Response,
};
use lsp_types::notification::{
    DidChangeTextDocument, DidCloseTextDocument, DidOpenTextDocument, Notification,
    PublishDiagnostics,
};
use lsp_types::request::{
    CodeActionRequest, Completion as CompletionRequest, HoverRequest, Request as LspRequest,
    SemanticTokensFullRequest,
};
use lsp_types::{
    CodeAction, CodeActionKind, CodeActionOrCommand, CodeActionParams,
    CodeActionProviderCapability, CodeActionResponse, CompletionItem, CompletionItemKind,
    CompletionOptions, CompletionParams, CompletionResponse, CompletionTextEdit, Diagnostic,
    DiagnosticSeverity, DidChangeTextDocumentParams, DidCloseTextDocumentParams,
    DidOpenTextDocumentParams, Documentation, Hover, HoverContents, HoverParams,
    HoverProviderCapability, InitializeResult, MarkupContent, MarkupKind, Position,
    PublishDiagnosticsParams, Range, SemanticToken, SemanticTokenType, SemanticTokens,
    SemanticTokensFullOptions, SemanticTokensLegend, SemanticTokensOptions, SemanticTokensParams,
    SemanticTokensResult, SemanticTokensServerCapabilities, ServerCapabilities, ServerInfo,
    TextDocumentSyncCapability, TextDocumentSyncKind, TextDocumentSyncOptions, TextEdit, Uri,
    WorkspaceEdit,
};
use mpl_language_server::{
    CompletionResult, DiagnosticItem, Severity as MplSeverity, Span, TokenType, collect_tokens,
    compute_completions_with_params, compute_diagnostics_raw, function_hover,
};
use std::collections::HashMap;
use std::sync::atomic::{AtomicBool, Ordering};

fn main() -> Result<()> {
    let (connection, io_threads) = Connection::stdio();

    let mut server = Server::default();

    let (id, _params) = connection.initialize_start()?;
    connection.initialize_finish(id, serde_json::to_value(Server::initialize_result())?)?;

    server.run(&connection)?;

    io_threads.join()?;

    Ok(())
}

#[derive(Default)]
struct Server {
    shutdown: AtomicBool,
    documents: HashMap<Uri, String>,
}

impl Server {
    fn initialize_result() -> InitializeResult {
        InitializeResult {
            capabilities: ServerCapabilities {
                text_document_sync: Some(TextDocumentSyncCapability::Options(
                    TextDocumentSyncOptions {
                        open_close: Some(true),
                        change: Some(TextDocumentSyncKind::FULL),
                        ..Default::default()
                    },
                )),
                semantic_tokens_provider: Some(
                    SemanticTokensServerCapabilities::SemanticTokensOptions(
                        SemanticTokensOptions {
                            legend: SemanticTokensLegend {
                                token_types: vec![
                                    SemanticTokenType::VARIABLE,
                                    SemanticTokenType::STRING,
                                    SemanticTokenType::NUMBER,
                                    SemanticTokenType::REGEXP,
                                    SemanticTokenType::OPERATOR,
                                    SemanticTokenType::KEYWORD,
                                    SemanticTokenType::TYPE,
                                ],
                                token_modifiers: Vec::new(),
                            },
                            full: Some(SemanticTokensFullOptions::Bool(true)),
                            ..Default::default()
                        },
                    ),
                ),
                completion_provider: Some(CompletionOptions {
                    trigger_characters: Some(vec![
                        "$".to_string(),
                        "`".to_string(),
                        ":".to_string(),
                        "|".to_string(),
                        " ".to_string(),
                    ]),
                    ..Default::default()
                }),
                hover_provider: Some(HoverProviderCapability::Simple(true)),
                code_action_provider: Some(CodeActionProviderCapability::Simple(true)),
                ..Default::default()
            },
            server_info: Some(ServerInfo {
                name: "mpl-language-server".to_string(),
                version: Some(env!("CARGO_PKG_VERSION").to_string()),
            }),
        }
    }

    fn run(&mut self, connection: &Connection) -> Result<()> {
        for message in &connection.receiver {
            self.handle_message(connection, message)?;
            if self.shutdown.load(Ordering::Relaxed) {
                break;
            }
        }
        Ok(())
    }

    fn handle_message(&mut self, connection: &Connection, message: Message) -> Result<()> {
        match message {
            Message::Request(request) => self.handle_request(connection, request),
            Message::Notification(notification) => {
                self.handle_notification(connection, notification)
            }
            Message::Response(response) => self.handle_response(connection, response),
        }
    }

    fn handle_request(&mut self, connection: &Connection, request: ServerRequest) -> Result<()> {
        if connection.handle_shutdown(&request)? {
            self.shutdown.store(true, Ordering::Release);
            return Ok(());
        }

        match request.method.as_str() {
            SemanticTokensFullRequest::METHOD => {
                let (id, params) = request.extract(SemanticTokensFullRequest::METHOD)?;

                let result = self.semantic_tokens(params);

                connection
                    .sender
                    .send(Response::new_ok(id, result).into())?;
            }

            CompletionRequest::METHOD => {
                let (id, params) = request.extract(CompletionRequest::METHOD)?;

                let result = self.completions(params);

                connection
                    .sender
                    .send(Response::new_ok(id, result).into())?;
            }

            HoverRequest::METHOD => {
                let (id, params) = request.extract(HoverRequest::METHOD)?;

                let result = self.hover(params);

                connection
                    .sender
                    .send(Response::new_ok(id, result).into())?;
            }

            CodeActionRequest::METHOD => {
                let (id, params) = request.extract(CodeActionRequest::METHOD)?;

                let result = self.code_actions(&params);

                connection
                    .sender
                    .send(Response::new_ok(id, result).into())?;
            }
            _ => {
                let response = Response::new_err(
                    request.id,
                    lsp_server::ErrorCode::MethodNotFound as i32,
                    "method not found".to_string(),
                );

                connection.sender.send(response.into())?;
            }
        }

        Ok(())
    }

    fn semantic_tokens(&self, params: SemanticTokensParams) -> Option<SemanticTokensResult> {
        let text = self.documents.get(&params.text_document.uri)?;

        let Some(tokens) = collect_tokens(text) else {
            return Some(SemanticTokensResult::Tokens(SemanticTokens {
                result_id: None,
                data: Vec::new(),
            }));
        };

        let mut data = Vec::new();
        let mut previous_line = 0;
        let mut previous_start = 0;

        for token in tokens {
            // (line, start, lenght)
            let mut pieces = Vec::new();
            let to = token.span.to.min(text.len());
            let mut from = token.span.from.min(to);

            while from < to {
                let line_end = text[from..to]
                    .find('\n')
                    .map_or(to, |newline| from + newline);
                let start = byte_to_position(text, from);
                let end = byte_to_position(text, line_end);

                if end.character > start.character {
                    pieces.push((start.line, start.character, end.character - start.character));
                }

                if line_end == to {
                    break;
                }
                from = line_end + 1;
            }

            for piece in pieces {
                let delta_line = piece.0 - previous_line;
                let delta_start = if delta_line == 0 {
                    piece.1 - previous_start
                } else {
                    piece.1
                };

                data.push(SemanticToken {
                    delta_line,
                    delta_start,
                    length: piece.2,
                    token_type: match token.kind {
                        TokenType::Variable => 0,
                        TokenType::String => 1,
                        TokenType::Number => 2,
                        TokenType::Regexp => 3,
                        TokenType::Operator | TokenType::Punctuation => 4,
                        TokenType::Keyword | TokenType::Bool => 5,
                        TokenType::Type => 6,
                    },
                    token_modifiers_bitset: 0,
                });

                previous_line = piece.0;
                previous_start = piece.0;
            }
        }

        Some(SemanticTokensResult::Tokens(SemanticTokens {
            result_id: None,
            data,
        }))
    }

    fn completions(&self, params: CompletionParams) -> Option<CompletionResponse> {
        let text = self
            .documents
            .get(&params.text_document_position.text_document.uri)?;

        let cursor = position_to_byte(text, params.text_document_position.position);

        let mut items = Vec::new();

        for completion in compute_completions_with_params(text, cursor, &[]) {
            let item = match completion {
                CompletionResult::Keywords { span, options } => options
                    .into_iter()
                    .map(|item| {
                        let insert = item.apply.unwrap_or(item.label).to_string();
                        let doc = Documentation::String(item.info.to_string());
                        let edit = TextEdit::new(span_to_range(text, span), insert);
                        let completion = CompletionTextEdit::Edit(edit);

                        CompletionItem {
                            label: item.label.to_string(),
                            kind: Some(CompletionItemKind::KEYWORD),
                            detail: Some("keyword".to_string()),
                            documentation: Some(doc),
                            text_edit: Some(completion),
                            ..Default::default()
                        }
                    })
                    .collect(),
                CompletionResult::AlignFunctions { span, options }
                | CompletionResult::MapFunctions { span, options }
                | CompletionResult::GroupFunctions { span, options }
                | CompletionResult::BucketFunctions { span, options }
                | CompletionResult::ComputeFunctions { span, options } => options
                    .into_iter()
                    .map(|item| {
                        let doc = Documentation::String(item.label.to_string());
                        let edit = TextEdit::new(span_to_range(text, span), item.label.to_string());
                        let completion = CompletionTextEdit::Edit(edit);

                        CompletionItem {
                            label: item.label.to_string(),
                            kind: Some(CompletionItemKind::FUNCTION),
                            detail: Some(item.format_signature()),
                            documentation: Some(doc),
                            text_edit: Some(completion),
                            ..Default::default()
                        }
                    })
                    .collect(),
                CompletionResult::Params { span, options } => options
                    .into_iter()
                    .map(|item| {
                        let optional = if item.optional { "optional" } else { "" };
                        let detail = format!("{} {optional}", item.typ);
                        let edit = TextEdit::new(span_to_range(text, span), item.label.to_string());
                        let completion = CompletionTextEdit::Edit(edit);

                        CompletionItem {
                            label: item.label.clone(),
                            kind: Some(CompletionItemKind::VARIABLE),
                            detail: Some(detail),
                            text_edit: Some(completion),
                            ..Default::default()
                        }
                    })
                    .collect(),
                CompletionResult::Tag { .. }
                | CompletionResult::Dataset { .. }
                | CompletionResult::Metric { .. } => Vec::new(),
            };
            items.push(item);
        }

        Some(CompletionResponse::Array(
            items.into_iter().flatten().collect(),
        ))
    }

    fn hover(&self, params: HoverParams) -> Option<Hover> {
        let text = self
            .documents
            .get(&params.text_document_position_params.text_document.uri)?;

        let cursor = position_to_byte(text, params.text_document_position_params.position);
        let hover = function_hover(text, cursor)?;

        Some(Hover {
            contents: HoverContents::Markup(MarkupContent {
                kind: MarkupKind::Markdown,
                value: hover.info.as_markdown(),
            }),
            range: Some(span_to_range(text, hover.span)),
        })
    }

    fn code_actions(&self, params: &CodeActionParams) -> Option<CodeActionResponse> {
        let uri = &params.text_document.uri;
        let text = self.documents.get(uri)?;
        let range_span = range_to_span(text, params.range);

        let actions = compute_diagnostics_raw(text, HashMap::new())
            .iter()
            .filter_map(|diagnostic| {
                if !diagnostic.span.intersects(range_span) {
                    return None;
                }

                let lsp_diagnostic = diagnostic_to_lsp(text, diagnostic);

                let actions = diagnostic.actions.iter().map(move |action| {
                    let range_action = span_to_range(text, action.span);
                    let text_edit = TextEdit::new(range_action, action.insert.to_string());
                    let changes = HashMap::from([(uri.clone(), vec![text_edit])]);
                    let edit = WorkspaceEdit {
                        changes: Some(changes),
                        ..Default::default()
                    };

                    let action = CodeAction {
                        title: action.name.clone(),
                        kind: Some(CodeActionKind::QUICKFIX),
                        diagnostics: Some(vec![lsp_diagnostic.clone()]),
                        edit: Some(edit),
                        is_preferred: Some(true),
                        ..Default::default()
                    };

                    CodeActionOrCommand::CodeAction(action)
                });

                Some(actions)
            })
            .flatten()
            .collect();

        Some(actions)
    }

    fn handle_notification(
        &mut self,
        connection: &Connection,
        notification: ServerNotification,
    ) -> Result<()> {
        match notification.method.as_str() {
            DidOpenTextDocument::METHOD => {
                let params = notification.extract(DidOpenTextDocument::METHOD)?;
                self.did_open_txt_doc(params, connection)?;
            }

            DidChangeTextDocument::METHOD => {
                let params = notification.extract(DidChangeTextDocument::METHOD)?;
                self.did_change_txt_doc(params, connection)?;
            }

            DidCloseTextDocument::METHOD => {
                let params = notification.extract(DidCloseTextDocument::METHOD)?;
                self.did_close_txt_doc(params, connection)?;
            }
            _ => {}
        }
        Ok(())
    }

    fn did_open_txt_doc(
        &mut self,
        params: DidOpenTextDocumentParams,
        connection: &Connection,
    ) -> Result<()> {
        let text = params.text_document.text;
        let uri = params.text_document.uri;

        let diagnostics = compute_diagnostics_raw(&text, HashMap::new())
            .iter()
            .map(|item| diagnostic_to_lsp(&text, item))
            .collect();

        self.documents.insert(uri.clone(), text);

        let params = PublishDiagnosticsParams::new(uri, diagnostics, None);
        let notification = ServerNotification::new(PublishDiagnostics::METHOD.to_string(), params);

        connection.sender.send(notification.into())?;

        Ok(())
    }

    fn did_change_txt_doc(
        &mut self,
        params: DidChangeTextDocumentParams,
        connection: &Connection,
    ) -> Result<()> {
        let Some(change) = params.content_changes.into_iter().last() else {
            return Ok(());
        };

        let text = change.text;
        let uri = params.text_document.uri;

        let diagnostics = compute_diagnostics_raw(&text, HashMap::new())
            .iter()
            .map(|item| diagnostic_to_lsp(&text, item))
            .collect();

        self.documents.insert(uri.clone(), text);

        let params = PublishDiagnosticsParams::new(uri, diagnostics, None);
        let notification = ServerNotification::new(PublishDiagnostics::METHOD.to_string(), params);

        connection.sender.send(notification.into())?;

        Ok(())
    }

    fn did_close_txt_doc(
        &mut self,
        params: DidCloseTextDocumentParams,
        connection: &Connection,
    ) -> Result<()> {
        let uri = params.text_document.uri;

        self.documents.remove(&uri);

        let params = PublishDiagnosticsParams::new(uri, Vec::new(), None);
        let notification = ServerNotification::new(PublishDiagnostics::METHOD.to_string(), params);

        connection.sender.send(notification.into())?;

        Ok(())
    }

    fn handle_response(&self, _connection: &Connection, _response: Response) -> Result<()> {
        Ok(())
    }
}

fn diagnostic_to_lsp(text: &str, item: &DiagnosticItem) -> Diagnostic {
    let severity = match item.severity {
        MplSeverity::Error => DiagnosticSeverity::ERROR,
        MplSeverity::Warning => DiagnosticSeverity::WARNING,
        MplSeverity::Info => DiagnosticSeverity::INFORMATION,
        MplSeverity::Hint => DiagnosticSeverity::HINT,
    };

    let message = match &item.help {
        Some(help) if !help.is_empty() => format!("{}\n{help}", item.message),
        _ => item.message.clone(),
    };

    let range = span_to_range(text, item.span);

    Diagnostic {
        range,
        severity: Some(severity),
        source: Some("mpl".to_string()),
        message,
        ..Default::default()
    }
}

fn span_to_range(text: &str, span: Span) -> Range {
    Range::new(
        byte_to_position(text, span.from),
        byte_to_position(text, span.to),
    )
}

fn range_to_span(text: &str, range: Range) -> Span {
    Span::new(
        position_to_byte(text, range.start),
        position_to_byte(text, range.end),
    )
}

fn byte_to_position(text: &str, offset: usize) -> Position {
    let offset = offset.min(text.len());
    let mut line = 0;
    let mut character = 0;

    for (idx, ch) in text.char_indices() {
        if idx >= offset {
            break;
        }

        if ch == '\n' {
            line += 1;
            character = 0;
        } else {
            character += ch.len_utf16() as u32;
        }
    }

    Position::new(line, character)
}

fn position_to_byte(text: &str, position: Position) -> usize {
    let mut line = 0;
    let mut character = 0;

    for (idx, ch) in text.char_indices() {
        if line == position.line {
            if character >= position.character {
                return idx;
            }

            if ch == '\n' {
                return idx;
            }

            let next = character + ch.len_utf16() as u32;
            if next > position.character {
                return idx;
            }
            character = next;
            continue;
        }

        if ch == '\n' {
            line += 1;
            character = 0;
        }
    }

    text.len()
}
