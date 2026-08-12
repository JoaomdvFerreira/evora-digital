# Open Évora Research Explorer — Roadmap

**Status:** canonical execution sequencing document. Governs Track B ordering only.
**Relates to:** `docs/architecture/ADR-001-research-explorer-architecture.md` (accepted architecture/rationale), `docs/architecture/research-explorer-read-model-spec.md` (generated-data contract), `docs/architecture/research-explorer-benchmark-plan.md`, `docs/architecture/research-explorer-risk-review.md`, `docs/architecture/research-explorer-development-contract.md` (stable invariants — read that document once; it is not repeated per phase below).

This roadmap does not restate ADR-001's rationale, the read-model schema, or benchmark/risk content. It records what each phase is for, what depends on what, and what closes it — so future work can be scoped as a delta against this file rather than re-deriving sequencing from scratch.

## Current state

| Phase | Status |
|---|---|
| RE-00 — Architecture & Contract Spike | **CLOSED** |
| RE-01 — Canonical Data Adapter | **CLOSED** |
| RE-02 — Explorer Foundation | **CLOSED** |
| ↳ RE-02A — App Foundation & StaticDataProvider | CLOSED |
| ↳ RE-02B — Records Explorer & Generic Detail | CLOSED |
| ↳ RE-02C — Overview, URL State & Accessibility | CLOSED |
| RE-03 — Problem Explorer & Trace Evidence | **CLOSED** |
| RE-04 — Graph Explorer | **CLOSED** |
| RE-05 — Scale & Quality Gate | **NEXT** |
| RE-06 — Local Explorer v1 | not started |
| RE-07 — Optional Public Explorer | not started |

Implementation facts as of RE-04 closure (for orientation only — not restated per phase): React + TypeScript + Vite 8 (`apps/research-explorer/`), `StaticDataProvider` serving the RE-01 generated read model via Vite's `publicDir` (now including a lazy `getEdges()` method, fetched only by the Graph view), TanStack Table v8 powering the Records view, a four-view `Explorer` shell (Overview/Registos/Problema/Grafo) with native-URL-API state (no React Router), a data-driven reading guide (now also explaining Graph edge direction/colour encoding), root `npm run explorer` / `npm run explorer:build` commands. Graphology + Sigma.js stable power the neighbourhood-first Graph view (`apps/research-explorer/src/graph/*`), loaded via dynamic import so Sigma's module (and `edges.json`) are never touched by Overview/Records/Problem. No backend, database, or authentication anywhere in the stack.

---

## RE-00 — Architecture & Contract Spike — CLOSED

- **Objective:** settle the adapter/read-model/DataProvider architecture before writing production code.
- **Dependencies:** none (first Track B phase).
- **Scope:** ADR-001's nine decisions; a throwaway spike proving schema-driven node/edge generation against the real corpus.
- **Non-goals:** any production code, any UI.
- **Outputs:** `ADR-001-research-explorer-architecture.md`, `research-explorer-read-model-spec.md`, `research-explorer-benchmark-plan.md`, `research-explorer-risk-review.md`, `apps/research-explorer/spike/`.
- **Exit gate:** adapter design correctly represents SRC/EVD/PRB/ASM/HYP and their existing relations, proven against real data (220 nodes / 331 edges / 0 dangling).
- **Validation:** spike run against the real corpus; no canonical data touched.

## RE-01 — Canonical Data Adapter — CLOSED

- **Objective:** productionize the spike into a deterministic, fail-closed, atomic build step.
- **Dependencies:** RE-00.
- **Scope:** `apps/research-explorer/scripts/{read-model.js, atomic-write.js, build-data.js}` and their tests; `manifest.json`/`index.json`/`edges.json`/`record-detail/*.json` generation per the read-model spec.
- **Non-goals:** any frontend framework, UI, or dependency beyond reusing `tools/validate-research.js`.
- **Outputs:** the adapter scripts, `apps/research-explorer/scripts/build-data.test.js` (17 tests), `apps/research-explorer/README.md` (adapter usage).
- **Exit gate:** adapter runs against the real corpus with zero dangling edges, deterministic `corpusFingerprint`, atomic/fail-closed publish verified (including Windows rename-retry hardening).
- **Validation:** `node apps/research-explorer/scripts/build-data.test.js`; `node tools/validate-research.js`; real-corpus run.

## RE-02 — Explorer Foundation — CLOSED

Umbrella phase for the first usable browser application. Closed now that RE-02A, RE-02B, and RE-02C are all closed.

### RE-02A — App Foundation & StaticDataProvider — CLOSED

- **Objective:** minimal React/TypeScript/Vite shell consuming the read model through a `DataProvider` boundary, with runtime version-compatibility checking.
- **Dependencies:** RE-01.
- **Scope:** app scaffolding, `DataProvider`/`StaticDataProvider`, `readModelVersion` compatibility gate, manifest-only startup load, loading/error states.
- **Non-goals:** Records feature, TanStack Table, Overview, Graphology/Sigma.js, URL state.
- **Outputs:** `apps/research-explorer/{package.json, vite.config.ts, src/*}` (pre-Records baseline); root `npm run explorer` / `npm run explorer:build`.
- **Exit gate:** real-corpus manifest loads and renders in a live dev server; no `edges.json`/record-detail/canonical YAML touched at startup.
- **Validation:** unit tests on `StaticDataProvider`/startup sequence; typecheck; production build; live dev-server check against the real corpus.

### RE-02B — Records Explorer & Generic Detail — CLOSED

- **Objective:** turn the shell into a navigation tool — search/select a record, lazy-load generic detail, follow relationships.
- **Dependencies:** RE-02A.
- **Scope:** generic Records table (TanStack Table v8: search, type filter, sort, pagination), generic recursive detail renderer, relationship navigation from `outgoingEdges`/`incomingEdges`, pt-PT UI baseline, Vite 8 toolchain upgrade.
- **Non-goals:** Overview/dashboard, specialised Problem UI, Graphology/Sigma.js, URL/query-string state, charts.
- **Outputs:** `apps/research-explorer/src/records/*`, updated `App.tsx`, 57 tests.
- **Exit gate:** live walkthrough of the real corpus (search → detail → multi-hop relationship navigation) with table context preserved and no `edges.json`/YAML fetch.
- **Validation:** RE-01 + RE-02A + RE-02B automated tests; typecheck; production build; live Playwright walkthrough against the real corpus.

### RE-02C — Overview, URL State & Accessibility — CLOSED

- **Objective:** close out RE-02 with a minimal Overview view, URL-addressable selection/filter state, and the fuller accessibility pass explicitly deferred from RE-02A/B.
- **Dependencies:** RE-02B.
- **Scope:** a small Overview screen (corpus-level counts + generic per-type field distributions derived from `summaryFields`, not a dashboard); URL/history synchronization for view, selected record, search query, and type filter via native `URLSearchParams`/History API (no React Router — two flat-param views didn't need it); focus management on detail change, skip link, responsive split-view stacking below 900px.
- **Non-goals:** Problem Explorer, Trace Evidence, Graphology/Sigma.js, public deployment.
- **Outputs:** `apps/research-explorer/src/{Explorer.tsx, urlState.ts, useExplorerUrlState.ts, overview/*}`; `RecordsTable`/`RecordsExplorer` refactored to controlled `query`/`typeFilter`/`selectedId`; 80 total app tests (up from 57).
- **Exit gate met:** Overview renders real corpus summary data (220 records, correct per-type counts, generic distributions); selected record/query/type-filter are shareable via URL and survive reload; browser back/forward walks record-to-record navigation; an invalid URL-sourced record ID or type degrades safely through the existing `DataProvider` protections (no bypass); accessibility pass complete (skip link, semantic nav/table markup, focus-on-detail-change, non-colour selection state, responsive stacking) against the RE-02C checklist above.
- **Validation:** RE-01 (17) + full app suite (80) automated tests; typecheck; production build; live Playwright walkthrough against the real 220-record corpus covering Overview, search/select, URL reload, relationship navigation, back/forward, and invalid-URL degradation. Zero new runtime dependencies (native URL/History APIs only).

### RE-02 product-check outcome

The project owner used the real Explorer after RE-02 closure. Recorded here as the direct input to RE-03's scope — not a new process document.

**Confirmed strengths:** the generic Records structure is functional; Problems can be found and explored; PRB → EVD → SRC relationship navigation works; provenance/navigation is useful.

**Observed friction:** canonical prefixes (SRC/EVD/PRB/ASM/HYP) require prior project knowledge to interpret; "Entradas"/"Saídas" and technical reference paths (e.g. `analysis.related_problems[0]`) are correct but need contextual explanation; the generic record detail is useful for technical inspection but did not yet make the current state of a Problem easy to understand as a coherent whole.

This directly motivated RE-03's two additions below: a reading guide (addresses the prefix/relationship-path friction) and a specialised Problem view (addresses the "coherent whole" gap) — both layered on the existing generic Explorer, per ADR-001's generic-vs-specialised split.

## RE-03 — Problem Explorer & Trace Evidence — CLOSED

- **Objective:** the first specialised view — PRB-centred "why do we believe this problem exists, what evidence challenges it, what remains unknown," per the original Track B brief's "Trace Evidence" capability; plus a reading guide addressing the RE-02 product-check's prefix/relationship-path friction.
- **Dependencies:** RE-02 (all sub-phases closed).
- **Scope:** `typeGlossary.ts` (presentation-only label/description glossary for the 5 current types, generic graceful fallback for any future type — `describeType()`); `ReadingGuide.tsx` (data-driven from `manifest.schemaPrefixes`, explains prefixes, Entradas/Saídas, reference-path notation, and the "reference ≠ support/causality" rule); `problemProjection.ts` (a pure, feature-layer loader over the existing `DataProvider` — problem + its assessments + evidence [both directions: `evidence` outgoing and `analysis.related_problems` incoming] + each evidence item's own sources + hypotheses, all fetched via the existing `getRecord()`, no new `DataProvider` methods); `ProblemView.tsx` (Estado atual / Avaliação / Evidência+Fontes / Incertezas e lacunas / Hipóteses, reusing `RecordFieldTree` for `critical_unknowns`/`remaining_gap` rather than a duplicate renderer); URL state extended with a third `view=problem` value plus a combined `setViewAndSelection` (native `URLSearchParams`/History, still no router); a "Ver como Problema" entry point on the generic detail panel for `PRB-*` records; inline `[Tipo] ID` labels and friendly type names in the type filter and relationship lists.
- **Non-goals:** Graphology/Sigma.js, generalizing the Problem-specific treatment to other record types prematurely.
- **Outputs:** `apps/research-explorer/src/{typeGlossary.ts, guide/ReadingGuide.tsx, problem/*}`; `RecordDetailPanel`/`RecordsTable`/`Explorer`/`urlState` updated; 101 total app tests (up from 80).
- **Exit gate met:** real PRB-0001 and PRB-0005 both traced end-to-end (assessment → evidence → sources → critical unknowns) in one coherent view without leaving generic-detail correctness behind for other record types; reading guide dynamically lists exactly the corpus's actual types with accurate descriptions; a non-PRB/invalid Problem-view selection degrades safely; a linked non-source future type does not break the projection; every relationship in Problem view still reads "referencia via `<field>`" / "referenciado via `<field>`" — no SUPPORTS/CONTRADICTS/CAUSES inferred anywhere.
- **Validation:** RE-01 (17) + full app suite (101) automated tests; typecheck; production build; live Playwright walkthrough against the real 220-record corpus covering two distinct problems (PRB-0001, PRB-0005), the reading guide, "Ver como Problema," Problem→Records navigation, and browser back across the Problem/Records boundary. Zero new runtime dependencies.

## RE-04 — Graph Explorer — CLOSED

- **Objective:** visual relationship exploration.
- **Dependencies:** RE-02 (all sub-phases closed); may proceed in parallel with or after RE-03.
- **Scope:** Graphology + Sigma.js stable, node/edge rendering from the same generic read model, neighbourhood-mode expansion (per ADR-001 D7), search-to-node, filtering.
- **Non-goals:** treating the graph as authoritative over the tabular/detail views; inferring edge semantics beyond what's canonically encoded.
- **Outputs:** `DataProvider.getEdges()` (lazy `edges.json` load, StaticDataProvider only); `apps/research-explorer/src/graph/*` — `buildGraphModel.ts` (domain-only Graphology model), `typeVisuals.ts` (presentation-only colour encoding, generic fallback), `neighbourhood.ts`/`layout.ts` (pure hop/depth and deterministic-layout logic), `renderGraph.ts` (the Sigma-attribute translation boundary), `GraphCanvas.tsx` (the one Sigma-touching component, dynamically imported so its WebGL-touching module body never loads outside the Graph view), `GraphExplorer.tsx` (neighbourhood-first UI: search-to-focus, 1/2-hop expand/collapse, type filter, opt-in full-corpus view, reset/recenter, HTML node/edge lists mirroring the canvas), `useGraphData.ts`; `ReadingGuide.tsx` extended with a Graph section; "Ver no Grafo" entry points added to `RecordDetailPanel`/`ProblemView`; the first two new runtime dependencies since RE-02B (Graphology, Sigma.js — sigma renders as its own lazy-loaded chunk, ~24 kB gzipped).
- **Exit gate met:** graph view renders the real corpus's declared references correctly at current scale (220 nodes / 331 edges), starts from a focused record rather than the full corpus by default, remains supplementary (Records/Problem stay complete without it; no relationship's only representation is the canvas), and is dependency-scoped to `apps/research-explorer/` only; no canonical schema/data touched for presentation (colours/shapes live in `typeVisuals.ts`, not `research/**`); no semantic relationship inferred beyond the schema's own `references` (edges still read "referencia via `<field>`", never SUPPORTS/CONTRADICTS/CAUSES).
- **Validation:** RE-01 (17) + full app suite (143, up from 101) automated tests; typecheck; production build; live Playwright walkthrough against the real 220-record corpus — Graph not loaded at Overview/Records/Problem startup (only `manifest.json`/`index.json` fetched), entering Graph loads `edges.json` on demand, focusing PRB-0005, 1-hop then 2-hop expansion reaching Evidence/Source nodes, refocusing on a Source node, inspecting a canonical reference path (`source.source_id`), filtering visible node types, navigating Graph → generic Record detail, and reloading a focused+depth Graph URL (`?view=graph&id=...&d=2`) successfully.

## RE-05 — Scale & Quality Gate

- **Objective:** resolve the scalability envelope with measured evidence rather than assumption, per `research-explorer-benchmark-plan.md`.
- **Dependencies:** RE-02 through RE-04 (a representative Records + Graph surface must exist to benchmark).
- **Scope:** synthetic corpus profiles (~250/~2,500/~10,000 records) exercising the real adapter/UI/graph code paths; the specific measurements already named in the benchmark plan.
- **Non-goals:** introducing a backend/database pre-emptively.
- **Outputs:** a benchmark results report; if needed, client-side chunking/lazy-loading of `index.json`/`record-detail/*`.
- **Exit gate:** the benchmark plan's decision gate is resolved (preserve static architecture, or add chunking) with documented measurements, not assumption.
- **Validation:** the benchmark plan's own measurement list, run and reported.

## RE-06 — Local Explorer v1

- **Objective:** ship the first complete, locally-run release.
- **Dependencies:** RE-02 through RE-05.
- **Scope:** Overview, Problems, Records, Graph, Search, Filters, Trace Evidence, Detail/Provenance — assembled from the phases above, not new feature work.
- **Non-goals:** anything in the explicit RE-06 boundary list (no YAML editing, admin UI, auth, database, AI-generated relationships, automatic scoring, semantic inference).
- **Outputs:** a stable `npm run explorer` / `npm run explorer:build` release usable as a daily research tool.
- **Exit gate:** local usefulness demonstrated in actual use, not just passing tests.
- **Validation:** full existing test suite; typecheck; production build; sustained local use.

## RE-07 — Optional Public Explorer

- **Objective:** evaluate (not assume) public hosting.
- **Dependencies:** RE-06, and only after sustained local usefulness is demonstrated.
- **Scope:** static deployment (e.g. GitHub Pages, using the `base`-path portability already built in from RE-01/RE-02A onward), shareable URLs, automated rebuild on canonical changes.
- **Non-goals:** any public deployment before privacy/licence/accessibility/content review.
- **Outputs:** a deployed static site, if and only if the review passes.
- **Exit gate:** privacy, licensing, accessibility, and generated-artefact-integrity review all pass explicitly.
- **Validation:** the review itself, plus the full existing test/build/typecheck suite against the deployment build.
