import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {LOAD_STATUSES, CATEGORY_PAGE} from "../constants";
import { getCategoryById } from "api/Api";

export const fetchCategory = createAsyncThunk(`${CATEGORY_PAGE}/getCategory`, async (id) => {
    const result = await getCategoryById(id);
    return result.items;
});

export const {actions, reducer} = createSlice({
    name: CATEGORY_PAGE,
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        });
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.data = action.payload;
        });
        builder.addCase(fetchCategory.rejected, (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        });
    }
});

