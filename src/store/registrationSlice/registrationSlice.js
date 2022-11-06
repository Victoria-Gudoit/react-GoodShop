import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "registartion/getRegistration",
  async (body) => {
    let res = await fetch("/api/registration", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(res.json());
    return await res.json();
  }
);

export const fetchUserr = createAsyncThunk("login", async (body) => {
  let res = await fetch("/api/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(body),
  });
  console.log(res.json());
  return await res.json();
});

export const { actions, reducer } = createSlice({
  name: "login",
  initialState: {
    isAuth: false,
    login: "",
    token: "",
    loading: false,
  },
  reducers: {
    checkAuth: () => {
      return {
        isAuth: true,
      };
    },
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addlogin: (state, action) => {
      state.login = localStorage.getItem("login");
    },
  },
  extraReducers: {
    [fetchUserr.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUserr.fulfilled]: (state, { payload: { login, token } }) => {
      state.loading = false;
      state.token = token;
      state.login = login;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("login", JSON.stringify(login));
    },
    [fetchUserr.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});
