import * as fs from "node:fs";
import * as path from "node:path";
import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

let client: LanguageClient | undefined;

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  const executable = process.platform === "win32" ? "mpl-lsp.exe" : "mpl-lsp";
  const serverPath = context.asAbsolutePath(path.join("server", executable));

  if (!fs.existsSync(serverPath)) {
    throw new Error(`MPL language server binary not found at ${serverPath}`);
  }

  const serverOptions: ServerOptions = {
    run: {
      command: serverPath,
      transport: TransportKind.stdio,
    },
    debug: {
      command: serverPath,
      transport: TransportKind.stdio,
    },
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "mpl" }],
  };

  client = new LanguageClient("mpl", "MPL Language Server", serverOptions, clientOptions);
  await client.start();
}

export async function deactivate(): Promise<void> {
  await client?.dispose();
  client = undefined;
}
