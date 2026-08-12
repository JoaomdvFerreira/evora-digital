import { describe, expect, it } from "vitest";
import { initialRecordsControllerState, recordsControllerReducer } from "./recordsController";

describe("recordsControllerReducer", () => {
  it("RESET_PAGE resets pageIndex to 0 (caller dispatches this on query/type-filter change)", () => {
    const onPage2 = { ...initialRecordsControllerState, pagination: { pageIndex: 2, pageSize: 25 } };
    const result = recordsControllerReducer(onPage2, { type: "RESET_PAGE" });
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
    expect(result.sorting).toEqual(initialRecordsControllerState.sorting);
  });
});
