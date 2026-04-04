#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$SCRIPT_DIR/../.."
OUT_DIR="$SCRIPT_DIR/wasm"
WASM="$REPO_ROOT/target/wasm32-unknown-unknown/wasm-release/mpl_lang.wasm"

cargo build \
  --manifest-path "$REPO_ROOT/Cargo.toml" \
  --target wasm32-unknown-unknown \
  --profile wasm-release \
  --no-default-features \
  --features wasm-codemirror

wasm-bindgen \
  --target bundler \
  --out-dir "$OUT_DIR" \
  "$WASM"

wasm-opt -Oz --enable-bulk-memory --enable-nontrapping-float-to-int -o "$OUT_DIR/mpl_lang_bg.wasm" "$OUT_DIR/mpl_lang_bg.wasm"
