import { request } from "./request";

const HOST = "/api/goods";
// const HOST_ID = "api/goods?categoryTypeId=";
// const HOST_PRODUCT_ID = "/api/goods?ids=";
const HOST_CATEGORIES = 'api/categories'
const HOST_POPULAR_CATEGORIES = 'api/popular_categories'

export const getProductById = (id) => {
  return request(`${HOST}?ids=${id}`);
};

export const getGoodCategories = () => {
  return request(`${HOST_CATEGORIES}?id=`);
};

export const getPopularCategories = () => {
  return request(HOST_POPULAR_CATEGORIES);
};

export const getCategoryById = (categoryTypeId) => {
  return request(`${HOST}?categoryTypeId=${categoryTypeId}`);
};