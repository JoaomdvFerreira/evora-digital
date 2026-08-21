import { describe, expect, it } from "vitest";
import { formatPublicCount, formatPublicDateTime, publicEnumLabel, publicFieldCaption } from "./presentation";

describe("PT-PT public presentation terminology", () => {
  it("uses field-aware PRB validation labels", () => {
    expect(publicEnumLabel("validation_status", "unvalidated")).toBe("Por validar");
    expect(publicEnumLabel("existing_solutions", "not_assessed")).toBe("Não avaliadas");
  });

  it("distinguishes evidential authority from publication permission", () => {
    expect(publicEnumLabel("strength", "primary-authoritative")).toBe("Primária com autoridade");
    expect(publicEnumLabel("authority", "authoritative")).toBe("Com autoridade");
  });

  it("labels decision gates and contradiction degree with their distinct semantics", () => {
    expect(publicEnumLabel("decision_gates.problem_real", "PASS")).toBe("Cumpre");
    expect(publicEnumLabel("decision_gates.problem_real", "PARTIAL")).toBe("Cumpre parcialmente");
    expect(publicEnumLabel("decision_gates.problem_real", "FAIL")).toBe("Não cumpre");
    expect(publicFieldCaption("decision_gates.problem_real")).toBe("Critério de decisão");
    expect(publicFieldCaption("evidence_confidence.contradiction_status")).toBe("Grau de contradição");
    expect(publicEnumLabel("evidence_confidence.contradiction_status", "HIGH")).toBe("Elevado");
  });

  it("keeps SUPERSEDED distinct from STALE", () => {
    expect(publicEnumLabel("analysis.temporal_relevance", "SUPERSEDED")).toBe("Substituída");
    expect(publicEnumLabel("freshness.status", "STALE")).toBe("Desatualizada");
  });

  it("formats public counts and timestamps for Portugal", () => {
    expect(formatPublicCount(12345)).toMatch(/12/);
    expect(formatPublicDateTime("2026-08-21T14:30:00Z")).not.toBe("2026-08-21T14:30:00Z");
  });

  it("preserves a public-signal code while using its reviewed label", () => {
    expect(publicEnumLabel("analysis.public_signal_class", "PS1")).toBe("PS1 — Jornalismo local / notícias públicas");
    expect(publicEnumLabel("some_unrelated_field", "PS1")).toBe("PS1");
  });

  it("uses the canonical value as the safe fallback for unknown future values", () => {
    expect(publicEnumLabel("status", "FUTURE_STATUS")).toBe("FUTURE_STATUS");
  });

  it("uses field-aware labels for assessment unknowns", () => {
    expect(publicFieldCaption("remaining_gap")).toBe("Lacuna remanescente");
    expect(publicEnumLabel("remaining_gap", "PARTIAL")).toBe("Parcial");
    expect(publicFieldCaption("decision_impact")).toBe("Impacto na decisão");
    expect(publicEnumLabel("decision_impact", "HIGH")).toBe("Elevado");
    expect(publicEnumLabel("decision_impact", "MEDIUM")).toBe("Médio");
  });
});
