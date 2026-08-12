import { describeType, knownTypePrefixes } from "../typeGlossary";

interface ReadingGuideProps {
  /** manifest.schemaPrefixes — the types actually present in the loaded corpus, so a future schema-conforming type appears here automatically with no code change. Falls back to the known-type list if the manifest isn't loaded yet. */
  schemaPrefixes?: string[];
}

/**
 * "Como ler o Explorer" — a lightweight, reusable orientation panel. Explains
 * record-type prefixes, relationship direction (Entradas/Saídas), and
 * canonical reference-path notation, and states explicitly that a reference
 * never implies support/contradiction/causality unless canonical data
 * encodes that meaning itself (ADR-001 D4 / development contract #8).
 *
 * The type list is data-driven (schemaPrefixes, typically manifest.schemaPrefixes)
 * rather than hardcoded to the current five types, so an unknown future type
 * appears automatically — describeType() supplies a graceful generic entry
 * for any prefix it doesn't recognise.
 */
export function ReadingGuide({ schemaPrefixes }: ReadingGuideProps) {
  const prefixes = schemaPrefixes && schemaPrefixes.length > 0 ? schemaPrefixes : knownTypePrefixes();

  return (
    <details className="reading-guide">
      <summary>Como ler o Explorer</summary>

      <h3>Tipos de registo</h3>
      <dl>
        {prefixes.map((prefix) => {
          const { label, description } = describeType(prefix);
          return (
            <div key={prefix}>
              <dt>
                <code>{prefix}</code> — {label}
              </dt>
              <dd>{description}</dd>
            </div>
          );
        })}
      </dl>

      <h3>Entradas e Saídas</h3>
      <p>
        <strong>Saídas</strong> são referências que este registo faz a outros registos (ex.: um Problema que lista a sua Evidência).{" "}
        <strong>Entradas</strong> são referências que outros registos fazem a este (ex.: uma Avaliação que aponta para o Problema que avalia).
      </p>

      <h3>Caminhos de referência canónica</h3>
      <p>
        O texto após <em>"via"</em> (ex.: <code>analysis.related_problems[0]</code>) indica o campo exato do registo canónico de onde a
        referência provém, e a posição na lista quando aplicável (<code>[0]</code>, <code>[1]</code>, …). É o caminho real no ficheiro YAML
        de origem.
      </p>

      <p>
        <strong>Uma referência indica apenas que um registo aponta para outro através desse campo.</strong> Não significa, por si só,
        que um apoia, contradiz ou causa o outro — esse significado só é apresentado quando estiver explicitamente codificado nos dados
        canónicos.
      </p>
    </details>
  );
}
