# Evidence Model

**Identifier prefix:** `EVD-`

## Purpose

Evidence records preserve individual observations and their provenance.

They do not represent validated city-wide facts by themselves.

## Draft schema

```yaml
evidence_id: EVD-000001

type:
  institutional | statistical | formal-public |
  social | press | stakeholder | observation

source:
  publisher: ""
  title: ""
  source_reference: ""
  published_at: null
  retrieved_at: ""

geography:
  level: city | parish | municipality | intermunicipal | regional
  area: ""

population: []

domain: []

observation:
  summary: ""

evidence_nature:
  fact | reported-experience | opinion |
  claim | measurement | recommendation

strength:
  primary-authoritative |
  primary-non-authoritative |
  secondary |
  anecdotal

personal_data:
  present: false
  retained: false

notes: ""
```

## Interpretation rules

`evidence_nature` and `strength` are separate dimensions.

Example:

A traveller can be a primary source for:

> I waited 45 minutes.

The same statement is not sufficient evidence for:

> Average waiting time is 45 minutes.

## Evidence is append-only conceptually

Corrections should preserve the fact that an earlier observation existed where practical, while marking it corrected, superseded, or invalidated rather than silently rewriting research history.
