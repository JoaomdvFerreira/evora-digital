# Data Source Model

**Identifier prefix:** `SRC-`

## Purpose

The Data Source Registry tracks information that may support research, public data reuse, or both.

It deliberately separates public access from reuse rights.

## Draft schema

```yaml
source_id: SRC-0001

publisher: ""
name: ""

scope:
  geography: municipality
  domains: []

source_type:
  api | dataset | gis | web | document |
  database | feed | unknown

access:
  public: true
  machine_readable: unknown
  method: ""

authority:
  authoritative | verified-third-party |
  community | derived | estimated | unknown

licensing:
  status: known | unknown | restricted
  licence: null
  attribution: null

freshness:
  update_frequency: unknown
  last_source_update: null
  last_checked: ""
  status: CURRENT | STALE | UNKNOWN | UNAVAILABLE

canonical_source: true

api_candidate:
  potential: unknown

notes: ""
```

## Authority model

| Code | Meaning |
|---|---|
| A1 | Authoritative — public body or canonical operator |
| A2 | Verified — independent data verified against reliable evidence |
| A3 | Community — community contributed |
| A4 | Derived — calculated from known sources |
| A5 | Estimated — inferred or modelled |
| A0 | Unknown |

## Core rules

### Public does not mean reusable

A source may be publicly accessible while its reuse status remains unknown.

### Freshness is first-class

Data consumers should eventually be able to determine:

- source update time;
- retrieval time;
- verification time;
- expected refresh;
- freshness status.

### Federation before replication

Where useful authoritative services already exist, prefer discovery, federation, standardization, or normalization over unnecessary copying into a new central datastore.

### Reuse readiness vs evaluation readiness

Assessing a source covers two distinct questions, reconciled programme-wide during D4–D9 roadmap canonicalization (`docs/discovery/roadmap.md`, "Transversal Open Data Foundation Track"):

**Reuse readiness** — the fields already in this schema: provenance (`publisher`, `authority`), `licensing`, `freshness`, stable identifiers, schema/interoperability, `access` mechanism.

**Evaluation readiness** — a separate, D6-facing question: does the source have enough baseline/history, time depth, granularity, coverage (and known exclusions), stable identifiers *across time*, acceptable measurement lag, usable outcome variables, and intervention/exposure observability to support crediting an intervention with an outcome change? A source can be `reuse_ready: yes` and `evaluation_ready: no` at the same time — technical/legal reusability does not imply usefulness for outcome evaluation.

This is a conceptual distinction for assessment and documentation, not a new schema field — no `reuse_ready`/`evaluation_ready` properties are added to the draft schema above by this reconciliation.
