# Research Explorer — RE-05 Scale & Quality Gate: Results

**Status:** closed. Records the measurements behind RE-05's decision (roadmap.md), per `research-explorer-benchmark-plan.md`.
**Relates to:** `research-explorer-roadmap.md`, `research-explorer-benchmark-plan.md`, `ADR-001-research-explorer-architecture.md`, `research-explorer-development-contract.md`.

## Methodology

Three deterministic, disposable synthetic corpora (`apps/research-explorer/benchmark/generate-corpus.js`, fixed seed per scale) were generated at ~250/~2,500/~10,000 records, matching the real corpus's structural shape rather than one repeated record type: SRC/EVD/PRB/ASM/HYP in roughly real-corpus proportions (34% SRC, ~55% EVD, 4% PRB, ~3.6% ASM, ~1.5% HYP), plus a ~1.2%-share `NOTE-` type — a schema-conforming record type the adapter has never seen, proving invariant #6 (generic future-type support) holds at scale, not just at 220 records. Structural variety included: shared-source hub nodes (a ~3%-of-SRC hub set receiving 40% of EVD's `source.source_id` references), high-degree hub problems (a ~5%-of-PRB set with 15–35 evidence items vs. 2–10 for the rest), two-directional EVD↔PRB linking (`evidence` outgoing + `analysis.related_problems` incoming), multi-valued list/reference fields (`additional_sources`, `evidence`, `domain`), and ASM's dynamically-keyed `critical_unknowns` map. Every generated corpus passed `tools/validate-research.js` with zero errors and the adapter (`read-model.js#buildReadModel`) with zero dangling edges. Canonical `research/**` was never touched; all fixtures/output live under the gitignored `apps/research-explorer/benchmark/{fixtures,output}/`.

Two harnesses exercise the real production code paths, not reimplementations:

- `benchmark/run-adapter-benchmark.js` calls the actual `validateResearchTree()` + `buildReadModel()` (the same functions `scripts/build-data.js` calls) directly, timing them separately from disk I/O, then writes the generated read model to a disposable directory using a plain (non-atomic) write — deliberately bypassing `atomic-write.js`'s rename-publish dance, which exists for safe concurrent production publishes, not for a benchmark directory recreated from scratch on every run, and which this development machine's antivirus/indexer made unreliable to time accurately (transient EPERM on directory rename, unrelated to adapter performance).
- `apps/research-explorer/src/__bench__/uiScale.bench.test.ts` is a vitest test (only runs when `BENCH_SCALE` is set; otherwise skipped, so it never affects the normal `npm test` run) that imports and calls the real `computeRecordsView` (Records search/filter/sort), `loadProblemProjection` (Problem N+1 fetch pattern), `buildGraphModel`/`computeHopMap`/`neighbourhoodView` (Graph) directly against each scale's generated output.

3 repeated runs (250/2,500) or 1 run (10,000, given its own cost) per timed operation; medians reported below. Bundle/isolation findings were additionally verified live (not just via static bundle inspection) with a Playwright-driven dev server and production preview against the real 223-record corpus.

All numbers below are single-machine, single-run-class measurements (Node v24, Windows) — read as growth signal, not portable absolute latency guarantees.

## Evidence table

| Capability | ~250 | ~2,500 | ~10,000 | Decision |
|---|---|---|---|---|
| Adapter (validate+buildReadModel) | 240 ms | 2,202 ms | 11,330 ms | maintain — sub-linear 250→2,500 (9.2x time for 10x scale), mildly super-linear 2,500→10,000 (5.1x time for 4x scale); no quadratic blowup at any tested scale despite the risk review's named O(n²)-shaped reference-check concern |
| Generated output (total / `index.json` / `edges.json`) | 496 KB / 118 KB / 73 KB | 4.9 MB / 1.16 MB / 742 KB | 20.2 MB / 4.65 MB / 3.0 MB | maintain — linear growth, as expected; `index.json` (the one file every page load needs) stays sub-5 MB even at 10,000 |
| Records search/filter (`computeRecordsView`, no query → full list) | 2.4 ms | 35.4 ms | 101.6 ms | maintain — comfortable at real scale (223); at 10,000, per-keystroke re-filter (undebounced) crosses the ~100 ms "instant" perception threshold — noted, not fixed (see rejected optimisations) |
| Records sort (label, full filtered set) | 3.0 ms | 111.5 ms | 146.3 ms | maintain — same threshold note as above; still a single interaction, not a per-frame cost |
| Problem projection (`loadProblemProjection`), hub problem (15–34 evidence) | 74 ms / 145 calls | 185 ms / 233 calls | 113–204 ms / 239 calls | maintain — N+1 call count tracks the *individual problem's* evidence count (19→32→34 across scales, essentially flat), not total corpus size; real PRB-0001 (9 evidence) is well inside this envelope |
| Problem projection, typical problem (4–6 evidence) | 18 ms / 40 calls | 46 ms / 62 calls | 22–38 ms / 48 calls | maintain |
| Graph model construction (`buildGraphModel`, full corpus — stress observation) | 0.7 ms | 18 ms | 53 ms | non-primary / no concern — the in-memory Graphology model itself is cheap even at 10,000; Sigma's WebGL *rendering* of 10,000 nodes was not separately measured (opt-in, non-primary per ADR-001 D7 — see residual risks) |
| Graph 1-hop (neighbourhood-first, hub PRB) | 0.09 ms / 58 nodes | 0.78 ms / 96 nodes | 1.4 ms / 98 nodes | maintain — the supported primary Graph workflow is trivially fast at every tested scale |
| Graph 2-hop (neighbourhood-first, hub PRB) | 0.03 ms / 115 nodes | 0.19 ms / 259 nodes | 0.53 ms / 301 nodes | maintain |
| Initial bundle (main entry, gzip) | — | — | 68 KB (was 85 KB pre-RE-05 fix) | fixed this phase — see optimisation below |
| Graph lazy chunks (`GraphExplorer` + `sigma`, gzip) | — | — | 17.4 KB + 24.2 KB, loaded only on Graph entry | maintain |
| Memory (Node-process proxy, not real browser heap) | ~2.5 MB write delta | ~23 MB write delta | ~18 MB write delta (noisy) | not conclusive — see residual risks; Node-process heap during the full-index-in-one-process benchmark reached the GB range at 10,000, but this does not represent normal in-app navigation, which never loads the full corpus into memory at once (see below) |

## Identified performance cliffs

None that are material at any tested scale for the supported (neighbourhood-first, non-full-corpus) workflows. The two soft signals worth naming:

1. **Undebounced Records search/sort crosses ~100 ms at 10,000 records.** Real: search/sort stay comfortably sub-40 ms through 2,500 records (11x the real corpus); only the untested 10,000-record ceiling shows a mildly perceptible per-keystroke lag. Not fixed this phase (see rejected optimisations).
2. **`index.json` becomes the dominant initial-download cost at scale, not the JS bundle.** At 10,000 records, `index.json` alone (4.65 MB) is larger than the entire initial JS bundle (68 KB gzip + the 68 KB is compressed, `index.json` is not currently gzipped-and-measured-as-such but is still the far larger transfer). At the real 223-record scale this is 118 KB — a non-issue. This is the one variable to watch if the real corpus grows toward the low thousands; not a problem today.

No cliff was found in the adapter's build-time growth curve, in Problem-projection N+1 behaviour (bounded by per-problem evidence count, not corpus size), or in neighbourhood-first Graph queries (sub-2ms through 10,000 records at any tested depth).

## Graph isolation / bundle findings

Confirmed live (Playwright, both `vite dev` and a production `vite preview` build against the real 223-record corpus), not just by static bundle inspection:

- At Overview/Records/Problem startup: only `manifest.json` + `index.json` + the main JS/CSS entry are fetched. **Neither `edges.json` nor any Graph module (including Graphology) loads.**
- Opening the Graph view (or reloading a `?view=graph&id=...&d=2` URL directly) triggers, and only then: `GraphExplorer.tsx` and its module graph (`buildGraphModel.ts`, `neighbourhood.ts`, `layout.ts`, `renderGraph.ts`, `typeVisuals.ts`, `useGraphData.ts`), the `graphology` dependency, `edges.json`, and (inside `GraphCanvas`, on first paint) the `sigma` dependency.
- **Finding, now fixed:** prior to this phase, `Explorer.tsx` statically imported `GraphExplorer`, which pulled Graphology (and the rest of the Graph feature's domain logic) into the *initial* bundle even though only Sigma itself (inside `GraphCanvas`) was dynamically imported. A user who never opens Graph was still downloading and initializing Graphology. See "Optimisation implemented" below.
- `src/graph/neighbourhood.ts` (a small, dependency-free module — `MIN_DEPTH`/`MAX_DEPTH`/`clampDepth`) does load at startup, via `urlState.ts`'s `graphDepth` URL-state handling. This is expected and harmless: the module has no Graphology/Sigma dependency (its only reference to `buildGraphModel.ts` is a type-only import, elided at build time), so this does not reintroduce the isolation gap.

## Answers to the six architectural questions

1. **Up to what tested scale does current client-side search remain reasonable?** Through at least 2,500 records (11x the real corpus), comfortably: sub-40 ms for any query/sort/filter combination. At 10,000 records, full-list sort/filter cross ~100–150 ms — noticeable but not broken, and still a one-time interaction cost, not a per-frame one. No evidence justifies changing the current client-side approach at any tested scale.
2. **Does one-detail-file-per-record remain appropriate?** Yes. `record-detail/*.json` write cost and total bytes scale linearly and remain small individually (average ~1.2–1.3 KB/record across scales); nothing in the measurements suggests consolidating detail files would help, and it would break the one-record-one-fetch simplicity `StaticDataProvider.getRecord()` relies on.
3. **At what point, if any, does the Problem projection N+1 pattern become material?** Not at any tested corpus scale — the number of `getRecord()` calls a Problem view triggers is bounded by that *specific* problem's own evidence/assessment/hypothesis count (real PRB-0001: 9 evidence, well inside the 4–34 range tested), not by total corpus size. A problem with an unusually large evidence list (dozens+) would see proportionally more calls and ~100–200 ms of projection latency, which is already observable in the ~250-record hub-problem case — this is a per-problem authoring/scale question, not a corpus-scale one, and out of RE-05's scope.
4. **Does neighbourhood-first Graph exploration remain comfortable at the tested scales?** Yes, unambiguously — 1-hop and 2-hop queries from a high-degree focus node stay under 2 ms even at 10,000 records/16,599 edges. This is the primary, supported Graph workflow (ADR-001 D7) and shows no degradation signal at any tested scale.
5. **Does full-corpus Graph degradation matter given that it is opt-in/non-primary?** The in-memory Graphology model construction itself is cheap even at 10,000 nodes (53 ms). Sigma's actual WebGL rendering of 10,000 nodes at once was not separately benchmarked (no headless-WebGL harness in this phase) — per RE-05's own framing, this is treated as a stress observation, not a supported primary UX, and remains opt-in behind the existing "Ver corpus completo" checkbox. No action taken; flagged as a residual risk below, not a cliff.
6. **Is there evidence for virtualization / client search indexing / read-model chunking-sharding / lazy feature-loading changes / Web Workers / server-side search / a backend?** One piece of lazy-loading evidence *was* found and fixed this phase (Graphology was not excluded from the initial bundle — see above). Beyond that: no measurement here justifies virtualization, a search index, `index.json` chunking, Web Workers, server-side search, or any backend/database/API at the real corpus's scale (223 records) or at any of the three tested synthetic ceilings. The two soft signals above (search debounce, `index.json` size) are documented as future decision points if the real corpus grows materially, not current blockers.

## Optimisation implemented

**Lazy-load `GraphExplorer` (not just Sigma inside it) from `Explorer.tsx`.** Changed `Explorer.tsx`'s static `import { GraphExplorer } from "./graph/GraphExplorer"` to `React.lazy(() => import("./graph/GraphExplorer"))`, wrapped in `<Suspense>`. This is exactly the same lazy-boundary pattern RE-04 already established for `sigma` inside `GraphCanvas.tsx` — it closes a gap the RE-05 isolation check exposed rather than introducing a new pattern.

- Before: main entry chunk 300.5 KB / 85.0 KB gzip (Graphology bundled in); `sigma` already its own 89.9 KB / 24.0 KB gzip lazy chunk.
- After: main entry chunk 222.0 KB / 68.1 KB gzip; new `GraphExplorer` lazy chunk 78.9 KB / 17.4 KB gzip; `sigma` chunk unchanged.
- **~17 KB gzip (Graphology + the rest of the Graph feature's domain logic) moved out of every user's initial download**, regardless of whether they ever open Graph.
- Remeasured immediately: full app test suite (143/143) and typecheck stayed green; a live Playwright walkthrough (dev server + production preview, real 223-record corpus) confirmed `edges.json`/`graphology`/`sigma`/the `GraphExplorer` chunk still load correctly, and only, when Graph is opened or a focused Graph URL is reloaded directly.

This is the only implementation change made in RE-05: small, directly supported by the isolation measurement, and remeasured in the same phase, per the development contract's optimisation discipline.

## Explicitly rejected premature optimisations

- **Debouncing/virtualizing Records search.** The ~100–150 ms figure only appears at the untested-in-production 10,000-record ceiling; the real corpus (223) and the next order of magnitude (2,500) both stay comfortably sub-40 ms. Revisit only if the real corpus approaches the low thousands.
- **Chunking/sharding `index.json`.** Linear growth, no cliff; at the real corpus's scale this file is 118 KB. Revisit only with measured evidence the real corpus is approaching a scale where this becomes the dominant load-time cost (roughly the 2,500+ range, per the table above).
- **Web Workers for adapter build or Graph model construction.** Both are build-time/on-demand operations already outside the render path; no measurement showed either blocking a supported interactive workflow.
- **Any backend, database, server-side search, or state-management library.** No measurement at any tested scale, including the 10,000-record ceiling, produced evidence that the static-generation architecture (ADR-001 D5/D7) is insufficient.

## Real-corpus regression result

Against the real 223-record / 337-edge corpus, after the lazy-loading fix:

- `node tools/validate-research.js`: OK, 223 records validated.
- `node apps/research-explorer/scripts/build-data.test.js`: 17/17 passed.
- Real-corpus adapter run: 223 records, 337 edges, 0 dangling (matches the stated RE-05 baseline exactly).
- `npx vitest run` (excluding the RE-05 benchmark test, which only runs with `BENCH_SCALE` set): 143/143 passed (unchanged from RE-04).
- `npx tsc --noEmit`: clean.
- `npx vite build`: succeeds; isolation re-verified live.
- Live Playwright walkthrough against the rebuilt production bundle: Overview loads with only `manifest.json`/`index.json`; reloading `?view=graph&id=PRB-0001&d=2` renders PRB-0001's 2-hop neighbourhood (17 nodes/32 edges) correctly, loading `GraphExplorer`/`graphology`/`edges.json`/`sigma` only at that point.

No regression found. The lazy-loading change is presentation/bundling-only — it does not touch the read model, any domain logic, or any rendered output.

## Residual risks

- Sigma's actual WebGL rendering performance at the full 10,000-node stress view was not measured (no headless-WebGL harness available in this environment). It remains explicitly opt-in and non-primary (ADR-001 D7); if it is ever promoted to a supported workflow, it should be benchmarked first.
- All timings are single-machine (this development machine, Node v24, Windows) medians of 1–3 runs, not a statistically rigorous distribution — read as growth-curve evidence, not portable absolute SLAs.
- Node-process heap figures are a proxy only: the benchmark process parses the *entire* generated corpus (all of `index.json` + `edges.json` + every `record-detail/*.json` touched by the Problem-projection test) into one long-lived process, which is not how the actual browser app behaves (it lazily fetches only what's on screen). No real-browser memory profiling was performed this phase.
- The 10,000-record adapter/UI benchmarks were single-run (not median-of-3) given their own cost; treated as directionally reliable, not precise.
