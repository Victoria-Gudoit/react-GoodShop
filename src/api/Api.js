import { request } from "./request";

const HOST = "/api/goods";
const HOST_CATEGORIES = 'api/categories'
const HOST_POPULAR_CATEGORIES = 'api/popular_categories'
const HOST_CART = '/api/cart'

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
  return request(`${HOST}?categoryTypeIds=${categoryTypeId}`);
};

export const getProductByText = (text) => {
  return request(`${HOST}?text=${text}`);
};

export const getCart = () => {
  return request(HOST_CART);
};

export const updateCart = (good, count) => { return request(HOST_CART, { method: 'PUT', body: JSON.stringify({ good, count }) }) }


export const getGoodsBySort = () => {
  return request(`${HOST}?sortBy=price&sortDirection=$asc`);
};

export const getGoodsByMinPrice = (minPrice) => {
  return request(`${HOST}?minPrice=${minPrice}`);
};

export const getGoodsByLimit = (offset, limit) => {
  return request(`${HOST}?offest=${offset}&limit=${limit}`);
};
export const getGoodsByMaxPrice = (maxPrice) => {
  return request(`${HOST}?maxPrice=${maxPrice}`);
};
