import {LOAD_STATUSES} from "../constants";

const getGoodCategoriesSlice = (state) => state.goodsCategories;

export const getGoodCategories = (state) => getGoodCategoriesSlice(state).data;

export const getLoadStatus = (state) => state.goodsCategories.loadStatus;

export const isLoading = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isLoaded = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADED;
