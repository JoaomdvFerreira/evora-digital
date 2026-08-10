# WU-D1-02 Progress — Mobility, Territory, Urban Infrastructure & Accessibility

**Status:** IN PROGRESS
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-10

## Batch A integration

The externally reviewed and approved **WU-D1-02 Research Batch A** (institutional/authoritative sources only; no public social listening) was integrated into structured repository records. This is the first real research handoff processed since WU-D1-01.

- Sources enriched (canonical `SRC-*` record created for the first time): **4** — `SRC-0002`, `SRC-0003`, `SRC-0006`, `SRC-0007`
- Sources added: **4** — `SRC-0016`, `SRC-0017`, `SRC-0018`, `SRC-0019`
- Evidence records created: **13** — `EVD-000001`…`EVD-000013`
- Problem records created (owner-approved): **5** — `PRB-0001`…`PRB-0005`
- Hypothesis records created: **0**

All problem records retain `digital_tractability: not_assessed` and `existing_solutions: not_assessed`, as required. No solution hypotheses were added.

## Schema clarifications made during integration

Faithful to the approved handoff, three small additive clarifications were made (no existing field was changed or removed):

1. `research/schemas/source.schema.json` gained an optional `canonical_reference` field so each source record can carry a traceable canonical URL, matching the provenance-is-mandatory rule. `docs/models/data-source-model.md` did not previously define a URL-bearing field.
2. `research/schemas/evidence.schema.json` gained an optional `additional_sources` list (validated as `SRC-*` references) so evidence corroborated by more than one source (e.g. `EVD-000004`, `EVD-000009`, `EVD-000013`) can record all corroborating sources, not only the primary `source.source_id`.
3. `problem.domain` is recorded as a list of domain codes rather than a single string, since Batch A's problems are multi-domain (e.g. `PRB-0002` spans `MOB` and `DIG`). This follows the same list convention already used by `evidence.domain`. No enum is enforced on domain values, so this required no validator code change — see the `notes` field added to `research/schemas/problem.schema.json`.

## Validator result

`node tools/validate-research.js` was run against the full canonical record set (26 real records + the 4 pre-existing synthetic fixtures under `research/examples/`, checked separately) and passed on the first run with no parser or schema changes needed beyond the additive clarifications above:

```text
Validated 26 record(s): OK.
```

The custom YAML-subset parser correctly handled nested structures, multi-item lists, optional fields, enum values, multi-source evidence, cross-references, punctuation- and colon-bearing observation text, and quoted strings containing apostrophes, by consistently double-quoting free-text scalar values when writing the records.

## Open Civic Data candidates

Existing-model enrichment was preferred over inventing a new entity type, per the source registry's existing structure:

| Candidate | Status | Where recorded |
|---|---|---|
| TPAC GTFS | Confirmed GTFS conversion (2025); public download/API endpoint unknown | `SRC-0019.api_candidate` / `notes` |
| IDE-CIMAC WMS/WFS | Confirmed WMS/WFS publication; per-layer freshness/licence unknown | `SRC-0007.api_candidate` / `notes` |
| Municipal Geographic Portal | Public portal confirmed; WMS/WFS/API endpoints not confirmed in this batch | `SRC-0006.api_candidate` / `notes` |
| TREVO urban transport data (Évora) | No canonical source record yet — GTFS/API status unresearched | Not yet in `research/sources/`; flagged below |
| Accessibility / R.A.M.P.A. dataset | No canonical source record yet — existence/owner/structure unresearched | Not yet in `research/sources/`; flagged below |

Unresolved licensing/freshness/API questions carried over from Batch A (not investigated further in this integration step):

1. TPAC GTFS public availability/licensing.
2. TREVO (urban Évora) machine-readable data — no source identified yet.
3. Portal Geográfico / IDE-CIMAC service endpoint catalogues.
4. R.A.M.P.A./accessibility dataset — existence and ownership.
5. Current implementation status of major PMUSE/PUE measures.
6. Current parking data and existing digital parking services.

## Files added/changed

- `research/sources/{SRC-0002,SRC-0003,SRC-0006,SRC-0007,SRC-0016,SRC-0017,SRC-0018,SRC-0019}.yaml`
- `research/evidence/EVD-000001.yaml` … `EVD-000013.yaml`
- `research/problems/PRB-0001.yaml` … `PRB-0005.yaml`
- `research/schemas/source.schema.json` (added optional `canonical_reference`)
- `research/schemas/evidence.schema.json` (added optional `additional_sources` reference)
- `research/schemas/problem.schema.json` (documented `domain`-as-list convention)
- `docs/data/source-registry.md` (added `SRC-0016`–`SRC-0019` rows; noted verified sources)
- `docs/milestones/D1-WU02-progress.md` (this file)

## WU-D1-02 status

**IN PROGRESS.** This progress record covers Batch A only. WU-D1-02 is not closed; it continues with a second institutional batch focused on the six unresolved questions above before moving toward consolidation.

## Confirmation

- Additional substantive research performed during integration: **NO**
- D2 started: **NO**
- WU-D1-03 started: **NO**
- Product selected: **NO**
- Open API implementation started: **NO**
