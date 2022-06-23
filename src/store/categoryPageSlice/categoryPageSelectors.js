import { getIsLoadingSeletor, getIsLoadedSeletor, getIsErrorSeletor } from "../common"

const getCategorySlice = (state) => state.categoryPage;

export const getCategory = (state) => getCategorySlice(state).data;

export const getLoadStatus = (state) => state.categoryPage.loadStatus;

export const isLoading = getIsLoadingSeletor(getLoadStatus);
export const isLoaded = getIsLoadedSeletor(getLoadStatus);
export const isError = getIsErrorSeletor(getLoadStatus);
