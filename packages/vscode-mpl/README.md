# MPL for Visual Studio Code

Language support for Axiom Metrics Processing Language.

This extension starts the bundled `mpl-language-server` binary and connects to it with the Language Server Protocol.

## Build Locally

Install dependencies from the repository root:

```sh
npm ci
```

Build only the VS Code extension JavaScript:

```sh
npm run build:vscode
```

To build an installable VSIX for your current platform, first build the Rust language server, stage it into the extension package, then package the extension:

```sh
cargo build --release -p mpl-language-server --features lsp-bin
MPL_SERVER_BIN="$PWD/target/release/mpl-language-server" npm run stage:server -w mpl-vscode
npm exec -w mpl-vscode -- vsce package --no-dependencies --out mpl-vscode.vsix
```

On Windows, the staged server path should point at `target\release\mpl-language-server.exe`.

Install the generated VSIX with:

```sh
code --install-extension packages/vscode-mpl/mpl-vscode.vsix
```

## Release Packaging

Build one VSIX per VS Code platform target. The tag release workflow builds and publishes:

- `linux-x64`
- `linux-arm64`
- `darwin-x64`
- `darwin-arm64`
- `win32-x64`

Publishing requires a repository secret named `VSCE_PAT`.

To build a VSIX for a specific VS Code target, first compile the Rust language server for the matching Rust target, then stage that binary:

```sh
cargo build --release -p mpl-language-server --features lsp-bin --target x86_64-unknown-linux-gnu
MPL_SERVER_BIN="$PWD/target/x86_64-unknown-linux-gnu/release/mpl-language-server" npm run stage:server -w mpl-vscode
npm run build:vscode
npm exec -w mpl-vscode -- vsce package --target linux-x64 --no-dependencies --out mpl-vscode-linux-x64.vsix
```

Use the same extension version for every platform package.
