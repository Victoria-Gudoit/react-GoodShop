import {LOAD_STATUSES} from "../constants";

const getPopularCategoriesSlice = (state) => state.popularCategories;

export const getPopularCategories = (state) => getPopularCategoriesSlice(state).data;

export const getLoadStatus = (state) => state.popularCategories.loadStatus;

export const isLoading = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isLoaded = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADED;
