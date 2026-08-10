# WU-D1-02 Progress — Mobility, Territory, Urban Infrastructure & Accessibility

**Status:** IN PROGRESS — records integrated, AIQT status `needs_review` pending project-owner resolution outside AIQT
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

## Batch B integration

The externally reviewed and approved **WU-D1-02 Research Batch B** (bounded institutional/data-interface follow-up; no public social listening) narrowed the six open questions left by Batch A.

- Sources enriched: **4** — `SRC-0006`, `SRC-0007`, `SRC-0016`, `SRC-0019` (appended `notes`; `SRC-0007` freshness reassessed from `STALE`/2020 to `CURRENT`/2026 and `canonical_reference` updated to the current GEOCIMAC page, with the earlier page preserved in `notes`)
- Sources added: **6** — `SRC-0020` (TPAC website), `SRC-0021` (TREVO website), `SRC-0022` (Évora Mobilidade parking payment), `SRC-0023` (LVpDÉ sensors), `SRC-0024` (current PMUSE works), `SRC-0025` (Rossio 2026 requalification)
- Evidence records added: **9** — `EVD-000014`…`EVD-000022`
- Problem records updated (context only, no new `PRB-*`): **5** — `PRB-0001`…`PRB-0005`, each gained a `possible_root_causes` entry prefixed "Batch B update:" transcribing the approved refinement; no `status`, `evidence_status`, `validation_status`, `digital_tractability`, or `existing_solutions` value was changed, and no existing `evidence` reference was removed or reassigned (Batch B's contextual narrative was not converted into new `PRB.evidence` links, since the handoff did not explicitly state those linkages)
- Hypothesis records created: **0**

`SRC-0020` and `SRC-0021` (third-party operator websites, not the regional/municipal authority itself) were classified `authority: verified-third-party`, since the handoff explicitly deferred to "existing repository rules" for classification rather than asserting `authoritative`.

## Schema clarifications made during integration

Faithful to the approved handoff, three small additive clarifications were made (no existing field was changed or removed):

1. `research/schemas/source.schema.json` gained an optional `canonical_reference` field so each source record can carry a traceable canonical URL, matching the provenance-is-mandatory rule. `docs/models/data-source-model.md` did not previously define a URL-bearing field.
2. `research/schemas/evidence.schema.json` gained an optional `additional_sources` list (validated as `SRC-*` references) so evidence corroborated by more than one source (e.g. `EVD-000004`, `EVD-000009`, `EVD-000013`) can record all corroborating sources, not only the primary `source.source_id`.
3. `problem.domain` is recorded as a list of domain codes rather than a single string, since Batch A's problems are multi-domain (e.g. `PRB-0002` spans `MOB` and `DIG`). This follows the same list convention already used by `evidence.domain`. No enum is enforced on domain values, so this required no validator code change — see the `notes` field added to `research/schemas/problem.schema.json`.

## Validator result

`node tools/validate-research.js` was run against the full canonical record set after each batch and passed on the first run both times, with no parser changes needed beyond the additive schema clarifications above:

```text
Batch A: Validated 26 record(s): OK.
Batch B: Validated 41 record(s): OK.
```

The 4 pre-existing synthetic fixtures under `research/examples/` were checked separately and remain unaffected.

The custom YAML-subset parser correctly handled nested structures, multi-item lists, optional fields, enum values, multi-source evidence, cross-references, punctuation- and colon-bearing observation text, and quoted strings containing apostrophes, by consistently double-quoting free-text scalar values when writing the records.

## Open Civic Data candidates

Existing-model enrichment was preferred over inventing a new entity type, per the source registry's existing structure. Status after Batch B:

| Candidate | Status | Where recorded |
|---|---|---|
| TPAC GTFS | Exists (confirmed); public download endpoint, developer API, and reuse licence unresolved | `SRC-0019.api_candidate` / `notes`, `EVD-000014` |
| TREVO operational transport data | Real-time passenger capability confirmed; GTFS/GTFS-Realtime/developer API/licence unresolved | `SRC-0021.api_candidate` / `notes`, `EVD-000016` |
| Municipal Geographic Portal / GEOCIMAC | Active shared municipal/intermunicipal infrastructure confirmed (ArcGIS Enterprise/Portal, WMS/WFS); service-catalogue enumeration, per-layer freshness/licence still needed | `SRC-0006`, `SRC-0007` `api_candidate` / `notes`, `EVD-000017` |
| Accessibility / R.A.M.P.A. dataset | Plan/inventory process confirmed (2022); downloadable structured dataset, schema, owner, licence unresolved | `SRC-0016.notes`, `EVD-000018` |
| Parking occupancy / traffic sensors | Sensor infrastructure confirmed (75 parking + 10 vehicle-count sensors); current operational status, live feed, licence unresolved | `SRC-0023.notes`, `EVD-000022` |

Batch B's central correction: "missing technology" is not the mobility story — Évora already has real-time bus passenger information, TPAC GTFS, digital parking payment, parking/traffic sensors, and active WebGIS/WMS/WFS infrastructure. The remaining discovery questions are interoperability, discoverability, data reuse, completeness, freshness, and current operational status — not absence of underlying capability.

Unresolved questions carried into a future Batch C (per the handoff's own recommendation, this should be a final institutional consolidation, not indefinite endpoint-chasing):

1. TPAC GTFS public download endpoint and reuse licence.
2. TREVO developer/API access.
3. Exact Portal Geográfico / IDE-CIMAC service endpoints, per-layer freshness and licences.
4. R.A.M.P.A./accessibility structured dataset — existence, owner, format, licence.
5. Current (2026) live occupancy/API access for parking and traffic sensors.
6. A concise stakeholder/contact map for unresolved data ownership, and explicit separation of physical/service, information, and open-data/interoperability problem classes.

These remaining `UNKNOWN`s are an acceptable D1 outcome and should not trigger speculative technical investigation unless a validated opportunity later requires it.

## Files added/changed

Batch A:

- `research/sources/{SRC-0002,SRC-0003,SRC-0006,SRC-0007,SRC-0016,SRC-0017,SRC-0018,SRC-0019}.yaml`
- `research/evidence/EVD-000001.yaml` … `EVD-000013.yaml`
- `research/problems/PRB-0001.yaml` … `PRB-0005.yaml`
- `research/schemas/source.schema.json` (added optional `canonical_reference`)
- `research/schemas/evidence.schema.json` (added optional `additional_sources` reference)
- `research/schemas/problem.schema.json` (documented `domain`-as-list convention)
- `docs/data/source-registry.md` (added `SRC-0016`–`SRC-0019` rows; noted verified sources)

Batch B:

- `research/sources/{SRC-0006,SRC-0007,SRC-0016,SRC-0019}.yaml` (enriched)
- `research/sources/{SRC-0020,SRC-0021,SRC-0022,SRC-0023,SRC-0024,SRC-0025}.yaml` (added)
- `research/evidence/EVD-000014.yaml` … `EVD-000022.yaml` (added)
- `research/problems/PRB-0001.yaml` … `PRB-0005.yaml` (contextual `possible_root_causes` update only)
- `docs/data/source-registry.md` (added `SRC-0020`–`SRC-0025` rows)
- `docs/milestones/D1-WU02-progress.md` (this file)

## Batch C integration

The externally reviewed and approved **WU-D1-02 Research Batch C** (final institutional consolidation; no public social listening) closed the six open questions carried from Batch B by classifying them as D2/D5 lived-experience questions or later targeted owner clarifications, and confirmed no new top-level institutional problem class.

- Sources enriched: **4** — `SRC-0018`, `SRC-0019` (current 2025 operational/coverage figures), `SRC-0007`, `SRC-0021` (ownership/contact notes)
- Sources added: **2** — `SRC-0026` (4th PUE revision experimental mobility actions 2026), `SRC-0027` (municipality service ownership / mobility contacts)
- Evidence records added: **8** — `EVD-000023`…`EVD-000030`
- Problem records updated (context only, no new `PRB-*`): **5** — `PRB-0001`…`PRB-0005`, each gained a "Batch C update:" `possible_root_causes` entry transcribing the approved refinement, and `PRB-0001`/`PRB-0003`/`PRB-0005` gained new `evidence` references (`EVD-000023`, `EVD-000024`, `EVD-000027`, `EVD-000028` on `PRB-0001`; `EVD-000029`, `EVD-000030` on `PRB-0003`; `EVD-000025` on `PRB-0005`); `PRB-0001`'s and `PRB-0003`'s `problem_statement` were updated to the approved final institutional wording. No `status`, `evidence_status`, `validation_status`, `digital_tractability`, or `existing_solutions` value was changed.
- Hypothesis records created: **0**
- `docs/data/source-registry.md` gained the institutional stakeholder/data-owner map (DAM, DORU, E-BUS/TREVO, ATAC/CIMAC, GEOCIMAC/CIMAC) and rows for `SRC-0026`–`SRC-0027`.

### Validator result

```text
Batch C: Validated 51 record(s): OK.
```

### Institutional saturation

Batch C revealed no new top-level institutional problem class; it refined the five existing clusters (`PRB-0001`–`PRB-0005`) and improved current-state confidence. Major current institutional sources (2026 municipal transport-authority report, 2025 ATAC/CIMAC report, active PUE 2026 experimental-actions phase) are represented. Unresolved questions (lived frequency/schedule pain, contemporary pedestrian/accessibility barriers, current cycle-network usability, GTFS/TREVO developer reuse terms, exact GIS layer catalogue/licensing, R.A.M.P.A. structured data, current parking sensor/API status) are intentionally carried forward to D2/D5 or later targeted owner clarification rather than triggering further institutional browsing. See `docs/milestones/D1-WU02-closure.md` for the closure decision.

## WU-D1-02 status

**IN PROGRESS (blocked on AIQT `needs_review` resolution).** This progress record covers Batch A, Batch B, and Batch C. All Batch C records are integrated and validated, and institutional saturation supports closing WU-D1-02. However, the AIQT work unit `WU002` was placed into `needs_review` by the Batch B checkpoint (`C002`, 2026-08-10 19:56), and `aiqt review` / `aiqt start` both report this resolution as `agentCanFix: false` — "Resolve needs_review work units outside AIQT, then continue." This is consistent with the Batch C handoff itself being marked "DRAFT — pending project-owner approval." The repository agent cannot promote `needs_review` → `done` through any available AIQT command (`checkpoint amend` only updates the effective validation/acceptance result of an existing checkpoint and left `workUnitStatusAfter: needs_review` unchanged since the values were already `passed`/`passed`; `checkpoint --from-file` requires an `in_progress` work unit, and `next` refuses to reselect a `needs_review` unit).

**Once the project owner resolves `WU002`'s `needs_review` state outside AIQT (or explicitly authorizes the repository agent to do so), re-run the AIQT checkpoint to `done` and create `docs/milestones/D1-WU02-closure.md`.** Until then, WU-D1-02 remains open and D1 remains open; `WU-D1-03` has not been started.

## Confirmation

- Additional substantive research performed during integration: **NO**
- D2 started: **NO**
- WU-D1-03 started: **NO**
- Product selected: **NO**
- Open API implementation started: **NO**
