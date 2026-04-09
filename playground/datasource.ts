// Dataset management, using simple json backend

import * as v from "valibot";

const SeriesSchema = v.object({
  name: v.string(),
  tags: v.record(v.string(), v.string()),
  timestamps: v.array(v.number()),
  values: v.array(v.number()),
});

const DatasetsSchema = v.record(v.string(), v.record(v.string(), v.array(SeriesSchema)));

export type Datasets = v.InferOutput<typeof DatasetsSchema>;

export type DatasetIndex = Record<string, Record<string, string[]>>;

export async function fetchDatasets(): Promise<Datasets> {
  const resp = await fetch("/datasets.json");
  if (!resp.ok) return {};
  const data = await resp.json();
  return v.parse(DatasetsSchema, data);
}

export function buildDatasetIndex(datasets: Datasets): DatasetIndex {
  const index: DatasetIndex = {};
  for (const [dataset, metrics] of Object.entries(datasets)) {
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
