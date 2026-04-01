// Dataset schema, loading and validation.
//
// All datasets live in a single static JSON file at /datasets.json.
// Top-level keys are dataset names, each mapping to metrics, each
// containing an array of series with name, tags, timestamps and values.
// Validated at load time with valibot.

import * as v from "valibot";

export const SeriesSchema = v.object({
  name: v.string(),
  tags: v.record(v.string(), v.string()),
  timestamps: v.array(v.number()),
  values: v.array(v.number()),
});

export type Series = v.InferOutput<typeof SeriesSchema>;

const DatasetsSchema = v.record(v.string(), v.record(v.string(), v.array(SeriesSchema)));

type Datasets = v.InferOutput<typeof DatasetsSchema>;
type DatasetIndex = Record<string, Record<string, string[]>>;

let db: Datasets | null = null;

async function load(): Promise<Datasets> {
  if (db) return db;
  const resp = await fetch("/datasets.json");
  if (!resp.ok) return {};
  db = v.parse(DatasetsSchema, await resp.json());
  return db;
}

export async function loadDatasetIndex(): Promise<DatasetIndex> {
  const data = await load();
  const index: DatasetIndex = {};
  for (const [dataset, metrics] of Object.entries(data)) {
    index[dataset] = {};
    for (const [metric, series] of Object.entries(metrics)) {
      const tags = new Set<string>();
      for (const s of series) {
        for (const k of Object.keys(s.tags)) tags.add(k);
      }
      index[dataset][metric] = [...tags].sort();
    }
  }
  return index;
}

export async function loadSeries(dataset: string, metric: string): Promise<Series[]> {
  const data = await load();
  return data[dataset]?.[metric] ?? [];
}
