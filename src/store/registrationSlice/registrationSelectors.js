const getAuthSlice = (state) => state.registration;

export const getAuth = (state) => getAuthSlice(state).isAuth;