import type { MplCompletionConfig } from "@axiomhq/mpl-codemirror";
import {
  createMplCompletion,
  mplHighlighter,
  mplHover,
  mplLinter,
  mplSignatureHelp,
} from "@axiomhq/mpl-codemirror";
import init, * as mpl from "@axiomhq/mpl-lang";
import {
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
} from "@codemirror/autocomplete";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import {
  bracketMatching,
  defaultHighlightStyle,
  foldGutter,
  foldKeymap,
  indentOnInput,
  syntaxHighlighting,
} from "@codemirror/language";
import { lintKeymap } from "@codemirror/lint";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { Compartment, EditorState } from "@codemirror/state";
import { oneDark } from "@codemirror/theme-one-dark";
import {
  crosshairCursor,
  drawSelection,
  dropCursor,
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  keymap,
  rectangularSelection,
} from "@codemirror/view";
import { vim } from "@replit/codemirror-vim";
import Alpine from "alpinejs";
import { renderCharts, destroyCharts, type ChartEntry } from "./charts";
import { loadDatasetIndex } from "./datasets";
import { interpret } from "./interpreter";

type EditorMode = "vim" | "normie";
type Theme = "light" | "dark" | "system";

function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return theme;
}

async function loadExamples(): Promise<string[]> {
  try {
    const resp = await fetch("/examples/index.json");
    if (!resp.ok) return [];
    return await resp.json();
  } catch {
    return [];
  }
}

// ── Autocomplete config derived from dataset files ──────────────

const completionConfig: MplCompletionConfig = {
  datasets: async () => {
    const index = await loadDatasetIndex();
    return Object.keys(index);
  },
  metrics: async (dataset: string) => {
    const index = await loadDatasetIndex();
    return Object.keys(index[dataset] ?? {});
  },
  tags: async (dataset: string, metric: string) => {
    const index = await loadDatasetIndex();
    return index[dataset]?.[metric] ?? [];
  },
};

const mplCompletion = createMplCompletion(completionConfig);

let updateVersion = 0;

function makeLabel(raw: string): string {
  return raw
    .split("\n")
    .map((l) => l.replace(/\/\/.*$/, "").trim())
    .filter((l) => l.length > 0)
    .join(" ")
    .replace(/\s+/g, " ");
}

function findBreakpoints(doc: string): { pipes: number[]; commas: number[] } {
  const pipes: number[] = [];
  const commas: number[] = [];
  let depth = 0;
  let i = 0;
  while (i < doc.length) {
    if (doc[i] === "/" && doc[i + 1] === "/") {
      while (i < doc.length && doc[i] !== "\n") i++;
      continue;
    }
    if (doc[i] === "#" && doc[i + 1] === "/") {
      i += 2;
      while (i < doc.length) {
        if (doc[i] === "\\" && i + 1 < doc.length) { i += 2; continue; }
        if (doc[i] === "/") { i++; break; }
        i++;
      }
      continue;
    }
    if (doc[i] === "(") depth++;
    if (doc[i] === ")") depth--;
    if (depth === 0 && doc[i] === "|") pipes.push(i);
    if (depth === 1 && doc[i] === ",") commas.push(i);
    i++;
  }
  return { pipes, commas };
}

async function processSubQuery(
  doc: string,
  version: number,
  entries: ChartEntry[],
  state: { prevStepCount: number; prevError: string | undefined },
) {
  const { pipes } = findBreakpoints(doc);
  const breakpoints = [...pipes, doc.length];
  let prevBp = 0;

  for (const bp of breakpoints) {
    const prefix = doc.slice(0, bp);
    if (prefix.trim().length === 0) { prevBp = bp; continue; }

    const label = makeLabel(doc.slice(prevBp, bp) || prefix);

    let query;
    try {
      query = mpl.parse_wasm(prefix);
    } catch (e) {
      let error: string | undefined;
      try {
        const diags = mpl.diagnostics(prefix) as
          | { severity: string; message: string }[]
          | null;
        const firstError = diags?.find((d) => d.severity === "error");
        if (firstError) error = firstError.message;
      } catch {
        error = String(e);
      }
      if (error && error !== state.prevError) {
        entries.push({ label, series: [], error });
        state.prevError = error;
      }
      prevBp = bp;
      continue;
    }

    try {
      const steps = await interpret(query);
      if (version !== updateVersion) return;
      const lastStep = steps[steps.length - 1];
      if (lastStep && steps.length !== state.prevStepCount) {
        state.prevStepCount = steps.length;
        if (lastStep.length === 0 && entries.length > 0 && entries[entries.length - 1].series.length === 0) { prevBp = bp; continue; }
        while (entries.length > 0 && entries[entries.length - 1].error) entries.pop();
        entries.push({ label, series: lastStep });
        state.prevError = undefined;
      }
    } catch (e) {
      const error = e instanceof Error ? e.message : String(e);
      if (error !== state.prevError) {
        entries.push({ label, series: [], error });
        state.prevError = error;
      }
    }
    prevBp = bp;
  }
}

async function updateCharts(panel: HTMLElement, doc: string) {
  const version = ++updateVersion;
  const entries: ChartEntry[] = [];
  const state = { prevStepCount: -1, prevError: undefined as string | undefined };

  // Check if this is a compute query by finding top-level ( using the scanner
  const { pipes, commas } = findBreakpoints(doc);

  // Find first top-level ( — skip comments and regex
  let openParen = -1;
  {
    let j = 0;
    while (j < doc.length) {
      if (doc[j] === "/" && doc[j + 1] === "/") { while (j < doc.length && doc[j] !== "\n") j++; continue; }
      if (doc[j] === "#" && doc[j + 1] === "/") { j += 2; while (j < doc.length) { if (doc[j] === "\\" && j + 1 < doc.length) { j += 2; continue; } if (doc[j] === "/") { j++; break; } j++; } continue; }
      if (/\S/.test(doc[j])) { if (doc[j] === "(") openParen = j; break; }
      j++;
    }
  }

  if (openParen >= 0 && commas.length > 0) {
    const commaPos = commas[0];

    // Find matching close paren, skipping comments and regex
    let depth = 0;
    let closeParen = -1;
    let j = openParen;
    while (j < doc.length) {
      if (doc[j] === "/" && doc[j + 1] === "/") { while (j < doc.length && doc[j] !== "\n") j++; continue; }
      if (doc[j] === "#" && doc[j + 1] === "/") { j += 2; while (j < doc.length) { if (doc[j] === "\\" && j + 1 < doc.length) { j += 2; continue; } if (doc[j] === "/") { j++; break; } j++; } continue; }
      if (doc[j] === "(") depth++;
      if (doc[j] === ")") { depth--; if (depth === 0) { closeParen = j; break; } }
      j++;
    }

    // Left sub-query: between ( and ,
    const leftDoc = doc.slice(openParen + 1, commaPos).trim();
    if (leftDoc.length > 0) {
      entries.push({ label: "── left branch ──", series: [], header: true });
      await processSubQuery(leftDoc, version, entries, state);
      if (version !== updateVersion) return;
    }

    // Right sub-query: between , and )
    if (closeParen > commaPos) {
      const rightDoc = doc.slice(commaPos + 1, closeParen).trim();
      if (rightDoc.length > 0) {
        state.prevStepCount = -1;
        state.prevError = undefined;
        entries.push({ label: "── right branch ──", series: [], header: true });
        await processSubQuery(rightDoc, version, entries, state);
        if (version !== updateVersion) return;
      }
    }

    // Full document (compute + post-compute aggregates)
    state.prevStepCount = -1;
    state.prevError = undefined;
    entries.push({ label: "── compute result ──", series: [], header: true });
  }

  // Process the full document
  await processSubQuery(doc, version, entries, state);

  if (version !== updateVersion) return;
  renderCharts(panel, entries);
}

// Create the playground store object
const playgroundStore = {
  // State
  editorMode: (localStorage.getItem("mpl-editorMode") as EditorMode) || "vim",
  theme: (localStorage.getItem("mpl-theme") as Theme) || "system",
  codeEditor: null as EditorView | null,
  chartsPanel: null as HTMLElement | null,
  codeVimCompartment: new Compartment(),
  codeThemeCompartment: new Compartment(),
  codeCompletionCompartment: new Compartment(),
  codeDiagnosticsCompartment: new Compartment(),
  codeSignatureHelpCompartment: new Compartment(),
  codeHoverCompartment: new Compartment(),
  isInitialized: false,
  selectedExampleIndex: 0,
  examples: [] as string[],

  async init() {
    try {
      if (resolveTheme(this.theme) === "dark") {
        document.documentElement.classList.add("dark-theme");
      }

      // Listen for system theme changes
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        if (this.theme === "system") this.onThemeChange();
      });

      this.setupKeyboardShortcuts();
      this.setupDivider();
      this.examples = await loadExamples();
      await init();
      this.isInitialized = true;

      await this.loadSelectedExample();

      if (this.codeEditor) {
        this.parseEditorContent();
        this.codeEditor.focus();
      }
    } catch (error) {
      console.error("Failed to initialize:", error);
    }
  },

  setupDivider() {
    const divider = document.getElementById("divider");
    const container = document.getElementById("container");
    const editorWrapper = container?.querySelector(".editor-wrapper") as HTMLElement | null;
    if (!divider || !container || !editorWrapper) return;

    let dragging = false;

    divider.addEventListener("mousedown", (e) => {
      e.preventDefault();
      dragging = true;
      divider.classList.add("dragging");
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    });

    document.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      const rect = container.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      const clamped = Math.max(20, Math.min(80, pct));
      editorWrapper.style.flex = `0 0 ${clamped}%`;
    });

    document.addEventListener("mouseup", () => {
      if (!dragging) return;
      dragging = false;
      divider.classList.remove("dragging");
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    });
  },

  setupKeyboardShortcuts() {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "h") {
        e.preventDefault();
        if (this.codeEditor) {
          this.codeEditor.focus();
        }
      }
    });
  },

  getVimExtension() {
    return this.editorMode === "vim" ? vim() : [];
  },

  getThemeExtension() {
    return resolveTheme(this.theme) === "dark" ? oneDark : [];
  },

  getExtensions() {
    return [
      highlightActiveLineGutter(),
      highlightSpecialChars(),
      history(),
      foldGutter(),
      drawSelection(),
      dropCursor(),
      EditorState.allowMultipleSelections.of(true),
      indentOnInput(),
      syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
      bracketMatching(),
      closeBrackets(),
      autocompletion(),
      rectangularSelection(),
      crosshairCursor(),
      highlightActiveLine(),
      highlightSelectionMatches(),
      keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        ...searchKeymap,
        ...historyKeymap,
        ...foldKeymap,
        ...completionKeymap,
        ...lintKeymap,
      ]),
      this.codeVimCompartment.of(this.getVimExtension()),
      this.codeThemeCompartment.of(this.getThemeExtension()),
      EditorView.lineWrapping,
      mplHighlighter,
      this.codeCompletionCompartment.of(mplCompletion),
      this.codeDiagnosticsCompartment.of(mplLinter),
      this.codeSignatureHelpCompartment.of(mplSignatureHelp),
      this.codeHoverCompartment.of(mplHover),
      EditorView.updateListener.of((update) => {
        if (update.docChanged) {
          this.parseEditorContent();
        }
      }),
    ];
  },

  initCodeEditor(el: HTMLElement) {
    this.codeEditor = new EditorView({
      doc: "",
      extensions: this.getExtensions(),
      parent: el,
    });

    if (this.isInitialized) {
      this.loadSelectedExample();
    }
  },

  parseEditorContent() {
    if (!this.isInitialized || !this.codeEditor || !this.chartsPanel) return;
    updateCharts(this.chartsPanel, this.codeEditor.state.doc.toString());
  },

  onEditorModeChange() {
    localStorage.setItem("mpl-editorMode", this.editorMode);

    const vimExtension = this.getVimExtension();
    if (this.codeEditor) {
      this.codeEditor.dispatch({
        effects: this.codeVimCompartment.reconfigure(vimExtension),
      });
    }
  },

  cycleTheme() {
    const order: Theme[] = ["light", "system", "dark"];
    const idx = order.indexOf(this.theme);
    this.theme = order[(idx + 1) % order.length];
    this.onThemeChange();
  },

  onThemeChange() {
    localStorage.setItem("mpl-theme", this.theme);

    if (resolveTheme(this.theme) === "dark") {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }

    const themeExtension = this.getThemeExtension();
    if (this.codeEditor) {
      this.codeEditor.dispatch({
        effects: this.codeThemeCompartment.reconfigure(themeExtension),
      });
    }

    // Re-render charts with new theme colors
    if (this.codeEditor && this.isInitialized) {
      this.parseEditorContent();
    }
  },

  async loadSelectedExample() {
    const exampleFile = this.examples[this.selectedExampleIndex];
    if (!exampleFile) return;

    try {
      const response = await fetch(`/examples/${exampleFile}`);
      if (!response.ok) {
        throw new Error(`Failed to load example: ${response.statusText}`);
      }
      const content = await response.text();

      if (this.codeEditor) {
        this.codeEditor.dispatch({
          changes: {
            from: 0,
            to: this.codeEditor.state.doc.length,
            insert: content,
          },
        });
        this.codeEditor.focus();
      }
    } catch (error) {
      console.error("Error loading example:", error);
    }
  },

  async onExampleChange() {
    await this.loadSelectedExample();
  },
};

Alpine.store("playground", playgroundStore);
Alpine.start();
