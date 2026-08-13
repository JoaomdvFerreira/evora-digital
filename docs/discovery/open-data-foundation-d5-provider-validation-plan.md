# Open Data Foundation — D5 Provider Validation Plan

**Type:** Transversal Research Support plan — not an AIQT milestone or work unit
**As of:** 2026-08-13
**Basis:** `docs/discovery/open-data-foundation-d5-reconciliation.md`, current structured `SRC-*` records, D5/WU022 progress, and RS-01/RS-02. This plan does not authorize or draft outreach.

## 1. Purpose and scope

This plan turns the reconciliation's five decision-relevant provider leads into a small D5 queue. It preserves the reconciliation dispositions and the separation between Civic Problem Intelligence and Open Data Foundation: a data-contract answer can inform a future infrastructure decision, but does not itself validate a civic problem or justify an API.

Current timing is decisive. TREVO and DAM received WU022 first-wave messages on 2026-08-12 and are still `SENT` with no response. No additional contact should be made while those first responses are pending. CIMAC/GEOCIMAC and TPAC/ATAC have known provider paths, but no current named reuse consumer or infrastructure decision warrants separate contact.

## 2. Provider-validation queue

| Priority / timing | Lead and `SRC-*` | Likely provider / route | Exact bounded question | Decision-relevant unknown and acceptable result | Decision that could change | Stop / dependency |
|---|---|---|---|---|---|---|
| **A — `ASK_ON_EXISTING_REPLY`** | Urban TREVO structured service data — `SRC-0021` | TREVO/E-BUS; `EXISTING_ROUTE`: WU022 `D5-OP-001` Q3 | Does TREVO make an official GTFS, GTFS-Realtime, or other developer-readable service feed available; if so, what is the permitted reuse, current/versioned access point, and disruption-update practice? | Whether a usable external data contract exists. Accept a public endpoint/terms, a documented on-request contract, or an explicit no-share/no-feed answer. | `no infrastructure`; catalogue/link to the existing passenger surface; later assess transport federation/normalization. It cannot by itself approve an API. | Wait for the already-sent reply; do not send a second question. Follow up only if the reply confirms a feed but leaves access/reuse/versioning materially ambiguous. |
| **A — `ASK_ON_EXISTING_REPLY`** | Current municipal cycling operating layer — `SRC-0006`, `SRC-0103`, `SRC-0104`, `SRC-0105` | Município de Évora / DAM, routed to GIS custodian if needed; `EXISTING_ROUTE`: WU022 `D5-OP-002` Q1–Q3 | Is there a current authoritative operating cycling-network layer distinct from planned/historic cartography; if so, what format, update/version practice, stable identifiers and sharing/reuse conditions apply? | Whether current topology can be discovered, requested, directly reused or must remain a documentary map. Accept a layer/service or a clear statement that no maintained/shareable operational layer exists. | catalogue/request-based discovery; later normalization assessment; or `no infrastructure/action`. | Wait for DAM's first response. A qualified follow-up is justified only if DAM confirms the layer but cannot state its custodian, freshness or permitted use. |
| **A — `ASK_ON_EXISTING_REPLY`** | Parking/traffic sensor data — `SRC-0023` | Município de Évora / DAM, routed to parking/data custodian if needed; `EXISTING_ROUTE`: WU022 `D5-OP-002` Q4–Q7 | Are the 75 parking and 10 traffic sensors currently operational; what active coverage, history/retention, identifiers, quality controls and internal use exist; and does DAM judge occupancy visibility a material operator or user need? | Whether there is a live, reliable and materially useful data lead rather than only historic infrastructure. Accept an operational summary, an internal-use boundary, or a clear no-live-data/no-material-need answer. | `no infrastructure/action`; catalogue; later targeted publication/normalization assessment. It does not establish a parking API. | Wait for DAM's first response. Only ask a narrow data-contract follow-up if it confirms live data **and** a plausible materiality need. |
| **Deferred — `DEFER`** | Regional GIS discovery/reuse contract — `SRC-0007` with `SRC-0006` | CIMAC/GEOCIMAC GIS steward; `NEW_ODF_ROUTE` possible, but not ready | If a named municipal/regional reuse case survives, can the relevant existing WMS/WFS layers be discovered with service/layer identifiers, metadata, licence/attribution and layer-specific freshness? | Whether existing GIS is already sufficient for catalogue/discovery or warrants a later federation assessment. Accept current service metadata or a boundary that it cannot support the named use. | `no action`; catalogue/link/discovery; later federation. | Defer until a concrete cycling, territorial or other reuse decision remains after DAM's response. Do not contact merely to complete metadata. |
| **Deferred — `DEFER`** | TPAC official GTFS reuse contract — `SRC-0019`, `SRC-0020` | CIMAC/ATAC transport-data steward; `NEW_ODF_ROUTE` possible, but not ready | If transport federation becomes a named decision, is there an official downloadable GTFS with reuse terms, version/update process and stable route/stop identifiers? | Whether the Google Maps conversion also provides a reusable, versioned official feed. Accept an endpoint/terms, an on-request contract, or an explicit non-public/non-reusable boundary. | existing external discovery only; later transport federation/normalization; or `no action`. | Defer until TREVO's reply and a concrete regional transport reuse case show that the answer could change a decision. Do not ask for API design. |

## 3. Existing-route reuse

`D5-OP-001` is the sole appropriate first contact for TREVO. Its existing Q3 already asks about public GTFS/GTFS-Realtime/developer access and disruption propagation; an ODF answer is supplementary to, not a substitute for, its passenger-information validation.

`D5-OP-002` is the sole appropriate first contact for DAM. Its cycling Q1–Q3 and parking Q4–Q7 already cover the factual state necessary to decide whether either lead has an ODF follow-up. Do not append a broad licence/API questionnaire to the pending civic-problem thread. If its response establishes a live/shareable asset but leaves a narrow contract unknown, use one qualified follow-up through the same relationship or its explicit internal routing.

APCE remains `RESPONSE_RECEIVED` with a qualified coordinator follow-up pending. The accessibility-inventory lead is not added to this provider queue: its present follow-up is to resolve current civic barriers, not a supported catalogue/federation decision. It remains an ownership/readiness gap for a later D6 assessment.

## 4. New ODF-specific routes and deferred questions

No `NEW_OUTREACH_READY` route exists. CIMAC/GEOCIMAC and TPAC/ATAC are legitimate future ODF-specific contacts, but each is deferred because existing WU022 replies may narrow the decision and there is no current named consumer/reuse case. The reconciliation's `NOT_MATERIAL_NOW` leads (municipal occurrence-management and event-submission interfaces) remain excluded: their unknown export/API/licence fields cannot currently alter a decision. Gesamb service-quality reporting remains `READY_ENOUGH` as a documentary reference, not a new reusable/evaluation-data candidate.

## 5. Consumer-validation trigger

There is still no standalone consumer outreach. Parking remains conditional: open one bounded driver/operator consumer check only if DAM confirms (1) live, sufficiently reliable occupancy/traffic data with meaningful coverage/history and (2) an unresolved claim that visibility would materially affect a driver or operator decision. The check would ask only which decision currently lacks usable occupancy information and whether an existing channel already meets it. If either condition fails, stop at `no infrastructure/action` or catalogue-level documentation.

## 6. Decision map and execution order

1. Await and integrate the existing TREVO and DAM replies under their WU022 stopping rules; do not initiate ODF contact now.
2. If a reply establishes a real asset but leaves a single contract detail material, make one qualified existing-route follow-up.
3. Reassess the five leads together. Open either deferred CIMAC or TPAC route only if a named catalogue/federation/normalization decision and consumer now exist.
4. Select the smallest supported disposition: `no infrastructure/action`, catalogue/link/discovery, request-based/direct reuse, later federation, or later normalization. `API candidate` and `evaluation-data candidate` require further D6 evidence and are not outcomes of this plan alone.

## 7. Stopping condition

This D5 ODF validation activity stops when the pending TREVO and DAM routes are answered or exhausted and any qualified follow-up has produced a clear asset/contract boundary. Then make one response-to-decision synthesis across these five leads. If no named reuse consumer and no decision-changing uncertainty remains, record `no infrastructure/action` or catalogue-only and do not contact CIMAC/ATAC. No provider outreach begins from this plan.

## 8. Integrity check

- All five reconciliation priority leads considered: confirmed.
- WU022 engagement state checked: TREVO and DAM `SENT`/pending; APCE partial response/follow-up pending.
- Duplicate outreach proposed: none.
- Every non-deferred question maps to a concrete future decision: confirmed.
- Consumer validation: explicitly conditional on parking provider evidence.
- Canonical records, schemas, `.aiqt/state.json`, and WU022/WU023/WU024 documentation: unchanged.
