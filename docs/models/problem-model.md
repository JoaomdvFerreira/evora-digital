# Problem Model

**Identifier prefix:** `PRB-`

## Purpose

Problem records consolidate multiple evidence items describing the same underlying civic friction.

Solutions must not be embedded in the problem statement.

## Draft schema

```yaml
problem_id: PRB-0001

title: ""

domain: ""

geography:
  level: municipality
  area: ""

affected_populations: []

problem_statement: ""

current_journey: null

reported_consequences: []

possible_root_causes: []

evidence: []

evidence_status:
  discovered | corroborated

validation_status:
  unvalidated | partially_validated | validated

digital_tractability:
  not_assessed | low | medium | high

existing_solutions:
  not_assessed | assessed

status:
  OPEN | REJECTED | DUPLICATE | NON_DIGITAL |
  ALREADY_SOLVED | INSUFFICIENT_EVIDENCE
```

## Lifecycle

```text
DISCOVERED
    ↓
CORROBORATED
    ↓
VALIDATED
    ↓
ROOT_CAUSE_UNDERSTOOD
    ↓
TRACTABILITY_ASSESSED
    ↓
CANDIDATE
```

The lifecycle is analytical, not necessarily a strict automatic state machine.

## Problem-statement rule

Prefer:

> Residents in area X cannot reliably determine Y before starting journey Z.

Avoid:

> Évora needs an app for Y.

## Valid terminal outcomes

A problem may legitimately end as:

- `REJECTED`;
- `DUPLICATE`;
- `NON_DIGITAL`;
- `ALREADY_SOLVED`;
- `INSUFFICIENT_EVIDENCE`.

These outcomes prevent solutionism and wasted development.
