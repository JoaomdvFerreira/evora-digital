# Research Explorer Visual Implementation Contract

## Status

Design System v1: **APPROVED** — see [design-system.md](design-system.md) for canonical tokens, typography recipes, and component contracts.

Prototypes A–D: **APPROVED DESIGN REFERENCES**

Functional implementation: **MATURE**

Visual fidelity implementation: **OPEN**

## Binding design intent

Across A–D, production should preserve:

- strong editorial/human-meaning hierarchy;
- clear separation between editorial/human content, UI/navigation, and technical identity/metadata;
- distinct visual/typographic roles for editorial/human meaning, UI/navigation, and technical identity/metadata;
- owner-approved production typography: Inter for UI/navigation/interface, Source Serif 4 for editorial and human research content, and IBM Plex Mono for technical IDs and metadata;
- controlled content/read widths;
- deliberate negative space and density;
- compact global chrome/navigation;
- technical IDs visually subordinate to human meaning;
- restrained borders/surfaces;
- compact human-readable state/status treatment;
- progressive disclosure of technical/raw information;
- provenance and uncertainty integrated into the reading experience;
- deliberate narrow/~360px composition rather than simple desktop stacking; and
- current accessibility behavior preserved or improved.

## Illustrative / non-binding prototype details

The following are not production requirements by themselves: exact prototype fonts, exact hex colours, inline CSS, exact pixel measurements, static transition demonstrations, prototype annotations, fake links, static example counts, and stale example content.

## Semantic precedence

1. Current canonical data and publication-safety contracts.
2. Current PT-PT localization and public-presentation mappings.
3. [design-system.md](design-system.md) canonical tokens/recipes and approved A–D visual/information-design intent.
4. Current production architecture and functional behavior.
5. Illustrative prototype implementation details.

## Important guardrails

- Current production styling is not presumed to supersede approved A–D visual intent. Reuse existing CSS/components where they support that direction, and change them where they materially conflict with it. Current production architecture and functional behavior remain constraints; current visual styling is itself part of the visual-fidelity implementation surface.
- Never reintroduce stale English public copy from prototypes.
- Never reintroduce raw enum/schema values into normal public UX.
- Never duplicate canonical PRB/EVD/ASM content in frontend code.
- Do not copy prototypes pixel-for-pixel.
- Do not treat visual intent as optional merely because exact fonts/colours are illustrative.
- Do not add a design framework/component-library migration.
- Do not change routing/data architecture merely for visual fidelity.
- Do not commit the `.design` reference artifacts.

## Planned implementation sequence

**V1 — Shared visual foundation + shell + Overview + Records**  
References: C + D + shared A/B patterns

**V2 — Record Detail**  
Reference: A

**V3 — Problem View + final responsive consistency**  
Reference: B, with shared C/D responsive patterns

Each V1/V2/V3 phase requires targeted human desktop + ~360px visual approval before it is considered closed. This is a verification gate, not a requirement for new screenshot infrastructure. Implementation details remain decisions for the live code in each phase.
