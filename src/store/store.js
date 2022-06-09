import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as registrationReducer } from "./registrationSlice";

const rootReducer = combineReducers({
  registrationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
