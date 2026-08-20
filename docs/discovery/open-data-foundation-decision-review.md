# Open Civic Data Foundation — First Decision Review

**Type:** Transversal Open Data Foundation decision review — not an AIQT milestone or work unit  
**As of:** 2026-08-20  
**Scope:** Completed read-only investigation round; records the next decision state only. It does not authorize contact, implementation, a civic intervention, D6 work, or a new Work Unit.

## 1. Decision and architecture posture

The preferred working posture remains **federation/discovery before replication**:

```text
official source → discover → document → record authority/freshness/reuse
→ link or expose the official interface → normalize/federate only where demonstrated value remains
```

This review does not assume that Open Évora should host an open-data portal, copy authoritative datasets, or build an API. Possible later outcomes remain discovery/documentation, federation, interoperability, selective normalization, publication/API exposure where justified, or no additional infrastructure.

This review supersedes the **candidate-specific timing** in `open-data-foundation-d5-provider-validation-plan.md` for TPAC and GEOCIMAC: both are now `P1` targeted institutional-contact candidates. It does not alter its D5/WU022 protections for TREVO, DAM, APCE, or parking/operational-mobility leads.

## 2. Candidate registry and decision state

`publicly_accessible`, `machine_readable`, and `reuse_rights` are deliberately independent. `PARTIAL` means only the stated surface is established; it is not a claim about every dataset or layer.

| Candidate | Publicly accessible | Machine readable | Reuse rights | Reuse readiness | Evaluation readiness / potential | Priority | Decision state | Timing / next bounded action |
|---|---|---|---|---|---|---|---|---|
| TPAC GTFS | `PARTIAL` — public TPAC journey information is accessible; public access to the GTFS feed/file itself is `UNKNOWN` | `CONFIRMED` for existence of a GTFS representation; public machine-readable access to it is `UNKNOWN` | `UNKNOWN` — no published reuse licence found | `MEDIUM` | `MEDIUM` for GTFS alone; history/version availability and realtime/actual-performance data `UNKNOWN` | `P1` | `NEEDS_CONTACT` | Targeted CIMAC / Autoridade de Transportes clarification. Do not treat GTFS-Realtime as confirmed. |
| GEOCIMAC / GeoPortal Alentejo Central | `CONFIRMED` — public ArcGIS Portal REST surface reachable | `PARTIAL` — current Portal REST surface confirmed; historical WMS/WFS capability confirmed, current WMS/WFS availability and layer-level access `UNKNOWN` | `UNKNOWN` — programme objectives are not a blanket licence | `MEDIUM` (technically promising) | `UNASSESSED` dataset-by-dataset; potential `HIGH` | `P1` | `NEEDS_CONTACT` | Targeted CIMAC / GEOCIMAC clarification of relevant service/layer metadata and terms. Do not infer that all layers are public, downloadable, queryable unauthenticated, or reusable. |
| Agenda Municipal de Évora | `CONFIRMED` — public event pages and submission surface | `PARTIAL` — WordPress REST surface confirmed; a supported event-collection endpoint/feed `UNKNOWN` | `UNKNOWN` — no published event-metadata reuse licence found; factual metadata, editorial text, and images/posters may have different rights | `MEDIUM` | `UNASSESSED`; potential `MEDIUM-HIGH` | `P2` | `NEEDS_CONTACT` | Defer CME clarification until the active CME D5 routes stabilise. A missing visible field on one inspected event page is not evidence that accessibility is never published. |
| Évora 2027 programme | `CONFIRMED` — current public programme surface | `UNKNOWN` until the production programme surface is published | `UNKNOWN` | `UNASSESSED` | `UNASSESSED` | `deferred` | `WATCH` | Reassess after publication of the official 2027 programme/final programme surface; do not conclude that an API or feed is absent before then. |

**Hold / do not expand:** APCE accessibility data remains `WAIT` for permission clarification; TREVO remains on the active D5 route; parking and operational-mobility data remain on the active CME/DAM D5 route. Housing, university accommodation, employment/skills, occurrence-management, environmental/waste, and other candidate families remain backlog pending institutional feedback from this decision cycle.

### Public references already present in the repository

- TPAC GTFS: [`SRC-0019`](../../research/sources/SRC-0019.yaml) — [CIMAC annual transport-contract evaluation](https://www.cimac.pt/?listas_ficheiros=relatorio-avaliacao-anual-do-contrato-do-servico-publico-de-transporte-de-passageiros-do-alentejo-central); [`SRC-0020`](../../research/sources/SRC-0020.yaml) — [TPAC public journey-information site](https://www.tpac.pt/).
- GEOCIMAC: [`SRC-0007`](../../research/sources/SRC-0007.yaml) — [CIMAC GEOCIMAC](https://www.cimac.pt/geocimac/).
- Agenda Municipal: [`SRC-0048`](../../research/sources/SRC-0048.yaml) — [Agenda do Município de Évora](https://www.cm-evora.pt/agenda-do-municipio-de-evora/).
- Évora 2027: [`SRC-0044`](../../research/sources/SRC-0044.yaml) — [programação](https://www.evora2027.com/programacao).

These links preserve provenance to the existing canonical source registry; this decision review creates no duplicate `SRC-*` or `EVD-*` records.

### Supporting review references (non-canonical)

These primary official links support detailed findings in this planning review where the cited canonical record does not fully carry the technical observation. They are **not** being promoted into the canonical research corpus at this stage. Canonicalization remains governed by the existing research methodology if later required for Civic Problem Intelligence or governed Open Civic Data Foundation implementation.

- TPAC GTFS / Google Maps confirmation: [CIMAC annual transport-contract evaluation](https://www.cimac.pt/?listas_ficheiros=relatorio-avaliacao-anual-do-contrato-do-servico-publico-de-transporte-de-passageiros-do-alentejo-central) (the official report confirming the GTFS conversion and Google Maps availability).
- GEOCIMAC current infrastructure: [GEOCIMAC](https://www.cimac.pt/geocimac/) (current CIMAC description of ArcGIS Enterprise / Portal for ArcGIS and related geographic-information operations).
- Historical IDE-CIMAC WMS/WFS: [CIMAC cartography and geographic-information systems](https://www.cimac.pt/cimac/info-a-tratar/unidade-de-ambiente-e-desenvolvimento/cartografia-e-sistemas-de-informacao-geografica/) (historical service-capability context; it does not establish current layer availability).
- Agenda submission and public technical surface: [Agenda do Município de Évora](https://www.cm-evora.pt/agenda-do-municipio-de-evora/) and the observed [municipal WordPress REST root](https://www.cm-evora.pt/wp-json/) (structured submission/public surface and generic REST availability; neither establishes a supported event feed).
- Évora 2027 watch trigger: [Évora 2027 programação](https://www.evora2027.com/programacao) (current programme surface; reassess when the official final 2027 programme surface is published).

## 3. Readiness framework

### Reuse readiness

Assess separately: provenance, authority, access, licence/reuse rights, freshness, stable identifiers, schema/interoperability, and documentation. A reachable interface or structured backend is not enough to conclude that an asset is open or reusable.

### Evaluation readiness

Assess separately: historical baseline, temporal depth, granularity, coverage, exclusions, identifiers over time, update lag, and relevant outcome variables. An asset can be reuse-ready yet not evaluation-ready, or evaluation-useful under a governed arrangement yet not publicly reusable.

This applies the existing source model without adding new canonical schema fields; see `docs/models/data-source-model.md` and the roadmap's D6 evaluation-data rule.

## 4. H-ODF-01 — working foundation hypothesis

**H-ODF-01:** Some public-data assets relevant to Évora may already exist in technically mature systems but present friction in discoverability, documentation, interoperable access and/or clarity of reuse rights.

This is a **strategic Open Civic Data Foundation working hypothesis**, recorded in this planning review rather than as a canonical `HYP-*`. It is not a Civic Problem Intelligence `PRB-*`: the present evidence does not establish affected-user prevalence, impact, demand, or citywide scale. Recurrence across candidate systems is a reason for bounded data-foundation clarification, not proof of an independent civic problem.

## 5. Boundaries and next state

- No Open Civic Data Foundation-specific institutional contact has been initiated or drafted by this review. Existing D5 outreach is unchanged. P1 means the next appropriate action once authorized, not that outreach has begun.
- No `SRC-*`, `EVD-*`, `HYP-*`, `PRB-*`, or `ASM-*` record changed. No new canonical research records were created. This planning review relies on existing canonical sources plus supporting review evidence where needed.
- No `.aiqt/state.json` change and no Work Unit was created, opened, advanced, or modified. `WU022` remains the sole active D5 Work Unit; D6 remains unstarted.
- Stop this investigation round. Do not deep-dive additional candidate families before institutional feedback changes a named discovery/federation/normalization decision.
