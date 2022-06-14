import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as registrationReducer } from "./registrationSlice";
import {reducer as goodCategories} from "./goodCategoriesSlice"

const rootReducer = combineReducers({
  registration: registrationReducer,
  categories: goodCategories,
});

export const store = configureStore({
  reducer: rootReducer,
});
