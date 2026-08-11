# D4 → D5 Handoff — Stakeholder Challenge & Validation

**Status:** HANDOFF — D5 NOT STARTED
**From:** `M004` — D4 Existing Solutions, Comparative Evidence & Residual Gap Analysis (CLOSED)
**Date:** 2026-08-11
**Prepared by:** `WU021` / `WU-D4-03`

This document consolidates every carried D5 need across all ten canonical `PRB-*`: the pre-existing D3 `D5-CARRY` items (`docs/milestones/D3-WU05-closure.md` §6) plus the two D4 tracks' falsification questions (`docs/milestones/D4-WU01-PRB0005-progress.md` §6, `docs/milestones/D4-WU02-PRB0009-progress.md` §6). No M005 milestone or D5 work unit is created by this document — this is a handoff, not a plan.

D5 remains selective and decision-driven (`docs/discovery/roadmap.md` §D5). This is not a generic interview campaign across all ten problems.

## Per-problem D5 needs

### `PRB-0001` — Transport practical service quality
Validate concrete failing public-transport journeys and distinguish schedule/frequency/capacity causes from operational reliability causes. Requires bounded current-journey/service-performance validation via TREVO/ATAC/CIMAC operator data or participation.

### `PRB-0002` — Passenger information quality/interoperability
Validate concrete passenger-information journeys with a stop-level information audit. Keep the GTFS/API/licensing/reuse question as a transversal Open Data Foundation lead (`docs/milestones/D3-WU03-structure-review.md`), not the core civic D5 question.

### `PRB-0003` — Pedestrian/accessibility barriers
Validate residual current accessibility barriers at specific locations with affected users (people with reduced mobility/disabilities) — exact residual barrier locations/state after the December 2025 joint APCE/CME inventory are still not public at the location level.

### `PRB-0004` — Cycling network coherence
Establish current everyday cycling journeys affected by discontinuity/safety/connectivity, ideally alongside a future authoritative network-topology dataset, to determine which everyday origin-destination journeys are actually broken.

### `PRB-0005` — Traffic/parking vs pedestrian quality — carry `D5-P5-01..06`

1. **D5-P5-01 (actual search friction):** do drivers in the relevant Évora locations/times materially cruise, queue, abandon destinations, double-park or choose unsuitable locations because they do not know where parking is available?
2. **D5-P5-02 (current user-facing availability):** does Parking Buddy or another current service provide useful availability/probability information for the actual Évora parking zones in question (coverage, update frequency, accuracy, awareness/adoption, accessibility, trust/use)?
3. **D5-P5-03 (sensor operational state):** are the 75 parking sensors / 10 counters currently operating, maintained, spatially representative, accurate, retained historically, and integrated with a municipal platform?
4. **D5-P5-04 (decision usefulness):** would better occupancy information actually change where drivers park, whether they drive, whether they use peripheral parking, cruising/search time, illegal parking, or pedestrian-space conflict?
5. **D5-P5-05 (operator need):** does the municipality/parking operator itself lack sufficient occupancy/performance information to manage tariffs, allocate spaces, enforce, understand saturation, or evaluate policy?
6. **D5-P5-06 (open-data residual):** if useful current data exist internally, is there a material third-party/public-policy reason to expose them as reusable data?

**Falsification rule:** if current information is already adequate or uncertainty is not a material cause, move the residual gap toward `NOT_SUPPORTED`.

### `PRB-0006` — Housing affordability/supply
Determine whether a material applicant/student discovery, eligibility, application, status or routing gap exists — targeted applicant/student process/journey engagement.

### `PRB-0007` — Caregiver support journey
Validate the current caregiver support journey, rights/eligibility understanding, repeated handoffs/document burden, current plan implementation, and information/coordination needs versus service/capacity needs (formative caregiver-journey research plus a 2026–2027 plan implementation-status/effectiveness check).

### `PRB-0008` — Employment/skills alignment
Validate actual hard-to-fill roles/skills, duration/causes, and the effectiveness/coverage of current employer–training alignment mechanisms (employer/IEFP/NERE recruitment-outcome data, PlaQuaR coverage/outcome check).

### `PRB-0009` — Urban hygiene/waste-collection reliability — carry `D5-P9-01..06`

1. **D5-P9-01 (occurrence-platform waste coverage):** can a resident currently report the relevant waste/urban-hygiene issues through the municipal occurrence platform? For each relevant category: how is it categorized, where is it routed, what status values are exposed, what does "closed" mean?
2. **D5-P9-02 (operational integration):** does the occurrence/case system receive collection-operation information from crews, route management, vehicle systems, or supervisors? If not, how are reports validated and routed?
3. **D5-P9-03 (known disruption communication):** when a route/street/area is known to be delayed or missed, is that communicated proactively, is a revised collection expectation given, and are residents still expected to submit individual reports?
4. **D5-P9-04 (bulky/green request lifecycle):** how is the request recorded; how is a date agreed; does the resident receive acknowledgement; can the date/status be checked; what happens when the municipality cannot provide the service; how is completion recorded?
5. **D5-P9-05 (resident materiality):** do uncertainty, repeated contact, unclear responsibility or lack of closure create meaningful burden for residents?
6. **D5-P9-06 (operator materiality):** would better request/route/performance integration help the operator detect repeated misses, identify backlog, prioritize, distinguish isolated vs route-wide problems, or measure post-intervention reliability?

**Falsification rule:** if current workflow/status/integration is already adequate or narrow digital friction is immaterial, move the residual gap toward `NOT_SUPPORTED`.

**Preserved core-problem posture:** `PRB-0009`'s core operational/capacity/service-organization mechanism remains `WATCH`, not `D5-CARRY` — no active D5 formative research is scheduled for the core problem. Only the six narrow falsification questions above are carried, and only if a future D5 pass is scoped to them specifically.

### `PRB-0010` — Road-surface maintenance/reliability
Remains `WATCH-TRIGGER` (`docs/milestones/D3-WU05-closure.md` §7, `ASM-0010.next_action`). No D5 campaign is created for `PRB-0010` merely for completeness — it is monitored against its four named triggers (persistence of degradation after the repair programme; a repeatable maintenance-service reliability failure pattern; an independently material reporting/prioritization/status/transparency journey gap; a credible open-data/public-accountability gap from machine-readable maintenance/performance data).

## Summary table

| PRB | D5 posture | Source |
|---|---|---|
| PRB-0001 | D5-CARRY | D3 |
| PRB-0002 | D5-CARRY (Open Data Foundation lead kept separate) | D3 |
| PRB-0003 | D5-CARRY | D3 |
| PRB-0004 | D5-CARRY / future topology evidence | D3 |
| PRB-0005 | D5-CARRY — 6 falsification questions (D5-P5-01..06) | D3 + D4 (WU019) |
| PRB-0006 | D5-CARRY | D3 |
| PRB-0007 | D5-CARRY | D3 |
| PRB-0008 | D5-CARRY | D3 |
| PRB-0009 | WATCH-TRIGGER (core) + 6 falsification questions carried if scoped (D5-P9-01..06) | D3 + D4 (WU020) |
| PRB-0010 | WATCH-TRIGGER | D3 |

## Explicit boundary

D5 is **not started** by this handoff. No stakeholder recruitment, formative interview, observation, `M005` milestone, or D5 work unit was created. The next project-owner action is to review this handoff and separately plan a narrow, decision-driven D5 milestone.
