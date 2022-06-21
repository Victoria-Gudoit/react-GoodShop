import {LOAD_STATUSES} from "../constants";

const getCategorySlice = (state) => state.categoryPage;

export const getCategory = (state) => getCategorySlice(state).data;

export const getLoadStatus = (state) => state.categoryPage.loadStatus;

export const isLoading = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isLoaded = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADED;