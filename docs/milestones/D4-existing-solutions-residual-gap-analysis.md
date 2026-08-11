# D4 — Existing Solutions, Comparative Evidence & Residual Gap Analysis

**Status:** CLOSED
**Milestone:** `M004`
**Prepared:** 2026-08-11
**Closed:** 2026-08-11 (`docs/milestones/D4-WU03-closure.md`)

## Objective

Test the two D3-routed residual opportunity areas against current local solutions and bounded comparative evidence, then decide whether a material residual gap remains before D5 stakeholder challenge/validation.

D4 does not select a product, vendor, architecture or project.

D4 is intentionally selective (`docs/discovery/roadmap.md` §D4, programme-wide Progressive Assurance rule). Only two narrow residual-gap tracks are authorized in this milestone:

1. `PRB-0005` — parking / traffic / public-space residual data-legibility gap;
2. `PRB-0009` — urban-hygiene service-status / routing / follow-up / operational-data residual gap.

No other `PRB-*` is expanded into D4 by this milestone.

## Entry gate

D4 may start when:

- [x] D3 — Problem Map v1 & Decision Baseline is CLOSED (`docs/milestones/D3-problem-map-decision-baseline.md`; `M003` = `done`).
- [x] the D4–D9 Progressive Assurance roadmap reconciliation is canonical (`docs/discovery/roadmap.md`, commit `fa35898`).
- [x] `projectStatus` was `review` immediately prior to this planning pass; no current milestone/work unit was selected.
- [x] 206 canonical records unchanged (82 `SRC-*`, 104 `EVD-*`, 10 `PRB-*`, 0 `HYP-*`, 10 `ASM-*`); all `PRB-*` remain `validation_status: unvalidated`.
- [x] `PRB-0005` and `PRB-0009` each carry an existing D3 decision baseline with a `DEEPEN`/`WATCH` triage naming the residual-gap question (`docs/milestones/D3-problem-map-decision-baseline.md`; corresponding `ASM-0005`/`ASM-0009`).

**Entry decision:** READY. `WU019` is not selected/started by this planning pass.

## Operating model for D4

D4 does not perform default/uniform research across all problems. Only the two tracks routed here from D3 are in scope. Substantive comparative research is expected to be performed externally (project owner / external research) and integrated by the repository agent; D4 does not require new schemas, new ASM records, or `HYP-*` records to close.

Work-unit sequencing is linear: `WU-D4-01` (`PRB-0005`) → `WU-D4-02` (`PRB-0009`) → `WU-D4-03` (cross-gap synthesis & closure). `WU-D4-02` may not start before `WU-D4-01` completes; `WU-D4-03` may not start before `WU-D4-02` completes.

## Work Units

### WU-D4-01 — PRB-0005 Parking/Data Residual Gap Review

**Goal:** Determine whether a materially important residual gap in current/reliable/reusable occupancy, status, performance or parking-legibility information can improve the affected journey or management outcome beyond existing operating solutions (`Évora Mobilidade`, parking zones/maps/tariffs, sensor/monitoring infrastructure).

Deliver: reconciled current local-solution baseline; the exact residual data/legibility question; bounded comparative evidence only where it can change the residual-gap decision; transferability/context constraints; one explicit residual-gap classification (`SUPPORTED` / `PARTIAL` / `NOT_SUPPORTED` / `UNKNOWN`); falsifiable D5 questions.

Out of scope: a generic parking app; a vendor shortlist; architecture design; assuming a public API/live occupancy feed is valuable merely because it is technically possible; redefining the problem as missing technology.

Suggested effort: Sonnet Low, after an approved external research handoff.

---

### WU-D4-02 — PRB-0009 Waste Service/Data Residual Gap Review

**Goal:** Determine whether narrow status/routing/follow-up/operational-data mechanisms show credible outcome value elsewhere, and whether a comparable residual gap is actually present in Évora, while preserving the distinction between operational/capacity causes and digital/information/coordination opportunities.

Depends on `WU-D4-01`.

Deliver: reconciled existing municipal reporting/service-information/current operating mechanisms; evaluation limited to the narrow residual mechanisms (service-status transparency; responsibility routing; request acknowledgement/status/closure; bulky/green-waste journey clarity; machine-readable operational/performance data); bounded comparative evidence; one explicit residual-gap classification (`SUPPORTED` / `PARTIAL` / `NOT_SUPPORTED` / `UNKNOWN`); falsifiable D5 questions.

Out of scope: a generic waste/reporting app; reinterpreting operational causes as digital causes; assuming dashboard/API availability changes collection reliability.

Suggested effort: Sonnet Low, after an approved external research handoff.

---

### WU-D4-03 — Cross-Gap Synthesis & D4 Closure

**Goal:** Synthesize both tracks without merging their mechanisms, decide which residual gaps survive into D5, and close D4.

Depends on `WU-D4-02`.

Deliver: synthesis of the `PRB-0005` and `PRB-0009` tracks kept analytically separate; consolidated local-solution and transferability findings; any `NOT_SUPPORTED` / `WATCH` outcomes identified; an explicit D5 handoff; the D4 exit gate evaluated; D4/`M004` closed.

Out of scope: project selection; requiring a `HYP-*`; D5 execution; D6 tractability/evaluability work.

Suggested effort: Sonnet Medium.

## D4 exit gate

D4 may close when:

- [x] both selected local-solution baselines (`PRB-0005`, `PRB-0009`) are sufficiently current for decision use. (`docs/milestones/D4-WU03-closure.md` §10)
- [x] duplicate/existing solutions are explicitly accounted for. (`docs/milestones/D4-WU01-PRB0005-progress.md` §2, `docs/milestones/D4-WU02-PRB0009-progress.md` §2)
- [x] comparative research is bounded and mechanism-focused (`docs/discovery/roadmap.md` §D4 comparative-evidence rules). (2 comparators for `PRB-0005`, 4 for `PRB-0009`; several reviewed but not canonicalized)
- [x] transferability/context constraints are documented. (§3.4 of each `WU-D4-0x` progress document)
- [x] each narrow residual gap has one explicit status (`SUPPORTED` / `PARTIAL` / `NOT_SUPPORTED` / `UNKNOWN`). (both `PARTIAL` — `docs/milestones/D4-WU03-closure.md` §2–§3)
- [x] each surviving gap has a falsifiable D5 question. (`D5-P5-01..06`, `D5-P9-01..06`)
- [x] no unselected `PRB-*` has been expanded into D4 without owner approval. (verified — only `PRB-0005`/`PRB-0009` and their `ASM-*` touched)
- [x] no `HYP-*` / product / vendor choice is required. (`ls research/hypotheses` → 0)
- [x] `node tools/validate-research.js` passes and AIQT state is valid. (`Validated 220 record(s): OK.`)
- [x] an explicit D5 handoff exists. (`docs/milestones/D4-to-D5-handoff.md`)

**Exit-gate result (2026-08-11, WU-D4-03/WU021):** 10 of 10 items satisfied and verified. **D4 is CLOSED.** See `docs/milestones/D4-WU03-closure.md` for the full evaluation.

## `PRB-0005` boundary

Preserve the D3 decision baseline: parking zones/maps/tariffs/resident information exist; `Évora Mobilidade` exists; sensor/monitoring infrastructure exists; the broader traffic/parking/pedestrian conflict remains a civic problem; public/reusable occupancy/status/performance data materiality remains unproven.

D4 question: *Is there a materially important residual gap in current/reliable/reusable occupancy, status, performance or parking-legibility information that can improve the affected journey or management outcome beyond existing operating solutions?*

Do not redefine the problem as missing technology.

## `PRB-0009` boundary

Preserve the D3 decision baseline: core causes remain operational/capacity/service-organization; reporting/service-information channels already exist; post-intervention reliability remains insufficiently measured; core digital leverage remains low.

D4 question: *Do narrow status/routing/follow-up/operational-data mechanisms show credible outcome value elsewhere, and is a comparable residual gap actually present in Évora?*

Do not redefine collection reliability as an app problem.

## Open Data Foundation lead

The unresolved `PRB-0002` GTFS/API/licensing/reuse question remains a transversal Open Data Foundation lead. It is not a D4 work unit, is not converted into another `PRB-*`, and is not mixed into the `PRB-0005` data track.

## Explicitly out of scope

During D4, do not: expand to `PRB-0001`, `PRB-0002`, `PRB-0003`, `PRB-0004`, `PRB-0006`, `PRB-0007`, `PRB-0008`, or `PRB-0010`; select a product, vendor, or architecture; create a solution `HYP-*` merely to close a WU; create new schemas or research-record types; modify existing `ASM-*` content; perform D5 execution or D6 tractability/evaluability work.

## Expected next state

After D4, D5 — Stakeholder Challenge & Validation can proceed against the surviving `PRB-0005`/`PRB-0009` residual-gap questions (and any other `DEEPEN`/`WATCH` problem routed there independently), with the `PRB-0002` Open Data Foundation lead tracked separately.
