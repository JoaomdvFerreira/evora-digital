# RS-02B2 — Focused Desk Research — Progress

**Type:** Research Support activity (independent of the AIQT milestone/work-unit sequence)  
**As of:** 2026-08-12  
**Scope:** the two remaining MEDIUM desk-research questions from `docs/discovery/rs-01-evidence-gap-review.md` §3: PRB-0005 Parking Buddy coverage and PRB-0007 caregiver-needs context. This compact addendum does not rewrite earlier RS-02 history, start WU023, or alter AIQT state.

## Questions and sources inspected

- **PRB-0005:** whether Via Verde Estacionar applies in Évora, and whether Parking Buddy is a parking-prediction capability. Re-checked the Via Verde Estacionar and Parking Buddy pages; also checked the municipal tariff-zone/payment page.
- **PRB-0007:** whether broader Portuguese evidence contextualises the local 133-caregiver findings. Inspected directly the CAPP/ISCSP/Universidade de Lisboa report *Estudo sobre o Perfil do Cuidador Familiar/Informal da Pessoa Sénior em Portugal*.

## Material findings and canonical impact

- **Parking:** `SRC-0092`/`EVD-000105` already correctly captured the material finding and were re-verified: Via Verde lists Évora for street parking, and Parking Buddy is map/location-driven parking-probability functionality using historical and contextual data. The municipal fact was already captured in `SRC-0022`/`EVD-000021`, so no duplicate record was created. Exact coverage and accuracy for individual Évora tariff zones remain unresolved.
- **Caregivers:** created `SRC-0106` and `EVD-000124`. The independent 2021 study contextually corroborates information/training, public-service access, coordination, waiting-time, guidance/reference-professional, and bureaucracy/information difficulties. `PRB-0007` now links it; `ASM-0007.evidence_confidence.independence` is revised LOW → MEDIUM for the independent fourth thread. No other confidence, gate, journey, triage, or validation-status transition was made.

## Limitations and remaining gaps

- Parking evidence does not establish a public zone-by-zone Parking Buddy coverage map, accuracy, adoption, or outcome effect in Évora. Payment coverage is not predictive-coverage geometry.
- The caregiver report is July 2021, national rather than Évora-specific, and a 400-person non-probability convenience sample (27 Alentejo respondents); its percentages are not population prevalence. Coded open-response results retain their 118-response context. No portal/app suitability or effectiveness inference is made.
- Strongest caregiver residual: **When a caregiver in Évora needs support for the first time, where do they begin, which entities/services do they navigate, where does friction occur, and where does the journey break down?** This is an `AFFECTED_JOURNEY` question for future WU023 if still needed, not work started here.

## Stopping rationale

The bounded public sources establish the intended current-service and external-context facts. The decisive residuals require operator/app verification (Parking Buddy) and direct affected-journey evidence (caregivers), so further desk research would not resolve them.
