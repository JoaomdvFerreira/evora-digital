# Open Data Foundation — D5 Current-State Reconciliation & Validation Queue

**Type:** Transversal Research Support review — not an AIQT milestone or work unit
**As of:** 2026-08-13
**Method:** Current canonical structured `SRC-*` records were reviewed with their linked problem/assessment context, D4 handoff, active D5/WU022 material, RS-01 and RS-02. No external research, contact, schema change, or canonical-record change was performed.

## 1. Current Open Data Foundation state

The canonical track is D0 source governance, D1 discovery/catalogue, D2 observed gaps, D3 taxonomy refinement, D4 interface/dataset gap analysis, D5 provider/consumer validation, then D6 infrastructure tractability. It remains transversal to the Discovery programme; it does not create an ODF work-unit hierarchy.

The source model keeps public access, authority, licence, freshness and access mechanism separate. Its D6-facing distinction also remains intact: reuse readiness does not establish evaluation readiness. The Évora Open API is an **infrastructure hypothesis**, not an approved product.

### What D0–D4 already established

- D0 established the source contract, provenance/freshness discipline, and federation-before-replication rule.
- D1 found authoritative municipal/regional GIS, transport-information and sensor/interface leads, but generally not self-service reuse contracts.
- D2/D3 separated the passenger-information civic problem (`PRB-0002`) from the still-unproven developer/interoperability lead; no separate technical problem was created.
- D4 retained a narrow parking data-legibility residual (`PRB-0005`, `PARTIAL`) and a narrow waste service-data residual (`PRB-0009`, `PARTIAL`). It expressly ruled out assuming an app, dashboard or API has value. The TPAC/TREVO GTFS/API/reuse question remains a transversal lead.
- RS-01/RS-02 exhausted the bounded public-research angles that could change these questions. The next value is principally an existing institutional route or, later, an affected journey — not another discovery batch.

## 2. Reviewed leads and readiness observations

This review covered **10 meaningful asset/lead groups**. It is an assessment of existing evidence, not a duplicate catalogue.

| Lead (canonical source) | Reuse observations from current evidence | Evaluation observations from current evidence | Disposition |
|---|---|---|---|
| Municipal geographic portal (`SRC-0006`) | Authoritative, public and current; layer-level WMS/WFS/API, licence, identifiers and update mechanism are unknown. The portal uses CIMAC infrastructure. | No demonstrated history, layer coverage/exclusions or temporal identifiers. | `PROVIDER_VALIDATION` |
| CIMAC/GEOCIMAC GIS (`SRC-0007`) | Authoritative, public, current and machine-readable through WMS/WFS; normalized regional GIS exists. Catalogue metadata, layer freshness, licence and stable layer/feature contracts are not established. | Dataset-specific time depth, granularity, coverage/exclusions and historic identifiers are unknown. | `PROVIDER_VALIDATION` |
| TPAC GTFS lead (`SRC-0019`, public interface `SRC-0020`) | Authoritative report establishes a 2025 GTFS conversion and Google Maps availability. It does not establish a downloadable official feed, licence, versioning, identifiers or update process. | Network/schedule observations could be repeatably collected only if a stable versioned feed exists; history, change log and disruption/actual-performance data are unestablished. | `PROVIDER_VALIDATION` |
| TREVO passenger-information interface (`SRC-0021`) | Public journey/schedule/realtime surface exists, but machine-readable access, reuse terms, freshness contract and identifiers are unknown; internal structured data must not be presumed reusable. | A public interface alone does not establish retained history, stop/vehicle granularity, delay measurement, or repeatable collection. | `PROVIDER_VALIDATION` |
| Current cycling topology/cartography (`SRC-0103`, `SRC-0104`, `SRC-0105`; portal `SRC-0006`) | Official cartography exists and SHP-capable request transfer is documented, but the mapped base is 2020; request-based transfer is not open data. Current operating-layer availability, licence and update/version mechanism are unknown. | The 2020 base plus intervening works cannot support a current baseline. Current topology, exclusions and stable segment IDs across changes are unknown. | `PROVIDER_VALIDATION` |
| Parking/traffic sensor lead (`SRC-0023`) | Authoritative historic installation is evidenced (75 parking, 10 traffic sensors), but 2026 operation, data quality, access, licence, identifiers and feed/update mechanism are unknown. | No evidenced history, occupancy measurement definition/lag, coverage/exclusions, sensor continuity or repeatable collection; it is not evaluation-ready. | `PROVIDER_AND_CONSUMER` |
| Accessibility/barrier inventory lead (`SRC-0016`, `SRC-0103`) | R.A.M.P.A./accessibility-inventory existence is evidenced, but a current shareable structured inventory, licence, granularity and custodian are not. | Location-level baseline/history, corrected-versus-open status, consistent barrier taxonomy and repeatable audit are materially unknown. | `PROVIDER_VALIDATION` |
| Municipal occurrence-management interface (`SRC-0057`) | Authoritative, public and current reporting/follow-up surface; no public resolution-time, backlog or routing-quality dataset, reuse contract or export/feed is evidenced. | A service interface does not establish outcome data: history, case-status definitions, exclusions, lag and repeatable non-personal collection are unknown. | `NOT_MATERIAL_NOW` |
| Municipal events/accessibility submission surface (`SRC-0048`) | Authoritative, public, current structured inputs; no public dataset/feed/API, licence, identifiers or update contract is shown. | No current civic-research/evaluation decision needs its history, coverage or stable event identifiers. | `NOT_MATERIAL_NOW` |
| Gesamb service-quality reporting (`SRC-0063`) | Authoritative, public and current formal report with selected aggregate service/complaint measures; it is a document, not an established reusable feed or dataset. | Some annual indicators exist, but current evidence does not establish sufficiently granular, timely, linked operational history or exposure data for intervention evaluation. | `READY_ENOUGH` |

`READY_ENOUGH` here means adequate as a documentary/reference source for the present stage, not reusable or evaluation-ready. `NOT_MATERIAL_NOW` means the unknown has no supported current decision or active civic-research need; it is not a finding that data should never be published.

## 3. Relationship to active problems and D5 routes

- `PRB-0002` materially relates to TPAC/TREVO information. Its unresolved developer-data question remains an Open Data Foundation lead, not a new civic problem; real passenger failure still requires the later `WU023` affected-journey route.
- `PRB-0004` materially relates to current cycling topology; `ASM-0004` already routes the authoritative-current-layer question to DAM.
- `PRB-0005` materially relates to parking sensors. D4 found the residual information mechanism only `PARTIAL`: technical availability must not be mistaken for a material driver, operator or public-data need.
- `PRB-0003` has an accessibility-inventory currentness/granularity question, already in APCE's active route.
- `PRB-0009` relates to service-quality/occurrence data, but its dominant causes are operational and its core remains `WATCH`; the corpus does not support new D5 data outreach.

## 4. Deduplicated D5 validation queue

Only the following five questions are decision-relevant. The first three reuse active WU022 routes; they do **not** authorize another contact. The last two are held for the provider/consumer validation stage only when a concrete D6/D8 decision needs them.

| Asset / `SRC-*` | Unknown and why it matters | Validation role / likely entity | PRB/ASM and WU022 overlap | Stopping rule | Decision that could change |
|---|---|---|---|---|---|
| Urban TREVO structured service data — `SRC-0021` | Whether an official GTFS/GTFS-Realtime/API exists, its permitted reuse/versioning and how disruption changes propagate. This distinguishes operator-controlled passenger information from a viable federation input. | Provider — urban transport operator / concession authority | `PRB-0002`; reuse **D5-OP-001 Q3** (already sent). It does not duplicate TPAC GTFS. | Stop on a clear availability/licence/versioning answer or explicit absence/no-share position; do not seek another operator merely for confirmation. | Keep as no infrastructure; catalogue existing surface; later assess transport federation/normalization. |
| Current cycling operating layer — `SRC-0006`, `SRC-0103`, `SRC-0104`, `SRC-0105` | Whether DAM maintains an authoritative current topology distinct from planned/historic maps; available format, identifiers, update/version practice and permitted sharing. This is needed before treating cycling GIS as reusable or using it to characterize present gaps. | Provider — municipal mobility/GIS custodian | `PRB-0004` / `ASM-0004`; reuse **D5-OP-002 Q1–Q3**. | Stop when DAM supplies/routs to an authoritative current layer or confirms no maintained/shareable layer; do not ask for every metadata field. | Catalogue/request-based discovery; possible later normalization; or no data action. |
| Parking sensor/data materiality — `SRC-0023` | Whether the installed sensors are operational and reliable, what coverage/history/identifiers exist, how data is used, and whether absence of visibility is material to drivers/operators. Both factual availability and consumer materiality are needed because D4 found the gap only `PARTIAL`. | Both — municipal mobility/parking operator, then a bounded affected-driver/operational consumer route only if the operator confirms a live material data lead | `PRB-0005` / `ASM-0005`; reuse **D5-OP-002 Q4–Q7**. | Stop if DAM shows no live/reliable data or no material consumer need; only move to a consumer check when both remain plausible. | No additional infrastructure; catalogue; later assess targeted publication/normalization — not an assumed parking API. |
| Regional GIS discovery/reuse contract — `SRC-0007` (with municipal portal `SRC-0006`) | Whether a minimally usable catalogue can expose the relevant WMS/WFS layers with dataset metadata, licence/attribution, freshness and stable service/layer identifiers. This is a foundation-level question, not a request to build an API. | Provider — CIMAC/GEOCIMAC GIS steward | No forced `PRB-*`; deliberately outside the current WU022 problem-validation scope. | Stop on confirmation that existing metadata/services already meet a named reuse case, or that missing metadata cannot change a near-term catalogue/federation decision. | No action; catalogue/discovery; or later federation assessment. |
| TPAC official GTFS reuse contract — `SRC-0019`, `SRC-0020` | Whether the 2025 GTFS has an official downloadable endpoint, reuse licence, current/versioned feed and stable route/stop identifiers. Google Maps availability alone does not answer this. | Provider — CIMAC/ATAC transport-data steward | Related to the ODF lead adjacent to `PRB-0002`; outside **D5-OP-001**, which is TREVO urban service. | Stop on a definitive contract/endpoint answer or explicit non-public/non-reusable position; do not request API design. | Existing external discovery only; later transport federation/normalization assessment; or no action. |

There is no standalone consumer-validation question today. Parking is the only lead whose provider answer could expose a specific consumer-materiality decision; a consumer step is conditional, not a parallel outreach batch.

## 5. WU022 overlap and scope boundary

WU022 already contains the appropriate first-wave institutional paths for TREVO, DAM and APCE. This review neither changes route status nor expands questions: it only labels the data-reuse/evaluation implications of their existing stopping rules. The pending APCE follow-up remains the right route for current location-level barrier detail; it is not an open-data publication request.

CIMAC/GEOCIMAC and TPAC contract questions are deliberately not added to WU022. WU022 is validating active civic-problem assessments; the regional GIS and transport-reuse questions need a concrete catalogue/federation or research-consumer decision before a separate, bounded provider clarification is proportionate. `WU023` and `WU024` remain unchanged.

## 6. Open API hypothesis status

Nothing in the corpus justifies moving the Évora Open API beyond **hypothesis**. The strongest positive fact is existing authoritative GIS WMS/WFS; it points first to catalogue/discovery and possibly later federation, not a new central API. Transport, cycling, parking, accessibility and municipal-service leads all retain decision-critical uncertainty about ownership, licensing, currentness, stable contracts and/or consumer materiality. None is currently evaluation-ready merely because a web interface, PDF, sensor installation or structured backend exists.

## 7. Stopping decision and next bounded action

**Decision: stop this reconciliation.** Do not initiate provider/consumer outreach from it, create records, or open a new research batch. Let the existing D5-OP-001/002/003 responses and their stated stopping rules resolve the overlapping questions. When those responses are available or exhausted, perform one bounded **ODF D5 response-to-decision synthesis**: reassess only the five queue items, decide whether a named catalogue/federation/normalization decision actually remains, and preserve `no additional infrastructure` where it does not.

Important deliberately unpursued gaps: licences, APIs and update frequencies for all other public interfaces; municipal occurrence-performance data while `PRB-0009` is `WATCH`; event-feed questions without a civic-research consumer; and any adoption/app/API question. They currently cannot materially change a supported decision.

## 8. Integrity check

- Review based on current structured `SRC-*` records: confirmed.
- Canonical baseline / research schemas / `research/**` records: unchanged.
- `.aiqt/state.json`: unchanged.
- WU022/WU023/WU024 documentation: unchanged.
