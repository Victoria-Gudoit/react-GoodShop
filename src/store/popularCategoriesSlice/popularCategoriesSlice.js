import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getPopularCategories} from "api/Api";
import {LOAD_STATUSES, POPULAR_CATEGORIES_SLICE} from "../constants";

export const fetchPopularCategories = createAsyncThunk(`${POPULAR_CATEGORIES_SLICE}/getPopularCategories`, getPopularCategories);

export const {actions, reducer} = createSlice({
    name: POPULAR_CATEGORIES_SLICE,
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPopularCategories.pending, (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        });
        builder.addCase(fetchPopularCategories.fulfilled, (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.data = action.payload;
        });
        builder.addCase(fetchPopularCategories.rejected, (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        });
    }
});

