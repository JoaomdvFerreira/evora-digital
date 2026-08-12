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
| RE-03 — Problem Explorer & Trace Evidence | **NEXT** |
| RE-04 — Graph Explorer | not started |
| RE-05 — Scale & Quality Gate | not started |
| RE-06 — Local Explorer v1 | not started |
| RE-07 — Optional Public Explorer | not started |

Implementation facts as of RE-02 closure (for orientation only — not restated per phase): React + TypeScript + Vite 8 (`apps/research-explorer/`), `StaticDataProvider` serving the RE-01 generated read model via Vite's `publicDir`, TanStack Table v8 powering the Records view, a two-view `Explorer` shell (Overview/Records) with native-URL-API state (no React Router), root `npm run explorer` / `npm run explorer:build` commands. No Graphology/Sigma.js yet (RE-04 scope). No backend, database, or authentication anywhere in the stack.

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

## RE-03 — Problem Explorer & Trace Evidence

- **Objective:** the first specialised view — PRB-centred "why do we believe this problem exists, what evidence challenges it, what remains unknown," per the original Track B brief's "Trace Evidence" capability.
- **Dependencies:** RE-02 (all sub-phases closed).
- **Scope:** a PRB-specific detail layout layered on top of the generic detail (per ADR-001's generic-vs-specialised split — specialised presentation is additive, never a precondition).
- **Non-goals:** Graphology/Sigma.js, generalizing this treatment to other record types prematurely.
- **Outputs:** a Problem Explorer view/component.
- **Exit gate:** a real PRB's evidence chain, critical unknowns, and validation status are traceable in one view without leaving generic-detail correctness behind for other record types.
- **Validation:** targeted tests for the new view; existing generic-detail/Records tests unaffected; live walkthrough against real PRB records.

## RE-04 — Graph Explorer

- **Objective:** visual relationship exploration.
- **Dependencies:** RE-02 (all sub-phases closed); may proceed in parallel with or after RE-03.
- **Scope:** Graphology + Sigma.js stable, node/edge rendering from the same generic read model, neighbourhood-mode expansion (per ADR-001 D7), search-to-node, filtering.
- **Non-goals:** treating the graph as authoritative over the tabular/detail views; inferring edge semantics beyond what's canonically encoded.
- **Outputs:** a Graph Explorer view; the first two new runtime dependencies since RE-02B (Graphology, Sigma.js).
- **Exit gate:** graph view renders the real corpus's declared references correctly at current scale, remains supplementary (never the sole route to a fact), and is dependency-scoped to `apps/research-explorer/` only.
- **Validation:** targeted tests; typecheck; production build; live verification against the real corpus.

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
