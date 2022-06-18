import { request } from "./request";

const HOST = "api/goods";
// const HOST_ID = "api/goods?categoryTypeIds=";
const HOST_CATEGORIES = 'api/categories'
const HOST_POPULAR_CATEGORIES = 'api/popular_categories'

export const getGood = (categoryTypeId) => {
  return request(`${HOST}${categoryTypeId}`);
};

export const getGoodCategories = () => {
  return request(HOST_CATEGORIES);
};

export const getPopularCategories = () => {
  return request(`${HOST_POPULAR_CATEGORIES}`);
};