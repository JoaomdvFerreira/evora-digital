# WU-D4-03 — Cross-Gap Synthesis & D4 Closure

**Status:** DONE
**Milestone:** `M004` — D4 Existing Solutions, Comparative Evidence & Residual Gap Analysis
**Work Unit:** `WU021` / `WU-D4-03`
**Date:** 2026-08-11

## 1. D4 scope and selective-routing rationale

D4 was intentionally narrow: per the D4–D9 Progressive Assurance roadmap reconciliation (`docs/discovery/roadmap.md` §D4, commit `fa35898`), D4 is selective and only enters for `PRB-*`/narrow leads routed from an `ASM-*` when comparative evidence can plausibly change the decision. `M004` scoped exactly two tracks named by their D3 `ASM-*` critical unknowns: `PRB-0005` (occupancy/data-legibility gap, `ASM-0005` U2) and `PRB-0009` (narrow service-status/coordination/data gap, `ASM-0009` U3). No other `PRB-*` was expanded into D4.

## 2. `PRB-0005` final D4 conclusion

D4 established that: parking maps/zones/tariffs and resident information exist; mobile parking/payment exists (`Évora Mobilidade`); municipal sensor/monitoring infrastructure exists (75 sensors, 10 counters, LVpDÉ platform); Via Verde/Parking Buddy adds an existing parking-probability mechanism (`EVD-000105`); Seattle OpenPark provides relatively strong information-only mechanism evidence (`EVD-000106`); SFpark provides real-world outcome evidence but bundles pricing/management/information (`EVD-000107`); local materiality of missing/inadequate occupancy information remains unproven.

**Final status: `PARTIAL`.**

> Availability information can reduce parking-search friction in suitable contexts, but Évora has not yet established that information uncertainty is a material cause of `PRB-0005` outcomes or that another public occupancy/data surface would improve the journey.

Preserved: `ASM-0005.structure_action: KEEP`; `ASM-0005.triage: DEEPEN`; `PRB-0005.validation_status: unvalidated`. No `HYP-*` created. Full detail: `docs/milestones/D4-WU01-PRB0005-progress.md`.

## 3. `PRB-0009` final D4 conclusion

D4 established that: a generic occurrence-reporting/status channel exists (`EVD-000067`, `EVD-000075`); waste-service information and bulky/green-waste services exist (`EVD-000074`, `EVD-000097`); Havant and North Norfolk show service-state/proactive-disruption patterns (`EVD-000108`, `EVD-000110`); Oxford shows operational-data integration with missed-collection validation (`EVD-000109`); Lisbon provides a Portuguese performance/evaluation-accountability precedent (`EVD-000111`); direct causal evidence for improved collection reliability from these digital/status mechanisms is limited; the core problem remains operational/capacity/service-organization driven.

**Final status: `PARTIAL`.**

> The broad digital-reporting gap is not supported. A narrower gap may remain around proactive collection status, operational integration, special-waste request lifecycle and performance/evaluation data, but D4 does not establish that these mechanisms materially cause or resolve Évora's collection-reliability problem.

Preserved: `ASM-0009.structure_action: KEEP`; `ASM-0009.triage: WATCH`; `ASM-0009.digital_leverage: low`; `PRB-0009.validation_status: unvalidated`. A `PARTIAL` narrow residual gap is compatible with `WATCH` at the core-problem level. No `HYP-*` created. Full detail: `docs/milestones/D4-WU02-PRB0009-progress.md`.

## 4. Cross-gap synthesis

> Existing technology/service infrastructure is substantial enough that a broad "missing technology" diagnosis is not supported for either track. Comparative evidence demonstrates plausible mechanisms in both cases, but local materiality remains unproven. The surviving opportunities are narrow validation questions, not intervention requirements.

The two problem mechanisms are kept analytically separate — no merged framing, no shared record.

**Comparative evidence-strength distinction** (not a comparative score):

- `PRB-0005`: mechanism evidence comparatively stronger (Seattle OpenPark is a controlled real-world experiment with a measured effect size); local transferability/materiality still uncertain.
- `PRB-0009`: operating service patterns credible and varied (three distinct mechanisms across four comparators); direct causal outcome evidence weaker than Seattle's; transferability useful mainly for workflow/service design rather than a measured effect.

## 5. Final D4 result table

| PRB | Residual gap | Existing local solution baseline | Comparative evidence | Local materiality | Next route |
|---|---|---|---|---|---|
| PRB-0005 | PARTIAL | substantial | mechanism supported | unproven | D5 (`D5-P5-01..06`) + D6 evaluation-readiness carry |
| PRB-0009 | PARTIAL | substantial | operational patterns supported | unproven | targeted D5/operator validation (`D5-P9-01..06`) + D6 carry |

## 6. D5 handoff summary

Full handoff: `docs/milestones/D4-to-D5-handoff.md`. It consolidates the pre-existing D3 `D5-CARRY` items for `PRB-0001`/`PRB-0002`/`PRB-0003`/`PRB-0004`/`PRB-0006`/`PRB-0007`/`PRB-0008`, the six `D5-P5-*` falsification questions from `WU019`, and the six `D5-P9-*` falsification questions from `WU020`. `PRB-0010` remains `WATCH-TRIGGER`, not `D5-CARRY`. No `M005` milestone or D5 work unit was planned or created.

## 7. D6 evaluation-readiness carry

Preserved, not executed, from `docs/milestones/D4-WU01-PRB0005-progress.md` §7 and `docs/milestones/D4-WU02-PRB0009-progress.md` §7:

**`PRB-0005`:** parking-search baseline; occupancy by zone/time; sensor coverage/accuracy; turnover; illegal/double parking; traffic volume; historical retention; stable sensor/zone IDs; intervention timing/outcome lag; existing-service adoption.

**`PRB-0009`:** scheduled collections; attempted/completed state; missed collections; reason codes; recovery dates; report/acknowledgement/assignment/closure timestamps; backlog/repeat reports; stable route/location IDs; fleet availability; denominator data for reliability rates.

> Raw complaint/request counts are not prevalence measures and are insufficient as the primary outcome denominator (`docs/discovery/research-methodology.md` §4).

## 8. Proof no HYP/project selection

`ls research/hypotheses` → 0 files, unchanged across all of `M004`. No product, vendor, or architecture decision was made in `WU019`, `WU020`, or this work unit. `PRB-0005.status`/`PRB-0009.status` remain `OPEN`; both `validation_status` remain `unvalidated`.

## 9. Record-count delta across D4

| Stage | SRC | EVD | PRB | HYP | ASM | Total |
|---|---|---|---|---|---|---|
| Pre-D4 (D3 closure) | 82 | 104 | 10 | 0 | 10 | 206 |
| Post-`WU019` | 85 | 107 | 10 | 0 | 10 | 212 |
| Post-`WU020` | 89 | 111 | 10 | 0 | 10 | 220 |
| Post-`WU021` (this closure) | 89 | 111 | 10 | 0 | 10 | 220 |

`WU021` added zero new canonical research records — the delta across `M004` is entirely attributable to `WU019` (3 SRC, 3 EVD) and `WU020` (4 SRC, 4 EVD), both already committed and reported at their own closures.

## 10. D4 exit gate

Evaluated against `docs/milestones/D4-existing-solutions-residual-gap-analysis.md`:

- [x] both selected local-solution baselines (`PRB-0005`, `PRB-0009`) are sufficiently current for decision use — reconciled without duplication in `WU019`/`WU020`, current as of 2026-08-11.
- [x] duplicate/existing solutions are explicitly accounted for — `Évora Mobilidade`, LVpDÉ sensors, Via Verde/Parking Buddy for `PRB-0005`; municipal occurrence platform, Gesamb information, bulky/green-waste journey for `PRB-0009`.
- [x] comparative research is bounded and mechanism-focused — 2 comparators for `PRB-0005` (Seattle, SFpark), 4 for `PRB-0009` (Havant, Oxford, North Norfolk, Lisbon); Vienna, Lisbon/EMEL (parking), Open311, and near-identical UK councils reviewed but explicitly not canonicalized.
- [x] transferability/context constraints are documented — §3.4 of each `WU-D4-0x` progress document.
- [x] each narrow residual gap has one explicit status — both `PARTIAL`, §2–§3 above.
- [x] each surviving gap has a falsifiable D5 question — `D5-P5-01..06`, `D5-P9-01..06`, §6.
- [x] no unselected `PRB-*` has been expanded into D4 without owner approval — verified by `git diff`/corpus review: only `PRB-0005.yaml`/`ASM-0005.yaml` and `PRB-0009.yaml`/`ASM-0009.yaml` were touched across `WU019`/`WU020`.
- [x] no `HYP-*` / product / vendor choice is required — §8.
- [x] research validator and AIQT state are valid — §11 below.
- [x] D5 handoff exists — `docs/milestones/D4-to-D5-handoff.md`.

**D4 is CLOSED.**

## 11. Validation

- `node tools/test-analytical-foundation.js` — `22/22 passed, 0 failed`.
- `node tools/validate-research.js` — `Validated 220 record(s): OK.`
- `node tools/analyze-research.js --problem PRB-0005` — `linked_evd=8`, `evd_with_analysis=8/8`, `triage=DEEPEN`.
- `node tools/analyze-research.js --problem PRB-0009` — `linked_evd=15`, `evd_with_analysis=15/15`, `triage=WATCH`.
- `node tools/analyze-research.js --all` — corpus `89 SRC, 111 EVD, 10 PRB, 0 HYP, 10 ASM (220 total canonical records)`; all ten PRBs' `triage` unchanged from pre-`WU021` state.
- `node tools/analyze-research.js --gaps` — unchanged gap classes; no gap type introduced by this closure work unit.
- `aiqt status --json` — see §13.

10/10 `PRB`/`ASM` coverage confirmed; 0 `HYP-*`; all 10 `PRB-*` remain `validation_status: unvalidated`.

## 12. Saturation

Both `WU019` and `WU020` independently declared their comparative research `SATURATED FOR D4` (`docs/milestones/D4-WU01-PRB0005-progress.md` §9, `docs/milestones/D4-WU02-PRB0009-progress.md` §10). This closure does not reopen either research track — no further comparator collection is warranted for either problem. The next decisive evidence for both is local/operator/stakeholder evidence (D5), and for `PRB-0005`/`PRB-0009` specifically, evaluation-readiness verification (D6) if the respective gap survives D5.

## 13. Final AIQT state

- `WU021`: `done` (this closure).
- `M004`: `done`.
- `currentWorkUnitId`: `null`.
- `currentMilestoneId`: `null`.
- `projectStatus`: `review`.

D5 was **not** planned or started: no `M005` milestone, no D5 work unit, no `aiqt plan` invocation targeting D5 occurred in this work unit. `docs/milestones/D4-to-D5-handoff.md` is a documentation handoff only.
