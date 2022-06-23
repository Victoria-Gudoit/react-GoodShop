import { getIsLoadingSeletor, getIsLoadedSeletor, getIsErrorSeletor } from "../common"

const getPopularCategoriesSlice = (state) => state.popularCategories;

export const getPopularCategories = (state) => getPopularCategoriesSlice(state).data;


export const getLoadStatus = (state) => state.popularCategories.loadStatus;

export const isLoading = getIsLoadingSeletor(getLoadStatus);
export const isLoaded = getIsLoadedSeletor(getLoadStatus);
export const isError = getIsErrorSeletor(getLoadStatus);