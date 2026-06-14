use mpl_lang::{MPLParser, Rule};
use pest::{Parser as _, iterators::Pair};

use crate::{FunctionCategory, FunctionInfo, Span, function_info_for_category};

pub struct FunctionHover {
    pub span: Span,
    pub info: FunctionInfo,
}

#[derive(Debug, Clone, PartialEq, Eq)]
struct FunctionCandidate {
    span: Span,
    category: FunctionCategory,
    label: String,
}

#[must_use]
pub fn function_hover(query: &str, cursor: usize) -> Option<FunctionHover> {
    let candidate = function_candidate_at(query, cursor)?;
    let info = function_info_for_category(candidate.category, &candidate.label)?;

    Some(FunctionHover {
        span: candidate.span,
        info,
    })
}

fn function_candidate_at(query: &str, cursor: usize) -> Option<FunctionCandidate> {
    let cursor = cursor.min(query.len());
    let pairs = MPLParser::parse(Rule::file, query).ok()?;
    let mut result = None;

    for pair in pairs {
        find_function_candidate(pair, cursor, None, &mut result);
    }

    result
}

fn find_function_candidate(
    pair: Pair<'_, Rule>,
    cursor: usize,
    category: Option<FunctionCategory>,
    result: &mut Option<FunctionCandidate>,
) {
    let span = pair_span(&pair);
    if !span_contains_cursor(span, cursor) {
        return;
    }

    let rule = pair.as_rule();
    let category = match rule {
        Rule::map_fn => Some(FunctionCategory::Map),
        Rule::align => Some(FunctionCategory::Align),
        Rule::group_by => Some(FunctionCategory::Group),
        Rule::compute_fn => Some(FunctionCategory::Compute),
        _ => category,
    };

    if let Some(candidate) = candidate_from_pair(&pair, category) {
        record_candidate(result, candidate);
    }

    for child in pair.into_inner() {
        find_function_candidate(child, cursor, category, result);
    }
}

fn candidate_from_pair(
    pair: &Pair<'_, Rule>,
    category: Option<FunctionCategory>,
) -> Option<FunctionCandidate> {
    let rule = pair.as_rule();
    let category = match rule {
        Rule::func => category?,
        Rule::bucket_by_fn | Rule::bucket_by_with_conversion_fn => FunctionCategory::Bucket,
        _ => return None,
    };

    Some(FunctionCandidate {
        span: pair_span(pair),
        category,
        label: function_label(pair)?,
    })
}

fn record_candidate(result: &mut Option<FunctionCandidate>, candidate: FunctionCandidate) {
    let should_replace = result.as_ref().is_none_or(|existing| {
        candidate.span.to - candidate.span.from < existing.span.to - existing.span.from
    });

    if should_replace {
        *result = Some(candidate);
    }
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
        Rule::bucket_by_fn | Rule::bucket_by_with_conversion_fn => Some(pair.as_str().to_string()),
        _ => None,
    }
}

fn ident_label(pair: Pair<'_, Rule>) -> Option<String> {
    match pair.as_rule() {
        Rule::plain_ident => Some(pair.as_str().to_string()),
        Rule::escaped_ident => {
            let inner = pair.into_inner().next()?;
            Some(unescape_escaped_ident(inner.as_str()))
        }
        _ => None,
    }
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

fn pair_span(pair: &Pair<'_, Rule>) -> Span {
    let span = pair.as_span();
    Span::new(span.start(), span.end())
}

fn span_contains_cursor(span: Span, cursor: usize) -> bool {
    span.from <= cursor && cursor <= span.to
}

#[cfg(test)]
mod tests {
    use super::{FunctionCategory, function_candidate_at, function_hover};

    #[test]
    fn hover_finds_map_function() {
        let query = "ds:metric | map rate";
        let cursor = query.find("rate").expect("rate") + 1;
        let hover = function_hover(query, cursor).expect("hover");

        assert_eq!(hover.info.label, "rate");
    }

    #[test]
    fn hover_finds_qualified_align_function() {
        let query = "ds:metric | align using prom::rate";
        let cursor = query.find("rate").expect("rate") + 1;
        let hover = function_hover(query, cursor).expect("hover");

        assert_eq!(hover.info.label, "prom::rate");
    }

    #[test]
    fn hover_finds_bucket_function() {
        let query = "ds:metric | bucket to 1m using histogram(count)";
        let cursor = query.find("histogram").expect("histogram") + 1;
        let hover = function_hover(query, cursor).expect("hover");

        assert_eq!(hover.info.label, "histogram");
    }

    #[test]
    fn hover_uses_parsed_function_category() {
        let query = "ds:metric | align using min";
        let cursor = query.find("min").expect("min") + 1;
        let candidate = function_candidate_at(query, cursor).expect("candidate");

        assert_eq!(candidate.category, FunctionCategory::Align);
    }

    #[test]
    fn hover_ignores_non_function_identifiers() {
        let query = "avg:metric | filter min == \"rate\" | map rate";
        let dataset_cursor = query.find("avg").expect("avg") + 1;
        let tag_cursor = query.find("min").expect("min") + 1;
        let string_cursor = query.find("\"rate\"").expect("rate string") + 2;

        assert!(function_hover(query, dataset_cursor).is_none());
        assert!(function_hover(query, tag_cursor).is_none());
        assert!(function_hover(query, string_cursor).is_none());
    }

    #[test]
    fn hover_returns_none_for_unparsable_query() {
        assert!(function_hover("ds: | map rate", 10).is_none());
    }
}
