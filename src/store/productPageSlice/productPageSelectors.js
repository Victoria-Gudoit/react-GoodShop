import { getIsLoadingSeletor, getIsLoadedSeletor, getIsErrorSeletor } from "../common"

const getProductSlice = (state) => state.productPage;

export const getProduct = (state) => getProductSlice(state).data;

export const getLoadStatus = (state) => state.productPage.loadStatus;

export const isLoading = getIsLoadingSeletor(getLoadStatus);
export const isLoaded = getIsLoadedSeletor(getLoadStatus);
export const isError = getIsErrorSeletor(getLoadStatus);