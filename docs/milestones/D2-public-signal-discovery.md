# D2 — Public Signal Discovery

**Status:** ACTIVE
**Baseline:** v0.1
**Prepared:** 2026-08-11

## Objective

Test whether the nine institutionally identified `PRB-*` problems from D1 are visible in current public/lived signals, and whether those signals reveal concrete journeys, recurring friction, affected contexts, contradictions with institutional framing, information/coordination/transaction costs, or problems D1 may have missed.

D2 does not measure population prevalence and does not select solutions. D2 is a research milestone, not a product-development milestone.

## Entry gate

D2 may start when:

- [x] D1 — Institutional & Data Source Mapping is CLOSED (`docs/milestones/D1-WU07-closure.md`; `M001` = `done`).
- [x] D1 canonical baseline exists — 56 `SRC-*`, 78 `EVD-*`, 9 `PRB-*`, 0 `HYP-*`; 143 records validated.
- [x] the D2 Public Signal Discovery Strategy has been reviewed and approved by the project owner (2026-08-11).
- [x] `docs/discovery/d2-execution-protocol.md` is extended to v0.2 to carry the approved strategy's methodological boundaries.
- [x] research ethics D2-specific permissions/prohibitions are baselined (`docs/discovery/research-ethics.md` §3–4).
- [x] AIQT is initialized and valid.
- [x] no civic product has been selected.
- [x] no Évora Open API implementation has been authorized.

**Entry decision:** READY.

## Operating model for D2

Substantive research (public-signal search, source review, observation extraction) is performed externally. The repository agent is responsible for repository engineering, structured-record integration, validation, AIQT execution, and Git hygiene — not for independently deciding which problems matter or what should be built. See `docs/discovery/research-handoff-protocol.md`.

External research across the Round A tracks (`WU-D2-02`, `WU-D2-03`, `WU-D2-04`) may run in parallel once each becomes `ready`, while canonical integration and AIQT execution state remain serialized — the same parallel-research/WIP-limit model established for D1 applies (`docs/discovery/d1-parallel-research-operating-model.md`): maximum 3 active research tracks, one bounded batch per track before cross-track synthesis, no automatic second batch before reviewing what Round A changed. A work unit's AIQT status still moves out of `ready` only when its first approved handoff enters integration — external research alone does not change AIQT state.

## Research principles

D2 must preserve the following rules (full detail in `docs/discovery/d2-execution-protocol.md` v0.2):

1. Public signals are discovery evidence, not polling — never infer prevalence from signal volume.
2. Public-signal evidence may confirm, refine, weaken, or contradict a `PRB-*`, but must not alone move `validation_status` toward `validated`.
3. Reported experience must be distinguished from verified operational fact (`Signal → Evidence → Corroboration → Verification → Canonical data candidate`).
4. Source lineage/independence must be recorded; repeated/syndicated posts are one signal lineage, not independent corroboration.
5. Personal data is minimized; prefer paraphrase over verbatim reproduction; no dossiers, no cross-platform correlation, no sensitive-attribute inference.
6. Contradiction/current-state evidence must be actively sought, not merely confirmation.
7. Each round reserves bounded effort for blind-spot/open-discovery signals outside the current `PRB-*` map.
8. Absence of public signal must be recorded explicitly and must **not** be interpreted as absence of a problem — this is especially binding for `PRB-0007` (caregiver journey), which is expected to be underrepresented in public channels for privacy reasons.
9. `WU-D2-02` must explicitly attempt coverage of `PRB-0001` through `PRB-0005` in every batch; this is a coverage matrix, not a quota.
10. A new problem candidate defaults to `NEW-CANDIDATE` evidence and requires project-owner review before any canonical `PRB-*` promotion; no `PRB-*`/`HYP-*` record is created mid-scan.
11. No solution proposals, app feature lists, or project selection during D2.

## Work Units

### WU-D2-01 — Public Signal Method & Source Protocol

**Goal:** Integrate the approved D2 Public Signal Discovery Strategy into canonical documentation and establish the D2 milestone/work-unit structure.

Primary work: extend `docs/discovery/d2-execution-protocol.md` with the approved evidence boundary, problem-validation boundary, journey tracks, source classes (PS1–PS6), source-independence rule, signal classification labels, blind-spot control, escalation rule, and priority/parallel-round model; create this milestone document; create the AIQT `D2` milestone and work units.

This WU contains no substantive Évora research and creates no `SRC-*`/`EVD-*`/`PRB-*`/`HYP-*` records.

---

### WU-D2-02 — Mobility / Accessibility / Public Realm Signals

**Track:** D2-A. **Primary problems:** `PRB-0001`–`PRB-0005`. **Priority:** 1 (Round A).

Integrate reviewed public-signal research handoffs on public transport service/information, pedestrian and accessibility barriers, cycling-network coherence, and traffic/parking interaction with public-space quality. Every batch must attempt coverage of `PRB-0001` through `PRB-0005` and record where no useful signal was found.

---

### WU-D2-03 — Informal Caregiver Support Journey Signals

**Track:** D2-B. **Primary problem:** `PRB-0007`. **Priority:** 1 (Round A).

Integrate reviewed public-signal research handoffs on caregiver information/support navigation, redirection between Município/ULSAC/Segurança Social/IPSS, and eligibility/documentation confusion. A weak or absent public signal must not be read as evidence that `PRB-0007` is weak; sparse evidence here is a reason to prioritise D5, not to downgrade the problem.

---

### WU-D2-04 — Urban Hygiene / Public-Service Signals

**Track:** D2-E. **Primary problem:** `PRB-0009`. **Priority:** 1 (Round A).

Integrate reviewed public-signal research handoffs on waste-collection reliability, responsibility confusion (Município vs Gesamb vs parish), reporting/follow-up friction, and whether public experience improved after the 2026 operational restructuring and July/August interventions.

---

### WU-D2-05 — Housing + Employment Targeted Signals

**Tracks:** D2-C (Housing, `PRB-0006`) and D2-D (Employment, `PRB-0008`). **Priority:** 2.

D2-C and D2-D share this work unit for integration efficiency only — their source sets, journeys, findings, and saturation decisions remain analytically separate and must be recorded as such. D2-C investigates the separable process-friction journey (programme discovery, eligibility, applications, student accommodation), not generic housing-affordability signals. D2-D investigates recruitment/skills-mismatch friction described by employers and candidates, not generic job-search frustration.

This work unit's readiness follows the approved strategy's Priority 2 sequencing: it becomes ready only once the Round A tracks (`WU-D2-02`–`WU-D2-04`) have been integrated and reviewed at cross-track synthesis.

---

### WU-D2-06 — Cross-Signal Consolidation & D2 Closure

**Goal:** Consolidate D2 without prematurely creating a solution backlog.

Primary work: cross-track synthesis (including the `D2 OPEN-DISCOVERY / BLIND-SPOT FINDINGS` review), contradiction/current-state log, deduplicate refined evidence, verify no `PRB-*` was upgraded to `validated` solely on public-signal strength, consolidate stakeholder-validation questions for D5, consolidate any `NEW-CANDIDATE` problem material for project-owner review, verify the D2 exit gate, and close D2.

## Work-unit execution discipline

Prefer targeted source review, small research batches (5–10 high-information signals per track per batch), structured records as work is completed, incremental validation, and concise closure notes. Avoid one massive collection session, artificial signal-count targets, and treating post volume as a substitute for specificity or corroboration.

## Structured outputs

D2 should progressively produce repository-backed `SRC-*`/`EVD-*` records carrying public-signal provenance, refinements to existing `PRB-*.possible_root_causes`/evidence linkage (no `validation_status` upgrades from public signal alone), a contradiction/current-state log, and `NEW-CANDIDATE` evidence for anything outside the current `PRB-*` map. New `HYP-*` records should remain rare, as in D1.

## D2 exit gate

D2 may close when:

- [ ] `WU-D2-01` has established the extended protocol/methodology and the D2 milestone/work-unit structure.
- [ ] Round A tracks (`WU-D2-02`, `WU-D2-03`, `WU-D2-04`) are completed or explicitly descoped with rationale, each having attempted the coverage/saturation gate in `docs/discovery/d2-execution-protocol.md` §15.
- [ ] `WU-D2-02` has explicitly attempted coverage of `PRB-0001` through `PRB-0005`, recording any PRB with no useful signal found.
- [ ] `WU-D2-03`'s outcome, if evidence is sparse, records the sparsity explicitly without downgrading `PRB-0007`.
- [ ] `WU-D2-05` (Housing + Employment) is completed or explicitly descoped, with D2-C and D2-D findings/saturation decisions kept separate.
- [ ] no `PRB-*.validation_status` was upgraded to `validated` on the strength of public-signal evidence alone.
- [ ] no new canonical `PRB-*`/`HYP-*` was created without project-owner review; any new problem material is preserved as `NEW-CANDIDATE` evidence.
- [ ] a contradiction/current-state log exists and is consolidated.
- [ ] a `D2 OPEN-DISCOVERY / BLIND-SPOT FINDINGS` review has been performed at cross-track synthesis.
- [ ] specific stakeholder-validation questions for D5 are recorded.
- [ ] AIQT state and repository state are valid; `node tools/validate-research.js` passes.
- [ ] working tree is clean before closure commit.
- [ ] a D2 closure record exists.

## Explicitly out of scope

During D2, do not build civic applications, propose app features, select a civic product, authorize the Évora Open API, run mass automated/platform-scale collection without a prior terms/legal-basis/retention review, join private/closed groups, build dossiers on individuals, infer sensitive personal attributes, treat post/comment volume as population prevalence, or upgrade any `PRB-*` to `validated` solely from public-signal evidence.

## Expected next state

After D2, D3 Problem Map v1 can proceed with refined and enriched `PRB-*` evidence, an explicit contradiction/current-state log, and a defined set of D5 stakeholder-validation questions. No civic product is selected, and the Évora Open API remains an infrastructure hypothesis.
