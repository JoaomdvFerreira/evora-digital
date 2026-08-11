# WU-D3-02 Pilot Review — Three-Problem Pilot & Framework Gate

**Status:** DONE
**Milestone:** M003 — D3 Problem Map v1 & Decision Baseline
**Date:** 2026-08-11
**Pilot PRBs:** `PRB-0002`, `PRB-0007`, `PRB-0009`

## Objective

Test whether the D3 analytical framework (`docs/discovery/d3-execution-protocol.md`, implemented in WU014) makes the next project decision clearer, more auditable and more proportionate than the existing `PRB-*` + `EVD-*` notes alone — not merely whether it validates technically.

## Pilot records created

- `research/assessments/ASM-0002.yaml`, `ASM-0007.yaml`, `ASM-0009.yaml` — exactly the three pilot problems, no others.
- Lazy `EVD.analysis` backfill on the complete existing linked-evidence set of each pilot PRB (bounded and reasonably small in every case): 4/4 EVD for `PRB-0002`, 8/8 EVD for `PRB-0007`, 11/11 EVD for `PRB-0009` — 23 EVD records annotated in total, out of 103 in the corpus. No EVD outside these three problems' linked sets was touched.
- No new `SRC-*`/`EVD-*`/`PRB-*`/`HYP-*` records. No `PRB-*.validation_status` changed.

---

## 1. Per-problem result

### 1.1 `PRB-0002` — Public-transport information quality / interoperability (`ASM-0002`)

**What the ASM clarified that the old PRB/EVD structure did not:** the four linked EVD already told two different stories in prose (`possible_root_causes` had flagged a likely split three times across Batches B/C/D2-A without ever formalizing it). `ASM-0002.structure_action: SPLIT_CANDIDATE` turns that recurring prose flag into one explicit, queryable field, and `evidence_confidence.independence: MEDIUM` makes explicit that only 3 of 4 records are evidentially distinct (`EVD-000010`/`EVD-000011` share one lineage — the same CIMAC `Avaliação Anual` report).

**Decision gates still blocked:** `journey_understood=FAIL` (the PRB's own `current_journey` is `null`); `civic_importance`, `root_cause_understood`, `remaining_gap_supported` are `UNKNOWN` — genuinely unknown, not silently assumed.

**Did the next action become more specific?** Yes — from a generic "needs more research" to two named, checkable actions: verify the GTFS/developer-endpoint status directly with CIMAC/ATAC/TREVO, and map one concrete passenger journey with a current information failure.

**Metadata burden:** proportionate — 4 EVD, ~10 minutes of reading per record to ground `contribution`/`friction_types` in what the record actually says.

**Analyzer usefulness:** `node tools/analyze-research.js --problem PRB-0002` immediately surfaces the 3-vs-4 independence gap and the 2-lineage/2-unassessed split without any manual counting.

### 1.2 `PRB-0007` — Informal caregiver support journey (`ASM-0007`)

**What the ASM clarified:** this was the intended lineage stress test, and it worked as designed. 6 of the 8 linked EVD (`EVD-000034`, `EVD-000044`, `EVD-000089`–`EVD-000092`) all trace to the same underlying document (`SRC-0030`, the *Plano Concelhio dos Cuidadores Informais*). The prose already said this in places ("not an independent corroborating source"), but it was stated once per record rather than computed. `ASM-0007.evidence_confidence.independence: LOW` and the analyzer's `known unique lineage_id count: 1` / `linked EVD with lineage unassessed: 2` now make the true evidentiary weight — 3 effective threads, not 8 — visible without re-reading every record's notes.

**Decision gates still blocked:** `journey_understood=FAIL`; `civic_importance`, `root_cause_understood`, `remaining_gap_supported` are `UNKNOWN`.

**Did the next action become more specific?** Yes — formative caregiver-journey research plus a concrete plan-implementation-status check, named as the two things that would actually move `journey_understood` and `remaining_gap` off `INSUFFICIENT`/`PARTIAL`.

**Metadata burden:** proportionate, though the highest of the three pilots (8 EVD) given this PRB's evidence-dense D1+D2 history.

**Did ASM duplicate too much PRB prose?** No — `existing_solution_understanding: SUFFICIENT` and `remaining_gap: PARTIAL` compress several paragraphs of `PRB-0007.possible_root_causes` into two fields that already say the load-bearing thing: we know what exists, we do not know if it works.

### 1.3 `PRB-0009` — Urban hygiene / waste-collection reliability (`ASM-0009`)

**What the ASM clarified:** this was the intended current-state and triage-semantics stress test. `evidence_nature`/dates alone would have let a naive reader treat all 11 EVD as equally "now." `temporal_relevance` forces an explicit call: `EVD-000071`/`EVD-000072` (the February communicado) are `HISTORICAL` — important, but not the assumed baseline — while `EVD-000095` (May normalisation) is `CURRENT`, because the fact it reports has not been superseded even though it is chronologically older than some August evidence. This is a materially better representation of PRB-0009's own carefully-worded current-state correction than a single `published_at` field could give.

**Decision gates still blocked:** `journey_understood=FAIL`; `remaining_gap_supported=UNKNOWN`. Two gates actually resolved: `civic_importance=PASS` (reach/severity well-supported) and `root_cause_understood=PASS` (the operational/fleet/staffing causal chain is repeatedly, directly institutionally confirmed — the strongest causal understanding of the three pilots).

**Triage-semantics stress test result:** `digital_causality=FAIL` for the core mechanism (fleet/staffing/logistics is not digitally addressable) sits directly next to `civic_importance=PASS`. Naively, a `STOP` triage on a `civic_importance=PASS` problem reads as "this problem does not matter" — exactly the failure mode the WU-D3-02 handoff warned about. `ASM-0009` uses `WATCH` instead, with `next_action` explicit that this means "no software investment against the core mechanism now, monitor for new operational data, and route the narrow residual leads to D4 separately" — not "the civic problem is unimportant." **This is recorded as an unresolved framework-semantic finding (§3), not silently patched by inventing a fact.**

**Metadata burden:** the largest of the three (11 EVD) but still well short of a corpus-wide migration, and proportionate to this being the strongest, most evidence-dense pilot problem.

---

## 2. Cross-pilot findings

- **Does lineage handling reduce false corroboration?** Yes, clearly — most visibly in `PRB-0007` (8 EVD → 3 effective threads) and, to a lesser degree, `PRB-0002` (4 → 3) and `PRB-0009` (11 EVD, 2 known lineages covering 4 records, 7 genuinely distinct standalone sources). In every case, `lineage_id` was assigned only on matching primary `source.source_id` (same document), never on shared publisher or shared additional_sources alone — `EVD-000065` was deliberately left unlineaged despite citing the same `SRC-0053` as `EVD-000066`/`EVD-000073`, because its own primary source is a different document (a meeting record, not the structural-response announcement itself).
- **Are current-state changes visible enough?** Yes — `temporal_relevance` did real, non-trivial work in `PRB-0009` (see §1.3) that the existing `PRB.possible_root_causes` prose could only express narratively.
- **Does `existing_solution_understanding` avoid the old ambiguity?** Yes in practice: in all three ASMs it was set independently from `remaining_gap`, and in every case the two values differ (`SUFFICIENT` / `PARTIAL`), which is exactly the distinction the field rename was meant to preserve.
- **Are critical unknowns decision-focused rather than a research wish list?** Yes — every unknown across all three ASMs names a specific `best_next_evidence` method and a `decision_impact`, not a generic "learn more about X."
- **Are gate states useful?** Partially. `PASS`/`FAIL` were unambiguous and useful wherever the evidence was genuinely one-sided (`problem_real`, `journey_understood`, and — for `PRB-0009` — `civic_importance`/`root_cause_understood`/`digital_causality`). But several gates (`civic_importance` in `ASM-0002`/`ASM-0007`, `root_cause_understood` in `ASM-0002`/`ASM-0007`) landed on `UNKNOWN` not because there was *no* evidence, but because the evidence was *mixed* (e.g. `ASM-0007.civic_importance`: reach `MEDIUM`, severity `MEDIUM`, persistence `HIGH`, but frequency/equity `UNKNOWN`) — see §3.
- **Is triage semantically clear?** No — this is the central finding of the pilot. See §3.
- **Does the analyzer surface gaps without pretending to reason?** Yes — `--gaps` correctly reported zero missing-ASM/missing-analysis gaps for the three pilot problems once populated, continued reporting the (expected, correct) gaps for the six non-pilot problems, and never inferred anything from `notes` prose (verified independently by the WU014 test suite, re-run clean in this WU).
- **Did lazy backfill remain bounded?** Yes — 23/103 EVD, all within the three pilot PRBs' own linked-evidence sets, zero EVD outside that scope touched.
- **Did ASM duplicate too much PRB prose?** No, addressed per-problem above; if anything the ASMs are more compact than the prose they draw on.

---

## 3. Framework issues found (require the `MODIFY` changes in §4)

1. **`contribution: CONTRADICTS` scope is ambiguous.** It is unclear whether `CONTRADICTS` should mean "contradicts the problem's existence/validity" or "contradicts a specific prior claim or framing while the problem itself stands." `EVD-000090` (caregiver needs prioritising care/respite/financial support over navigation) contradicts an *information-only framing* of `PRB-0007`, not `PRB-0007` itself — `CONTRADICTS` was deliberately **not** applied to avoid this ambiguity, and `REFINES` was used instead. This under-uses a real enum value and should be resolved before wider rollout, or different assessors will make inconsistent calls on materially similar evidence.
2. **No `contribution` value for "a response exists but is planned, not yet delivered."** `EVD-000092`'s own D2-era notes text used an informal `EXISTING-SOLUTION-PLANNED` label that has no v1.1 enum equivalent; it was mapped to plain `EXISTING-SOLUTION`, losing the delivered-vs-planned distinction that materially affects `remaining_gap` reasoning (a planned-but-undelivered response should not be treated the same as a working one).
3. **`evidence_confidence.contradiction_status` semantics are unclear.** Does `LOW` mean "low degree of contradiction detected in the evidence" (used throughout this pilot) or "low confidence in the contradiction assessment itself"? These are opposite-valence readings of the same enum value and should be disambiguated in the field's definition.
4. **`decision_gates.*` has no way to express "mixed/partial evidence," only `PASS`/`FAIL`/`UNKNOWN`/`NOT_ASSESSED`.** Several gates in this pilot (e.g. `ASM-0007.civic_importance`) were set to `UNKNOWN` to avoid overclaiming, even though there was substantive — just incomplete — supporting evidence. This conflates "we have nothing" with "we have something but not enough," which are different situations for a project owner deciding whether to `DEEPEN`.
5. **Triage semantics: `STOP`/`WATCH` do not clearly separate "this civic problem does not matter" from "software is not the right lever right now."** This is the pilot's central finding (§1.3). `ASM-0009` used `WATCH` rather than `STOP` specifically to avoid the misreading, but the fact that a workaround was needed means the framework itself should state this distinction explicitly rather than relying on each assessor's `next_action` prose to carry it.

No tooling defect was found in WU014's implementation — `tools/validate-research.js`, `tools/analyze-research.js`, and `tools/test-analytical-foundation.js` all behaved correctly against real pilot data on the first pass; the issues above are framework-semantic, not implementation bugs.

---

## FRAMEWORK DECISION: MODIFY

### Rationale

All three pilot ASMs materially improved decision clarity over the existing `PRB-*`/`EVD-*` notes alone (§1), the schema was expressive enough to represent every substantive judgement honestly without forcing false precision (nothing was marked `SUFFICIENT`/`PASS`/`HIGH` merely to fill a field — see the many genuine `UNKNOWN`/`PARTIAL`/`NOT_ASSESSED` values across all three ASMs), metadata cost was proportionate (23/103 EVD, bounded to the pilot scope), and the analyzer added real deterministic value (§2). This clears the bar for `ADOPT`.

However, five concrete, nameable semantic ambiguities (§3) surfaced during the pilot that would let different assessors reach inconsistent conclusions from materially similar evidence once `ASM-Lite` rolls out to the remaining six `PRB-*` records in `WU-D3-04` without a single project owner cross-checking every one. None of them required a schema redesign or invalidated the framework's core value, and per the handoff's guidance a trivial correctness fix was in-scope for this WU — but these five are semantic clarifications, not bugs, so per the handoff they are named here rather than silently resolved.

### Required modifications before `WU-D3-04` rollout

1. Clarify `analysis.contribution.CONTRADICTS`: define explicitly whether it targets the problem's validity or a narrower prior claim/framing, with an example of each in `docs/discovery/d3-execution-protocol.md` §4.
2. Either add a `contribution` value distinguishing a planned-but-undelivered response from a delivered one, or explicitly document that `EXISTING-SOLUTION` covers both and that `remaining_gap` is where the delivered/planned distinction must be captured instead.
3. Add one sentence to the `evidence_confidence.contradiction_status` definition stating whether `HIGH`/`LOW` measures contradiction present or confidence in the contradiction call.
4. Consider whether `decision_gates.*` needs a `PARTIAL` (or `MIXED`) value distinct from `UNKNOWN`, or explicitly document that `UNKNOWN` covers both "no evidence" and "mixed evidence" and gate consumers must read the linked `evidence_confidence`/`civic_importance` sub-fields to tell them apart.
5. Add an explicit sentence to the `triage` definition: `STOP`/`WATCH` describe Évora Digital's software-intervention posture, never a judgement that the underlying civic problem is unimportant — civic importance is carried separately in `civic_importance`/`decision_gates.civic_importance`, and a low-`digital_causality`, high-`civic_importance` problem is the paradigm case this distinction exists for.

None of these five require re-deriving the three pilot ASMs; they are documentation/definition clarifications for `docs/discovery/d3-execution-protocol.md` and `docs/models/assessment-model.md`, to be applied before or during `WU-D3-04`, not a `WU016`-blocking redesign. `WU-D3-03` (structural decisions) and `WU-D3-04` (remaining assessments) may proceed once these five clarifications are made; they do not require new tooling.

---

## Analyzer validation

```text
node tools/analyze-research.js --problem PRB-0002
node tools/analyze-research.js --problem PRB-0007
node tools/analyze-research.js --problem PRB-0009
node tools/analyze-research.js --all
node tools/analyze-research.js --gaps
```

All five ran cleanly. Representative output is quoted in §1/§2 above rather than dumped in full. `--all` correctly lists `current_asm`/`triage` for the three pilot problems and `no`/`—` for the other six; `--gaps` correctly stopped reporting missing-ASM/missing-analysis gaps for the three pilot problems while continuing to report them, unchanged, for the other six.

## Tests and validation

```text
node tools/test-analytical-foundation.js   → 19/19 passed
node tools/validate-research.js            → Validated 196 record(s): OK.
node tools/analyze-research.js --all       → passed (see above)
node tools/analyze-research.js --gaps      → passed (see above)
aiqt status --json                         → M003/WU015 state valid
```

No additional targeted tests were added in this WU — the existing WU014 test suite already exercises the exact contract shapes used by the three pilot ASMs, and no tooling defect was found that would require a new regression test.

## Research-count result

```text
81 SRC
103 EVD
9 PRB
0 HYP
3 ASM
196 total canonical records (193 + 3 new ASM)
```

No new `SRC-*`/`EVD-*`/`PRB-*`/`HYP-*` records. No `PRB-*.validation_status` changed (`PRB-0002`, `PRB-0007`, `PRB-0009` remain `unvalidated`, confirmed by re-running `node tools/validate-research.js` and inspecting all nine `PRB-*.validation_status` values after this WU).

## Confirmation

- New `PRB-*`/`HYP-*` created: **NO**
- `PRB-0002`/`PRB-0007`/`PRB-0009` structurally split/merged: **NO** — `ASM-0002.structure_action: SPLIT_CANDIDATE` is a proposal for `WU-D3-03`, not an executed split
- Any `PRB-*.validation_status` changed: **NO**
- `ASM-*` created for any PRB other than the three pilot problems: **NO**
- EVD annotated outside the three pilot problems' linked-evidence sets: **NO**
- New external research performed: **NO**
- Tooling defects found in WU014: **NO**
- `WU-D3-03`/`WU016` started: **NO**

## Next

`WU016` (`WU-D3-03` — Problem Taxonomy & Blind-Spot Decisions) remains `planned`, blocked on this `WU015` closing, and is not started by this WU even though the framework decision is `MODIFY` rather than a blocking `REJECT`. The five named clarifications in §4 should be applied to `docs/discovery/d3-execution-protocol.md`/`docs/models/assessment-model.md` before or during `WU-D3-04`'s remaining-problem rollout; they do not block `WU-D3-03`'s structural decisions, which can proceed using `ASM-0002`'s `SPLIT_CANDIDATE` finding as-is.
