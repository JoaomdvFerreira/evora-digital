# Open Évora Research Explorer — Development Contract

**Status:** canonical, stable. Applies to every Research Explorer phase (RE-00 onward) unless a specific phase's own closed decision explicitly and narrowly overrides one line here for a stated, evidenced reason (per ADR-001's "do not reopen without concrete evidence" convention).
**Relates to:** `docs/architecture/ADR-001-research-explorer-architecture.md` (rationale for these invariants — not repeated here), `docs/architecture/research-explorer-read-model-spec.md`, `docs/architecture/research-explorer-roadmap.md` (execution sequencing — not repeated here).

This is not an ADR. It records no rationale and no history — only the rules a future task or prompt can rely on holding, so they don't need to be restated every time.

## Invariants

1. **Canonical research is the sole source of truth.** `research/` (validated via `tools/validate-research.js`) is authoritative. Nothing the Explorer generates, caches, or renders is ever a second source of truth.
2. **The Explorer is read-only.** No editing, no CRUD, no canonical-record mutation, from any layer — adapter or UI.
3. **The browser never reads canonical YAML directly.** All canonical ingestion happens once, server/build-side, via `tools/validate-research.js#validateResearchTree()` — no second YAML parser, ever.
4. **The generated read model is disposable and non-canonical.** `apps/research-explorer/generated/` (and any future generated output) is rebuilt deterministically from `research/` and is never hand-edited, diffed as truth, or relied upon to persist meaning across a rebuild.
5. **All UI data access goes through `DataProvider`.** Feature components must not call `fetch()` on generated JSON paths directly, must not hardcode physical file locations, and must not bypass the provider boundary for any reason, including performance shortcuts.
6. **Structural support for a future schema-conforming record type must remain generic.** Node discovery and reference/edge generation require no per-record-type adapter or UI code. A new `*.schema.json` with the existing `prefix`/`directory`/`idField`/`references` conventions must be ingestible and navigable without a code change.
7. **Specialised record-type UI is always optional, never required.** Generic rendering (table columns, detail fields, relationships) must work correctly for any record type on its own; a dedicated view (e.g. RE-03's Problem Explorer) is an additive enhancement layered on top, never a precondition for correctness.
8. **Canonical references are not reinterpreted as semantic relationships.** A reference is "record A points to record B via schema field F," nothing more. Never render or imply SUPPORTS, CONTRADICTS, CAUSES, DUPLICATES, SIMILAR_TO, or any other semantic relationship unless that semantic is explicitly encoded in canonical metadata itself.
9. **Preserve static-hosting portability.** No assumption that the app is hosted at `/`. Asset and route references go through the configured base path (e.g. `import.meta.env.BASE_URL`), not hardcoded absolute paths, so a future sub-path deployment needs no architectural change.
10. **No backend, database, router, state-management library, virtualization, server-side search, or AI inference without measured or explicit need.** Each is a deliberate, evidenced decision at the phase that actually requires it (e.g. RE-05's benchmark-gated chunking decision) — never introduced pre-emptively or by convenience.
11. **Research schemas are never modified solely for UI convenience.** No graph colours, icons, preferred-column lists, frontend labels, or layout coordinates added to canonical schemas. A genuine canonical-model deficiency is reported, not silently patched around from the UI side.
12. **Generated artefacts remain gitignored.** No `manifest.json`, `index.json`, `edges.json`, `record-detail/*`, build output (`dist/`), or temporary/backup directories are ever committed.
13. **Validation is proportional and reuses existing canonical tooling.** Every phase runs (at minimum, scaled to what changed): the RE-01 adapter's own tests, `node tools/validate-research.js`, a real-corpus regeneration, typecheck, and the app's test suite — not a bespoke validation ritual per phase.
14. **WU022/M005 (the AIQT D5 stakeholder-validation track) remains fully independent from the Research Explorer track.** Explorer work never touches `.aiqt/` state, never blocks on WU022/M005, and never advances or references AIQT work-unit status as a side effect of Explorer changes.

## Prompting rule

> Future implementation prompts should reference this contract and the roadmap and specify only the task-specific delta, exceptions, expected outputs and validation.

A prompt that re-derives these invariants from scratch, or restates ADR-001's rationale, is doing work this document already did.
