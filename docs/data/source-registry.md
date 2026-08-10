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
| SRC-0010 | Universidade de Évora, Plano de Atividades 2025 | Both | Students, research, talent, services and potential data consumers |
| SRC-0011 | NERE | Stakeholders | Business and regional economic perspective; detailed business-needs evidence still needs targeted research |
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
| SRC-0026 | 4th Revision of the Évora Urbanisation Plan — Experimental Mobility Actions 2026 | Problem Intelligence | Current (2026) participatory pedestrian/soft-mobility route testing |
| SRC-0027 | Municipality Service Ownership / Mobility Contacts | Stakeholders | DAM/DORU ownership and contact paths for mobility/urban-planning questions |
| SRC-0028 | Plano de Ação do PDS 2025 | Problem Intelligence | Current housing/social-support interventions (rehabilitation, controlled-cost, student housing) |
| SRC-0029 | PUE Sector Report: Habitação e Mercado Imobiliário | Problem Intelligence | Housing stock/market diagnosis; student-residence capacity; freshness caution (Census 2021-era base) |
| SRC-0030 | Plano Concelhio dos Cuidadores Informais de Évora | Problem Intelligence | Informal-caregiver information/support needs; 2025 local study |
| SRC-0031 | CLASE / Rede Social | Stakeholders | Interinstitutional social-support network (~120 institutions) |
| SRC-0032 | UÉ admission results 2025 | Problem Intelligence | 2025 first-phase admission fill rate; attraction vs. retention distinction |
| SRC-0033 | Município de Évora — Desenvolvimento Económico | Problem Intelligence | Business growth/investment-attraction strategy since 2013 |
| SRC-0034 | Áreas de Acolhimento Empresarial / Parque de Indústria Aeronáutica de Évora | Problem Intelligence | Established business/innovation locations and aerospace infrastructure |

## Verified in WU-D1-03 (Batch A)

`SRC-0002` was enriched with housing/social/health domains and findings (`HOU`, `HEA` added to scope). `SRC-0028`–`SRC-0031` were added as new canonical sources. See `docs/milestones/D1-WU03-progress.md` for the integration summary.

## Verified in WU-D1-04 (Batch A)

`SRC-0002` and `SRC-0028` were further enriched with economy/employment/education domains and findings (`EMP`, `ECO`, `EDU` added to `SRC-0002`; `EMP` added to `SRC-0028`). `SRC-0010` and `SRC-0011` (previously seed-only rows) were canonicalized, and `SRC-0032`–`SRC-0034` were added as new canonical sources. See `docs/milestones/D1-WU04-progress.md` for the integration summary.

## Verified in WU-D1-02 (Batch A + Batch B + Batch C)

`SRC-0002`, `SRC-0003`, `SRC-0006`, `SRC-0007`, `SRC-0016`, `SRC-0017`, `SRC-0018`, `SRC-0019` now have canonical structured records under `research/sources/`, verified against the institutional documents cited in WU-D1-02 Research Batch A; `SRC-0006`, `SRC-0007`, `SRC-0016`, `SRC-0019` were further enriched, and `SRC-0020`–`SRC-0025` were added, in Batch B; `SRC-0018`, `SRC-0019`, `SRC-0007`, `SRC-0021` were enriched with current (2025/2026) operational figures and ownership contacts, and `SRC-0026`–`SRC-0027` were added, in Batch C. See `docs/milestones/D1-WU02-progress.md` for the integration summary and `docs/discovery/d1-recording-protocol.md` for the record format. This table remains a human-readable catalogue; detailed fields (licensing, freshness, authority, API candidacy) live only in the structured `SRC-*` records to avoid duplication.

## Institutional stakeholder / data-owner map (WU-D1-02 Batch C)

For later targeted validation or data clarification, not automatic outreach. See `SRC-0027`, `SRC-0007`, `SRC-0019`, `SRC-0021`, and `EVD-000030`.

| Area | Primary owner/operator | Why relevant | Contact path |
|---|---|---|---|
| Urban bus operation / TREVO | E-BUS, S.A. / TREVO | routes, realtime, operational data, passenger info | `geral@trevo.com.pt`, 266 106 923 |
| Municipal urban transport authority | Município de Évora / DAM | concession oversight, urban mobility, parking | `cme.dam@cm-evora.pt`, +351 266 777 154 |
| Urban planning / PUE / requalification | Município de Évora / DORU | pedestrian network, physical interventions, PUE | `cme.doru@cm-evora.pt`, +351 266 777 027 |
| TPAC / flexible intermunicipal transport / GTFS | ATAC / CIMAC | GTFS, network planning, schedules, regional coverage | `a.transportes@cimac.pt` |
| Regional GIS / WMS / WFS / WebGIS | GEOCIMAC / CIMAC | service catalogue, metadata, reuse/freshness | `geral@cimac.pt`, +351 266 749 420 |
| Accessibility-plan underlying data | Municipality — exact custodian to confirm | R.A.M.P.A. dataset/obstacle inventory | route through DAM/DORU initially |
| Parking sensor data | Municipality — exact current custodian to confirm | LVpDÉ sensor status/API/history | route through DAM initially |

Rule: do not contact an owner merely to replace every `UNKNOWN` with a value. Contact should be justified by a later research or experiment need.

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
