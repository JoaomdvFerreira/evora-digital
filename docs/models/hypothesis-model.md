# Solution Hypothesis Model

**Identifier prefix:** `HYP-`

## Purpose

A hypothesis describes a possible intervention separately from the problem.

This prevents the first proposed solution from biasing subsequent research.

## Draft schema

```yaml
hypothesis_id: HYP-0001

problem: PRB-0001

hypothesis: ""

mechanism: ""

expected_outcome: ""

assumptions: []

dependencies: []

risks: []

validation:
  status: untested | testing | supported | rejected
  evidence: []

notes: ""
```

## Rule

No solution hypothesis should be treated as a project commitment.

A hypothesis becomes eligible for experimentation only after the linked problem has sufficient evidence and its root cause and existing solutions have been investigated.
