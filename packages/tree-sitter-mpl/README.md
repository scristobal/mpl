# tree-sitter-mpl

Tree-sitter grammar for Axiom Metrics Processing Language.

## Development

```sh
tree-sitter generate
tree-sitter test
```

## Neovim

```lua
local parser_config = require("nvim-treesitter.parsers").get_parser_configs()

parser_config.mpl = {
  install_info = {
    url = "https://github.com/axiomhq/mpl",
    files = { "packages/tree-sitter-mpl/src/parser.c" },
    branch = "main",
  },
  filetype = "mpl",
}

vim.filetype.add({
  extension = {
    mpl = "mpl",
  },
})
```
