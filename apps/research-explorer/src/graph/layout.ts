import type { ResearchGraph } from "./buildGraphModel";

/**
 * Deterministic, dependency-free node positioning for Sigma (RE-04 keeps the
 * new-dependency surface to exactly Graphology + Sigma.js — no separate
 * force-directed layout package). Sufficient at the current corpus scale
 * (a neighbourhood view is a handful to a few dozen nodes; the optional
 * full-corpus view is 220). RE-05 owns any layout-quality upgrade decision
 * for synthetic larger corpora, per the roadmap's "keep boundaries
 * measurable for RE-05" note — this module is the boundary to swap.
 *
 * Not persisted: layout is recomputed from the current neighbourhood/filter
 * state every time, never serialized to the URL or stored (matches the
 * "no transient layout positions in the URL" rule).
 */

export interface LayoutPoint {
  x: number;
  y: number;
}

const HOP_RADIUS: Record<number, number> = { 1: 6, 2: 12 };
const HOP2_ANGLE_SPREAD = 0.35;

/**
 * Focus node at the origin; hop-1 nodes evenly spaced on a ring around it;
 * hop-2 nodes placed near whichever hop-1 node they connect to (angularly
 * clustered under their nearest hop-1 neighbour), so edges read as "spokes"
 * rather than a random tangle. A hop-2 node with no hop-1 connection in the
 * current view (shouldn't normally occur) falls back to even ring spacing.
 */
export function computeNeighbourhoodLayout(
  graph: ResearchGraph,
  focusId: string,
  nodeIds: string[],
  hopOf: Map<string, number>
): Map<string, LayoutPoint> {
  const positions = new Map<string, LayoutPoint>();
  positions.set(focusId, { x: 0, y: 0 });

  const byHop = new Map<number, string[]>();
  for (const id of nodeIds) {
    if (id === focusId) continue;
    const hop = hopOf.get(id) ?? 1;
    if (!byHop.has(hop)) byHop.set(hop, []);
    byHop.get(hop)!.push(id);
  }

  const hop1 = (byHop.get(1) ?? []).slice().sort();
  const angleOfHop1 = new Map<string, number>();
  hop1.forEach((id, i) => {
    const angle = (2 * Math.PI * i) / Math.max(hop1.length, 1);
    angleOfHop1.set(id, angle);
    positions.set(id, { x: HOP_RADIUS[1] * Math.cos(angle), y: HOP_RADIUS[1] * Math.sin(angle) });
  });

  const hop1Set = new Set(hop1);
  const hop2 = (byHop.get(2) ?? []).slice().sort();
  const groupsByParent = new Map<string, string[]>();
  const unattached: string[] = [];
  for (const id of hop2) {
    const parent = graph.neighbors(id).find((neighbor) => hop1Set.has(neighbor));
    if (parent) {
      if (!groupsByParent.has(parent)) groupsByParent.set(parent, []);
      groupsByParent.get(parent)!.push(id);
    } else {
      unattached.push(id);
    }
  }

  for (const [parent, children] of groupsByParent) {
    const baseAngle = angleOfHop1.get(parent) ?? 0;
    children.sort();
    children.forEach((id, i) => {
      const t = children.length === 1 ? 0 : i / (children.length - 1) - 0.5;
      const angle = baseAngle + t * HOP2_ANGLE_SPREAD * 2;
      positions.set(id, { x: HOP_RADIUS[2] * Math.cos(angle), y: HOP_RADIUS[2] * Math.sin(angle) });
    });
  }
  unattached.forEach((id, i) => {
    const angle = (2 * Math.PI * i) / Math.max(unattached.length, 1);
    positions.set(id, { x: HOP_RADIUS[2] * Math.cos(angle), y: HOP_RADIUS[2] * Math.sin(angle) });
  });

  return positions;
}

/**
 * Full-corpus (opt-in) layout: one concentric ring per record type, evenly
 * spaced within the ring, ring radius increasing with the type's
 * alphabetical rank — deterministic and legible enough for orientation at
 * ~220 nodes, not claimed to be publication-quality for larger corpora.
 */
export function computeFullCorpusLayout(graph: ResearchGraph, nodeIds: string[]): Map<string, LayoutPoint> {
  const byType = new Map<string, string[]>();
  for (const id of nodeIds) {
    const type = graph.getNodeAttribute(id, "recordType");
    if (!byType.has(type)) byType.set(type, []);
    byType.get(type)!.push(id);
  }

  const positions = new Map<string, LayoutPoint>();
  const types = [...byType.keys()].sort();
  types.forEach((type, ringIndex) => {
    const ids = byType.get(type)!.slice().sort();
    const radius = 8 + ringIndex * 9;
    ids.forEach((id, i) => {
      const angle = (2 * Math.PI * i) / Math.max(ids.length, 1);
      positions.set(id, { x: radius * Math.cos(angle), y: radius * Math.sin(angle) });
    });
  });

  return positions;
}
