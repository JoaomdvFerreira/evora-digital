# WU-D2-06 Closure — Cross-Signal Consolidation & D2 Closure

**Status:** DONE
**Milestone:** D2 — Public Signal Discovery — **CLOSED**
**Date:** 2026-08-11

## Objective

Consolidate D2 across all five tracks (D2-A Mobility/Accessibility, D2-B Caregiver, D2-C Housing, D2-D Employment, D2-E Urban Hygiene) without creating a solution backlog or prematurely implementing D3 analytical changes; verify the D2 exit gate; close D2.

This WU performed synthesis/governance work only. No external research was performed and no new canonical `SRC-*`/`EVD-*`/`PRB-*`/`HYP-*` records were created.

---

## 1. Cross-track synthesis

### 1.1 Mobility / Accessibility / Public Realm — `PRB-0001`..`PRB-0005`

- **`PRB-0001`** (transport practical service) — CONFIRMED + REFINED. Student journey/service-usability problems, delayed/impractical journeys, and TVDE substitution are visible in current lived evidence. The problem is operational service quality and practical journey viability, not information absence.
- **`PRB-0002`** (transport information/interoperability) — CONSTRAINED/REFOCUSED. Passenger-facing information already exists (TREVO and related services); do not frame as "information is absent." Residual questions are reliability/usability and developer/data interoperability. Whether `PRB-0002` and `PRB-0005` should be decomposed is carried to D3 as a question, not decided here.
- **`PRB-0003`** (pedestrian/accessibility barriers) — CONFIRMED + REFINED. Direct/recent affected-user participation evidence and active institutional accessibility verification/correction work both exist. Older barrier evidence must not be assumed current after active interventions; next route is location-level/affected-user validation.
- **`PRB-0004`** (cycling-network coherence) — NO MATERIAL CHANGE. Broad open-web method is saturated for D2 with weak signal; signal sparsity is explicitly recorded as not evidence of absence. Next route is network analysis/observation/stakeholder validation, not more open-web searching.
- **`PRB-0005`** (traffic/parking vs pedestrian/public-space quality) — NO MATERIAL CHANGE. Framing (traffic/parking/public-space interaction, not parking technology) is preserved. The road-surface maintenance blind spot remains distinct and unlinked (§2).

### 1.2 Caregiver journey — `PRB-0007`

CONFIRMED + REFINED: bureaucracy, rights/eligibility navigation friction, information/navigation fragmentation, and caregiver-originated demand for simplified/centralised multi-channel information. Direct care, respite, financial and psychological support remain major, often lower-digital-leverage needs and were **not** converted into a digital-navigation problem (needs prioritisation: care ~40.8%, respite ~40.0%, financial ~36.8%, psychological ~31.2% — `EVD-000090`).

Current-state correction: caregiver support already exists (Cantinho do Cuidador, UCC, VIVAMENTE; 262 formally-recognised caregivers, Jan 2026; a 2026–2027 municipal caregiver plan already contains simplification/information actions). The residual, unresolved question is whether these mechanisms actually reduce the friction caregivers report — deferred to D5.

Sparse individual open-web caregiver signal is recorded as a channel/privacy limitation, not evidence that `PRB-0007` is weak, per the explicit D2 protocol rule protecting this PRB from downgrade-by-silence.

### 1.3 Urban hygiene / waste — `PRB-0009`

Direct lived signals of non-collection/accumulation exist (`EVD-000093`, `EVD-000094`), alongside the institutional operational diagnosis. Current-state sequence: February 2026 severe disruption/near-collapse (one vehicle at the constrained point) → May 2026 additional vehicles entering service (`EVD-000095`) → July/August 2026 fleet reported at 19 vehicles (`SRC-0055`/`EVD-000072`).

Critical correction preserved: February remains important evidence but is **not** the assumed August baseline; current post-intervention reliability remains insufficiently measured; the absence of a comparably strong post-July collapse signal is a search/saturation result, not proof of reliability or resolution.

Core interpretation unchanged: fleet/capacity/staffing/logistics/service organisation dominate; `digital_tractability: low`. Narrow unvalidated leads (service-status transparency, responsibility routing, request acknowledgement/status/closure, bulky/green-waste journey clarity, machine-readable operational data) are retained as D5 leads, not escalated. An occurrence/reporting channel already exists — no generic reporting-app problem was created.

### 1.4 Housing — `PRB-0006`

Strengthened/current-state-updated: affordability/supply pressure, student exposure/displacement (`EVD-000099`), and a concrete supply-recovery point (Manuel Álvares residence renovation completion, 2026-05-06, `EVD-000100`) alongside already-active institutional/physical supply interventions (67.1M€ Plano Local de Habitação; 12 supported-rent homes delivered).

Dominant mechanism remains physical/economic supply; software leverage over the core problem remains low; student accommodation is a sub-pressure within `PRB-0006`, not a separate PRB. Explicitly kept UNPROVEN: applicant inability to discover the right programme, commonly misunderstood eligibility, deficient application/status tracking, and any digital-housing-navigator effect. Existence of multiple programmes/surfaces does not, by itself, establish process friction.

### 1.5 Employment / Skills — `PRB-0008`

Strengthened/refined: broad active labour demand exists; specialised aerospace demand is visible (`EVD-000101`); matching/contact infrastructure already exists (IEFP, UÉ Employment Portal/Fair); PlaQuaR (`EVD-000102`) and the UÉ↔TE Connectivity employer feedback mechanism (`EVD-000103`) show that skills-alignment mechanisms are already being developed.

Vacancy listings are demand signals, not proof of shortage; generic job-board absence is not the problem. The unresolved issue is the effectiveness/coverage of skills-demand feedback and alignment. Kept UNPROVEN: hard-to-fill occupations, vacancy duration, failed recruitment, wage/condition effects, housing/transport effects, graduate retention, SME needs articulation, actual PlaQuaR outcomes/coverage. Housing→talent-retention causality is explicitly **not** inferred — `PRB-0006` and `PRB-0008` remain analytically separate and were not merged.

---

## 2. OPEN-DISCOVERY / BLIND-SPOT review

### 2.1 Road-surface maintenance / service reliability — final D2 disposition

Evidence: a 2026 public petition (1,394 signatures, `EVD-000082`/`SRC-0069`), a municipal ~€1.5M repair response acknowledging maintenance/requalification need (`EVD-000083`/`SRC-0070`, corroborated by `SRC-0071`), and a later location-specific persistence report at the N114 city entrance (`EVD-000084`/`SRC-0072`).

**Project-owner D2 closure decision (final): RETAIN AS NEW-CANDIDATE FOR D3 PROBLEM-MAP REVIEW.**

- **Not** absorbed into `PRB-0005` — confirmed by inspection of `PRB-0005.evidence` (`EVD-000003`, `EVD-000007`, `EVD-000008`, `EVD-000012`, `EVD-000025`), which contains none of `EVD-000082`/`EVD-000083`/`EVD-000084`.
- **No new `PRB-*` created in D2** — `research/problems/` still contains exactly `PRB-0001`–`PRB-0009`.
- **Not discarded** — the three evidence records and the disposition are preserved verbatim in `PRB-0005.possible_root_causes` (D2-A Round A update and D2-A Targeted Follow-up update entries) and in this closure record.

Reason (recorded verbatim from the project-owner decision already captured in `PRB-0005.possible_root_causes`): current evidence points to a distinct physical maintenance/service-reliability mechanism (potholes, degraded pavement, maintenance response, road-condition safety) rather than `PRB-0005`'s traffic/parking-vs-pedestrian/public-space framing, though it may overlap through public-realm/safety effects. D3 is the designated problem-map consolidation/decomposition stage and will decide whether the candidate becomes a distinct `PRB-*`, is merged into `PRB-0005`, or is rejected/archived.

**Closure wording:** `NEW-CANDIDATE retained`; `no canonical PRB promotion in D2`; `D3 owner review required`.

### 2.2 Other blind-spot findings

No other D2 signal justifies a new canonical `PRB-*`. Preserved as research gaps/leads for D3/D5 rather than new problems:

- cycling open-web visibility gap (`PRB-0004`);
- caregiver channel/privacy visibility gap (`PRB-0007`);
- post-intervention waste-performance measurement gap (`PRB-0009`);
- housing applicant-journey gap (`PRB-0006`);
- employer recruitment-causality/outcome gap (`PRB-0008`);
- housing↔talent cross-domain lead, without established causality (`PRB-0006`/`PRB-0008`).

---

## 3. Consolidated contradiction / current-state log

| # | Theme | Earlier/older framing | D2 current-state correction | Residual/unresolved |
|---|---|---|---|---|
| 1 | Transport information | Risk of framing as information absence | Passenger information exists (TREVO and related services) | Reliability/usability/interoperability; whether `PRB-0002`/`PRB-0005` should be decomposed |
| 2 | Accessibility | Older barrier evidence exists | Current, active accessibility assessment/correction work also exists (APCE, Évora_27/Acesso Cultura, EB1 Azaruja) | Present-day barrier status requires targeted location/affected-user validation |
| 3 | Road maintenance | — | Public signal is about physical maintenance/service reliability, evidenced independently of `PRB-0005` | Do not reinterpret as an app/information gap or absorb into `PRB-0005`; D3 owner review required (§2.1) |
| 4 | Caregiver support | Navigation/bureaucracy friction risk read as "no support exists" | Support entry points (Cantinho do Cuidador, UCC, VIVAMENTE) and a 2026–2027 simplification plan already exist | Direct care/respite/financial/psychological needs remain substantial and are not reducible to navigation; whether current mechanisms actually reduce friction is unresolved |
| 5 | Urban hygiene | February 2026 crisis risk read as the current baseline | May/July 2026 interventions (four vehicles, then 19-vehicle fleet) materially changed the operating state | Current reliability is insufficiently measured; absence of a post-July collapse signal is not proof of resolution |
| 6 | Housing | Affordability/supply problem risk read as purely a process/navigation gap | Substantial supply interventions are already active (67.1M€ housing plan, 12 homes delivered, Manuel Álvares renovation completed) | Applicant-process friction (eligibility clarity, application/status tracking) remains unproven |
| 7 | Employment | Vacancy listings risk being read as proof of shortage | Matching/alignment infrastructure exists and is developing (UÉ Employment Portal, PlaQuaR, UÉ↔TE Connectivity feedback) | Effectiveness/coverage of alignment mechanisms, and hard-to-fill/wage/retention causes, remain unresolved |

Contradiction is preserved as evidence evolution — older valid observations are not deleted, only superseded in current-state framing.

---

## 4. Consolidated D3/D5 stakeholder / evidence questions

### Mobility / accessibility
1. Which current journeys are operationally impractical, and why?
2. Which accessibility barriers remain after current works/assessments?
3. What cycling origin-destination journeys are broken by network discontinuity?
4. How do illegal parking/traffic conditions affect pedestrian/public-space outcomes?
5. Should `PRB-0002` and `PRB-0005` be decomposed in D3?

### Caregiving
6. Where do caregivers actually start when seeking support?
7. Are rights/eligibility rules understandable without professional help?
8. Do caregivers repeat information/documents across organisations?
9. Has the 2026–2027 plan materially reduced navigation/bureaucracy friction?
10. Which needs are information/coordination vs fundamentally capacity/support?

### Urban hygiene
11. What is post-July missed/delayed-collection performance by area?
12. What happens after a resident request/report — acknowledgement, status, resolution, closure?
13. Are Município/Gesamb/parish responsibility boundaries understandable to residents?
14. Is bulky/green-waste service discoverable and predictable?
15. What machine-readable operational/performance data exists?

### Housing
16. How do applicants determine programme eligibility and apply?
17. Is application/status information usable?
18. What are supported-housing/student-residence placement/rejection/time-to-outcome patterns?
19. Which frictions remain even if information were perfect?

### Employment
20. Which occupations are genuinely hard to fill, and for how long?
21. Why do vacancies remain open — skills, wage, conditions, housing, transport, schedules?
22. How effective are current IEFP/UÉ/NERE/PlaQuaR feedback/matching mechanisms?
23. What are graduate retention outcomes and their causes?

### Cross-track / road-maintenance NEW-CANDIDATE
24. Should road-surface maintenance become a distinct `PRB-*`, merge into `PRB-0005`, or be archived (D3 owner decision, §2.1)?

---

## 5. PRB validation-status audit

| PRB | `validation_status` | `evidence_status` | Notes |
|---|---|---|---|
| `PRB-0001` | `unvalidated` | corroborated | No change |
| `PRB-0002` | `unvalidated` | corroborated | No change |
| `PRB-0003` | `unvalidated` | corroborated | No change |
| `PRB-0004` | `unvalidated` | corroborated | No change |
| `PRB-0005` | `unvalidated` | corroborated | Road-maintenance candidate unlinked |
| `PRB-0006` | `unvalidated` | corroborated | No change |
| `PRB-0007` | `unvalidated` | corroborated | No change |
| `PRB-0008` | `unvalidated` | corroborated | No change |
| `PRB-0009` | `unvalidated` | corroborated | No change |

**Confirmed:** no `PRB-*.validation_status` was upgraded to `validated` on the strength of public-signal evidence alone, across all nine records (`node -e` field scan against `research/problems/*.yaml`, §7).

## 6. Final canonical counts

| Record type | D1 baseline (D2 entry) | D2 closure (post-WU012) | Delta |
|---|---|---|---|
| `SRC-*` | 56 | 81 | +25 |
| `EVD-*` | 78 | 103 | +25 |
| `PRB-*` | 9 | 9 | 0 |
| `HYP-*` | 0 | 0 | 0 |
| **Total validated records** | **143** | **193** | **+50** |

WU013 added zero new canonical records (documentation-only WU). `node tools/validate-research.js` reports `Validated 193 record(s): OK.` both before and after this WU.

---

## 7. Targeted deterministic checks performed

- `node tools/validate-research.js` → `Validated 193 record(s): OK.`
- `grep validation_status research/problems/PRB-*.yaml` → all nine `unvalidated`.
- `ls research/problems | wc -l` → 9; `ls research/hypotheses | wc -l` → 0; `ls research/evidence | wc -l` → 103; `ls research/sources | wc -l` → 81 (9+0+103+81 = 193, matches validator).
- `grep -c EVD-000082\|EVD-000083\|EVD-000084 research/problems/PRB-0005.yaml` inspection → 0 matches in `PRB-0005.evidence`; road-maintenance candidate confirmed unlinked.
- `grep -l NEW-CANDIDATE research/evidence/*.yaml` → `EVD-000082`, `EVD-000083`, `EVD-000084` only; consistent with a single, still-unpromoted candidate.
- `aiqt status --json` reviewed before and after WU selection (see §9).
- `git status --short` reviewed before and after each change.

No full semantic reread of all 193 records was performed; targeted checks above establish the exit-gate conditions this WU is responsible for.

---

## 8. D2 exit-gate result

Evaluated against `docs/milestones/D2-public-signal-discovery.md`:

- [x] `WU-D2-01` established the extended protocol/methodology and D2 milestone/work-unit structure.
- [x] Round A tracks (`WU-D2-02`, `WU-D2-03`, `WU-D2-04`) completed, each having attempted the coverage/saturation gate.
- [x] `WU-D2-02` explicitly attempted coverage of `PRB-0001`–`PRB-0005` (see `docs/milestones/D2-WU02-closure.md` coverage matrix).
- [x] `WU-D2-03`'s sparse-evidence outcome is recorded explicitly without downgrading `PRB-0007` (`docs/milestones/D2-WU03-closure.md` §"Public-signal scarcity treatment").
- [x] `WU-D2-05` (Housing + Employment) completed, with D2-C/D2-D findings and saturation decisions kept separate (§1.4–1.5, `docs/milestones/D2-WU05-closure.md`).
- [x] no `PRB-*.validation_status` was upgraded to `validated` on public-signal evidence alone (§5).
- [x] no new canonical `PRB-*`/`HYP-*` was created without project-owner review; the road-maintenance candidate is preserved as `NEW-CANDIDATE` evidence (§2.1).
- [x] a contradiction/current-state log exists and is consolidated (§3).
- [x] a `D2 OPEN-DISCOVERY / BLIND-SPOT FINDINGS` review was performed at cross-track synthesis (§2).
- [x] specific stakeholder-validation questions for D5 are recorded (§4).
- [x] AIQT state and repository state are valid; `node tools/validate-research.js` passes (§7, §9).
- [x] working tree is clean before closure commit (verified via `git status --short` prior to commit).
- [x] a D2 closure record exists — this document.

**All D2 exit-gate conditions are satisfied. D2 is CLOSED.**

## 9. D2 methodological conclusions (preserved)

1. Public-signal visibility varies sharply by problem/channel.
2. Signal volume cannot be used as prevalence.
3. Current-State Challenge materially changed several diagnoses and should remain a first-class practice.
4. Existing-solution checks prevented multiple false "missing app/platform" diagnoses.
5. Strong civic importance does not imply strong digital leverage.
6. Structural/operational causes dominate several high-value problems.
7. Public signals are better at exposing lived friction than measuring reach/prevalence.
8. Some problems require observation/operational data/private-context stakeholder research rather than more open-web searching.
9. No app-first opportunity emerged from D2.
10. D2 closes with unresolved decision questions rather than forced solution hypotheses.

---

## 10. Documentation housekeeping performed

- `docs/data/source-registry.md` — heading/status relabelled from "Initial Source Registry" / "Seed registry for D1" to "Source Registry" / "Human-readable catalogue, enriched through D1 and D2" (v0.1 → v0.2). No structured `SRC-*` fields were duplicated into the Markdown catalogue; no full source-by-source rewrite was performed.
- `docs/milestones/D2-public-signal-discovery.md` — status updated `ACTIVE` → `CLOSED`; all exit-gate checkboxes marked complete.
- This closure record created.

No research-record changes were made in WU013: consolidation did not expose a concrete correctness/deduplication issue requiring a canonical record edit.

## 11. AIQT lifecycle

- Pre-WU verification: `aiqt status --json` reported `projectStatus: in_progress`, `currentMilestoneId: M002`, `workUnitCounts: {done: 12, ready: 1, effectivelyReady: 1}` — consistent with the reported baseline (WU009–WU012 done, WU013 ready).
- `WU013` selected via `aiqt next --work-unit WU013` (packet `PKT-014`).
- `WU013` closed via `aiqt checkpoint --from-file` using the supported terminal `targetStatus: "done"` value — no intermediate/fabricated checkpoint state was created.
- If `M002` did not close automatically on `WU013`'s closure, the supported CLI lifecycle (`aiqt status`/`aiqt next`) was inspected rather than editing `.aiqt/state.json` directly; see the Return summary in the handoff response for the resulting checkpoint ID and final milestone state.

## Confirmation

- Product, hypothesis, or Évora Open API implementation authorized: **NO**
- New `PRB-*`/`HYP-*` created: **NO**
- Road-surface maintenance promoted to a `PRB-*`: **NO** — retained as `NEW-CANDIDATE` for D3 owner review
- Any `PRB-*` marked `validated`: **NO**
- `PRB-0006`/`PRB-0008` merged: **NO**
- New external research performed by the repository agent: **NO** — synthesis/consolidation only
- D3 Analytical Foundation (`ASM-*`, `EVD.analysis` schema, analyzer tooling) implemented: **NO**
- `WU-D2-06` closed: **YES**
- **D2 milestone closed: YES**
- `M002` final state: see AIQT Return summary (§11)

## Next

D3 Problem Map v1 may proceed once the project owner separately reviews/canonicalizes the approved D3 strategy. D3 will need to: consolidate/split/merge the problem taxonomy; decide the road-maintenance `NEW-CANDIDATE` (§2.1); build better current-journey/consequence understanding; resolve decision-critical unknowns (§4) using targeted methods; and preserve `validation_status: unvalidated` until appropriate stakeholder validation. D3 was **not** started in this WU.
