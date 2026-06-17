use eyre::Result;
use lsp_server::{
    Connection, ErrorCode, IoThreads, Message, Notification as ServerNotification,
    Request as ServerRequest, Response,
};
use lsp_types::notification::{
    DidChangeTextDocument, DidCloseTextDocument, DidOpenTextDocument, Notification,
    PublishDiagnostics,
};
use lsp_types::request::{
    CodeActionRequest, Completion as CompletionRequest, HoverRequest, Request as LspRequest,
};
use lsp_types::{
    CodeAction, CodeActionKind, CodeActionOrCommand, CodeActionParams,
    CodeActionProviderCapability, CodeActionResponse, CompletionItem, CompletionItemKind,
    CompletionOptions, CompletionParams, CompletionResponse, CompletionTextEdit, Diagnostic,
    DiagnosticSeverity, DidChangeTextDocumentParams, DidCloseTextDocumentParams,
    DidOpenTextDocumentParams, Documentation, Hover, HoverContents, HoverParams,
    HoverProviderCapability, InitializeResult, MarkupContent, MarkupKind, Position,
    PublishDiagnosticsParams, Range, ServerCapabilities, ServerInfo, TextDocumentSyncCapability,
    TextDocumentSyncKind, TextDocumentSyncOptions, TextEdit, Uri, WorkspaceEdit,
};
use mpl_language_server::{
    CompletionResult, Severity as MplSeverity, Span, compute_completions_with_params,
    compute_diagnostics_raw, function_hover,
};
use std::collections::HashMap;
use std::sync::atomic::{AtomicBool, Ordering};

fn main() -> Result<()> {
    let server = Server::new();

    server.run()?;

    Ok(())
}

struct Server {
    connection: Connection,
    io_threads: IoThreads,
    shutdown: AtomicBool,
    documents: HashMap<Uri, String>,
}

impl Server {
    fn new() -> Self {
        let (connection, io_threads) = Connection::stdio();
        let shutdown = AtomicBool::new(false);
        let documents = HashMap::new();

        Self {
            connection,
            io_threads,
            shutdown,
            documents,
        }
    }

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
                completion_provider: Some(CompletionOptions::default()),
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

    fn run(mut self) -> Result<()> {
        let (id, _params) = self.connection.initialize_start()?;
        let init = serde_json::to_value(Self::initialize_result())?;
        self.connection.initialize_finish(id, init)?;

        while let Ok(message) = self.connection.receiver.recv() {
            self.handle_message(message)?;

            if self.shutdown.load(Ordering::Relaxed) {
                break;
            }
        }

        self.io_threads.join()?;

        Ok(())
    }

    fn handle_message(&mut self, message: Message) -> Result<()> {
        match message {
            Message::Request(request) => self.handle_request(request),
            Message::Notification(notification) => self.handle_notification(notification),
            Message::Response(response) => self.handle_response(response),
        }
    }

    fn handle_request(&self, request: ServerRequest) -> Result<()> {
        if self.connection.handle_shutdown(&request)? {
            self.shutdown.store(true, Ordering::Release);
            return Ok(());
        }

        match request.method.as_str() {
            CompletionRequest::METHOD => {
                let (id, params) = request.extract(CompletionRequest::METHOD)?;
                let result = self.completions(params);
                let response = Response::new_ok(id, result);
                self.connection.sender.send(response.into())?;
            }

            HoverRequest::METHOD => {
                let (id, params) = request.extract(HoverRequest::METHOD)?;
                let result = self.hover(params);
                let response = Response::new_ok(id, result);
                self.connection.sender.send(response.into())?;
            }

            CodeActionRequest::METHOD => {
                let (id, params) = request.extract(CodeActionRequest::METHOD)?;
                let result = self.code_actions(&params);
                let response = Response::new_ok(id, result);
                self.connection.sender.send(response.into())?;
            }
            _ => {
                let id = request.id;
                let error = ErrorCode::MethodNotFound;
                let response = Response::new_err(id, error as i32, "method not found".to_string());
                self.connection.sender.send(response.into())?;
            }
        }

        Ok(())
    }

    fn handle_notification(&mut self, notification: ServerNotification) -> Result<()> {
        match notification.method.as_str() {
            DidOpenTextDocument::METHOD => {
                let params = notification.extract(DidOpenTextDocument::METHOD)?;
                self.did_open_txt_doc(params)?;
            }
            DidChangeTextDocument::METHOD => {
                let params = notification.extract(DidChangeTextDocument::METHOD)?;
                self.did_change_txt_doc(params)?;
            }
            DidCloseTextDocument::METHOD => {
                let params = notification.extract(DidCloseTextDocument::METHOD)?;
                self.did_close_txt_doc(params)?;
            }
            _ => {}
        }
        Ok(())
    }

    fn handle_response(&self, _response: Response) -> Result<()> {
        Ok(())
    }
}

impl Server {
    fn did_open_txt_doc(&mut self, params: DidOpenTextDocumentParams) -> Result<()> {
        let text = params.text_document.text;
        let uri = params.text_document.uri;

        let diagnostics = self.diagnostics(&text);

        self.documents.insert(uri.clone(), text);

        let params = PublishDiagnosticsParams::new(uri, diagnostics, None);
        let notification = ServerNotification::new(PublishDiagnostics::METHOD.to_string(), params);

        self.connection.sender.send(notification.into())?;

        Ok(())
    }

    fn did_change_txt_doc(&mut self, params: DidChangeTextDocumentParams) -> Result<()> {
        let Some(change) = params.content_changes.into_iter().last() else {
            return Ok(());
        };

        let text = change.text;
        let uri = params.text_document.uri;

        let diagnostics = self.diagnostics(&text);

        self.documents.insert(uri.clone(), text);

        let params = PublishDiagnosticsParams::new(uri, diagnostics, None);
        let notification = ServerNotification::new(PublishDiagnostics::METHOD.to_string(), params);

        self.connection.sender.send(notification.into())?;

        Ok(())
    }

    fn did_close_txt_doc(&mut self, params: DidCloseTextDocumentParams) -> Result<()> {
        let uri = params.text_document.uri;

        self.documents.remove(&uri);

        let params = PublishDiagnosticsParams::new(uri, Vec::new(), None);
        let notification = ServerNotification::new(PublishDiagnostics::METHOD.to_string(), params);

        self.connection.sender.send(notification.into())?;

        Ok(())
    }
}

impl Server {
    fn completions(&self, params: CompletionParams) -> Option<CompletionResponse> {
        let text = self
            .documents
            .get(&params.text_document_position.text_document.uri)?;

        let cursor = position_to_byte(text, params.text_document_position.position);

        let completions = compute_completions_with_params(text, cursor, &[])
            .into_iter()
            .map(|completion| match completion {
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
                            // detail: Some("keyword".to_string()),
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
                            // detail: Some(item.format_signature()),
                            documentation: Some(doc),
                            text_edit: Some(completion),
                            ..Default::default()
                        }
                    })
                    .collect(),
                CompletionResult::Params { span, options } => options
                    .into_iter()
                    .map(|item| {
                        // let optional = if item.optional { "optional" } else { "" };
                        // let detail = format!("{} {optional}", item.typ);
                        let edit = TextEdit::new(span_to_range(text, span), item.label.to_string());
                        let completion = CompletionTextEdit::Edit(edit);

                        CompletionItem {
                            label: item.label.to_string(),
                            kind: Some(CompletionItemKind::VARIABLE),
                            // detail: Some(detail),
                            text_edit: Some(completion),
                            ..Default::default()
                        }
                    })
                    .collect(),
                CompletionResult::Tag { .. }
                | CompletionResult::Dataset { .. }
                | CompletionResult::Metric { .. } => Vec::new(),
            })
            .flatten()
            .collect();

        Some(CompletionResponse::Array(completions))
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
                value: hover.markdown,
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

                let severity = severity_map(&diagnostic.severity);
                let range = span_to_range(text, diagnostic.span);
                let actions = &diagnostic.actions;

                let diagnostic = Diagnostic {
                    range,
                    severity: Some(severity),
                    source: Some("mpl".to_string()),
                    message: diagnostic.message.to_string(),
                    ..Default::default()
                };

                let actions = actions.iter().map(move |action| {
                    let range_action = span_to_range(text, action.span);
                    let text_edit = TextEdit::new(range_action, action.insert.to_string());
                    let changes = HashMap::from([(uri.clone(), vec![text_edit])]);
                    let edit = WorkspaceEdit {
                        changes: Some(changes),
                        ..Default::default()
                    };

                    let action = CodeAction {
                        title: action.name.to_string(),
                        kind: Some(CodeActionKind::QUICKFIX),
                        diagnostics: Some(vec![diagnostic.clone()]),
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

    fn diagnostics(&self, text: &str) -> Vec<Diagnostic> {
        compute_diagnostics_raw(&text, HashMap::new())
            .iter()
            .filter_map(|diagnostic| {
                let severity = severity_map(&diagnostic.severity);
                let range = span_to_range(text, diagnostic.span);
                let message = match &diagnostic.help {
                    Some(help) if !help.is_empty() => format!("{}\n{help}", diagnostic.message),
                    _ => diagnostic.message.to_string(),
                };

                let diagnostic = Diagnostic {
                    range,
                    severity: Some(severity),
                    source: Some("mpl".to_string()),
                    message,
                    ..Default::default()
                };

                Some(diagnostic)
            })
            .collect()
    }
}

fn severity_map(severity: &MplSeverity) -> DiagnosticSeverity {
    match severity {
        MplSeverity::Error => DiagnosticSeverity::ERROR,
        MplSeverity::Warning => DiagnosticSeverity::WARNING,
        MplSeverity::Info => DiagnosticSeverity::INFORMATION,
        MplSeverity::Hint => DiagnosticSeverity::HINT,
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
