import { request } from "./request";

const HOST = "api/goods";
const HOST_ID = "api/goods?categoryTypeId=";
const HOST_PRODUCT_ID = "/api/goods?ids=";
const HOST_CATEGORIES = 'api/categories?id='
const HOST_POPULAR_CATEGORIES = 'api/popular_categories'

export const getProductById = (ids) => {
  return request(`${HOST_PRODUCT_ID}${ids}`);
};

export const getGoodCategories = () => {
  return request(HOST_CATEGORIES);
};

export const getPopularCategories = () => {
  return request(HOST_POPULAR_CATEGORIES);
};

export const getCategoryById = (categoryTypeId) => {
  return request(`${HOST_ID}${categoryTypeId}`);
};

