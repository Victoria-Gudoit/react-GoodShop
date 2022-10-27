import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "filter",
  initialState: {
    sort: {
      name: "по цене ↓",
      sortProperty: "price",
    },
  },
  reducers: {
    setSortType(state, action) {
      state.sort = action.payload;
    },
  },
});
