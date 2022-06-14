import {LOAD_STATUSES} from "./constants";

export const getAuth = (state) => state.registration.isAuth;

export const getGoodCategories = (state) => state.categories.data;

export const getLoadStatus = (state) => state.categories.loadStatus;

export const isLoading = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isLoaded = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADED;
