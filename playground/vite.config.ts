import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";

const mplLangPath = path.resolve(import.meta.dirname, "../packages/mpl/mpl_lang.js");
const mplWasmPath = path.resolve(import.meta.dirname, "../packages/mpl/mpl_lang_bg.wasm");

interface MplModule {
  initSync(opts: { module: BufferSource }): void;
  compile_wasm(query: string): unknown;
}

let mpl: MplModule | null = null;

async function loadMpl(): Promise<MplModule> {
  if (mpl) return mpl;
  mpl = (await import(mplLangPath)) as MplModule;
  const wasmBytes = fs.readFileSync(mplWasmPath);
  mpl.initSync({ module: wasmBytes });
  return mpl;
}

async function generateExamplesIndex() {
  const dir = path.resolve(import.meta.dirname, "public/examples");
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mpl"))
    .sort();

  try {
    const mpl = await loadMpl();
    const valid: string[] = [];
    for (const file of files) {
      const content = fs.readFileSync(path.join(dir, file), "utf8");
      try {
        mpl.compile_wasm(content);
        valid.push(file);
      } catch (e) {
        console.warn(`⚠ skipping ${file}:`, e);
      }
    }
    fs.writeFileSync(path.join(dir, "index.json"), JSON.stringify(valid, null, 2));
  } catch {
    fs.writeFileSync(path.join(dir, "index.json"), JSON.stringify(files, null, 2));
  }
}

function examplesIndexPlugin() {
  return {
    name: "examples-index",
    async buildStart() {
      await generateExamplesIndex();
    },
    configureServer(server: {
      watcher: {
        add(dir: string): void;
        on(event: string, cb: (type: string, path: string) => void): void;
      };
    }) {
      const dir = path.resolve(import.meta.dirname, "public/examples");
      server.watcher.add(dir);
      server.watcher.on("all", (_: string, filePath: string) => {
        if (filePath.startsWith(dir) && filePath.endsWith(".mpl")) {
          generateExamplesIndex();
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [wasm(), examplesIndexPlugin()],
  resolve: {
    alias: {
      "@axiomhq/mpl-codemirror/styles/tokens.css": path.resolve(
        import.meta.dirname,
        "../packages/mpl-codemirror/styles/tokens.css",
      ),
      "@axiomhq/mpl-codemirror": path.resolve(
        import.meta.dirname,
        "../packages/mpl-codemirror/src/index.ts",
      ),
      "@axiomhq/mpl-lang": mplLangPath,
    },
    dedupe: [
      "@codemirror/state",
      "@codemirror/view",
      "@codemirror/language",
      "@codemirror/autocomplete",
      "@codemirror/lint",
    ],
  },
  server: {
    open: true,
    fs: {
      allow: [".", "../packages"],
    },
  },
});
