# WU-D1-02 Closure — Mobility, Territory, Urban Infrastructure & Accessibility

**Status:** DONE
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-10

## Objective

Investigate public transport, intermunicipal mobility, pedestrian/cycling conditions, parking, roads and maintenance, physical accessibility, territorial planning, and relevant operators and datasets (`docs/milestones/D1-institutional-data-source-mapping.md`), producing structured evidence records, source expansion, candidate problem clusters, current interventions, stakeholder/data-source additions, and unresolved gaps — without selecting a civic product or authorizing the Évora Open API.

## Institutional coverage achieved

Three externally reviewed research handoffs were integrated in sequence, each faithfully transcribed into structured records per `docs/discovery/research-handoff-protocol.md`:

- **Batch A** — first institutional pass: strategic/social/mobility planning documents, current 2026 municipal transport-authority reporting, current 2025 ATAC/CIMAC reporting; established the first `SRC-*`/`EVD-*` set and the five `PRB-*` problem clusters.
- **Batch B** — bounded institutional/data-interface follow-up: identified existing digital infrastructure (TPAC GTFS, TREVO real-time capability, Évora Mobilidade/Via Verde parking payment, LVpDÉ sensors, active WebGIS/WMS/WFS) that corrects a "missing technology" framing; narrowed remaining questions to interoperability, discoverability, reuse, completeness, freshness and current operational status.
- **Batch C** — final institutional consolidation: current 2025 operational/coverage indicators, freshness caution on prior diagnoses, institutional ownership map for unresolved data/operational questions, and confirmation that further institutional research had stopped producing new top-level problem classes.

## Final record counts

Full canonical set after Batch C, validated by `node tools/validate-research.js`:

```text
Validated 51 record(s): OK.
```

- Sources: `SRC-0002`, `SRC-0003`, `SRC-0006`, `SRC-0007`, `SRC-0016`–`SRC-0027` (22 total)
- Evidence: `EVD-000001`–`EVD-000030` (30 total)
- Problems: `PRB-0001`–`PRB-0005` (5 total)
- Hypotheses: 0

See `docs/milestones/D1-WU02-progress.md` for the batch-by-batch integration detail.

## Five problem clusters retained

No new `PRB-*` record was created in any batch. All five clusters remain `OPEN`, `digital_tractability: not_assessed`, `existing_solutions: not_assessed`:

- `PRB-0001` — Public transport does not provide equally practical mobility across times and territories.
- `PRB-0002` — Public-transport information / interoperability (flagged for likely split during D3 into a passenger-information-quality sub-gap and a developer-interoperability/reuse sub-gap).
- `PRB-0003` — Pedestrian and accessibility barriers reduce independent movement.
- `PRB-0004` — Cycling-network coherence.
- `PRB-0005` — Traffic/parking pressure versus pedestrian quality/safety/legibility (flagged for likely split during D3 into a current-traffic/congestion component and a parking component).

## Important current-state refinements

- Urban ridership is materially recovering (876,148 passengers in 2025, +90,522 vs. 2024, still 1.9% below pre-pandemic); daytime coverage is broad, with reduced night/weekend/holiday service and taxi-based flexible transport for named low-demand locations.
- Intermunicipal TPAC/TPF coverage for Évora municipality is reported at 94% (excluding the separate urban network), weakening any broad "lacks public transport coverage" claim.
- Urban bus punctuality (84.4% IP-5) is materially affected by road congestion on principal access routes, evidencing a road-system component distinct from information gaps.
- No public TREVO satisfaction-survey baseline was provided to the Municipality for 2025 — an explicit reporting gap, not evidence of satisfaction either way.
- The Municipality is actively testing pedestrian/soft-mobility routes with the public (2026 PUE Experimental Actions), meaning residual accessibility conditions should be validated against contemporary lived experience rather than settled from documents alone.
- Institutional ownership for remaining unresolved data/operational questions is identifiable (DAM, DORU, E-BUS/TREVO, ATAC/CIMAC, GEOCIMAC/CIMAC) — recorded in `docs/data/source-registry.md`.

## Unresolved questions handed to D2/D5 or future targeted owner clarification

- Lived frequency/schedule pain (evenings, weekends, low-demand areas, commuting/school journeys).
- Contemporary pedestrian/accessibility barriers, especially for people with reduced mobility.
- Current cycle-network usability (connectivity, safety, maintenance, wayfinding).
- TPAC GTFS and TREVO developer/API reuse terms and licensing.
- Exact Portal Geográfico / GEOCIMAC service catalogue, per-layer freshness and licensing.
- R.A.M.P.A. accessibility dataset — existence, owner, format, licence.
- Current (2026) parking/traffic sensor operational status and public data access.

These are recorded as `UNKNOWN`/open in the affected `SRC-*`/`EVD-*`/`PRB-*` records rather than resolved by inference, per the research handoff protocol.

## Institutional saturation decision

Batch C revealed no new top-level institutional problem class; it refined the five existing clusters and improved current-state confidence, and major current institutional sources for this domain slice are represented. **WU-D1-02 institutional discovery is sufficient to progress.** This does not mean the mobility/accessibility problems are fully validated or ready for software delivery — that remains D2/D5 and later digital-tractability work.

## AIQT closure result

- Checkpoint `C002` (created 2026-08-10, `targetStatus: needs_review`) captured the Batch B integration with `validationResult`/`acceptanceCriteriaResult` already `passed`, but the work unit remained in `needs_review` pending explicit project-owner sign-off — consistent with the Batch C handoff document itself being marked "DRAFT, pending project-owner approval."
- `aiqt review` and `aiqt start` both reported this resolution as requiring action "outside AIQT" (`agentCanFix: false`); the repository agent did not attempt to bypass this gate.
- The project owner then explicitly approved Research Batch C and the institutional-saturation conclusion for WU-D1-02 in-conversation. This was recorded via `aiqt checkpoint amend --checkpoint C002 --validation passed --acceptance passed --reason "..."`, which — following the required amendment mechanics — transitioned `workUnitStatusAfter` from `needs_review` to `done` (`AMEND-002`).
- `WU002` (WU-D1-02) is now `done`. Milestone `M001` (D1) is `in_progress`, `WU003`/`WU004`/`WU005`/`WU006` remain `ready`, `WU007` remains `planned`. `WU-D1-03` was not started.
- `aiqt status --json` confirms a valid project/state (`in_progress`, 1 milestone, 7 work units, 2 `done`, 0 `needs_review`).

## Validation result

- `node tools/validate-research.js` — 51 records, exits 0 (OK).
- Cross-references (`EVD.source.source_id` → `SRC-*`, `PRB.evidence` → `EVD-*`) all resolve.
- `git status` reviewed before commit; only the intended documentation/AIQT-state files changed.

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*` created: **NO**
- New `HYP-*` created: **NO**
- D2 started: **NO**
- WU-D1-03 started: **NO**

## Next WU

`WU-D1-03` — Housing, Social Support, Health & Wellbeing. Research remains external to the local repository agent, per `docs/discovery/research-handoff-protocol.md`.
