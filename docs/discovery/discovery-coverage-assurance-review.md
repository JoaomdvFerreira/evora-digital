# Discovery Coverage Assurance Review

**Type:** Transversal Research Quality / Discovery Assurance activity — not a milestone, work unit, research wave, or problem-creation exercise
**As of:** 2026-08-13
**Baseline reviewed:** 97 `SRC-*`, 124 `EVD-*`, 10 `PRB-*`, 0 `HYP-*`, 10 `ASM-*` = 241 canonical records; 369 explicit edges; 0 dangling references.

## 1. Scope and assurance question

This review tests whether, within the current Discovery scope and methodology, a material coverage weakness justifies expanding Discovery before D5 continues. It reviews the structured corpus, every `PRB-0001`–`PRB-0010` and corresponding `ASM-*`, the provisional 17-domain taxonomy, D2 blind-spot/structure decisions, D5/WU022 state, RS-01/RS-02, and the Open Data Foundation D5 documents.

It does **not** claim the ten current Problems are statistically representative of, or the most important problems in, Évora. It does not perform new research or treat an intentionally sequenced evidence role as a coverage failure.

## 2. Coverage matrix

| Dimension | Observations from canonical state | Disposition |
|---|---|---|
| Thematic | All taxonomy domains have source/evidence representation. Problems concentrate in mobility/urban/accessibility (five), then housing/social/health, employment/education/economy, and environment/public services. Culture, tourism and sports were reviewed in D1 and yielded no supported problem; climate and digital services are cross-cutting/contextual rather than absent. | `ADEQUATE_FOR_CURRENT_DISCOVERY` |
| Geographic | Municipal evidence is the dominant frame; urban Évora and the Historic Centre are materially visible in mobility/accessibility/parking records. Specific non-central places appear (Azaruja, Canaviais, lower-demand settlements, N114 and named outer-neighbourhood connections), but parish/rural coverage is not systematic and some records use municipality-wide geography without location detail. Regional evidence is contextual, especially transport/employment, not a substitute for Évora-local evidence. | `THIN_WATCH` |
| Population / journeys | Residents, transport passengers, students, people with reduced mobility, pedestrians, cyclists, drivers, housing seekers, caregivers/cared-for people, workers/job seekers, employers and urban parish councils materially appear. Visitors, cultural/sports users, rural/parish residents and some health/older-person perspectives occur mainly as contextual/source populations rather than current Problem journeys. Many current-journey fields remain incomplete by design pending D5. | `ADEQUATE_FOR_CURRENT_DISCOVERY` |
| Evidence class | Institutional evidence dominates (105 of 124 `EVD-*`); there are smaller public-signal/press, stakeholder (6), observation (1), formal-public (2) and statistical (1) components. The corpus deliberately records representativeness limits. Institutional/operator knowledge is sufficient for a discovery baseline but cannot establish prevalence or lived materiality on its own. | `THIN_INTENTIONAL` |
| Freshness / currentness | `ASM-0001`, `0005`–`0008` and `0010` assess currentness HIGH; `0002`–`0004` and `0009` are MEDIUM. Cycling is particularly dependent on a 2020 cartographic base plus later implementation fragments; transport information, accessibility and waste require current operational/institutional challenge rather than historic documents alone. | `THIN_WATCH` |
| Source-generation / visibility bias | The method began with institutional mapping and public signals, so documented/operator-visible problems are easier to surface than private, stigmatized, informal or low-digital-footprint friction. D2 explicitly recorded saturation limits rather than reading silence as absence; its road-maintenance blind spot was promoted through the D3 structural decision to `PRB-0010`. This demonstrates the control worked once, but not that it eliminates future visibility bias. | `ADEQUATE_WITH_WATCHLIST` |

## 3. Intentional gaps, not Discovery failures

- **Affected-journey evidence:** `WU023` owns only the journeys still unresolved after WU022 operator/institutional evidence. Its blocked state means gaps in passenger, cyclist, housing-applicant, caregiver and parking-user experience are intentionally not yet complete; they are not a reason to restart broad Discovery.
- **Solution-stage and evaluation evidence:** no `HYP-*` is required, and adoption, causal-mechanism and outcome-measurement questions belong to later proportional D6/D7 work, if an opportunity survives D5.
- **Open Data Foundation validation:** TREVO and DAM provider answers are pending through existing WU022 routes. CIMAC and TPAC provider contact is deliberately deferred until a named catalogue/federation decision and consumer exists. Missing API/licence fields elsewhere are not coverage defects.
- **No-problem domain outcomes:** culture/tourism/sports and several climate/digital-service leads had active-source/current-state checks. Their lack of a `PRB-*` is an evidence-based non-promotion, not an empty taxonomy cell to fill.

## 4. Bias and concentration findings

The principal concentration is urban institutional visibility: mobility, public realm and municipal service records are comparatively rich, and central-city contexts are more precisely named than outer/parish/rural contexts. Caregiver evidence demonstrates a second limitation: privacy-sensitive or less-public journeys are harder to surface through open signals and rely on limited, non-representative institutional studies. The methodology protects against overclaiming this evidence, but D5 must still seek the smallest credible counterexample/affected-journey evidence where its existing `ASM-*` routes require it.

The record does not support treating thin visitor, culture, sports, climate, mental-health or rural/parish coverage as separate concealed problems. It contains either relevant contextual/current-state evidence, an explicit non-promotion, or an existing problem/route that would need to be challenged first.

## 5. Material blind-spot test

**No candidate meets the threshold.** The only prior cross-domain blind-spot candidate—road-surface maintenance—was carried through D2 open-discovery control and resolved by D3 as the distinct `PRB-0010`; it is not an outstanding coverage gap.

| Watch item (not a blind-spot candidate) | Dimensions | Why it does not clear the threshold now | Preserve as |
|---|---|---|---|
| Parish/rural and outer-neighbourhood lived journeys | Geography, population, evidence class | Coverage is uneven, but lower-demand transport, Azaruja, Canaviais and outer connections already appear; no repository evidence identifies a distinct unexamined civic mechanism, and the next credible method is the deliberately sequenced WU023 journey route. | `THIN_WATCH` |
| Less-public/private lived friction | Evidence class, source-generation bias | Institutional predominance could miss it, but the corpus gives no bounded, distinct candidate with a credible pre-D5 investigation question. Generic research for unknown problems would violate proportionality. | `THIN_INTENTIONAL` |
| Cycling current topology/currentness | Freshness, geography | This is a known `PRB-0004` critical unknown with an active DAM route, not an unrepresented area. | `THIN_WATCH` |

## 6. Assurance conclusion

**`ADEQUATE_WITH_WATCHLIST`**

Within the current scope and methodology, no coverage bias was identified that is sufficiently material to justify expanding Discovery before completing the current D5 validation path. Continue WU022 and reserve WU023 for only its remaining decision-critical affected journeys. Before D5 closure, re-check the watchlist only if WU022 evidence reveals a materially distinct geography, population, or mechanism that the current ten-problem structure cannot accommodate.

## 7. Integrity check

- All 10 current `PRB-*` and corresponding `ASM-*` considered: confirmed.
- Taxonomy, geography, populations, evidence class, freshness and source-generation bias considered: confirmed.
- Intentional WU023 and later-stage gaps classified as failures: no.
- New research or canonical records: none.
- `.aiqt/state.json` and WU022/WU023/WU024 documentation: unchanged.
