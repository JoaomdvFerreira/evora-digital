# Problem Assessment Model (ASM-Lite)

**Identifier prefix:** `ASM-`

## Purpose

A Problem Assessment records what the project currently knows and does not know about one canonical `PRB-*`, and routes it to a decision (`STOP` / `WATCH` / `DEEPEN` / `PROCEED`) — without producing a global numeric score.

One active `ASM-*` is intended per canonical active `PRB-*`, created only after the D3 three-problem pilot's framework gate is `ADOPT` or an approved `MODIFY` (`docs/discovery/d3-execution-protocol.md` §8).

## Draft schema

```yaml
assessment_id: ASM-0001

problem: PRB-0001

as_of: "2026-08-11"

phase: D3

assessment_status: DRAFT | CURRENT | SUPERSEDED | ARCHIVED

evidence_confidence:
  overall: HIGH | MEDIUM | LOW | UNKNOWN | NOT_ASSESSED
  independence: HIGH | MEDIUM | LOW | UNKNOWN | NOT_ASSESSED
  coherence: HIGH | MEDIUM | LOW | UNKNOWN | NOT_ASSESSED
  adequacy: HIGH | MEDIUM | LOW | UNKNOWN | NOT_ASSESSED
  relevance: HIGH | MEDIUM | LOW | UNKNOWN | NOT_ASSESSED
  currentness: HIGH | MEDIUM | LOW | UNKNOWN | NOT_ASSESSED
  contradiction_status: HIGH | MEDIUM | LOW | UNKNOWN | NOT_ASSESSED
  stakeholder_validation: PENDING | PARTIAL | CHALLENGED | VALIDATED | NOT_APPLICABLE

civic_importance:
  reach: HIGH | MEDIUM | LOW | UNKNOWN | NOT_ASSESSED
  frequency: HIGH | MEDIUM | LOW | UNKNOWN | NOT_ASSESSED
  severity: HIGH | MEDIUM | LOW | UNKNOWN | NOT_ASSESSED
  persistence: HIGH | MEDIUM | LOW | UNKNOWN | NOT_ASSESSED
  equity: HIGH | MEDIUM | LOW | UNKNOWN | NOT_ASSESSED

journey_understanding: SUFFICIENT | PARTIAL | INSUFFICIENT | UNKNOWN | NOT_ASSESSED
causal_understanding: SUFFICIENT | PARTIAL | INSUFFICIENT | UNKNOWN | NOT_ASSESSED
existing_solution_understanding: SUFFICIENT | PARTIAL | INSUFFICIENT | UNKNOWN | NOT_ASSESSED
remaining_gap: SUFFICIENT | PARTIAL | INSUFFICIENT | UNKNOWN | NOT_ASSESSED
digital_leverage: not_assessed | low | medium | high

structure_action: KEEP | SPLIT_CANDIDATE | MERGE_CANDIDATE

decision_gates:
  problem_real: PASS | FAIL | UNKNOWN | NOT_ASSESSED
  civic_importance: PASS | FAIL | UNKNOWN | NOT_ASSESSED
  journey_understood: PASS | FAIL | UNKNOWN | NOT_ASSESSED
  root_cause_understood: PASS | FAIL | UNKNOWN | NOT_ASSESSED
  remaining_gap_supported: PASS | FAIL | UNKNOWN | NOT_ASSESSED
  digital_causality: PASS | FAIL | UNKNOWN | NOT_ASSESSED
  operability: PASS | FAIL | UNKNOWN | NOT_ASSESSED
  testability: PASS | FAIL | UNKNOWN | NOT_ASSESSED

critical_unknowns:
  U1:
    question: ""
    decision_impact: HIGH | MEDIUM | LOW
    target_phase: D3
    best_next_evidence: []

triage: STOP | WATCH | DEEPEN | PROCEED
next_action: ""
notes: ""
```

## Interpretation rules

`existing_solution_understanding` records how well the project understands the *current solution landscape* (what exists, who operates it, whether the target population knows it) — not whether that solution actually closes the gap. Whether it closes the gap belongs to `remaining_gap`. This field was renamed from an earlier draft's `existing_solution_coverage`, which conflated the two questions.

`digital_leverage` reuses `PRB.digital_tractability`'s established enum (`not_assessed | low | medium | high`) rather than introducing a second, competing tractability scale.

`critical_unknowns` is a dynamically-keyed map (`U1`, `U2`, ...), not a fixed-field object, because the number of unknowns varies per problem. A problem with no unresolved decision-critical unknowns (e.g. a clean `STOP`) may omit it or leave it empty.

`triage` and every `decision_gates.*`/`structure_action` value is a human/project-owner analytical judgement. No tooling may assign or infer these values automatically — see `docs/discovery/d3-execution-protocol.md` §6 for the deterministic-analyzer constraints this implies.

## Rule

An assessment is not a product decision. `structure_action` values (`SPLIT_CANDIDATE`/`MERGE_CANDIDATE`) are proposals for the dedicated D3 structural-decision work unit (`WU-D3-03`) to act on — they do not themselves rename, split, or merge any canonical `PRB-*`.
