const getFilter = (state) => state.filter;
export const getSort = (state) => getFilter(state).sort;
