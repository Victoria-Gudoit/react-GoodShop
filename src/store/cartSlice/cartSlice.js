import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getCart, updateCart } from "api/Api";
import { getGoodById } from "./cartSelectors";
import {LOAD_STATUSES, CART} from "../constants";

export const fetchCart = createAsyncThunk(`${CART}/getCart`, getCart);

export const addToCart = createAsyncThunk(`${CART}/addGoodToCart`, async (good, { getState, dispatch }) => {
  const goodInCart = getGoodById(good.id)(getState());
  const currentCounter = goodInCart?.count ?? 0;
  await updateCart(good, currentCounter + 1);
  dispatch(fetchCart())
})

export const removeFromCart = createAsyncThunk(`${CART}/removeGoodFromCart`, async (good, { getState, dispatch }) => {
  const goodInCart = getGoodById(good.id)(getState());
  const currentCounter = goodInCart?.count ?? 0;
  await updateCart(good, currentCounter - 1);
  dispatch(fetchCart())
})

export const { actions, reducer } = createSlice({
    name: CART,
    initialState: { 
    items: [],
    loadStatus: LOAD_STATUSES.UNKNOWN,
  },
    extraReducers: (builder) => {
      builder.addCase(fetchCart.pending, (state) => {
          state.loadStatus = LOAD_STATUSES.LOADING;
      });
      builder.addCase(fetchCart.fulfilled, (state, action) => {
          state.loadStatus = LOAD_STATUSES.LOADED;
          state.items = action.payload;
      });
      builder.addCase(fetchCart.rejected, (state) => {
          state.loadStatus = LOAD_STATUSES.ERROR;
      });
  }
  });