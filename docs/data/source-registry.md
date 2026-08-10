# Initial Source Registry

**Version:** 0.1  
**Status:** Seed registry for D1

This registry identifies initial high-priority source families. D1 must verify access methods, dates, licensing, canonical ownership, and machine-readability before treating them as reusable datasets.

| ID | Source | Primary Track | Initial reason |
|---|---|---|---|
| SRC-0001 | Plano Estratégico Évora 2030 | Problem Intelligence | Cross-domain strategic diagnosis |
| SRC-0002 | Plano de Desenvolvimento Social 2024–2027 | Problem Intelligence | Social needs, responses and stakeholders |
| SRC-0003 | Plano de Urbanização de Évora / 2026 revision material | Both | Territory, housing, mobility, participation |
| SRC-0004 | Município de Évora — public meetings, agendas and minutes | Problem Intelligence | Recurring formal civic issues and decisions |
| SRC-0005 | Município de Évora — annual plan/budget and strategic execution material | Problem Intelligence | Priorities, interventions and investment |
| SRC-0006 | Município de Évora — Portal Geográfico | Open Data | Territorial/geographic information |
| SRC-0007 | CIMAC / regional spatial-data infrastructure | Open Data | Intermunicipal normalized geospatial data |
| SRC-0008 | dados.gov.pt | Open Data | National public-data discovery/catalogue |
| SRC-0009 | PORDATA Municípios | Both | Municipal indicators and statistical context |
| SRC-0010 | Universidade de Évora | Both | Students, research, talent, services and potential data consumers |
| SRC-0011 | NERE | Stakeholders | Business and regional economic perspective |
| SRC-0012 | Juntas de Freguesia do concelho | Problem Intelligence | Hyperlocal issues and formal local signals |
| SRC-0013 | Évora 2027 | Both | Culture/events ecosystem and public programming |
| SRC-0014 | Social-sector / Rede Social organisations | Problem Intelligence | Social support, care, coordination |
| SRC-0015 | Local and regional transport operators/planning sources | Both | Mobility services, schedules, routes, gaps |
| SRC-0016 | Plano de Mobilidade Urbana Sustentável de Évora — Volume II (final plan) | Problem Intelligence | Strategic mobility plan: pedestrian/accessibility, parking, PT, cycling, intermodality |
| SRC-0017 | PUE Sector Report: Mobilidade | Problem Intelligence | Operational mobility diagnosis feeding the 2026 PUE |
| SRC-0018 | Relatório Anual de Atividade da Autoridade de Transportes — Município de Évora 2026 | Problem Intelligence | Current urban bus network operational evidence |
| SRC-0019 | Avaliação Anual do Contrato de Serviço Público de Transporte de Passageiros do Alentejo Central | Both | Intermunicipal (TPAC) operational evidence; confirms GTFS conversion in 2025 |
| SRC-0020 | TPAC public journey-information website (tpac.pt) | Both | Passenger-facing journey/schedule information; GTFS download/API not located |
| SRC-0021 | TREVO public transport website | Both | Urban Évora passenger info with real-time updates; developer interface unresolved |
| SRC-0022 | Évora Mobilidade / paid-parking service | Problem Intelligence | Existing digital parking-payment service (also Via Verde Estacionar) |
| SRC-0023 | LVpDÉ parking/traffic sensor infrastructure | Open Data | 75 parking + 10 vehicle-count sensors deployed; current status/public feed unresolved |
| SRC-0024 | Current PMUSE implementation / pedestrian-cycling works | Problem Intelligence | Active 2025 works adding ~6 km pedestrian/cycling routes |
| SRC-0025 | Rossio de S. Brás 2026 requalification programme | Problem Intelligence | Active multi-phase 2026 requalification of the Rossio/Station area |

## Verified in WU-D1-02 (Batch A + Batch B)

`SRC-0002`, `SRC-0003`, `SRC-0006`, `SRC-0007`, `SRC-0016`, `SRC-0017`, `SRC-0018`, `SRC-0019` now have canonical structured records under `research/sources/`, verified against the institutional documents cited in WU-D1-02 Research Batch A; `SRC-0006`, `SRC-0007`, `SRC-0016`, `SRC-0019` were further enriched, and `SRC-0020`–`SRC-0025` were added, in Batch B. See `docs/milestones/D1-WU02-progress.md` for the integration summary and `docs/discovery/d1-recording-protocol.md` for the record format. This table remains a human-readable catalogue; detailed fields (licensing, freshness, authority, API candidacy) live only in the structured `SRC-*` records to avoid duplication.

## D1 enrichment fields

Each source should progressively acquire:

- canonical URL/reference;
- publisher/owner;
- geographic scope;
- domain coverage;
- source type;
- public access status;
- machine-readable status;
- API/feed availability;
- licence/reuse status;
- attribution requirement;
- update frequency;
- last source update;
- last checked;
- authority classification;
- candidate datasets;
- research relevance;
- API/interoperability potential.

## Rule

Presence in this registry means “investigate this source”.

It does **not** mean that the source has been approved for republication through any future Évora Digital data service.
