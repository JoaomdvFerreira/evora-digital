# WU-D4-01 — PRB-0005 Parking/Data Residual Gap Review

**Status:** DONE
**Milestone:** `M004` — D4 Existing Solutions, Comparative Evidence & Residual Gap Analysis
**Work Unit:** `WU019` / `WU-D4-01`
**Date:** 2026-08-11
**Target problem:** `PRB-0005`
**Research mode:** bounded current-local-solution + comparative mechanism review (external research, integrated per approved handoff)

## 1. Core D4 question

> Is there a materially important residual gap in current/reliable/reusable occupancy, status, performance or parking-legibility information that can improve the affected journey or management outcome beyond existing operating solutions in Évora?

This review does not support a generic parking-app, payment-app, dashboard, or "smart parking" product hypothesis.

## 2. Local Évora solution baseline

Static/operational parking information (paid-parking zones, zone maps, tariffs, operating hours, resident rules) and mobile parking payment (`Évora Mobilidade`) already exist and are already canonically represented (`SRC-0022`, `EVD-000021`). Municipal sensor infrastructure — 75 parking sensors, 10 vehicle-counting sensors, and a supporting monitoring/management platform under LVpDÉ — is likewise already canonical (`SRC-0023`). No new records were created to restate these already-recorded facts.

One materially new local-solution finding was integrated: Via Verde Estacionar's **Parking Buddy** feature (`SRC-0092`, `EVD-000105`) offers map-based, green/yellow/red parking-probability predictions updated approximately every 30 minutes, based on Via Verde historical data plus external factors (weather, sporting/cultural events), with forecasts up to 48 hours ahead; Via Verde Estacionar's service pages list Évora among covered municipalities for street-parking payment.

**Important boundary, preserved exactly:** the public pages reviewed do not establish that Parking Buddy's probability layer has complete/accurate coverage for the specific Évora zones relevant to `PRB-0005`. This is recorded as an open D5/operator-verification question (`EVD-000105`), not a fact.

This finding materially weakens a simple "Évora lacks parking availability information" diagnosis. The residual question becomes: *what availability/prediction information is actually usable in Évora today, with what coverage/accuracy/adoption, and what material user or management gap remains?*

The bounded review still does not establish current sensor operational status, current data quality/coverage, a public live occupancy interface/API, whether sensor output feeds any user-facing service, or historical data retention at evaluation-useful granularity. This absence-of-finding is not evidence that sensors are offline or that data cannot be reused internally — it is an unresolved public-data/interface question.

## 3. Comparative evidence

Two bounded comparator records were integrated — the minimum set needed to characterize the mechanism's transferability, not to inflate evidence count.

### 3.1 Seattle OpenPark (`SRC-0093`, `EVD-000106`) — Model A: information-only

Controlled real-world experiment (274 in-ground curb sensors, OpenPark real-time availability, 11 drivers, 33 routes, 495 mock deliveries): cruising-for-parking time fell 27.9%, cruising distance fell 12.4%.

**Mechanism supported:** when drivers genuinely face uncertain curb availability, availability information can reduce search behaviour.

**Transferability limits:** commercial delivery vans, not general passenger parking; a dense 10-block instrumented Seattle curb/loading context; small study; drivers instructed not to double-park. Use as mechanism evidence, not proof of an equivalent Évora effect.

### 3.2 SFpark (`SRC-0094`, `EVD-000107`) — Model B: occupancy management + information

Official SFMTA pilot evaluation: search time fell 43% in pilot areas versus 13% in control; blocks "too full" 16% less often in pilot areas versus +51% in controls; parking-search vehicle-miles/GHG emissions fell 30% in pilot versus 6% in controls.

**Mechanism supported:** managing occupancy so some spaces remain available can materially reduce search friction and associated externalities.

**Critical attribution limitation:** the SFpark pilot bundled occupancy sensing, real-time information, demand-responsive pricing, and payment/meter changes. It does not establish that public occupancy data alone caused the outcome — do not cite it as evidence that Évora should merely expose its sensor feed. If Évora's underlying issue is scarcity/high occupancy at specific times/locations, information alone may only redistribute search.

### 3.3 Comparators reviewed but not canonicalized

Vienna's existing-data occupancy-prediction research (Model C: data reuse/prediction feasibility, no comparable controlled outcome evidence) and the Lisbon/EMEL historical open-parking dataset (a Portuguese open-data governance precedent, not outcome evidence) were both reviewed in the approved handoff but were **not** integrated as canonical `SRC`/`EVD`. Neither materially changes the residual-gap decision beyond what is already captured: Vienna's data-reuse-before-new-sensors lesson is recorded as a D4/D6 note in `ASM-0005.next_action`/`critical_unknowns` rather than needing its own evidence record, and EMEL is a governance comparator with no direct bearing on whether a residual gap exists in Évora. Creating records for either would add evidence count without changing the decision — consistent with the WU019 saturation finding (§9).

### 3.4 Cross-comparator conclusion

The comparative evidence supports: *accurate availability information can reduce parking-search behaviour when uncertainty about available parking is a material cause of that behaviour.* It does **not** support the stronger claim that *publishing real-time occupancy data is generally sufficient to solve urban parking/traffic/public-space problems* — the mechanism is context-sensitive, and Évora must first establish which mechanism (Model A, B, or neither) matches its local problem.

## 4. D4 residual-gap decision

**Status: `PARTIAL`**

**Why not `SUPPORTED`:** no evidence yet that Évora drivers spend materially significant time cruising for lack of occupancy information; that current parking-probability features are absent/unusable in Évora; that municipal sensor data would change user choice; that a public/reusable occupancy feed would improve the broader pedestrian/traffic outcome; or that parking data are a more important cause than scarcity, enforcement, pricing, resident allocation or physical street design.

**Why not `NOT_SUPPORTED`:** municipal sensing/monitoring infrastructure exists; public live occupancy/data reuse remains unresolved; comparator evidence demonstrates a real information mechanism in appropriate contexts; Via Verde's predictive layer's Évora coverage/accuracy/use is unverified; `PRB-0005` already includes legibility/parking-search concerns.

**Conclusion:** a credible parking-availability/legibility mechanism exists in the comparative evidence, but Évora already has substantial parking-information/payment infrastructure and may already have predictive availability functionality through Via Verde. The project has not yet established that missing or inadequate occupancy information is a material cause of `PRB-0005` outcomes. The surviving gap is a narrow validation question, not a supported intervention requirement.

This decision was set by the approved project-owner handoff and was **not** independently changed — no hard canonical contradiction was found during integration.

## 5. Canonical integration

- New sources: `SRC-0092` (Via Verde Parking Buddy), `SRC-0093` (Seattle OpenPark study), `SRC-0094` (SFpark pilot evaluation).
- New evidence: `EVD-000105` (`EXISTING-SOLUTION`), `EVD-000106` (`REFINES`), `EVD-000107` (`REFINES`) — all linked to `PRB-0005` via `analysis.related_problems` and added to `PRB-0005.evidence`.
- `PRB-0005.possible_root_causes` carries a WU-D4-01 summary entry. `PRB-0005.validation_status` unchanged (`unvalidated`); `PRB-0005.status` unchanged (`OPEN`).
- `ASM-0005` updated: `phase` D3 → D4; `critical_unknowns` refined into three D5-targeted unknowns (U1–U3) replacing the D3-targeted pair, tied to the D5 falsification questions below; `next_action` updated to name saturation and route to D5/D6; `notes` appended with the full WU-D4-01 rationale. `existing_solution_understanding` remains `SUFFICIENT`; `remaining_gap` and `decision_gates.remaining_gap_supported` remain `PARTIAL`; `decision_gates.digital_causality` remains `PARTIAL` (not promoted to `PASS`); `structure_action` remains `KEEP`; `triage` remains `DEEPEN`.
- No `HYP-*` created. No product/vendor/architecture decision made.

## 6. D5 falsification questions (carried forward)

- **D5-P5-01 — actual search friction:** do drivers in the relevant Évora locations/times materially cruise, queue, abandon destinations, double-park or choose unsuitable locations because they do not know where parking is available? Falsifies the gap if search friction is minor, or the dominant cause is known full occupancy/scarcity rather than uncertainty.
- **D5-P5-02 — current user-facing availability:** does Parking Buddy or another current service provide useful availability/probability information for the actual Évora parking zones in question (coverage, update frequency, accuracy, awareness/adoption, accessibility, trust/use)? Falsifies a "missing user information" gap if an adequate operating solution already exists.
- **D5-P5-03 — sensor operational state:** are the 75 parking sensors / 10 counters currently operating, maintained, spatially representative, accurate, retained historically, and integrated with a municipal platform? Do not assume from installation history.
- **D5-P5-04 — decision usefulness:** would better occupancy information actually change where drivers park, whether they drive, whether they use peripheral parking, cruising/search time, illegal parking, or pedestrian-space conflict? If not, data publication is not outcome-relevant.
- **D5-P5-05 — operator need:** does the municipality/parking operator itself lack sufficient occupancy/performance information to manage tariffs, allocate residents/public spaces, enforce, understand saturation, or evaluate policy? The highest-value use may be operational rather than public-facing.
- **D5-P5-06 — open-data residual:** if useful current data exist internally, is there a material third-party/public-policy reason to expose them as reusable data? Do not treat openness as the outcome.

## 7. Evaluation-readiness questions carried to D6

If the gap survives D5, D6 should verify: baseline parking search time; occupancy by zone/time; sensor/data coverage; sensor accuracy/error; parking turnover; illegal/double parking; traffic volume near high-pressure zones; data retention/history; stable zone/sensor IDs; intervention timestamp; outcome lag; Via Verde / Évora Mobilidade adoption where obtainable. Without a measurable baseline, a parking-data intervention would be difficult to evaluate.

## 8. Boundaries respected

No generic parking app, payment app, dashboard, or vendor shortlist proposed. No architecture designed. No claim that a public API/live occupancy feed is valuable merely because it is technically possible. The problem was not redefined as missing technology. No `HYP-*` created.

## 9. Saturation

WU019 comparative research is **SATURATED FOR D4**. Further smart-parking case collection is unlikely to change the `PARTIAL` decision. The next decisive evidence is local, not comparative: actual Évora search/journey friction, current Parking Buddy coverage/use, municipal sensor/operator state, and materiality of information to driver/operator decisions — all D5/D6 questions, not further D4 comparator research.

## 10. Validation

- `node tools/validate-research.js` — `Validated 212 record(s): OK.`
- `node tools/test-analytical-foundation.js` — `22/22 passed, 0 failed`.
- `node tools/analyze-research.js --problem PRB-0005` and `--all` — `PRB-0005` reports `linked_evd=8`, `evd_with_analysis=8/8`, `current_asm=ASM-0005`, `triage=DEEPEN`; corpus totals 85 SRC / 107 EVD / 10 PRB / 0 HYP / 10 ASM (212 records).
- `node tools/analyze-research.js --gaps` — unchanged pre-existing gap list plus `ASM-0005` continuing to report its (now three) named critical unknowns; no new gap class introduced by this integration.

## 11. Next state

`WU020` (`WU-D4-02`, `PRB-0009`) is ready to be selected; it is **not** started by this work unit.
