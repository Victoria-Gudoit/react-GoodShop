const getFilter = (state) => state.filter;

export const getFilterGoods = (state) => getFilter(state).data;
export const getSort = (state) => getFilter(state).sort;
export const getCategoryId = (state) => getFilter(state).categoryId;
export const getOffset = (state) => getFilter(state).offset;
export const getLimit = (state) => getFilter(state).limit;
export const getmaxPrice = (state) => getFilter(state).maxPrice;
export const getminPrice = (state) => getFilter(state).minPrice;
