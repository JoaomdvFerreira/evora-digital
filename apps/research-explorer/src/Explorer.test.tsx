import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Explorer } from "./Explorer";
import { StaticDataProvider } from "./dataProvider/StaticDataProvider";
import type { DataProvider, RecordDetail, RecordSummary } from "./dataProvider/types";

const INDEX: RecordSummary[] = [
  { id: "PRB-0005", type: "PRB-", label: "Pressão de estacionamento", file: "research/problems/PRB-0005.yaml", summaryFields: { status: "OPEN" } },
  { id: "EVD-000105", type: "EVD-", label: "Via Verde Parking Buddy", file: "research/evidence/EVD-000105.yaml", summaryFields: { strength: "primary-authoritative" } },
  { id: "SRC-0092", type: "SRC-", label: "Via Verde Estacionar", file: "research/sources/SRC-0092.yaml", summaryFields: {} },
  {
    id: "WID-0001",
    type: "WID-",
    label: "WID-0001",
    file: "research/widgets/WID-0001.yaml",
    summaryFields: { status: "ativo" },
  },
];

const DETAILS: Record<string, RecordDetail> = {
  "PRB-0005": {
    id: "PRB-0005",
    type: "PRB-",
    file: "research/problems/PRB-0005.yaml",
    record: { title: "Pressão de estacionamento", domain: ["mobility"] },
    outgoingEdges: [{ field: "evidence", ordinal: 0, to: "EVD-000105" }],
    incomingEdges: [],
  },
  "EVD-000105": {
    id: "EVD-000105",
    type: "EVD-",
    file: "research/evidence/EVD-000105.yaml",
    record: { type: "institutional", observation: { summary: "Fixture" } },
    outgoingEdges: [{ field: "source.source_id", ordinal: null, to: "SRC-0092" }],
    incomingEdges: [{ field: "evidence", ordinal: 0, from: "PRB-0005" }],
  },
  "SRC-0092": {
    id: "SRC-0092",
    type: "SRC-",
    file: "research/sources/SRC-0092.yaml",
    record: { publisher: "Via Verde", name: "Estacionar" },
    outgoingEdges: [],
    incomingEdges: [{ field: "source.source_id", ordinal: null, from: "EVD-000105" }],
  },
  "WID-0001": {
    id: "WID-0001",
    type: "WID-",
    file: "research/widgets/WID-0001.yaml",
    record: {
      widget_id: "WID-0001",
      nested: { a: 1, list: [1, 2, 3], flag: true, empty: null },
    },
    outgoingEdges: [],
    incomingEdges: [],
  },
};

async function getDetailPanel(): Promise<HTMLElement> {
  return (await screen.findByText("Detalhes")).closest("section") as HTMLElement;
}

function recordsHeading(): HTMLElement {
  return screen.getByRole("heading", { name: "Registos" });
}

function fakeProvider(overrides: Partial<DataProvider> = {}): DataProvider {
  return {
    getManifest: () => Promise.reject(new Error("not used in Explorer tests")),
    listRecords: () => Promise.resolve(INDEX),
    getRecord: (id: string) => {
      const detail = DETAILS[id];
      return detail ? Promise.resolve(detail) : Promise.reject(new Error(`no fixture detail for ${id}`));
    },
    ...overrides,
  };
}

beforeEach(() => {
  window.history.replaceState(null, "", "/");
});

describe("Explorer — Records workflow (fake provider)", () => {
  it("shows 'nenhum registo selecionado' before any selection, and does not eagerly load a detail", async () => {
    const getRecord = vi.fn(fakeProvider().getRecord);
    render(<Explorer dataProvider={fakeProvider({ getRecord })} />);
    await screen.findByText("Nenhum registo selecionado.");
    expect(getRecord).not.toHaveBeenCalled();
  });

  it("selecting a record triggers exactly one lazy getRecord() call, not one per row", async () => {
    const user = userEvent.setup();
    const getRecord = vi.fn(fakeProvider().getRecord);
    render(<Explorer dataProvider={fakeProvider({ getRecord })} />);

    const button = await screen.findByRole("button", { name: /PRB-0005/ });
    await user.click(button);

    await screen.findByText("Campos");
    expect(getRecord).toHaveBeenCalledTimes(1);
    expect(getRecord).toHaveBeenCalledWith("PRB-0005");
  });

  it("resolves outgoing relationships to related summary labels from the index", async () => {
    const user = userEvent.setup();
    render(<Explorer dataProvider={fakeProvider()} />);
    await user.click(await screen.findByRole("button", { name: /PRB-0005/ }));

    const detailPanel = (await screen.findByText("Detalhes")).closest("section")!;
    await within(detailPanel).findByText(/Via Verde Parking Buddy \(EVD-000105\)/);
    expect(within(detailPanel).getByText(/referencia via/)).toBeTruthy();
  });

  it("resolves incoming relationships to related summary labels from the index", async () => {
    const user = userEvent.setup();
    render(<Explorer dataProvider={fakeProvider()} />);
    await user.click(await screen.findByRole("button", { name: "PRB-0005" }));

    let detailPanel = await getDetailPanel();
    const outgoingButton = await within(detailPanel).findByRole("button", { name: /EVD-000105/ });
    await user.click(outgoingButton);

    detailPanel = await getDetailPanel();
    await within(detailPanel).findByText(/Pressão de estacionamento \(PRB-0005\)/);
    expect(within(detailPanel).getByText(/referenciado via/)).toBeTruthy();
  });

  it("navigates PRB-0005 -> EVD-000105 -> SRC-0092 without losing table context", async () => {
    const user = userEvent.setup();
    render(<Explorer dataProvider={fakeProvider()} />);

    await user.click(await screen.findByRole("button", { name: "PRB-0005" }));
    await screen.findByText("Campos");

    let detailPanel = await getDetailPanel();
    await user.click(await within(detailPanel).findByRole("button", { name: /EVD-000105/ }));
    detailPanel = await getDetailPanel();
    await within(detailPanel).findByText(/Via Verde/);

    await user.click(await within(detailPanel).findByRole("button", { name: /SRC-0092/ }));

    detailPanel = await getDetailPanel();
    expect(within(detailPanel).getByText("SRC-0092")).toBeTruthy();
    // Table context (the Records heading + other rows) survived navigation.
    expect(recordsHeading()).toBeTruthy();
    expect(screen.getByRole("button", { name: "PRB-0005" })).toBeTruthy();
  });

  it("renders a future generic record type (WID-) through the same generic detail renderer, including nested objects/arrays", async () => {
    const user = userEvent.setup();
    render(<Explorer dataProvider={fakeProvider()} />);

    await user.click(await screen.findByRole("button", { name: "WID-0001" }));
    const detailPanel = await getDetailPanel();
    await within(detailPanel).findByText("widget_id");
    expect(within(detailPanel).getByText("nested")).toBeTruthy();
    expect(within(detailPanel).getByText("Sim")).toBeTruthy(); // boolean `true` rendered as "Sim"
    expect(within(detailPanel).getByText("—")).toBeTruthy(); // null rendered as an em dash placeholder
  });

  it("a malformed/failed detail load produces a local actionable error without destroying the Records table", async () => {
    const user = userEvent.setup();
    const getRecord = () => Promise.reject(new Error("boom: malformed JSON"));
    render(<Explorer dataProvider={fakeProvider({ getRecord })} />);

    await user.click(await screen.findByRole("button", { name: "PRB-0005" }));
    await screen.findByRole("alert");
    expect(screen.getByText(/boom: malformed JSON/)).toBeTruthy();
    // The Records table is still there and still usable.
    expect(recordsHeading()).toBeTruthy();
    expect(screen.getByRole("button", { name: "EVD-000105" })).toBeTruthy();
  });

  it("filters rows as the user types, case- and diacritic-insensitively", async () => {
    const user = userEvent.setup();
    render(<Explorer dataProvider={fakeProvider()} />);
    await screen.findByRole("button", { name: "PRB-0005" });

    const search = screen.getByLabelText("Pesquisar");
    await user.type(search, "PRESSAO");

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "PRB-0005" })).toBeTruthy();
      expect(screen.queryByRole("button", { name: "EVD-000105" })).toBeNull();
    });
  });
});

describe("Explorer — Overview view", () => {
  it("switches to Overview and shows corpus-derived counts", async () => {
    const user = userEvent.setup();
    render(<Explorer dataProvider={fakeProvider()} />);
    await user.click(await screen.findByRole("button", { name: "Visão geral" }));

    await screen.findByRole("heading", { name: "Visão geral" });
    expect(screen.getByText("4 registos no total.")).toBeTruthy();
  });
});

describe("Explorer — URL-addressable state", () => {
  it("selecting a record updates the URL with view/id", async () => {
    const user = userEvent.setup();
    render(<Explorer dataProvider={fakeProvider()} />);
    await user.click(await screen.findByRole("button", { name: "PRB-0005" }));

    expect(window.location.search).toContain("id=PRB-0005");
  });

  it("typing a search query updates the URL without spamming history (replace, not push)", async () => {
    const user = userEvent.setup();
    const pushSpy = vi.spyOn(window.history, "pushState");
    render(<Explorer dataProvider={fakeProvider()} />);
    await screen.findByRole("button", { name: "PRB-0005" });

    await user.type(screen.getByLabelText("Pesquisar"), "PRB");

    expect(window.location.search).toContain("q=PRB");
    expect(pushSpy).not.toHaveBeenCalled();
    pushSpy.mockRestore();
  });

  it("a URL with view/id/query/type on initial load restores that state (bookmark/reload)", async () => {
    window.history.replaceState(null, "", "/?view=records&id=PRB-0005&q=PRB&type=PRB-");
    render(<Explorer dataProvider={fakeProvider()} />);

    await screen.findByText("Campos");
    expect((screen.getByLabelText("Pesquisar") as HTMLInputElement).value).toBe("PRB");
    expect((screen.getByLabelText("Tipo") as HTMLSelectElement).value).toBe("PRB-");
  });

  it("browser back restores the previous selection after navigating to a related record", async () => {
    const user = userEvent.setup();
    render(<Explorer dataProvider={fakeProvider()} />);

    await user.click(await screen.findByRole("button", { name: "PRB-0005" }));
    await screen.findByText("Campos");
    let detailPanel = await getDetailPanel();
    await user.click(await within(detailPanel).findByRole("button", { name: /EVD-000105/ }));
    detailPanel = await getDetailPanel();
    await within(detailPanel).findByText(/Via Verde/);
    expect(window.location.search).toContain("id=EVD-000105");

    window.history.back();
    // jsdom dispatches popstate asynchronously on back(); the URL updates
    // first, then the detail panel re-selects and re-fetches PRB-0005.
    await waitFor(() => expect(window.location.search).toContain("id=PRB-0005"));
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /PRB-0005/ }).getAttribute("aria-pressed")).toBe("true");
    });
  });

  it("an invalid/unknown record ID in the URL degrades to a safe, actionable error — not a bypassed fetch", async () => {
    // fakeProvider's getRecord rejects generically for unknown IDs (unlike
    // StaticDataProvider's real invalid_id/not_found distinction, already
    // covered by StaticDataProvider.test.ts) — what this test actually
    // proves is that an arbitrary URL-sourced ID flows through the exact
    // same getRecord() path as any other selection, degrading to a local
    // error rather than crashing or bypassing the provider.
    window.history.replaceState(null, "", "/?id=PRB-9999-does-not-exist");
    render(<Explorer dataProvider={fakeProvider()} />);

    const alert = await screen.findByRole("alert");
    expect(within(alert).getByRole("heading")).toBeTruthy();
    // Records table is still usable.
    expect(recordsHeading()).toBeTruthy();
    expect(screen.getByRole("button", { name: "EVD-000105" })).toBeTruthy();
  });

  it("a stale/unknown type filter in the URL degrades to 'all' rather than breaking the table", async () => {
    window.history.replaceState(null, "", "/?type=NOPE-");
    render(<Explorer dataProvider={fakeProvider()} />);

    await screen.findByRole("button", { name: "PRB-0005" });
    expect((screen.getByLabelText("Tipo") as HTMLSelectElement).value).toBe("all");
    expect(screen.getByRole("button", { name: "PRB-0005" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "EVD-000105" })).toBeTruthy();
  });
});

describe("Explorer workflow — never loads edges.json or canonical YAML (real StaticDataProvider)", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn((input: RequestInfo | URL) => {
      const url = String(input);
      if (url.endsWith("index.json")) {
        return Promise.resolve(new Response(JSON.stringify(INDEX), { status: 200 }));
      }
      const match = /record-detail\/([^/]+)\.json$/.exec(url);
      if (match) {
        const detail = DETAILS[decodeURIComponent(match[1])];
        return Promise.resolve(
          detail ? new Response(JSON.stringify(detail), { status: 200 }) : new Response(null, { status: 404 })
        );
      }
      return Promise.resolve(new Response(null, { status: 404 }));
    });
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("selecting and navigating records never issues a fetch for edges.json or research/**/*.yaml", async () => {
    const user = userEvent.setup();
    const provider = new StaticDataProvider();
    render(<Explorer dataProvider={provider} />);

    await user.click(await screen.findByRole("button", { name: "PRB-0005" }));
    await screen.findByText("Campos");
    let detailPanel = await getDetailPanel();
    await user.click(await within(detailPanel).findByRole("button", { name: /EVD-000105/ }));
    detailPanel = await getDetailPanel();
    await within(detailPanel).findByText(/Via Verde/);

    const requestedUrls = fetchMock.mock.calls.map((call) => String(call[0]));
    expect(requestedUrls.some((u) => u.includes("edges.json"))).toBe(false);
    expect(requestedUrls.some((u) => u.endsWith(".yaml"))).toBe(false);
    expect(requestedUrls.some((u) => u.includes("research/"))).toBe(false);
  });
});
