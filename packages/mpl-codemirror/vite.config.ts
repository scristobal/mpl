import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "@codemirror/autocomplete",
        "@codemirror/lint",
        "@codemirror/state",
        "@codemirror/view",
        /\.\.\/wasm\//,
      ],
    },
  },
});
