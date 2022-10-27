import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGoods } from "api/Api";
import { LOAD_STATUSES } from "../constants";

export const fetchFilterGoods = createAsyncThunk(
  "filter/filterGoods",
  async (params) => {
    const { sortBy, order } = params;
    const result = await getGoods(sortBy, order);
    return result.items;
  }
);

export const { actions, reducer } = createSlice({
  name: "filter",
  initialState: {
    data: [],
    loadStatus: LOAD_STATUSES.UNKNOWN,
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
  extraReducers: (builder) => {
    builder.addCase(fetchFilterGoods.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchFilterGoods.fulfilled, (state, action) => {
      state.loadStatus = LOAD_STATUSES.LOADED;
      state.data = action.payload;
    });
    builder.addCase(fetchFilterGoods.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
  },
});
