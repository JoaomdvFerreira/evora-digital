import { describe, expect, it } from "vitest";
import { initialRecordsControllerState, recordsControllerReducer } from "./recordsController";

describe("recordsControllerReducer", () => {
  it("resets pageIndex to 0 when the query changes while on a later page", () => {
    const onPage2 = { ...initialRecordsControllerState, pagination: { pageIndex: 2, pageSize: 25 } };
    const result = recordsControllerReducer(onPage2, { type: "SET_QUERY", query: "evora" });
    expect(result.query).toBe("evora");
    expect(result.pagination.pageIndex).toBe(0);
  });

  it("resets pageIndex to 0 when the type filter changes while on a later page", () => {
    const onPage3 = { ...initialRecordsControllerState, pagination: { pageIndex: 3, pageSize: 25 } };
    const result = recordsControllerReducer(onPage3, { type: "SET_TYPE_FILTER", typeFilter: "PRB-" });
    expect(result.typeFilter).toBe("PRB-");
    expect(result.pagination.pageIndex).toBe(0);
  });

  it("does not reset pageIndex on a sorting change (membership is unchanged)", () => {
    const onPage2 = { ...initialRecordsControllerState, pagination: { pageIndex: 2, pageSize: 25 } };
    const result = recordsControllerReducer(onPage2, { type: "SET_SORTING", sorting: [{ id: "id", desc: true }] });
    expect(result.pagination.pageIndex).toBe(2);
    expect(result.sorting).toEqual([{ id: "id", desc: true }]);
  });

  it("SET_PAGE_INDEX updates only the page index", () => {
    const result = recordsControllerReducer(initialRecordsControllerState, { type: "SET_PAGE_INDEX", pageIndex: 5 });
    expect(result.pagination.pageIndex).toBe(5);
    expect(result.query).toBe(initialRecordsControllerState.query);
  });
});
