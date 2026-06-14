# MPL for Zed

Language support for Axiom Metrics Processing Language in Zed.

This extension provides `.mpl` file detection, Tree-sitter highlighting, bracket matching, indentation hints, and a small outline query. It reuses the Tree-sitter grammar in `packages/tree-sitter-mpl`; the grammar is not copied into this package.

It does not start `mpl-language-server` yet. Zed language server support requires a small Rust/Wasm extension layer that locates or downloads the server binary.

## Local Development

Install it as a dev extension in Zed:

1. Open the Extensions page.
2. Run `zed: install dev extension`.
3. Select `packages/zed-mpl`.

If you test this before the grammar package is available from the configured Git remote, temporarily point the grammar at your local checkout:

```toml
[grammars.mpl]
repository = "file:///absolute/path/to/mpl"
rev = "local"
path = "packages/tree-sitter-mpl"
```

## Publishing

For the Zed extension registry, submit a PR to `zed-industries/extensions` that adds this repository as a submodule and points the registry entry at this package:

```toml
[mpl]
submodule = "extensions/mpl"
path = "packages/zed-mpl"
version = "0.5.7"
```

Before publishing, pin `[grammars.mpl].rev` in `extension.toml` to the commit SHA that contains `packages/tree-sitter-mpl`.
