import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getCart } from "api/Api";
import {LOAD_STATUSES, CART} from "../constants";

export const fetchCart = createAsyncThunk(`${CART}/getCategory`, async () => {
    const result = await getCart();
    return result
});

export const { actions, reducer } = createSlice({
    name: CART,
    initialState: { 
    cartItems: [],
    loadStatus: LOAD_STATUSES.UNKNOWN,
  },
    reducers: {
      addToCart(state, action) {
        const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
        if(itemIndex >= 0) {
          state.cartItems[itemIndex].count += 1
        } else {
              const tempProduct = {...action.payload, count: 1}
        state.cartItems.push(tempProduct)
        }
      },
      removeFromCart(state, action) {
        const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
        if(state.cartItems[itemIndex].count > 1) {
          state.cartItems[itemIndex].count -= 1
        } else if (state.cartItems[itemIndex].count === 1) {
       const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
       )
       state.cartItems = nextCartItems
        }
      }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCart.pending, (state) => {
          state.loadStatus = LOAD_STATUSES.LOADING;
      });
      builder.addCase(fetchCart.fulfilled, (state, action) => {
          state.loadStatus = LOAD_STATUSES.LOADED;
          state.cartItems = action.payload;
      });
      builder.addCase(fetchCart.rejected, (state) => {
          state.loadStatus = LOAD_STATUSES.ERROR;
      });
  }
  });