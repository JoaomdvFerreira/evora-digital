# WU-D1-06 Progress — Environment, Climate, Public & Digital Services

**Status:** DONE
**Milestone:** D1 — Institutional & Data Source Mapping
**Date:** 2026-08-11

## Combined integration (Batch A + Batch B, one execution)

Like WU-D1-05, WU-D1-06 had **no prior canonical integration**. Both externally reviewed and project-owner-approved handoffs — **WU-D1-06 Research Batch A** (institutional/problem-first discovery) and **WU-D1-06 Research Batch B** (narrow current-state challenge, approved 2026-08-11) — were integrated together in this single execution, per `docs/discovery/research-handoff-protocol.md` and `docs/discovery/d1-parallel-research-operating-model.md`. Provisional IDs for both batches are preserved separately below.

- Sources added: **15** — `SRC-0051`–`SRC-0065`. Six pairs of same-URL Batch A/Batch B sources were merged into single records rather than duplicated: A-S03/B-S03 (`SRC-0053`), A-S05/B-S04 (`SRC-0055`, both describing the identical 19-vehicle fleet-reinforcement event), A-S07/B-S07 (`SRC-0057`), A-S08/B-S08 (`SRC-0058`), A-S09/B-S10 (`SRC-0059`, with a second URL added from Batch B), A-S10/B-S09 (`SRC-0060`).
- Sources enriched: **0** — `SRC-0002` (general PDS) was checked for Environment/Climate/Waste/Digital-Services overlap and found not to cover this domain's dedicated scope, so fresh sources were created rather than enriching `SRC-0002`.
- Evidence records added: **16** — `EVD-000063`–`EVD-000078` (8 Batch A + 8 Batch B).
- Problem records created: **1** — `PRB-0009` (urban hygiene / waste-collection service reliability and quality), per the approved PROMOTE decision.
- Hypothesis records created: **0**.

## Provisional → canonical mapping — Batch A

### Sources

| Provisional | Canonical | Disposition |
|---|---|---|
| D1-06-A-S01 | `SRC-0051` | Added (PMAAC) |
| D1-06-A-S02 | `SRC-0052` | Added (municipal climate-risk communication) |
| D1-06-A-S03 | `SRC-0053` | Added (urban-hygiene structural response); merged with D1-06-B-S03 |
| D1-06-A-S04 | `SRC-0054` | Added (9 July public-meeting urban-hygiene priority statement) |
| D1-06-A-S05 | `SRC-0055` | Added (fleet reinforcement to 19 vehicles); merged with D1-06-B-S04 (same underlying event) |
| D1-06-A-S06 | `SRC-0056` | Added (Gesamb 2025 results / 2026 priorities) |
| D1-06-A-S07 | `SRC-0057` | Added (occurrence-management platform); merged with D1-06-B-S07 |
| D1-06-A-S08 | `SRC-0058` | Added (municipality mobile app); merged with D1-06-B-S08 |
| D1-06-A-S09 | `SRC-0059` | Added (ePaper Phase 2); merged with D1-06-B-S10 (second URL added) |
| D1-06-A-S10 | `SRC-0060` | Added (Balcão Online); merged with D1-06-B-S09 |

### Evidence

| Provisional | Canonical |
|---|---|
| D1-06-A-E01 | `EVD-000063` |
| D1-06-A-E02 | `EVD-000064` |
| D1-06-A-E03 | `EVD-000065` |
| D1-06-A-E04 | `EVD-000066` |
| D1-06-A-E05 | `EVD-000067` |
| D1-06-A-E06 | `EVD-000068` |
| D1-06-A-E07 | `EVD-000069` |
| D1-06-A-E08 | `EVD-000070` |

### Batch A candidate-problem decisions

| Provisional | Disposition |
|---|---|
| D1-06-A-P01 | Urban hygiene / waste-service reliability and quality — **PROMOTE**. Confirmed and strengthened by Batch B's current-state challenge; canonicalized as `PRB-0009`, framed as service reliability, not information/app absence. |
| D1-06-A-P02 | Climate resilience (heat, drought, intense rainfall) — **RETAIN as evidence/domain area, NOT canonicalized as a PRB**. Batch B did not establish a new information/coordination problem beyond already-known climate risks and existing PMAAC/alert infrastructure. Per the conservative granularity guidance (consistent with WU-D1-05's zero-PRB pattern), a broad climate-resilience PRB is not created; heat/water-stress/flooding are preserved as evidence (`EVD-000063`, `EVD-000064`, `EVD-000078`) for future narrower treatment if warranted. |
| D1-06-A-P03 | Municipal digital-service fragmentation/navigation — **DO NOT CREATE**. Multiple channels exist but multiplicity is not evidence of citizen difficulty; deferred to D2/D5 per Batch B's confirmation (`EVD-000076`, `EVD-000077`). |
| D1-06-A-P04 | Public-space occurrence reporting gap — **REJECTED** (generic formulation). A reporting/tracking platform already exists (`EVD-000067`, `EVD-000075`); only narrower demonstrated failures in the existing journey could become a future problem. |
| D1-06-A-P05 | Recycling participation / selective collection — kept as evidence/current-transition only, not a standalone digital problem. |

## Provisional → canonical mapping — Batch B

### Sources

| Provisional | Canonical | Disposition |
|---|---|---|
| D1-06-B-S01 | `SRC-0061` | Added (RSU disruption communication, Feb 2026) |
| D1-06-B-S02 | `SRC-0062` | Added (RSU normalisation update, Feb 2026) |
| D1-06-B-S03 | `SRC-0053` | Merged into Batch A's D1-06-A-S03 (same URL) — not a separate source |
| D1-06-B-S04 | `SRC-0055` | Merged into Batch A's D1-06-A-S05 (same underlying fleet-reinforcement event) — not a separate source |
| D1-06-B-S05 | `SRC-0063` | Added (Gesamb Quality of Service Report 2025 — distinct PDF, distinct from `SRC-0056`) |
| D1-06-B-S06 | `SRC-0064` | Added (Gesamb reception/ecocentre information) |
| D1-06-B-S07 | `SRC-0057` | Merged into Batch A's D1-06-A-S07 (same URL) — not a separate source |
| D1-06-B-S08 | `SRC-0058` | Merged into Batch A's D1-06-A-S08 (same URL) — not a separate source |
| D1-06-B-S09 | `SRC-0060` | Merged into Batch A's D1-06-A-S10 (same URL) — not a separate source |
| D1-06-B-S10 | `SRC-0059` | Merged into Batch A's D1-06-A-S09 (same primary URL, second URL added) — not a separate source |
| D1-06-B-S11 | `SRC-0065` | Added (municipal Proteção Civil alert channel) |

### Evidence

| Provisional | Canonical |
|---|---|
| D1-06-B-E01 | `EVD-000071` |
| D1-06-B-E02 | `EVD-000072` |
| D1-06-B-E03 | `EVD-000073` |
| D1-06-B-E04 | `EVD-000074` |
| D1-06-B-E05 | `EVD-000075` |
| D1-06-B-E06 | `EVD-000076` |
| D1-06-B-E07 | `EVD-000077` |
| D1-06-B-E08 | `EVD-000078` |

### Batch B candidate-problem decisions

- **Urban hygiene/waste-service reliability and quality** — PROMOTE/retain as the strongest D1-06 canonical problem candidate; canonicalized as `PRB-0009`. Current confidence HIGH, institutional confidence HIGH, root-cause digital leverage LOW/MIXED. Wording preserved as service reliability/quality, not "lack of waste information" or "need for a waste app".
- **Climate resilience** — RETAIN as systemic evidence/problem domain; conservative about canonical granularity — no separate climate `PRB-*` created.
- **Municipal digital-service fragmentation/navigation** — DEFER to D2/D5.
- **Public-space occurrence reporting** — generic gap REJECTED.
- **Recycling/selective-collection participation** — evidence/current-transition only.

## Current-State Challenge result (Batch B)

Urban hygiene/service reliability **SURVIVES STRONGLY**; "urban hygiene is primarily an information problem" **REJECTED**; "citizens lack digital occurrence reporting" **REJECTED**; "municipal services are insufficiently digital" **REJECTED**; "multiple municipal channels create user navigation friction" **PLAUSIBLE BUT UNPROVEN**; climate-risk domain **SURVIVES** but existing planning/alert/GIS infrastructure materially reduces the case for a new generic digital layer.

## Negative findings preserved

No evidence supports building another generic municipal issue-reporting app; no evidence supports a generic "digitise municipal services" project; no evidence supports replacing PMAAC/WebSIG with a new climate-data system; waste/urban-hygiene problems should not be reframed as information problems merely because Évora Digital is a digital initiative.

## Cross-domain links (preserved as notes, not established causal facts)

- Climate → Mobility: heat reduces walking/cycling comfort/safety (`EVD-000064`).
- Climate → Health/Social: heat/water stress may disproportionately affect vulnerable populations; population-specific evidence still required.
- Climate → Urban planning: PMAAC already integrated with territorial-planning instruments (`EVD-000063`).
- Urban hygiene → Tourism/Culture/Public life: quality of public space may affect residents/visitors/commerce/cultural life, but impacts not assumed without evidence.
- Digital services → Accessibility/Social inclusion: existing channels create an accessibility question, but no current local user-friction evidence was established in Batch A.

## Open-data observations

Recorded here as observations only — **not** as confirmed public/reusable data. Public API/licensing/machine-readability status is unverified for all six items and would require targeted technical follow-up (D2/D5 or a dedicated technical-source assessment), not further D1 institutional research:

1. PMAAC WebSIG / climate-vulnerability spatial layers (`SRC-0051`, `EVD-000070`).
2. Municipal public-space occurrence categories/status data — public API/open-data status unknown (`SRC-0057`, `EVD-000067`, `EVD-000075`).
3. Gesamb waste/recycling performance data (`SRC-0056`, `SRC-0063`, `EVD-000070`).
4. Waste collection/service geography/schedules — machine-readable status unknown (`SRC-0064`).
5. Municipal alerts/protection-civil information — technical feed/API status unknown (`SRC-0065`, `EVD-000078`).
6. Water-service/quality/incident data — availability/licensing to verify (no dedicated source located in this bounded review; carried forward as an open question).

No dedicated open-data candidates log exists elsewhere in the repository (checked `docs/` for "open data"/"open-data" mentions — the term appears only in narrative discussion, e.g. `docs/data/source-registry.md`, `docs/discovery/d1-execution-protocol.md`, `docs/discovery/roadmap.md`, `docs/milestones/D0-closure.md`, `docs/milestones/D0-discovery-foundation.md`, `docs/milestones/D1-institutional-data-source-mapping.md`, `docs/milestones/D1-WU02-progress.md`); this progress doc's section is therefore the canonical current home for these WU-D1-06 observations.

## PRB-0009 framing

`PRB-0009` ("Urban hygiene / waste-collection service reliability and quality") is deliberately framed as a **service reliability/quality** problem, not "lack of information" or "need for an app":

- Root cause is substantially operational (ageing fleet, staffing/logistics, collection-route organisation, cross-entity responsibility) — see `possible_root_causes` in the record.
- `digital_tractability: low` over the dominant root cause.
- A narrower, unvalidated information/coordination subproblem (service-status transparency, bulky-waste routing, cross-entity ownership clarity) is explicitly preserved as a future, not-yet-validated opportunity requiring D2/D5 or technical/open-data work — not a solution hypothesis.
- Evidence linked: `EVD-000065`, `EVD-000066` (Batch A E03/E04) and `EVD-000071`, `EVD-000072`, `EVD-000073` (Batch B E01/E02/E03).

## Carried-forward questions (Batch B, unresolved — not answered, no `HYP-*` created)

1. Do municipal occurrence records expose resolution-time/backlog data internally or publicly?
2. How do residents experience bulky-waste requests and general occurrence follow-up?
3. Does responsibility sharing between Municipality, Gesamb and parish councils create routing confusion?
4. Are waste collection schedules/routes/status changes available in reusable machine-readable form?
5. Are PMAAC/WebSIG layers openly licensed and technically reusable?
6. Do vulnerable populations experience specific heat-information/access gaps?
7. Across municipal services, are authentication, status tracking and accessibility consistent?
8. Does ePaper reduce end-to-end processing time, or primarily digitise intake?

## Batch B synthesis (carried forward)

The Current-State Challenge strengthens urban hygiene/waste-service reliability as a real current civic problem while simultaneously weakening the case for a direct digital solution. It also reinforces three negative findings: (1) do not build another occurrence-reporting app; (2) do not create a generic "digitise municipal services" project; (3) do not duplicate existing climate/GIS/alert infrastructure. The most promising future digital questions concern service-performance transparency, interoperability and user journeys — but these require D2/D5 or technical source assessment rather than more broad D1 institutional research. No solution hypothesis was created in D1.

## Validator result

```text
node tools/validate-research.js
Validated 143 record(s): OK.
```

(111 records from WU-D1-01..05 + 15 new `SRC-*` + 16 new `EVD-*` + 1 new `PRB-*` = 143.)

## Files added/changed

- `research/sources/SRC-0051.yaml` … `SRC-0065.yaml` (added, 15)
- `research/evidence/EVD-000063.yaml` … `EVD-000078.yaml` (added, 16)
- `research/problems/PRB-0009.yaml` (added)
- `docs/data/source-registry.md` (updated: new `SRC-0051`–`SRC-0065` rows, WU-D1-06 verification note)
- `docs/milestones/D1-WU06-progress.md` (this file)
- `docs/milestones/D1-WU06-closure.md` (added)
- `.aiqt/state.json`, `.aiqt/runlog.jsonl` (WU006 selection + closure)

## Confirmation

- Additional substantive research performed during integration: **NO**
- New `PRB-*` created: **YES** — exactly one, `PRB-0009` (urban hygiene/waste-service reliability)
- New `HYP-*` created: **NO**
- Duplicate shared sources created for the six same-URL Batch A/B pairs: **NO** — each merged into a single `SRC-*` record
- Speculative causal relationships encoded as fact: **NO**
- WU-D1-07 records integrated or started: **NO**
- WU-D1-06 marked `done` in AIQT: **YES** — see `docs/milestones/D1-WU06-closure.md`
