[
  "align"
  "as"
  "bucket"
  "by"
  "compute"
  "else"
  "extend"
  "filter"
  "from"
  "group"
  "ifdef"
  "join"
  "map"
  "over"
  "param"
  "replace"
  "sample"
  "set"
  "to"
  "using"
  "where"
] @keyword

[
  "and"
  "is"
  "not"
  "or"
] @keyword.operator

[
  "Dataset"
  "Duration"
  "Regex"
  "Option"
  "bool"
  "duration"
  "float"
  "int"
  "string"
] @type

(comment) @comment

(string) @string
(regex) @string.regexp
(regex_replace) @string.regexp

(number) @number
(time_relative) @number
(time_modifier) @number
(time_timestamp) @number
(time_rfc3339) @number
(boolean) @constant.builtin

(param_identifier) @variable.parameter
(escaped_identifier) @variable

(metric_id
  dataset: (_) @namespace
  metric: (_) @type)

(function_name) @function

[
  "=="
  "!="
  "<"
  "<="
  ">"
  ">="
  "="
  "+"
  "-"
  "*"
  "/"
  "~"
  "|"
  ".."
] @operator

[
  "("
  ")"
  "{"
  "}"
  "["
  "]"
] @punctuation.bracket

[
  ","
  ":"
  ";"
  "::"
] @punctuation.delimiter
