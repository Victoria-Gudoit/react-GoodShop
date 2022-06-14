import { request } from "./request";
export * as getGoods from "./server";

const HOST = "api/goods";
const HOST_ID = "api/goods?categoryTypeIds=";
const HOST_CATEGORIES = 'api/categories'

export const Api = (categoryTypeId) => {
  return request(`${HOST}${categoryTypeId}`);
};

export const getGoodCategories = () => {
  return request(`${HOST_CATEGORIES}`);
};