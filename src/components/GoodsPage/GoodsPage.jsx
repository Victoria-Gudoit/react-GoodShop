import { getGoodsByLimit } from "api/Api";
import { useCallback, useEffect, useState } from "react";
import css from "./goodsPage.module.css";
import "antd/dist/antd.css";
import {
  FilterSelectors,
  fetchFilterGoods,
  filterActions,
} from "../../store/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { Sort } from "../Sort";
import { Categories } from "components/Categories/Categories";

export const GoodsPage = () => {
  const goodCategories = useSelector(FilterSelectors.getFilterGoods);

  const sortType = useSelector(FilterSelectors.getSort);
  const category = useSelector(FilterSelectors.getCategoryId);
  console.log(category);

  const dispatch = useDispatch();

  const onChangeCategory = useCallback((index) => {
    dispatch(filterActions.setCategoryId(index));
  }, []);

  useEffect(() => {
    const categoryTypeIds = category > 0 ? `${category}` : "";
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    dispatch(fetchFilterGoods({ sortBy, order, categoryTypeIds }));
  }, [sortType, category]);

  return (
    <div>
      <Sort />
      <Categories value={category} onChangeCategory={onChangeCategory} />
      <table className={css.table}>
        <thead>
          <tr>
            <th>Label</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {goodCategories.map((good) => (
            <tr key={good.id}>
              <td>{good.label}</td>
              <td>{good.price}</td>
              <td>{good.description}</td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
