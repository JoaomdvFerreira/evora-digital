# WU-D2-04 Closure — Urban Hygiene / Public-Service Signals

**Status:** DONE
**Milestone:** D2 — Public Signal Discovery
**Date:** 2026-08-11

## Objective

Integrate the reviewed, project-owner-approved D2-E (urban hygiene / waste-collection) Round A + post-July reconciliation research handoff for `PRB-0009`, per `.aiqt/state.json` `WU011`'s objective.

## Batch integrated

**Round A + post-July reconciliation** (`evora-digital-WU011-urban-hygiene-integration-handoff.md`): 7 new `SRC-*` (`SRC-0078`–`SRC-0084`), 6 new `EVD-*` (`EVD-000093`–`EVD-000098`), refinement to `PRB-0009`.

## Signal → canonical mapping

| Handoff signal | Disposition | Canonical record |
|---|---|---|
| E-01 (multi-day non-collection, Facebook) | New SRC + EVD | `SRC-0078` / `EVD-000093` |
| E-02 (Canaviais accumulation, Facebook) | New SRC + EVD | `SRC-0079` / `EVD-000094` |
| E-03 (Feb meeting minutes — one vehicle) | Reused — already `EVD-000071`/`EVD-000072`/`SRC-0061`; no new record | — |
| E-04 (May four-vehicle normalisation) | New SRC + EVD — material temporal value | `SRC-0080` / `EVD-000095` |
| E-05 (19-vehicle late-July state) | Reused `SRC-0055` (exact-URL match); fact already in `SRC-0055` notes and `EVD-000072`; no new EVD | — |
| E-06 (parish responsibility clarification) | New SRC + EVD | `SRC-0081` / `EVD-000096` |
| E-07 (bulky/green-waste service journey) | New SRC + EVD | `SRC-0082` / `EVD-000097` |
| E-08 (August green-waste enforcement, 2 outlets) | New SRC ×2 (primary + corroborating), one EVD | `SRC-0083`+`SRC-0084` / `EVD-000098` |
| 5.2 (no comparable post-July collapse signal) | Recorded as PRB-0009 analytical note only; no SRC/EVD created for absence-of-finding | `PRB-0009.possible_root_causes` |
| 5.3 (municipal bulky-waste video) | Omitted — redundant with E-07/existing-solution conclusion | — |

## Reused vs new records

- **Reused sources (unchanged):** `SRC-0053`, `SRC-0054`, `SRC-0055`, `SRC-0057`, `SRC-0061`, `SRC-0062`, `SRC-0063`, `SRC-0064` — no duplication of the February fleet-collapse observation, the 19-vehicle July state, the existing occurrence-reporting platform, or Gesamb's information infrastructure.
- **New sources:** `SRC-0078`–`SRC-0084` (7).
- **Reused evidence (unchanged):** `EVD-000065`, `EVD-000066`, `EVD-000067`, `EVD-000071`, `EVD-000072`, `EVD-000073`, `EVD-000074`, `EVD-000075`.
- **New evidence:** `EVD-000093`–`EVD-000098` (6).

## Dedup decisions

- Exact-URL check against the full corpus confirmed none of E-01, E-02, E-04, E-06, E-07, E-08's URLs (nor the Facebook group ID `253148126144341`) existed canonically before this integration.
- E-03: skipped — the February one-vehicle fact is already primary-authoritative evidence (`EVD-000071`/`EVD-000072`, sourced to `SRC-0061`/`SRC-0062`); the newly offered meeting-minutes URL was not added as a distinct source, per the explicit "do not duplicate the February one-vehicle observation already represented canonically" instruction.
- E-05: `SRC-0055` reused verbatim (its notes already state the fleet reached 19 vehicles); no new EVD created since the fact is not "genuinely missing" from the current-state record.
- E-08: two publications (O Digital, Diana FM) reporting the same enforcement event were integrated as one `EVD-000098` with `SRC-0083` as primary source and `SRC-0084` as `additional_sources`, not two independent problem signals.

## PRB-0009 deltas

**Strengthened:** direct lived public signals (`EVD-000093` multi-day non-collection; `EVD-000094` geographically specific Canaviais accumulation) now sit alongside the existing institutional operational diagnosis. Both are explicitly UNKNOWN representativeness, self-selected, single-lineage signals — not prevalence evidence.

**Current-state correction preserved and extended:** February 2026 (near-collapse) → May 2026 (four vehicles entering service, `EVD-000095`) → July/August 2026 (19-vehicle fleet, already-canonical `SRC-0055`) is now an explicit progression. The February crisis remains important historical/current-year evidence but is **not** the assumed August operating baseline; current post-intervention reliability remains insufficiently measured.

**Narrow leads retained, not escalated:** parish-responsibility clarification (`EVD-000096`) is recorded as institutional coordination complexity, not proof of resident confusion; the bulky/green-waste service journey (`EVD-000097`, EXISTING-SOLUTION) and the single August enforcement case (`EVD-000098`) are recorded as transaction-friction leads, not evidence of widespread journey failure. All are carried to D5, none escalated to a new `PRB-*`.

**Preserved unchanged:** `digital_tractability: low`; `existing_solutions: assessed`; `evidence_status: corroborated`; `validation_status: unvalidated`. No new `PRB-*` or `HYP-*` created; no generic waste-information/reporting-app problem created.

## February → May → July/August current-state treatment

Recorded as a fleet-recovery progression, not a reliability guarantee: Feb 2026 near-collapse (one vehicle at the constrained point) → Feb–May 2026 procurement/entry-into-service of additional vehicles → May 2026 four vehicles normalising service → July 2026 fleet reinforced to 19 vehicles. Each step is evidenced by a distinct, dated source in the same institutional lineage; none is read as proof that ordinary-collection reliability is now solved.

## Lived-signal representativeness treatment

`EVD-000093` and `EVD-000094` are both recorded with `strength: anecdotal`, `evidence_nature: reported-experience`, and explicit "representativeness UNKNOWN" / "one self-selected... signal lineage" language in their notes, per the D2 evidence boundary (`docs/discovery/d2-execution-protocol.md` §2).

## Post-July negative-finding treatment

Recorded verbatim in `PRB-0009.possible_root_causes` (not as a new SRC/EVD): "A bounded post-July open-web check did not surface a comparably strong new signal of city-wide ordinary-collection collapse — this is a search/saturation result, not evidence that collection is now reliable, that PRB-0009 is solved, or that missed collections no longer occur."

## D5 / operational-data questions carried forward

1. Has ordinary collection reliability materially improved after July?
2. Missed/delayed collections by area?
3. Backlog and time to resolution?
4. Do residents understand Município/Gesamb/parish responsibility boundaries?
5. What happens after an occurrence/request: acknowledgement, status, resolution, closure?
6. Is bulky/green-waste collection discoverable and predictable?
7. What happens when municipal green-waste collection cannot be provided?
8. Are current routes/schedules/disruptions/performance available as machine-readable data?
9. Does performance vary materially across urban/peripheral areas?

## Saturation decision

**SATURATED FOR NOW** for broad open-web D2-E research, per the approved handoff. Next useful evidence belongs to operational/service-performance data and direct resident/operator journey validation (D5), not further generic public-web searching. This is not a reason to keep `WU011` open.

## Validation result

```text
node tools/validate-research.js
Validated 182 record(s): OK.
```

- 169 (post-`WU010`) + 7 new `SRC-*` + 6 new `EVD-*` = 182.
- `PRB-*`: still 9 records; `PRB-0009` updated in place, not replaced.
- `HYP-*`: still 0 records.
- Cross-references (`EVD.source.source_id` → `SRC-*`, `EVD.additional_sources` → `SRC-*`, `PRB.evidence` → `EVD-*`) all resolve.
- `git status` reviewed before commit; only the intended `research/` and `docs/` files changed.

## AIQT closure result

`aiqt status --json` parses cleanly (state-integrity repair completed prior to this WU, commit `34eb426`). `WU011` was selected via `aiqt next --work-unit WU011` and closed via `aiqt checkpoint --from-file` with `targetStatus: "done"` after the research content above was committed. See the Return summary in the handoff response for the resulting checkpoint ID and final work-unit/milestone state.

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*`/`HYP-*` created: **NO**
- Any `PRB-*` marked `validated`: **NO**
- New external research performed by the repository agent: **NO** — integration only
- `WU-D2-04` closed: **YES**
- `M002` milestone closed: **NO**

## Next

`WU-D2-05` (Housing + Employment) remains `planned` pending Round A cross-track synthesis across D2-A/D2-B/D2-E. `WU-D2-06` (Consolidation & D2 Closure) will resolve remaining cross-track items, including the D2-A road-surface-maintenance `NEW-CANDIDATE` disposition.
