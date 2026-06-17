use crate::Span;
use mpl_lang::linker::FunctionTrait;
use mpl_lang::STDLIB;
use mpl_lang::{linker::Module, MPLParser, Rule};
use pest::{iterators::Pair, Parser as _};

pub struct FunctionHover {
    pub span: Span,
    pub markdown: String,
}

pub fn function_hover(query: &str, cursor: usize) -> Option<FunctionHover> {
    let cursor = cursor.min(query.len());
    let pairs = MPLParser::parse(Rule::file, query).ok()?;

    for pair in pairs {
        if let Some(hover) = find_function_hover(pair, cursor, None) {
            return Some(hover);
        }
    }

    None
}

fn find_function_hover(
    pair: Pair<'_, Rule>,
    cursor: usize,
    rule: Option<Rule>,
) -> Option<FunctionHover> {
    let span: Span = (&pair).into();
    if !span.contains(cursor) {
        return None;
    }

    let rule = match pair.as_rule() {
        Rule::map_fn | Rule::align | Rule::group_by | Rule::compute_fn => Some(pair.as_rule()),
        _ => rule,
    };

    for child in pair.clone().into_inner() {
        if let Some(hover) = find_function_hover(child, cursor, rule) {
            return Some(hover);
        }
    }

    let (rule, label) = match pair.as_rule() {
        Rule::func => (rule?, function_label(&pair)?),
        Rule::bucket_by_fn | Rule::bucket_by_with_conversion_fn => {
            (pair.as_rule(), pair.to_string())
        }
        _ => return None,
    };

    Some(FunctionHover {
        span: (&pair).into(),
        markdown: markdown_for_label(rule, &label)?,
    })
}

fn function_label(pair: &Pair<'_, Rule>) -> Option<String> {
    match pair.as_rule() {
        Rule::func => {
            let mut parts = Vec::new();
            for child in pair.clone().into_inner() {
                match child.as_rule() {
                    Rule::module => {
                        let ident = child.into_inner().next()?;
                        parts.push(ident_label(ident)?);
                    }
                    Rule::plain_ident | Rule::escaped_ident => {
                        parts.push(ident_label(child)?);
                    }
                    _ => {}
                }
            }
            Some(parts.join("::"))
        }
        Rule::bucket_by_fn | Rule::bucket_by_with_conversion_fn => Some(pair.to_string()),
        _ => None,
    }
}

fn ident_label(pair: Pair<'_, Rule>) -> Option<String> {
    match pair.as_rule() {
        Rule::plain_ident => Some(pair.to_string()),
        Rule::escaped_ident => {
            let inner = pair.into_inner().next()?;
            Some(unescape_escaped_ident(inner.as_str()))
        }
        _ => None,
    }
}

fn markdown_for_label(rule: Rule, label: &str) -> Option<String> {
    if let Some((module_path, fn_name)) = label.rsplit_once("::") {
        let module = module_path
            .split("::")
            .try_fold(&*STDLIB, |module, segment| module.submodule(segment))?;

        format_markdown_for_rule(module, rule, label, fn_name)
    } else {
        format_markdown_for_rule(&STDLIB, rule, label, label)
            .or_else(|| lookup_unqualified_markdown(&STDLIB, rule, label, None))
    }
}

fn format_markdown_for_rule(
    module: &Module,
    rule: Rule,
    label: &str,
    name: &str,
) -> Option<String> {
    match rule {
        Rule::map_fn => module
            .mapping_function(name)
            .map(|function| format_markdown(label, function)),
        Rule::align => module
            .align_function(name)
            .map(|function| format_markdown(label, function)),
        Rule::group_by => module
            .group_function(name)
            .map(|function| format_markdown(label, function)),
        Rule::bucket_by_fn | Rule::bucket_by_with_conversion_fn => module
            .bucket_function(name)
            .map(|function| format_markdown(label, function)),
        Rule::compute_fn => module
            .compute_function(name)
            .map(|function| format_markdown(label, function)),
        _ => None,
    }
}

fn format_markdown(label: &str, function: &impl FunctionTrait) -> String {
    let args = function
        .args()
        .iter()
        .map(|arg| arg.name)
        .collect::<Vec<_>>()
        .join(", ");

    let mut markdown = format!("```mpl\n{label}({args})\n```");
    let doc = function.doc();
    if !doc.is_empty() {
        markdown.push_str("\n\n");
        markdown.push_str(doc);
    }

    markdown
}

fn lookup_unqualified_markdown(
    module: &Module,
    rule: Rule,
    fn_name: &str,
    prefix: Option<&str>,
) -> Option<String> {
    for (sub_name, sub) in module.submodule_iter() {
        let sub_prefix = match prefix {
            Some(prefix) => format!("{prefix}::{sub_name}"),
            None => sub_name.to_string(),
        };

        let label = format!("{sub_prefix}::{fn_name}");
        if let Some(markdown) = format_markdown_for_rule(sub, rule, &label, fn_name) {
            return Some(markdown);
        }

        if let Some(markdown) = lookup_unqualified_markdown(sub, rule, fn_name, Some(&sub_prefix)) {
            return Some(markdown);
        }
    }

    None
}

fn unescape_escaped_ident(inner: &str) -> String {
    let mut escaped = false;
    let mut label = String::with_capacity(inner.len());

    for c in inner.chars() {
        if escaped {
            escaped = false;
            match c {
                'r' => label.push('\r'),
                'n' => label.push('\n'),
                't' => label.push('\t'),
                'b' => label.push('\x08'),
                'f' => label.push('\x0C'),
                '\\' => label.push('\\'),
                '`' => label.push('`'),
                _ => {
                    label.push('\\');
                    label.push(c);
                }
            }
        } else if c == '\\' {
            escaped = true;
        } else {
            label.push(c);
        }
    }

    label
}
