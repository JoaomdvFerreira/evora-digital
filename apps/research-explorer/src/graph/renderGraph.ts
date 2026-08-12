import { MultiDirectedGraph } from "graphology";
import type { ResearchGraph } from "./buildGraphModel";
import type { LayoutPoint } from "./layout";
import { FOCUS_NODE_COLOR, typeVisual } from "./typeVisuals";

/**
 * The Sigma-specific translation boundary: takes the plain domain graph
 * (buildGraphModel.ts — research semantics only) plus a computed
 * neighbourhood/layout, and produces a small, disposable graph carrying
 * exactly what Sigma needs to draw a frame (position, size, colour, a
 * permanently-visible label). Rebuilt on every focus/depth/filter change;
 * never the thing anything else in the app reads from.
 *
 * The node `label` is always the record's own ID (e.g. "PRB-0005") — never
 * hover-only — so the type prefix stays legible without relying on colour
 * (accessibility requirement: colour is not the only type indicator).
 * `type: "arrow"` on every edge preserves canonical reference direction
 * visually (an arrowhead pointing from referencer to referenced).
 */

export interface RenderNodeAttributes {
  recordType: string;
  x: number;
  y: number;
  size: number;
  color: string;
  label: string;
  type: "circle";
  [key: string]: unknown;
}

export interface RenderEdgeAttributes {
  field: string;
  ordinal: number | null;
  required: boolean;
  type: "arrow";
  size: number;
  color: string;
  [key: string]: unknown;
}

export type RenderGraph = MultiDirectedGraph<RenderNodeAttributes, RenderEdgeAttributes>;

const FOCUS_SIZE = 11;
const DEFAULT_SIZE = 6;
const DEFAULT_EDGE_COLOR = "#94a3b8";

export function buildRenderGraph(
  domain: ResearchGraph,
  nodeIds: string[],
  edgeIds: string[],
  positions: Map<string, LayoutPoint>,
  focusId: string | null
): RenderGraph {
  const render: RenderGraph = new MultiDirectedGraph();

  for (const id of nodeIds) {
    const recordType = domain.getNodeAttribute(id, "recordType");
    const position = positions.get(id) ?? { x: 0, y: 0 };
    const isFocus = id === focusId;
    render.addNode(id, {
      recordType,
      x: position.x,
      y: position.y,
      size: isFocus ? FOCUS_SIZE : DEFAULT_SIZE,
      color: isFocus ? FOCUS_NODE_COLOR : typeVisual(recordType).color,
      label: id,
      type: "circle",
    });
  }

  for (const edgeId of edgeIds) {
    const source = domain.source(edgeId);
    const target = domain.target(edgeId);
    if (!render.hasNode(source) || !render.hasNode(target)) continue;
    const attrs = domain.getEdgeAttributes(edgeId);
    render.addEdgeWithKey(edgeId, source, target, {
      field: attrs.field,
      ordinal: attrs.ordinal,
      required: attrs.required,
      type: "arrow",
      size: 2,
      color: DEFAULT_EDGE_COLOR,
    });
  }

  return render;
}
