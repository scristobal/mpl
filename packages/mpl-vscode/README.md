# MPL extension for Visual Studio Code

Language support for Axiom Metrics Processing Language in Visual Studio Code.

This extension starts the bundled MPL LSP binary and connects to it with the Language Server Protocol. Also includes basic textmate grammar for syntax highlight.

How to build and install from source:

1. First, if you haven't done it yet, install dependencies from the repository root

```sh
npm i
```

2. Build the Visual Studio Code extension

```sh
npm run build -w mpl-vscode
```

3. Build the Rust language server, stage it into the extension package, then package the extension into a VSIX

```sh
cargo build --release -p mpl-language-server --features lsp-bin
npm run stage -w mpl-vscode
npm exec -w mpl-vscode -- vsce package --no-dependencies --out mpl-vscode.vsix
```

4. Finally, install the generated VSIX

```sh
code --install-extension packages/mpl-vscode/mpl-vscode.vsix
```
