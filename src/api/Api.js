export * as getGoods from "./server";
import { request } from "./request";

const HOST = "api/goods?categoryTypeIds=";

export const Api = (categoryTypeId) => {
  return request(`${HOST}${categoryTypeId}`);
};
