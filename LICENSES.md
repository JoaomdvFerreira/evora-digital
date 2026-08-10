# Évora Digital Licensing Policy

Évora Digital is intended to be public and open-source. Because the repository
combines original software, original documentation/research, and third-party
data/source material, a single repository-wide licence would be inaccurate.
This document defines which licence applies to which category of content.

## Software created by Évora Digital

**Intended licence:** Apache License 2.0.

Apache-2.0 applies to original software produced by Évora Digital, unless a
future documented decision explicitly changes this. The canonical licence text
is at [`LICENSE`](LICENSE).

## Original documentation and research outputs

**Intended licence:** Creative Commons Attribution 4.0 International (CC BY 4.0).

CC BY 4.0 applies only to original Évora Digital documentation and research
content where Évora Digital owns the relevant rights (for example: charter,
models, roadmap, evidence and problem records authored by the programme).
Full licence text: https://creativecommons.org/licenses/by/4.0/

## Third-party datasets, source material, and derived content

Third-party material is **not** automatically relicensed under Apache-2.0 or
CC BY 4.0. Each source or dataset referenced or catalogued by Évora Digital
(see `docs/models/data-source-model.md`) must retain its own:

- publisher;
- ownership/source;
- licence;
- attribution requirements;
- reuse restrictions;
- licence status.

If reuse rights are unknown, the record must retain:

```yaml
license_status: UNKNOWN
```

and Évora Digital does not assume permission to republish or expose that
material through a future public API or any other distribution channel.

## Mixed-content rule

Repository-level licensing (Apache-2.0 for software, CC BY 4.0 for original
documentation) does **not** override or supersede third-party licences or
reuse restrictions. Where third-party material is present, its own licence
and restrictions govern that material, regardless of the licence applied to
the surrounding repository or documentation.
