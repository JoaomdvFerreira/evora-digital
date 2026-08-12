# RE-00 spike — schema-driven graph proof

Throwaway validation code for `docs/architecture/ADR-001-research-explorer-architecture.md` decisions D2/D3. Not part of the v1 Explorer build; superseded by `apps/research-explorer/scripts/build-data.js` in RE-01.

## What it proves

`build-graph.js` reuses `tools/validate-research.js#validateResearchTree()` unmodified, walks each schema's own `references` array (no per-type edge logic), and emits a graph from the real 220-record corpus. The validated result (220 nodes, 331 edges, 0 dangling) is recorded compactly in `RESULT.md` — see that file for the full breakdown.

## Run it

```
node apps/research-explorer/spike/build-graph.js
```

Regenerates `generated/graph.json` and `generated/stats.json` locally. These are disposable build output, gitignored (`apps/research-explorer/spike/generated/` in `.gitignore`) — not committed, per the same "generated data is never canonical/never a second source of truth" rule that applies to the RE-01+ production read model. `RESULT.md` is the durable, committed record of what this script proved.

## Not covered by this spike

Per-type `summaryFields`, the `manifest.json`/`index.json`/`edges.json`/`record-detail/*.json` file split, incoming-edge derivation, and the `DataProvider` boundary are all RE-01 work — this spike only proves node/edge generation is schema-driven and correct against real data.
