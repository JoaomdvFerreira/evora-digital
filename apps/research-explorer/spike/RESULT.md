# RE-00 spike — validated result

Compact, committed record of the RE-00 exit-gate proof. The full generated `graph.json`/`stats.json` this was measured from are disposable build output (gitignored, per `apps/research-explorer/spike/generated/` in `.gitignore`) and are not kept in Git — the guarantee that generated data is never a second source of truth applies to spike output too, not only to the RE-01+ production read model.

## Result

Run against the real canonical corpus (`research/`) via `node apps/research-explorer/spike/build-graph.js`:

| Metric | Value |
|---|---|
| Nodes generated | 220 (89 SRC- / 111 EVD- / 10 PRB- / 10 ASM- / 0 HYP-) |
| Edges generated | 331 |
| Dangling edges | 0 |
| Edges by declared reference field | `source.source_id`: 111 · `analysis.related_problems`: 75 · `additional_sources`: 59 · `evidence`: 76 · `problem`: 10 |

Node count matches the canonical baseline exactly (89/111/10/10/0 = 220). Zero dangling edges confirms the read-model contract's "fails closed" / internal-consistency guarantee is sound in practice, not just in design — `validateResearchTree()`'s own reference-integrity checking is sufficient for the Explorer adapter to trust every resolved edge target without a second integrity pass.

## Reproduce

```
node apps/research-explorer/spike/build-graph.js
```
Regenerates `generated/graph.json` and `generated/stats.json` locally (gitignored). Re-running against an unchanged corpus reproduces this exact result; re-running after canonical data changes will differ and does not require updating this file unless the RE-00 architecture decisions themselves are being re-validated.

## Provenance

- Generated (first validated run): 2026-08-12
- Corpus baseline at time of spike: 89 SRC / 111 EVD / 10 PRB / 0 HYP / 10 ASM = 220 canonical records (matches `docs/milestones/D5-WU01-operator-challenge-progress.md` baseline of the same date)
- Source commit: not recorded — the spike script itself does not stamp a commit hash (that is a RE-01 production read-model responsibility, see `manifest.json`'s `source_commit` field in `docs/architecture/research-explorer-read-model-spec.md`); this result is tied to the corpus record counts above instead, which are independently verifiable via `node tools/validate-research.js`.
