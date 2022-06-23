import { getIsLoadingSeletor, getIsLoadedSeletor, getIsErrorSeletor } from "../common"


const getGoodCategoriesSlice = (state) => state.goodsCategories;

export const getGoodCategories = (state) => getGoodCategoriesSlice(state).data;

export const getLoadStatus = (state) => state.goodsCategories.loadStatus;

export const isLoading = getIsLoadingSeletor(getLoadStatus);
export const isLoaded = getIsLoadedSeletor(getLoadStatus);
export const isError = getIsErrorSeletor(getLoadStatus);