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
