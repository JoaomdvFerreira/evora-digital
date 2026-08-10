# D2 Execution Protocol — Public Signal Discovery

**Version:** 0.1  
**Status:** Draft for D0 closure

## Objective

Discover recurring public friction, lived experience, workarounds, consequences, and possible data gaps through public digital channels.

D2 does not estimate population prevalence.

## Source classes

Potential public sources include:

- public Facebook pages and groups;
- Instagram posts/comments;
- Reddit discussions;
- YouTube public content/comments;
- local/regional media;
- public Google Maps reviews when relevant to a service/place question;
- neighbourhood associations;
- parish councils;
- public petitions;
- municipal public meetings/minutes;
- public consultations;
- other publicly accessible community channels.

## Search strategy

Search by civic experience rather than software ideas.

Useful patterns include:

- não consigo;
- demora;
- não há;
- é difícil;
- ninguém sabe;
- tenho de;
- falta;
- já reportei;
- sempre;
- estacionamento;
- autocarro;
- renda;
- lixo;
- buracos;
- acessibilidade;
- atendimento;
- serviços.

Queries should combine these with Évora, relevant parishes, neighbourhoods, services, or facilities.

## Observation extraction

A useful social/public observation may capture:

```yaml
domain: mobility
actor_type: resident
geography: relevant area
problem: bus frequency makes commuting impractical
current_workaround: private car
consequence: car dependence / parking pressure
source_type: social
evidence_nature: reported-experience
strength: anecdotal
```

Do not retain identity unless necessary.

## Bias controls

Never infer that a theme is more important merely because it has more comments.

Record channel and source class so later analysis can distinguish:

- institutional;
- formal public;
- informal public;
- press;
- stakeholder;
- statistical.

## Deduplication

Repeated posts may indicate recurrence but remain separate evidence records when materially independent.

Do not create multiple problem records when they describe the same underlying failure.

## Escalation to verification

A public signal that may imply a factual public-data record must move through:

```text
Signal
  ↓
Evidence
  ↓
Corroboration
  ↓
Verification
  ↓
Canonical data candidate
```

## Initial operating constraint

D2 begins with bounded, manual or search-driven public research.

Mass automated collection must not begin until platform terms, legal basis, storage policy, retention, and operational need have been reviewed.

## Coverage gate

A domain has sufficient D2 coverage for consolidation when:

- more than one relevant public channel/source class has been explored where available;
- recurring friction themes have stabilized;
- materially different geographic/population perspectives have been sought;
- notable contradictions are captured;
- absence of public signal is recorded rather than interpreted as absence of a problem;
- known bias and coverage gaps are documented.
