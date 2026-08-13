# ADR-001 — Open Évora Research Explorer: Architecture

**Status:** ACCEPTED (RE-00 Architecture & Contract Spike)
**Date:** 2026-08-12
**Scope:** read-only visual exploration tool for the canonical research corpus (`research/`). Does not affect canonical schemas, canonical records, `.aiqt/` state, or the AIQT validator/analyzer.

## Context

Open Évora's canonical research corpus (currently 89 SRC / 111 EVD / 10 PRB / 0 HYP / 10 ASM = 220 records under `research/`) is validated and analyzed by two zero-dependency Node/CommonJS scripts (`tools/validate-research.js`, `tools/analyze-research.js`) but has no visual/browsable interface. The corpus is expected to grow (new evidence, eventually HYP-* records, and in D6+ possibly new record types such as interventions/experiments/outcomes). A read-only "Research Explorer" is wanted to make the corpus and its problem-centred reasoning ("why do we believe this problem exists, what evidence challenges it, what remains unknown") navigable, without becoming a second source of truth.

The repository has **no `package.json` anywhere** and is deliberately dependency-free during Discovery (`.aiqt/project.json`: "no application framework, database, or cloud infrastructure"). The Explorer is the first component in this repository for which that constraint is expected to be relaxed, since a graph UI (Graphology/Sigma.js) and a modern component/build toolchain are named requirements (RE-04, Track B).

## Decisions

### D1 — Read-model contract

The Explorer never reads `research/*.yaml` or `research/schemas/*.json` at runtime. A build step (RE-01) produces a generated, deterministic **read model**: a `manifest.json`, an `index.json`, an `edges.json`, and one detail file per record. The read model is the only contract the UI depends on. See `docs/architecture/research-explorer-read-model-spec.md` for the full shape.

The read model carries its own version (`readModelVersion` in `manifest.json`), independent of any canonical research schema's version. Canonical schema evolution and read-model evolution are allowed to move on different timelines: `Canonical Research schema vN → Adapter → Explorer Read Model vM`. A canonical schema change only forces a read-model version bump if it changes the read model's own output shape (e.g. a new top-level manifest field the UI must know how to handle); most schema changes (new enum values, new optional fields) pass through unchanged read-model shape and bump neither.

### D2 — Schema-driven node generation

Node types are not hardcoded per record type. The adapter iterates `parsedByDir` (the `Map<prefix, {schema, parsed}>` already returned by `validateResearchTree()`) and emits one node per parsed record, typed by `schema.prefix`. Label selection uses a small ordered fallback list of common human-readable fields (`title`, `name`, `hypothesis`, `problem_statement`, `observation.summary`) tried per node, falling back to the record's own ID if none are present — this is a display convenience only, not a schema requirement, so it degrades safely for future record types that use a different field name. This satisfies Track C: a new schema file (e.g. `intervention.schema.json`) requires no adapter code change to become correctly ingestible, addressable, and linkable as a node — see "Generic structural support vs. specialised presentation" below for the precise scope of that guarantee.

### D3 — Schema-reference-driven edge generation

Confirmed by inspection of all five current schemas: every cross-record reference is already declared in that schema's own `references` array (`{field, targetPrefix, targetDirectory, required, isList}}`) — this is exactly the structure `validateResearchTree()` already uses internally to check reference integrity. The adapter reuses this array directly: for each schema, for each declared reference field, resolve the field's value on every record of that type (via the validator's own `getPath()` helper) and emit one edge per resolved target ID. No per-type edge logic is required for a reference to be discovered and rendered — a future schema's `references` array is picked up automatically (Track C).

### Generic structural support vs. specialised presentation

D2 and D3 guarantee **structural ingestion and graph/reference integrity**, precisely stated as:

- node discovery (a record of any schema-declared type becomes an addressable node) requires no per-record-type adapter code;
- edge/reference discovery (any field listed in a schema's `references` array becomes a traversable edge) requires no per-record-type adapter code;
- any future canonical record type introduced through the existing schema conventions (a `*.schema.json` file with `prefix`/`directory`/`idField`/`references`) is representable by the Explorer immediately and without breaking the application, using the generic label-fallback and generic edge-list rendering already described in D2/D3.

This guarantee does **not** extend to presentation quality. A record type with no tailored UI still renders correctly — as a generically labelled node, a row in the Records view with whatever `summaryFields` its schema exposes, and a detail view showing its raw fields — but that generic rendering is not claimed to be the best possible presentation for it. Specialised presentation (e.g. RE-03's Problem Explorer giving `PRB-*` a dedicated "trace evidence" layout, or a future `intervention.schema.json` type eventually getting its own timeline widget) is always optional UX work layered on top of a type that is already structurally supported, never a precondition for that type to appear, be searched, be filtered, or be linked correctly. In short: **generic structural support is automatic; specialised UI presentation is an optional enhancement.** This does not weaken D2/D3 — it states explicitly what tier of the adapter's guarantee is unconditional (structure) versus what tier is intentionally left open for incremental, type-specific investment (presentation).

Confirmed current edge set (6 declared reference fields, some `PRB`↔`EVD` pairs declared in both directions from each side's schema):

| From | Field | To | Cardinality |
|---|---|---|---|
| EVD | `source.source_id` | SRC | 1 |
| EVD | `additional_sources` | SRC | list |
| EVD | `analysis.related_problems` | PRB | list |
| PRB | `evidence` | EVD | list |
| ASM | `problem` | PRB | 1 (required) |
| HYP | `problem` | PRB | 1 (required) |

### D4 — Edge semantic rules

An edge means "record A references record B via schema field F" — nothing more. The edge's only label is the source field name (e.g. `analysis.related_problems`). No causality, agreement, or strength is inferred from the existence of a reference. A semantic edge type is only ever added if a future schema explicitly declares one (e.g. a `references[].semantic` value) — none do today, so all current edges render as a single generic `reference` type. The graph view is explicitly documented (RE-04 rule, carried from the roadmap) as supplementary to the tabular/detail views, never the sole way to reach a fact.

### D5 — Generated-data layout

`apps/research-explorer/generated/` — gitignored, rebuilt deterministically by the RE-01 build script from `research/` on every run. Never hand-edited, never treated as canonical, never diffed as a source of truth. `manifest.json` alone records operational metadata (`generatedAt`, `sourceCommit`, `corpusFingerprint`, and validator-derived counts); index, edge, and detail files carry only their documented read-model content. See the read-model specification for the exact v1 shape.

### D6 — DataProvider boundary

UI components never `fetch()` or `require()` generated files directly. A single `DataProvider` module exposes typed read functions (`listRecords()`, `getRecord(id)`, `getEdges()`, `getManifest()`) backed by the static generated JSON for v1. This isolates the entire UI from the read-model's physical representation, so RE-07 (optional public/API-backed deployment) or RE-05's chunking/lazy-loading response, if triggered, only ever changes the `DataProvider` implementation, never UI components.

### D7 — Scalability envelope

Design target: works acceptably up to ~10,000 records on static generated JSON with no backend (per RE-05). Concretely: `index.json` carries only list/search/filter-relevant summary fields (id, type, short label, key enum fields), not full record bodies; full record content lives in one `record-detail/<ID>.json` file per record, fetched on demand when a record is opened. The graph view defaults to neighbourhood mode (selected node ± 1–2 hops) rather than rendering the full global graph, with an explicit opt-in for a global view. If RE-05's measured benchmarks show this is insufficient at target scale, the next step is client-side chunking/lazy-loading of `index.json` before any backend/API is considered (per the roadmap's explicit gate: "No database/backend may be introduced without measured evidence of need").

### D8 — Repository/package layout

New, isolated `apps/research-explorer/` directory:
```
apps/research-explorer/
  package.json           # app's own deps: React + TypeScript + Vite (RE-02), TanStack Table
                          # (RE-02 Records-view candidate), Graphology + Sigma.js stable (RE-04)
  scripts/build-data.js  # RE-01 adapter — requires ../../tools/validate-research.js directly
  src/                   # RE-02+ UI
  generated/             # gitignored build output (D5)
```
This keeps the new dependency surface fully contained: root `tools/*.js` and `research/` stay zero-dependency and untouched by the Explorer's `node_modules`. The RE-01 adapter script itself introduces **no new dependency** — it is plain Node requiring the existing `tools/validate-research.js` by relative path, so the data-build step alone works even before any frontend dependency is installed.

Stack confirmed for RE-01 onward, unchanged from prior review: React + TypeScript + Vite for the application shell; TanStack Table as the current candidate for the Records view (RE-02) — "candidate" because RE-02 is not scaffolded by this spike and the choice is not exercised against real UI requirements yet; Graphology + Sigma.js stable for the graph model/renderer (RE-04), as already named in the roadmap.

### D9 — Local command contract

A minimal root `package.json` (containing only `scripts`, no `dependencies`) is planned to provide the exact commands named in the roadmap, `npm run explorer` and `npm run explorer:build`, each delegating via `npm --prefix apps/research-explorer run <dev|build>`. **Not created by this spike** — it is deferred to RE-02 (first point at which `apps/research-explorer` has an actual `dev`/`build` script to delegate to), to avoid landing a root `package.json` that points at nothing yet.

## Consequences

- The repository gains its first dependency-bearing subtree (`apps/research-explorer/`), scoped and isolated; root-level zero-dependency tooling is unaffected.
- Every future canonical schema addition is visible in the Explorer's node/edge model automatically, with no adapter change, as long as it follows the existing `references` array convention (Track C requirement).
- The read model is regenerated, not maintained by hand, so it can never silently drift into a second source of truth — the exit condition is that a stale read model is simply wrong-looking, not authoritative-looking.

## Exit gate status

RE-00's exit gate — "the adapter must correctly represent SRC/EVD/PRB/ASM/HYP and their existing relations before UI work starts" — is validated by the spike in `apps/research-explorer/spike/` (see `research-explorer-benchmark-plan.md` for what was actually measured against the real 220-record corpus). RE-01 will productionize this spike into the real build script under `apps/research-explorer/scripts/`.
