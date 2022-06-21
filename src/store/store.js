import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { registrationReducer } from "./registrationSlice";
import { goodCategoriesReducer } from "./goodCategoriesSlice"
import { popularCategoriesReducer } from "./popularCategoriesSlice"
import {categoryPageReducer} from "./categoryPageSlice"
import { productPageReducer } from "./productPageSlice";

const rootReducer = combineReducers({
  registration: registrationReducer,
  goodsCategories: goodCategoriesReducer,
  popularCategories: popularCategoriesReducer,
  categoryPage: categoryPageReducer,
  productPage: productPageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
