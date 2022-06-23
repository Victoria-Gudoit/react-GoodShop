import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {LOAD_STATUSES, PRODUCT_PAGE} from "../constants";
import { getProductById } from "api/Api"; 

export const fetchProduct = createAsyncThunk(`${PRODUCT_PAGE}/getProduct`, async (ids) => {
    const result = await getProductById(ids);
    console.log(result.items);
    return result.items;
});

export const {actions, reducer} = createSlice({
    name: PRODUCT_PAGE,
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.data = action.payload;
        });
        builder.addCase(fetchProduct.rejected, (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        });
    }
});