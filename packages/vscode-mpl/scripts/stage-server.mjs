import { copyFileSync, chmodSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const source = process.env.MPL_SERVER_BIN;

if (!source) {
  console.error("MPL_SERVER_BIN must point to a built mpl-language-server binary.");
  process.exit(1);
}

const sourcePath = resolve(source);

if (!existsSync(sourcePath)) {
  console.error(`MPL_SERVER_BIN does not exist: ${sourcePath}`);
  process.exit(1);
}

const serverDir = join(packageRoot, "server");
const executableName = basename(sourcePath).endsWith(".exe")
  ? "mpl-language-server.exe"
  : "mpl-language-server";
const destination = join(serverDir, executableName);

rmSync(serverDir, { recursive: true, force: true });
mkdirSync(serverDir, { recursive: true });
copyFileSync(sourcePath, destination);

if (!destination.endsWith(".exe")) {
  chmodSync(destination, 0o755);
}

console.log(`Staged ${destination}`);
