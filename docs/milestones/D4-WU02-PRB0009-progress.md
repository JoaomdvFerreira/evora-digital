# WU-D4-02 — PRB-0009 Waste Service/Data Residual Gap Review

**Status:** DONE
**Milestone:** `M004` — D4 Existing Solutions, Comparative Evidence & Residual Gap Analysis
**Work Unit:** `WU020` / `WU-D4-02`
**Date:** 2026-08-11
**Target problem:** `PRB-0009`
**Research mode:** bounded current-local-solution + comparative mechanism review (external research, integrated per approved handoff)

## 1. Core D4 question

> Do narrow waste service-status, responsibility-routing, request follow-up or operational-data mechanisms have credible outcome value, and is a comparable material residual gap actually present in Évora?

This review does not support a generic waste/reporting-app hypothesis. The core waste-collection problem remains operational/capacity/service-organization driven.

## 2. Local Évora solution baseline

Three already-canonical facts were reconciled, not restated:

- the municipal `Comunicação de Ocorrências` occurrence-reporting platform already supports web/mobile reporting and status follow-up to conclusion (`EVD-000067`, `EVD-000075`, `SRC-0057`) — so a generic "citizens need an app to report and track municipal occurrences" gap is **not supported**;
- Gesamb already publishes waste-service information — schedules, ecocentre locations, reception information, service-quality reporting and complaint channels (`EVD-000074`, `SRC-0063`);
- a dedicated bulky/green-waste (`monstros domésticos`) request journey already exists — Ecocentre drop-off or eligible home collection via a municipal online service page (`EVD-000097`, `SRC-0082`).

No new records were created for these already-recorded facts. The narrower D4 question is whether waste-specific collection/service cases are correctly represented, routed, acknowledged, updated and closed through the existing occurrence channel — not established as either present or absent by this bounded review. The public review also does not establish a resident-facing digital journey for bulky/green-waste status (acknowledgement, slot/date, rescheduling, completion), proactive ordinary-collection service-status communication (delayed/missed/route status), or a reusable public performance dataset (scheduled vs completed collections, missed collections by area, backlog, resolution time, reliability after the July 2026 fleet reinforcement). None of these absences is treated as proof the underlying data/status do not exist internally — they are unresolved public-interface questions.

## 3. Comparative evidence

Four bounded comparator records were integrated — the minimum set needed to characterize three distinct mechanisms, not to inflate evidence count.

### 3.1 Mechanism A — proactive service status

- **Havant** (`SRC-0095`, `EVD-000108`): a customer portal exposes collection status (`not started`, `closed-complete`, rescheduled dates, crew-logged problems), so a resident can report a missed bin only when the collection state makes that report valid.
- **North Norfolk** (`SRC-0097`, `EVD-000110`): publishes a list of locations not collected on a given round, so residents in an already-known affected area are not required to submit an individual report.

**Mechanism:** service-state visibility/proactive communication can plausibly reduce uncertainty and unnecessary duplicate reporting, and give residents a clearer next action.

**Limitation:** both describe service design and operating workflow, not measured outcome effect (no demonstrated reduction in complaint volume or improved satisfaction).

### 3.2 Mechanism B — request/operational integration

**Oxford** (`SRC-0096`, `EVD-000109`): missed-bin reports are checked against a live reporting system fitted in collection vehicles, distinguishing a genuine missed collection from an issue already recorded by the crew or another reason for non-collection.

**Mechanism:** resident-facing reporting becomes more useful when integrated with operational collection data rather than forming a separate unverified complaint queue. If Évora's occurrence platform is not connected to collection-operation data, the relevant gap may be integration/routing, not another front-end tool — must be verified with the operator (D5-P9-02), not assumed.

### 3.3 Mechanism C — performance/open data

**Lisbon** (`SRC-0098`, `EVD-000111`): publishes an annual urban-waste service quality report with indicators such as physical accessibility, collection-service continuity and service information.

**Mechanism:** performance publication can support transparency, service monitoring, trend evaluation and accountability. **Limitation:** publication alone does not prove that collection performance improves — this is primarily a governance/evaluation-readiness comparator.

### 3.4 Comparators reviewed but not canonicalized

Several other UK councils (e.g. West Lancashire, West Lothian) publish materially the same proactive disruption-status pattern as North Norfolk; they were reviewed but not separately canonicalized, since a second or third example of the identical mechanism would not change the residual-gap decision. Open311 (interoperable request/status standard) was also reviewed: Évora already has a municipal occurrence platform, so Open311 is only relevant if a real interoperability/routing problem is demonstrated — this bounded review did not demonstrate one, so it was not canonicalized. 311/open-service-request literature's bias caveat (report volumes are not prevalence measures) was noted but requires no new record — it restates a rule already canonical in this project's evidence methodology (`docs/discovery/research-methodology.md` §4).

### 3.5 Cross-comparator conclusion

Three distinct, plausible mechanisms exist (proactive status, operational integration, performance publication), each with weak-to-limited direct causal outcome evidence. Évora must first establish, via D5, whether any of these narrow mechanisms addresses a materially real local gap rather than assuming a build is justified because the pattern exists elsewhere.

## 4. D4 residual-gap decision

**Status: `PARTIAL`**

**Why not `SUPPORTED`:** Évora already has a generic occurrence-reporting platform with request-status tracking, existing waste-service information, an established bulky/green collection service, and an active operational/fleet response. D4 has not established that residents cannot report waste issues, that status/closure is universally absent, that lack of digital status is a material cause of poor collection, that public performance data would improve collection reliability, or that responsibility confusion is widespread.

**Why not `NOT_SUPPORTED`:** the public current-state review does not establish waste-specific collection status, proactive delayed/missed-route communication, occurrence-platform integration with collection-operation status, a digital bulky/green request lifecycle, or public/service-performance metrics sufficient to evaluate reliability. Comparators show these mechanisms are operationally plausible and common elsewhere, but local materiality is untested.

**Conclusion:** Évora already has a general occurrence-reporting/status channel and established waste services, so the broad digital-reporting gap is not supported. A narrower residual gap may remain around proactive collection status, operational integration, special-waste request lifecycle and performance/evaluation data. Comparative practice shows plausible service-design and accountability mechanisms, but D4 does not establish that these gaps materially cause or resolve Évora's collection-reliability problem.

This decision was set by the approved project-owner handoff and was **not** independently changed — no hard canonical contradiction was found during integration.

## 5. Canonical integration

- New sources: `SRC-0095` (Havant), `SRC-0096` (Oxford), `SRC-0097` (North Norfolk), `SRC-0098` (Lisbon).
- New evidence: `EVD-000108`–`EVD-000111`, all `REFINES`, linked to `PRB-0009` via `analysis.related_problems` and added to `PRB-0009.evidence`.
- `PRB-0009.possible_root_causes` carries a WU-D4-02 summary entry. `PRB-0009.validation_status` unchanged (`unvalidated`); `status` unchanged (`OPEN`); `digital_tractability` unchanged (`low`).
- `ASM-0009` updated: `phase` D3 → D4; `critical_unknowns` (U1–U3) retargeted from D3/D4 to D5, tied to the six D5 falsification questions below; `next_action` names D4 saturation and routes to D5/D6; `notes` appended with the full WU-D4-02 rationale. Preserved unchanged: `existing_solution_understanding` (`SUFFICIENT`), `remaining_gap`/`decision_gates.remaining_gap_supported` (`PARTIAL`), `decision_gates.digital_causality` (`FAIL`, for the core operational mechanism — this D4 review concerns only the narrow residual leads), `digital_leverage` (`low`), `structure_action` (`KEEP`), `triage` (`WATCH`).
- No `HYP-*` created. No product/vendor/architecture decision made. `PRB-0005`, `ASM-0005`, and the WU019 progress record were not modified.

## 6. D5 falsification questions (carried forward)

- **D5-P9-01 — occurrence-platform waste coverage:** can a resident currently report the relevant waste/urban-hygiene issues through the municipal occurrence platform? For each relevant category: how is it categorized, where is it routed, what status values are exposed, what does "closed" mean? Falsifies a generic reporting/status gap if current coverage is already adequate.
- **D5-P9-02 — operational integration:** does the occurrence/case system receive collection-operation information from crews, route management, vehicle systems, or supervisors? If not, how are reports validated and routed?
- **D5-P9-03 — known disruption communication:** when a route/street/area is known to be delayed or missed, is that communicated proactively, is a revised collection expectation given, and are residents still expected to submit individual reports?
- **D5-P9-04 — bulky/green request lifecycle:** how is the request recorded; how is a date agreed; does the resident receive acknowledgement; can the date/status be checked; what happens when the municipality cannot provide the service; how is completion recorded?
- **D5-P9-05 — resident materiality:** do uncertainty, repeated contact, unclear responsibility or lack of closure create meaningful burden for residents? If not, a digital follow-up intervention may be unnecessary.
- **D5-P9-06 — operator materiality:** would better request/route/performance integration help the operator detect repeated misses, identify backlog, prioritize, distinguish isolated vs route-wide problems, or measure post-intervention reliability? The strongest value may be operational rather than public-facing.

## 7. Evaluation-readiness questions carried to D6

If any residual gap survives D5, D6 should verify availability/quality of: scheduled collections by route/area/date; attempted/completed collection state; missed collections; reason codes; return/recovery date; report/request timestamps; acknowledgement timestamps; assignment/routing; closure timestamps; backlog; repeat reports; unique location/route identifiers; vehicle/crew identifiers where lawful/necessary; fleet availability; service interruptions; and denominator data needed to calculate reliability rates. Preferred outcome metrics would use rates/time-to-resolution rather than raw complaint counts alone.

## 8. Boundaries respected

No generic waste/reporting app proposed. No reinterpretation of operational causes as digital causes. No assumption that dashboard/API availability changes collection reliability. Core `digital_tractability`/`digital_leverage` remain `low`; the civic problem's importance is kept separate from the narrow digital-opportunity question. `triage` remains `WATCH` at the core-problem level — the `PARTIAL` narrow residual gap is carried to D5/D6, not pursued as a build. No `HYP-*` created.

## 9. Cross-track note

`WU019` closed `PRB-0005` with residual-gap status `PARTIAL` (`docs/milestones/D4-WU01-PRB0005-progress.md`). That result does not change this `PRB-0009` analysis; the same D4 discipline was preserved — existing technology does not prove residual-gap closure, comparative mechanism evidence does not prove local materiality, narrow digital/data opportunities remain subordinate to the underlying civic problem, and D5/D6 carry is legitimate without a build hypothesis. `PRB-0005`, `ASM-0005`, and the WU019 progress record were not touched by this work unit.

## 10. Saturation

This comparative review is **SATURATED FOR D4**. More examples of missed-bin forms, city dashboards, 311 apps, or waste-notification systems are unlikely to change the `PARTIAL` decision. The next decisive evidence is local/operator/stakeholder evidence about existing waste-category workflow, status/closure semantics, operational integration, known-delay communication, special-waste request lifecycle, and performance-data availability/materiality — all D5/D6 questions, not further D4 comparator research.

## 11. Validation

- `node tools/validate-research.js` — `Validated 220 record(s): OK.`
- `node tools/test-analytical-foundation.js` — `22/22 passed, 0 failed`.
- `node tools/analyze-research.js --problem PRB-0009` and `--all` — `PRB-0009` reports `linked_evd=15`, `evd_with_analysis=15/15`, `current_asm=ASM-0009`, `triage=WATCH`; corpus totals 89 SRC / 111 EVD / 10 PRB / 0 HYP / 10 ASM (220 records).
- `node tools/analyze-research.js --gaps` — unchanged pre-existing gap classes; `ASM-0009` continues to report its (still three) named critical unknowns, now D5-targeted; no new gap class introduced by this integration.

## 12. Next state

`WU021` (`WU-D4-03`, cross-gap synthesis & D4 closure) is ready to be selected; it is **not** started by this work unit.
