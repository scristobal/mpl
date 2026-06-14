/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "mpl",

  extras: $ => [
    /\s/,
    $.comment,
  ],

  word: $ => $.identifier,

  rules: {
    source_file: $ => seq(
      repeat(choice($.directive, $.param_declaration)),
      optional($.query),
    ),

    comment: _ => token(seq("//", /.*/)),

    directive: $ => seq(
      "set",
      field("name", $._identifier),
      optional(seq("=", choice($.constant, $._identifier))),
      ";",
    ),

    param_declaration: $ => seq(
      "param",
      field("name", $.param_identifier),
      ":",
      field("type", $.param_type),
      ";",
    ),

    param_type: $ => choice(
      $.optional_type,
      $.param_native_type,
      $.tag_type,
    ),

    optional_type: $ => seq(
      "Option",
      "<",
      choice($.tag_type, $.param_native_type),
      ">",
    ),

    param_native_type: _ => choice("Dataset", "dataset", "Duration", "duration", "Regex"),
    tag_type: _ => choice("string", "int", "float", "bool"),

    query: $ => choice(
      $.compute_query,
      $.simple_query,
    ),

    simple_query: $ => seq(
      $.source,
      optional($.sample_pipe),
      repeat(choice($.filter_pipe, $.ifdef_pipe)),
      repeat($.query_pipe),
      repeat($.extend_pipe),
    ),

    compute_query: $ => seq(
      "(",
      field("left", $.query),
      ",",
      field("right", $.query),
      optional(","),
      ")",
      $.compute_pipe,
      repeat($.query_pipe),
    ),

    source: $ => seq(
      $.metric_id,
      optional($.time_range),
      optional($.as_clause),
    ),

    metric_id: $ => seq(
      field("dataset", choice($._identifier, $.param_identifier)),
      ":",
      field("metric", $._identifier),
    ),

    as_clause: $ => seq("as", field("metric", $._identifier)),

    time_range: $ => seq(
      "[",
      field("start", $.time),
      "..",
      optional(field("end", $.time)),
      "]",
    ),

    time: $ => choice(
      $.time_relative,
      $.time_rfc3339,
      $.time_timestamp,
      $.time_modifier,
    ),

    time_modifier: $ => token(seq(choice("+", "-"), /[0-9]+(?:ms|[smhdwMy])/)),
    time_relative: _ => token(prec(1, /[0-9]+(?:ms|[smhdwMy])/)),
    time_timestamp: _ => token(/[0-9]+/),
    time_rfc3339: _ => token(/[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z?/),

    time_relative_parameterized: $ => choice(
      $.time_relative,
      $.param_identifier,
    ),

    sample_pipe: $ => seq("|", "sample", field("rate", choice($.number, $.param_identifier, $._identifier))),

    filter_pipe: $ => seq(
      "|",
      choice("filter", "where"),
      $.filter_expression,
    ),

    ifdef_pipe: $ => seq(
      "|",
      "ifdef",
      "(",
      field("parameter", $.param_identifier),
      ")",
      "{",
      field("then", $.filter_body),
      "}",
      optional(seq("else", "{", field("else", $.filter_body), "}")),
    ),

    filter_body: $ => choice(
      seq(choice("filter", "where"), $.filter_expression),
      $.filter_expression,
    ),

    filter_expression: $ => $.filter_or,
    filter_or: $ => seq($.filter_and, repeat(seq("or", $.filter_and))),
    filter_and: $ => seq($.filter_not, repeat(seq("and", $.filter_not))),
    filter_not: $ => choice(seq("not", $.filter_clause), $.filter_clause),
    filter_clause: $ => choice(
      $.filter_atom,
      seq("(", $.filter_expression, ")"),
    ),

    filter_atom: $ => seq(
      field("tag", $.tag),
      choice($.value_filter, $.regex_filter, $.is_filter),
    ),

    value_filter: $ => seq($.comparison_operator, $.expression),
    regex_filter: $ => seq($.regex_comparison_operator, $.regex),
    is_filter: $ => seq("is", $.tag_type),

    query_pipe: $ => choice(
      $.align_pipe,
      $.map_pipe,
      $.group_pipe,
      $.replace_pipe,
      $.bucket_pipe,
      $.join_pipe,
      $.as_pipe,
    ),

    align_pipe: $ => seq(
      "|",
      "align",
      optional(seq("to", field("to", $.time_relative_parameterized))),
      optional(seq("over", field("over", $.time_relative_parameterized))),
      "using",
      field("function", $.function_name),
    ),

    map_pipe: $ => seq(
      "|",
      "map",
      choice($.map_eval, $.map_fn),
    ),

    map_eval: $ => seq($.map_calc_operator, $.number),
    map_fn: $ => seq($.function_name, optional(seq("(", $.number, ")"))),

    group_pipe: $ => seq(
      "|",
      "group",
      optional(seq("by", field("tags", $.tag_list))),
      "using",
      field("function", $.function_name),
    ),

    replace_pipe: $ => seq(
      "|",
      "replace",
      choice($.replace_rename_tag, $.replace_tag, $.replace_rename),
    ),

    replace_tag: $ => seq(field("tag", $.tag), "~", $.regex_replace),
    replace_rename: $ => seq(field("from", $.tag), "=", field("to", $.tag)),
    replace_rename_tag: $ => seq(
      field("from", $.tag),
      "=",
      field("to", $.tag),
      "~",
      $.regex_replace,
    ),

    bucket_pipe: $ => seq(
      "|",
      "bucket",
      optional(seq("by", field("tags", $.tag_list))),
      optional(seq("to", field("to", $.time_relative_parameterized))),
      "using",
      $.bucket_function_call,
    ),

    bucket_function_call: $ => choice(
      seq($.bucket_by_function, "(", $.bucket_specs, ")"),
      seq(
        $.bucket_by_with_conversion_function,
        "(",
        $.bucket_conversion,
        ",",
        $.bucket_specs,
        ")",
      ),
    ),

    bucket_by_function: _ => choice("histogram", "interpolate_delta_histogram"),
    bucket_by_with_conversion_function: _ => "interpolate_cumulative_histogram",
    bucket_conversion: _ => choice("rate", "increase"),
    bucket_specs: $ => seq($.bucket_spec, repeat(seq(",", $.bucket_spec))),
    bucket_spec: $ => choice("count", "avg", "sum", "min", "max", $.number),

    join_pipe: $ => seq(
      "|",
      "join",
      field("left_tags", $.tag_list),
      "from",
      field("source", $.metric_id),
      "by",
      field("right_tags", $.tag_list),
    ),

    as_pipe: $ => seq("|", "as", field("metric", $._identifier)),

    extend_pipe: $ => prec.right(seq(
      "|",
      "extend",
      $.extend_expression,
      repeat(seq(",", $.extend_expression)),
    )),

    extend_expression: $ => seq(field("tag", $.tag), "=", $.expression),

    compute_pipe: $ => seq(
      "|",
      "compute",
      field("metric", $._identifier),
      "using",
      choice($.function_name, $.compute_operator),
    ),

    tag_list: $ => prec.right(seq($.tag, repeat(seq(",", $.tag)))),
    tag: $ => $._identifier,

    expression: $ => choice(
      $.constant,
      $.param_identifier,
      $._identifier,
    ),

    constant: $ => choice(
      $.string,
      $.number,
      $.boolean,
    ),

    function_name: $ => seq($._identifier, repeat(seq("::", $._identifier))),

    comparison_operator: _ => choice("==", "!=", "<=", "<", ">=", ">"),
    regex_comparison_operator: _ => choice("==", "!="),
    map_calc_operator: _ => choice("+", "-", "*", "/"),
    compute_operator: _ => choice("+", "-", "*", "/"),

    param_identifier: $ => seq("$", $._identifier),
    _identifier: $ => choice($.identifier, $.escaped_identifier),
    identifier: _ => /[a-zA-Z_][a-zA-Z0-9_.]*/,
    escaped_identifier: _ => token(seq("`", repeat(choice(/[^`\\]/, /\\./)), "`")),

    string: _ => token(seq("\"", repeat(choice(/[^"\\]/, /\\./)), "\"")),
    regex: _ => token(seq("#/", repeat(choice(/[^/\\]/, /\\./)), "/")),
    regex_replace: _ => token(seq(
      "#s/",
      repeat(choice(/[^/\\]/, /\\./)),
      "/",
      repeat(choice(/[^/\\]/, /\\./)),
      "/",
    )),
    number: _ => token(prec(1, /[+-]?(?:[0-9]+\.[0-9]*(?:[eE][+-]?[0-9]+)?|[0-9]+|inf)/)),
    boolean: _ => token(prec(1, choice("true", "false"))),
  },
});
