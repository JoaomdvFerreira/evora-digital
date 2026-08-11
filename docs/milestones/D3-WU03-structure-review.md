# WU-D3-03 Structure Review — Problem Taxonomy & Blind-Spot Decisions

**Status:** DONE
**Milestone:** M003 — D3 Problem Map v1 & Decision Baseline
**Date:** 2026-08-11

## Objective

Resolve the `WU-D3-02` pilot's `MODIFY` framework gate with five bounded semantic changes, and execute the project-owner-approved D3 taxonomy decisions for `PRB-0002` and the road-surface-maintenance `NEW-CANDIDATE`. This WU integrates project-owner decisions faithfully; it does not choose a different civic-problem structure independently.

`docs/milestones/D3-WU02-pilot-review.md` is preserved unchanged as historical evidence of the pilot's own findings; this document records the resolution, not a rewrite of the pilot as if the resolution already existed during it.

---

## 1. Framework `MODIFY` resolution

All five bounded semantic changes named in the `WU-D3-02` pilot review are resolved. None required re-deriving the three pilot ASMs' substantive judgements — only the specific fields the pilot review named.

### 1.1 `CONTRADICTS` scope

Clarified in `docs/discovery/d3-execution-protocol.md` §4.1a and `docs/models/evidence-model.md`: `CONTRADICTS` means the `EVD-*` contradicts a material proposition, framing, causal claim, or current-state assumption relevant to the linked `PRB-*` — it does not automatically mean the whole problem is false. If narrower than the whole problem, the contradicted proposition must be identifiable from the record's own `observation`/`notes` or the linked `ASM-*`. For an `EVD-*` linked to multiple problems where the contradiction applies differently to each, `CONTRADICTS` is not used on the `EVD-*` at all — it is recorded at `ASM-*`/problem level instead. No contradiction-target object was added to the schema.

### 1.2 Planned response vs. operating existing solution

Added `PLANNED-SOLUTION` to `analysis.contribution` (`research/schemas/evidence.schema.json`), alongside `EXISTING-SOLUTION`. `EXISTING-SOLUTION` = an operating/delivered solution exists now; `PLANNED-SOLUTION` = a formally planned/committed/in-delivery response exists but is not yet established as operating and available to the affected journey. Neither implies effectiveness — that remains an `ASM.remaining_gap` question. **`EVD-000092.analysis.contribution` corrected from `[CONFIRMS, EXISTING-SOLUTION]` to `[CONFIRMS, PLANNED-SOLUTION]`** — a metadata correction, not new evidence; the underlying `EVD-000092` observation/notes are unchanged.

### 1.3 `contradiction_status` valence

Clarified in `docs/discovery/d3-execution-protocol.md` §5.1a: `HIGH`/`MEDIUM`/`LOW` describes the degree/materiality of contradiction **present** in the evidence base, not confidence in the assessor's contradiction judgement. `LOW` = little/minor contradiction present; `UNKNOWN` = the contradiction state cannot currently be characterized. No pilot ASM value required changing for this clarification alone (all three pilot ASMs already used `LOW` consistently with this reading).

### 1.4 `PARTIAL` decision-gate state

Added `PARTIAL` to every `decision_gates.*` enum (`research/schemas/assessment.schema.json`, `docs/models/assessment-model.md`, `docs/discovery/d3-execution-protocol.md` §5.1b): `PASS` / `PARTIAL` / `FAIL` / `UNKNOWN` / `NOT_ASSESSED`. `PARTIAL` = meaningful evidence exists but is not sufficient to pass the gate; distinct from `UNKNOWN` = no evidence to characterize the gate at all.

**Exact pilot-ASM gate fields changed** (mechanical corrections only, per the pilot review's own naming — no other field in any pilot ASM was touched):

| ASM | Gate | Before | After |
|---|---|---|---|
| `ASM-0002` | `decision_gates.civic_importance` | `UNKNOWN` | `PARTIAL` |
| `ASM-0002` | `decision_gates.root_cause_understood` | `UNKNOWN` | `PARTIAL` |
| `ASM-0002` | `decision_gates.remaining_gap_supported` | `UNKNOWN` | `PARTIAL` |
| `ASM-0007` | `decision_gates.civic_importance` | `UNKNOWN` | `PARTIAL` |
| `ASM-0007` | `decision_gates.root_cause_understood` | `UNKNOWN` | `PARTIAL` |
| `ASM-0007` | `decision_gates.remaining_gap_supported` | `UNKNOWN` | `PARTIAL` |
| `ASM-0009` | `decision_gates.remaining_gap_supported` | `UNKNOWN` | `PARTIAL` |

`journey_understood: FAIL` (all three ASMs), all other `PASS`/`FAIL` values, and all `NOT_ASSESSED` values are preserved unchanged. No `PRB-*.validation_status` was touched by this resolution.

### 1.5 Triage semantics

Clarified in `docs/discovery/d3-execution-protocol.md` §5.2: `triage` describes Évora Digital's project posture toward a problem, never a judgement of the underlying civic problem's worth. `STOP` = do not invest further discovery/intervention effort in the problem's current framing (can coexist with high civic importance; typical reasons: no meaningful digital/project leverage, remaining gap already addressed, evidence does not support further intervention, another actor is the appropriate route). `WATCH` = do not actively deepen/build now, but monitor a named trigger. `DEEPEN` = collect only the targeted evidence needed to resolve named critical unknowns. `PROCEED` = enough decision support to move to D4/D5 — not authorization to build software. `ASM-0009.triage: WATCH` required no change; its `next_action` already matched the clarified definition, which is exactly why it was chosen over `STOP` during the pilot.

### 1.6 Tests / tooling affected

- `tools/test-analytical-foundation.js`: added `EVD analysis.contribution accepts PLANNED-SOLUTION distinctly from EXISTING-SOLUTION`, `invalid PLANNED-SOLUTION spelling/value is rejected`, `ASM decision_gates accepts PARTIAL alongside PASS/FAIL/UNKNOWN/NOT_ASSESSED` (22/22 total, all passing).
- `tools/analyze-research.js`: **no code changes required.** Its `--gaps` "decision gate(s) UNKNOWN/NOT_ASSESSED" check already excludes any value other than those two literals, so `PARTIAL` gates are correctly *not* reported as gaps without any analyzer edit — verified directly against the corpus (§6).
- `tools/validate-research.js`: no changes required beyond the schema enum expansions already covered by its existing generic enum-checking logic.

---

## 2. `PRB-0002` — owner decision: KEEP, narrowed

**Decision:** `PRB-0002` is **kept as one problem**, narrowed to passenger-facing public-transport information quality/completeness/reliability/usability. No second, developer/data-interoperability `PRB-*` was created.

**Exact fields changed** (`research/problems/PRB-0002.yaml`):

- `title`: "Public-transport information is not consistently available in a complete, reusable and user-friendly form" → "Public-transport passenger information is not consistently complete, reliable and usable across the journey".
- `affected_populations`: `potential third-party data consumers` removed; `public-transport users` retained.
- `problem_statement`: rewritten to focus on passenger-facing information across the journey (stops, digital channels, point-of-failure reliability); the prior "machine-readable transport data exists but its public reuse interface and licensing are not yet clear" clause removed from the *problem statement* (preserved as the Open Data lead, §2.1).
- `possible_root_causes`: one new entry appended recording this decision, its rationale, and the evidence-retention reasoning; all prior Batch B/C/D2-A history preserved verbatim.

**Evidence links:** unchanged — `EVD-000010`, `EVD-000011`, `EVD-000016`, `EVD-000080` all remain linked. `EVD-000010`/`EVD-000016` were retained despite their developer/interoperability content because both also carry direct passenger-information relevance (stop-level information completeness; the current TREVO passenger surface's existence/limits), not solely a developer-facing concern.

**`ASM-0002` changes:** `structure_action` updated `SPLIT_CANDIDATE` → `KEEP`. The former `U2` critical unknown ("does developer/data interoperability justify a structural split?") was removed from `ASM-0002.critical_unknowns` — resolved by the owner decision, not left dangling. `U1`/`U3` (passenger journey mapping, stop-level information audit) remain and are now the assessment's sole active critical unknowns; `next_action` rewritten to prioritize them. `ASM-0002.notes` records the change and its reasoning. `triage` remains `DEEPEN`. `PRB-0002.validation_status` remains `unvalidated`.

### 2.1 Developer/data-interoperability lead (retained, not a PRB)

> Public GTFS / GTFS-Realtime / API endpoint availability, licensing, reuse conditions, and stable developer contracts remain unresolved for the Alentejo Central/TPAC and urban TREVO networks (`EVD-000010`, `EVD-000016`).

This is **not currently a standalone civic `PRB-*`**, because D1–D3 evidence has not yet established an independently material affected journey or civic consequence distinct from the passenger-information problem already captured in `PRB-0002`. It is preserved here as an **Open Data Foundation / data-reuse lead** for later disposition: it may be verified as an infrastructure/data gap, connected to another civic problem, or dropped, depending on future evidence. It is not tracked as a `PRB-0002` critical unknown (§1 above), to avoid blocking the passenger-facing problem on a question that belongs to a different track.

**Confirmation:** no second transport-data `PRB-*` was created in `WU-D3-03`.

---

## 3. Road-surface maintenance — owner decision: PROMOTE to `PRB-0010`

**Decision:** the D2 road-surface-maintenance `NEW-CANDIDATE` (retained unlinked through D2 closure and the `WU-D3-02` pilot) is **PROMOTED** to canonical problem `PRB-0010`, kept **distinct from `PRB-0005`**.

### `PRB-0010` summary

- **Title:** "Road-surface degradation and maintenance reliability affect safety and mobility across Évora".
- **Domain:** `URB`, `MOB` (matching `EVD-000082`/`083`/`084`'s own domain tags).
- **Geography:** municipality / Município de Évora.
- **Affected populations:** residents, drivers.
- **Problem statement:** verbatim per the approved handoff framing — January 2026 petition, municipal acknowledgement and ~€1.5M repair response, later unverified N114 persistence signal, explicit non-prevalence caveat.
- **Evidence:** `EVD-000082`, `EVD-000083`, `EVD-000084` — the same three records preserved as `NEW-CANDIDATE` since D2, no new evidence manufactured.
- **Status fields:** `evidence_status: corroborated`, `validation_status: unvalidated`, `digital_tractability: low`, `existing_solutions: assessed`, `status: OPEN` — exactly the handoff's specified values.
- **`current_journey`:** `null` — no journey was invented for this promotion.
- **`possible_root_causes`:** one entry recording the promotion, its rationale (distinct failure mechanism from `PRB-0005`), and the low-leverage/still-real-problem distinction.

### `PRB-0005` non-absorption — proof

`PRB-0005.evidence` after this WU is unchanged: `EVD-000003`, `EVD-000007`, `EVD-000008`, `EVD-000012`, `EVD-000025` — none of `EVD-000082`/`EVD-000083`/`EVD-000084` were added (verified directly against the file; see §6). `PRB-0005`'s title, `problem_statement`, and traffic/parking/public-space framing are unchanged. One `possible_root_causes` entry was appended to `PRB-0005` recording that the candidate was promoted to `PRB-0010` and remains distinct — it does not alter `PRB-0005`'s own scope.

### `ASM-0010`

**Not created in `WU-D3-03`**, per the handoff. `PRB-0010` becomes eligible for `ASM-Lite` assessment starting in `WU-D3-04`'s remaining-problem rollout.

---

## 4. Other `PRB-*` — no additional structural changes

No other `PRB-*` was split, merged, or otherwise restructured in `WU-D3-03`. `PRB-0005` retains its traffic/parking/public-space framing (§3); no cycling, housing, caregiver, employment, or waste subproblem was created; no existing `PRB-*` was merged on domain-overlap grounds. The remaining problems not yet covered by `ASM-Lite` (`PRB-0001`, `PRB-0003`, `PRB-0004`, `PRB-0005`, `PRB-0006`, `PRB-0008`, and now `PRB-0010`) may surface later `SPLIT_CANDIDATE`/`MERGE_CANDIDATE` findings once assessed in `WU-D3-04`; this WU does not pre-empt them.

---

## 5. Resulting problem-map count

| Before `WU-D3-03` | After `WU-D3-03` |
|---|---|
| 9 `PRB-*` | **10 `PRB-*`** (`PRB-0010` added) |
| 3 `ASM-*` | 3 `ASM-*` (unchanged — `ASM-0010` deliberately not created) |
| 196 total canonical records | **197 total canonical records** |

No new `SRC-*`, `EVD-*`, or `HYP-*` records. One existing `EVD-*` (`EVD-000092`) received a metadata enum correction (§1.2). `ASM-0002`, `ASM-0007`, `ASM-0009` received only the bounded framework/owner-decision updates specified above — no substantive re-derivation.

## 6. Validation result

```text
node tools/test-analytical-foundation.js
  22/22 passed

node tools/validate-research.js
  Validated 197 record(s): OK.

node tools/analyze-research.js --problem PRB-0002   → 4/4 EVD analysed; ASM-0002 CURRENT; 2 critical unknowns; triage DEEPEN
node tools/analyze-research.js --problem PRB-0007   → 8/8 EVD analysed; ASM-0007 CURRENT; 3 critical unknowns; triage DEEPEN
node tools/analyze-research.js --problem PRB-0009   → 11/11 EVD analysed; ASM-0009 CURRENT; 3 critical unknowns; triage WATCH
node tools/analyze-research.js --problem PRB-0010   → 3/3 EVD linked, 0/3 analysed (expected — no lazy backfill performed for PRB-0010 in this WU); no ASM (expected)

node tools/analyze-research.js --all   → 10 PRB rows, PRB-0010 correctly listed with current_asm=no/triage=—
node tools/analyze-research.js --gaps  → 20 gaps: 7× active-PRB-no-ASM (including PRB-0010), 7× linked-EVD-missing-analysis (including PRB-0010's 3/3), plus each pilot ASM's own remaining NOT_ASSESSED-gate/critical-unknown counts — PARTIAL gates correctly excluded from the gap count without any analyzer code change

aiqt status --json → M003/WU016 state valid throughout
```

`grep validation_status research/problems/PRB-*.yaml` after this WU shows all ten `PRB-*` records `unvalidated` — no upgrade. `sed -n '/^evidence:/,/^evidence_status/p' research/problems/PRB-0005.yaml` confirms the five pre-existing evidence IDs only, unchanged.

## Confirmation

- Independent civic-problem-structure choices made beyond the approved handoff: **NO**
- New `PRB-*` created: **YES — exactly `PRB-0010`, per owner decision**
- `PRB-0002` split into two `PRB-*`: **NO** — kept, narrowed
- Second transport-data/developer `PRB-*` created: **NO**
- `PRB-0005` absorbed the road-maintenance evidence: **NO**
- `ASM-0010` created: **NO**
- Any other `PRB-*` split/merged: **NO**
- Any `PRB-*.validation_status` changed: **NO** — all ten remain `unvalidated`
- New external research performed: **NO**
- `WU-D3-04`/`WU017` started: **NO**

## Next

`WU017` (`WU-D3-04` — Remaining Problem Assessments & Triage) is `ready` but **not started**. It inherits: a ten-problem taxonomy with `PRB-0002` narrowed and `PRB-0010` newly eligible for assessment; a resolved `PARTIAL`/`CONTRADICTS`/`PLANNED-SOLUTION`/`contradiction_status`/triage semantic contract requiring no further clarification before rollout; and three already-assessed pilot problems (`ASM-0002`, `ASM-0007`, `ASM-0009`) that do not need to be re-touched. `WU-D3-04` should create `ASM-Lite` records for the seven remaining active problems: `PRB-0001`, `PRB-0003`, `PRB-0004`, `PRB-0005`, `PRB-0006`, `PRB-0008`, `PRB-0010`.
