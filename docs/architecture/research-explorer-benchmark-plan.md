# Research Explorer — Benchmark Plan (RE-05 preview, scoped now by RE-00)

**Status:** executed. The ~250/~2,500/~10,000 synthetic-scale runs described below as RE-05 work have been run; results, the evidence table, and the six architectural-question answers are in `docs/architecture/research-explorer-re05-results.md`. This document is kept as the original plan/methodology reference — not restated in the results doc.

## What RE-00 already measured (real corpus, 220 records)

Run via `node apps/research-explorer/spike/build-graph.js`:

| Metric | Result |
|---|---|
| Records validated + parsed | 220 (89 SRC / 111 EVD / 10 PRB / 10 ASM / 0 HYP) |
| Wall time (validate + parse + node/edge generation) | sub-second on this machine (Node v24.14.0) — not separately profiled at this scale, since it is trivially fast |
| Edges generated | 331, 0 dangling |
| Output size | `graph.json` + `stats.json`, low tens of KB combined |

At current real scale, performance is a non-issue. The purpose of RE-05 is to find out whether that remains true as the corpus grows toward the synthetic ceilings named in the roadmap.

## What RE-05 must measure later, and how

Synthetic corpus profiles: ~250, ~2,500, ~10,000 records — generated as synthetic fixtures (not real research data) that follow the existing schemas' `requiredFields`/`references` shape, so the same adapter code path is exercised.

For each profile, measure:

1. **Data-build performance** — wall time for `validateResearchTree()` + adapter node/edge generation (this is where the hand-rolled YAML parser and the validator's O(n²)-shaped reference-check loops are the named risk — see risk review).
2. **Generated-data size** — total bytes of `manifest.json` + `index.json` + `edges.json` + all `record-detail/*.json` files, and specifically `index.json` alone (the file every page load needs).
3. **App start/load** — time to interactive for the Explorer shell against each profile's generated data.
4. **Filtering/search** — latency of client-side filter/search over `index.json` at each scale.
5. **Neighbourhood graph rendering** — Sigma.js render time for a 1-hop and 2-hop neighbourhood expansion from a representative high-degree node (e.g. a PRB- node, since PRB↔EVD is the densest edge relation today: 76+75 = 151 of 331 edges already involve `evidence`/`analysis.related_problems`).
6. **Browser memory** — peak heap during a graph-view session at each scale.
7. **Accessibility / keyboard navigation** — pass/fail against the same checklist regardless of scale (not expected to vary with record count, but re-verified per RE-05 to catch scale-induced regressions, e.g. virtualization changes breaking focus order).

## Decision gate (per roadmap, unchanged)

If 10k-scale behaviour is acceptable against the above: preserve the static architecture (D5/D7 in ADR-001) unchanged into RE-06. If not: introduce client-side chunking/lazy-loading of `index.json` and `record-detail/*` first; only after that proves insufficient does a backend/API become a candidate, and only with measured evidence, per the roadmap's explicit constraint.
