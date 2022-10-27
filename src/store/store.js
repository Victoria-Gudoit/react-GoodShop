import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { registrationReducer } from "./registrationSlice";
import { goodCategoriesReducer } from "./goodCategoriesSlice";
import { popularCategoriesReducer } from "./popularCategoriesSlice";
import { categoryPageReducer } from "./categoryPageSlice";
import { productPageReducer } from "./productPageSlice";
import { cartReducer } from "./cartSlice";
import { filterReducer } from "./filterSlice";

const rootReducer = combineReducers({
  registration: registrationReducer,
  goodsCategories: goodCategoriesReducer,
  popularCategories: popularCategoriesReducer,
  categoryPage: categoryPageReducer,
  productPage: productPageReducer,
  cart: cartReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
