import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as registrationReducer } from "./registrationSlice/registrationSlice";
import {reducer as goodCategoriesReducer} from "./goodCategoriesSlice/goodCategoriesSlice"
import {reducer as popularCategoriesReducer} from "./popularCategoriesSlice/popularCategoriesSlice"

const rootReducer = combineReducers({
  registration: registrationReducer,
  goodsCategories: goodCategoriesReducer,
  popularCategories: popularCategoriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
