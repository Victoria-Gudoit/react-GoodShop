import {LOAD_STATUSES} from "../constants";

const getCartSlice = (state) => state.cart;

export const getCart = (state) => getCartSlice(state).cartItems;

export const getLoadStatus = (state) => state.cart.loadStatus;

export const isLoading = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isLoaded = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADED;

export const getGoodById = (cartId) => (
    state
  ) => {
    return getCart(state).find(({id}) => cartId === id);
  };
