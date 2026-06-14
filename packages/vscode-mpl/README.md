# MPL for Visual Studio Code

Language support for Axiom Metrics Processing Language.

This extension starts the bundled `mpl-language-server` binary and connects to it with the Language Server Protocol.

## Release Packaging

Build one VSIX per VS Code platform target. The tag release workflow builds and publishes:

- `linux-x64`
- `linux-arm64`
- `darwin-x64`
- `darwin-arm64`
- `win32-x64`

Publishing requires a repository secret named `VSCE_PAT`.

For a local package smoke test, first compile the Rust language server for the matching Rust target, then stage that binary:

```sh
cargo build --release -p mpl-language-server --features lsp-bin --target x86_64-unknown-linux-gnu
MPL_SERVER_BIN=../../target/x86_64-unknown-linux-gnu/release/mpl-language-server npm run stage:server
npm run build
npx vsce package --target linux-x64 --no-dependencies
```

Use the same extension version for every platform package.
