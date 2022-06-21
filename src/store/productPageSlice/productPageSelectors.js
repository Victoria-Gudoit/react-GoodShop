import {LOAD_STATUSES} from "../constants";

const getProductSlice = (state) => state.productPage;

export const getProduct = (state) => getProductSlice(state).data;

export const getLoadStatus = (state) => state.productPage.loadStatus;

export const isLoading = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isLoaded = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADED;