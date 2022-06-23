import { LOAD_STATUSES } from "store/constants";

export const getIsLoadingSeletor = (getLoadStatus) => (state) => {
    return getLoadStatus(state) === LOAD_STATUSES.LOADING;
  }

  export const getIsLoadedSeletor = (getLoadStatus) => (state) => {
    return getLoadStatus(state) === LOAD_STATUSES.LOADED;
  }

  export const getIsErrorSeletor = (getLoadStatus) => (state) => {
    return getLoadStatus(state) === LOAD_STATUSES.ERROR;
  }