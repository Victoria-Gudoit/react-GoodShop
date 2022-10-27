const getFilter = (state) => state.filter;

export const getFilterGoods = (state) => getFilter(state).data;
export const getSort = (state) => getFilter(state).sort;
