# D5 — Stakeholder Challenge & Validation

**Status:** PLANNED
**Milestone:** `M005`
**Prepared:** 2026-08-11

## Objective

Challenge the current D3/D4 problem diagnoses with the minimum credible direct operator, institutional, affected-journey and observational evidence needed to resolve decision-critical unknowns, refine or falsify problem framings, and update formal validation status only where the canonical validation contract (`docs/models/problem-model.md`) is actually satisfied.

D5 does not attempt to maximize the number of validated `PRB-*`. It remains selective, decision-driven, challenge-oriented, privacy-minimizing, and proportional to the uncertainty being resolved, per the canonical execution strategy (`docs/discovery/research-methodology.md` §13).

## Entry gate

D5 may start when:

- [x] D4 — Existing Solutions, Comparative Evidence & Residual Gap Analysis is CLOSED (`docs/milestones/D4-WU03-closure.md`; `M004` = `done`).
- [x] the D5 execution/validation strategy is canonical (`docs/discovery/research-methodology.md` §13, `docs/models/problem-model.md`, `docs/models/evidence-model.md`, `docs/discovery/research-ethics.md` §11; commit `29647de`).
- [x] `projectStatus` was `review` immediately prior to this planning pass; no current milestone/work unit was selected.
- [x] 220 canonical records unchanged (89 `SRC-*`, 111 `EVD-*`, 10 `PRB-*`, 0 `HYP-*`, 10 `ASM-*`); all `PRB-*` remain `validation_status: unvalidated`.
- [x] `docs/milestones/D4-to-D5-handoff.md` names the D5 needs per problem, including the `D5-P5-*` and `D5-P9-*` falsification questions.

**Entry decision:** READY. `WU022` is not selected/started by this planning pass.

## Operating model for D5

Exactly three Work Units, organised by evidence role, not one per `PRB-*`. Work-unit sequencing is linear: `WU-D5-01` (operator/institutional) → `WU-D5-02` (affected-journey, only for questions still unresolved) → `WU-D5-03` (synthesis/validation decisions/closure). `WU-D5-02` may not start before `WU-D5-01` completes; `WU-D5-03` may not start before `WU-D5-02` completes.

**Execution reality:** a WU may remain `in_progress` while the project waits for a real stakeholder/operator response. Do not fabricate completion merely because an outreach message was sent — an engagement question is not answered until a response, artefact, observation, or direct dataset actually exists. Use repository progress documentation/runlog notes for outreach-sent / response-pending / inaccessible-contact / alternate-evidence-route states; only submit a valid terminal AIQT checkpoint when the WU is genuinely complete.

**Contact/recruitment planning:** do not hard-code named individuals unless an approved public role/contact is already selected. Prefer roles — transport operator/planner; municipal mobility/parking operator; accessibility programme actor; housing/student support operator; caregiver-support operator; employer/training operator; affected passenger/cyclist/student/caregiver, etc. Specific contacts are an execution-time decision, made inside `WU022`/`WU023`, not this planning pass.

## Work Units

### WU-D5-01 — Operator / Institutional Challenge

**Goal:** Resolve decision questions best answered through direct operator/institutional evidence, process artefacts, or administrative/service data.

Candidate coverage (select only questions unresolved after D4 and genuinely answerable by operators/institutions):

- **`PRB-0001`** — timetable/frequency/capacity vs operational-reliability causes; current service-performance evidence; route/time-specific operational constraints.
- **`PRB-0002`** — current passenger-information production/update process; stop-level/channel-level information coverage where operator evidence can answer it. Keep GTFS/API/licensing/reuse as an Open Data Foundation lead unless an affected civic journey demonstrates materiality.
- **`PRB-0003`** — current accessibility-assessment outputs/correction status where institutional evidence can establish current state.
- **`PRB-0004`** — current cycling-network status/planning/topology evidence where an accountable operator/planner can clarify the operating network.
- **`PRB-0005`** — operator-focused questions only: `D5-P5-02` (current availability-service coverage, where operator/platform evidence is appropriate — do not assume Via Verde/Parking Buddy coverage from public marketing pages alone), `D5-P5-03` (sensor operational state), `D5-P5-05` (operator need), `D5-P5-06` (open-data residual).
- **`PRB-0006`** — current applicant/student accommodation process where institutional evidence can clarify discovery/eligibility/application/status/routing.
- **`PRB-0007`** — current implementation status of 2026–27 caregiver actions; support-routing/rights-navigation process where operator evidence is authoritative.
- **`PRB-0008`** — actual hard-to-fill roles/outcomes; recruitment duration/failure evidence; effectiveness/coverage of employer–training alignment mechanisms. Prefer actual operational/outcome evidence over general opinions about "skills shortages."
- **`PRB-0009`** — conditional only, core remains `WATCH`. If proportionate low-cost operator access exists, resolve `D5-P9-01` (occurrence-platform waste coverage/status semantics), `D5-P9-02` (operational integration), `D5-P9-03` (known-disruption communication), `D5-P9-04` (bulky/green request lifecycle), `D5-P9-06` (operator materiality). Do not turn this into a broad waste campaign.
- **`PRB-0010`** — no default operator engagement; remains `WATCH-TRIGGER`.

**Outputs:** exact operator/institutional validation questions selected; contact/artefact/data route for each; privacy/handling plan before contact (`docs/discovery/research-ethics.md` §11); direct evidence integrated only after actual responses/data are received; unresolved questions explicitly carried to `WU023` or later.

**Out of scope:** open-ended stakeholder outreach; generic "tell us about the problem" interviews; solution ideation; new `HYP-*`; D6 work; forced validation-status changes.

Suggested effort: Sonnet Low for question selection/documentation; escalate only for ambiguous routing decisions.

---

### WU-D5-02 — Affected-Journey Challenge

**Goal:** Challenge only the lived/current-journey questions still unresolved after `WU-D5-01`'s operator/institutional evidence.

Depends on `WU-D5-01`. Do not recruit participants for questions already resolved sufficiently in `WU022`.

Candidate coverage:

- **`PRB-0001`** — concrete recurring public-transport journeys: origin/destination/time; frequency/capacity/reliability; workarounds/consequences.
- **`PRB-0002`** — concrete passenger-information journeys: pre-trip; at-stop; disruption; cross-service transfer; where current information fails or succeeds.
- **`PRB-0003`** — current accessibility journeys at specific locations: barriers still present; barriers already corrected; workaround/consequence. Avoid collecting diagnosis unless genuinely necessary.
- **`PRB-0004`** — actual everyday cycling journeys: discontinuity; safety; destination connectivity; current workaround.
- **`PRB-0005`** — only if still necessary after `WU022`: `D5-P5-01` (actual search friction), `D5-P5-04` (decision usefulness of better occupancy information). Do not ask participants what parking app they want.
- **`PRB-0006`** — recent applicant/student housing-process journey: discovery; eligibility; application; status; routing; handoffs. Do not use this to re-prove the structural housing shortage.
- **`PRB-0007`** — current caregiver support-seeking journey: rights/eligibility understanding; repeated handoffs/document burden; current workaround; information/coordination vs service/capacity needs. Minimize health/sensitive data.
- **`PRB-0008`** — affected worker/jobseeker journey only if operator evidence leaves a decision-relevant user-side question; employer/process evidence remains primary for hard-to-fill/skills-alignment claims.
- **`PRB-0009`** — only if `WU022` leaves a material resident-side question: `D5-P9-05` (resident materiality). No default broad recruitment.
- **`PRB-0010`** — no default participant engagement.

**Engagement discipline:** every engagement must trace to an explicit validation question; include a negative-case/counterexample prompt; collect only the minimum data required; use no recording by default; preserve participant anonymity/minimization; stop when decision sufficiency or diminishing informational return is reached.

**Outputs:** `stakeholder`/`observation` `EVD-*` where appropriate; shared `analysis.lineage_id` for multiple findings from one engagement; no fake public `SRC-*`; explicit contradictions/refinements; a stopping/saturation note for each active validation question.

Suggested effort: Sonnet Low for planning/documentation; execution-time effort depends on actual engagement complexity.

---

### WU-D5-03 — Validation Decisions & D5 Closure

**Goal:** Synthesize D5 direct evidence and make formal problem-validation decisions using the canonical contract.

Depends on `WU-D5-02`.

For each `PRB-*` actually challenged, record: questions challenged; evidence roles reached; counterexamples sought; material findings; contradictions/refinements; remaining HIGH-impact unknowns; `validation_status` before/after; `PRB.status` change if any; `ASM` gate/triage changes if any; next route.

**Allowed outcomes** (no transition is mandatory): `unvalidated → unvalidated`; `unvalidated → partially_validated`; `unvalidated → validated`; `unvalidated → refined + unvalidated/partial`; `OPEN → REJECTED`; `OPEN → INSUFFICIENT_EVIDENCE`. Use only combinations supported by actual evidence and the current schema/contracts.

**Validation threshold:** `validated` requires the canonical 7-point challenge contract (`docs/models/problem-model.md`). Do not use participant count, stakeholder agreement, lack of contradiction, or public-signal volume as sufficient criteria.

**Closure outputs:** final D5 validation matrix; contradiction/refinement log; unresolved unknowns; D6 handoff; D5 exit-gate evaluation; `M005` closure. Do not start D6.

Suggested effort: Sonnet Medium.

## D5 exit gate

D5 may close when:

- [ ] every D5 question actually pursued has a clear outcome;
- [ ] direct stakeholder/operator/observation evidence is source-grounded and lineage-aware;
- [ ] privacy/data-minimization rules were followed;
- [ ] counterexamples/negative cases were actively sought;
- [ ] validation decisions use the canonical 7-point contract;
- [ ] contradictions/refinements are preserved;
- [ ] unresolved high-impact unknowns are explicitly carried forward;
- [ ] no `PRB-*` was forced to `validated`;
- [ ] `WATCH` problems (`PRB-0009` core, `PRB-0010`) were not expanded without justification;
- [ ] no `HYP-*`/product solution was required;
- [ ] a D6 handoff exists;
- [ ] validator/analyzer/AIQT state are valid.

D5 does not require all ten `PRB-*` to change validation status.

## Pre-contact / privacy gate

Before actual D5 contact begins, `WU022` must establish a small reusable engagement template (documentation/template only, not a new research schema) containing: validation question(s); participant/operator role; voluntary participation statement where relevant; data minimization; whether notes are retained; no recording by default; recording consent wording if exceptionally needed; raw-note storage/retention; publication/anonymization rule; correction/removal route; negative-case prompt; stopping rule. See `docs/discovery/research-methodology.md` §13.8 and `docs/discovery/research-ethics.md` §11.

## Explicitly out of scope

During D5, do not: create a Work Unit per `PRB-*`; perform open-ended stakeholder outreach or generic "tell us about the problem" interviews; solicit solution ideation; create a `HYP-*` merely to close a WU; force a `validation_status` transition without satisfying the 7-point contract; expand `PRB-0009`/`PRB-0010` engagement beyond their named conditional questions; start D6 execution; fabricate WU completion before a real response/artefact/observation/dataset exists.

## Expected next state

After D5, D6 — Digital Tractability & Evaluability can proceed against whichever problems' evaluation-readiness carries survived D5 (`PRB-0005`, `PRB-0009`, and any problem D5 upgrades toward `PROCEED`), using the D6 handoff produced by `WU-D5-03`.
