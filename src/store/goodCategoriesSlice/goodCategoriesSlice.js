import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getGoodCategories} from "api/Api";
import {LOAD_STATUSES, GOOD_CATEGORIES_SLICE} from "../constants";

export const fetchGoodCategories = createAsyncThunk(`${GOOD_CATEGORIES_SLICE}/getGoodCategories`, async () => {
    const result = await getGoodCategories();
    return result.categories;
});

export const {actions, reducer} = createSlice({
    name: GOOD_CATEGORIES_SLICE,
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGoodCategories.pending, (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        });
        builder.addCase(fetchGoodCategories.fulfilled, (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.data = action.payload;
        });
        builder.addCase(fetchGoodCategories.rejected, (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        });
    }
});

