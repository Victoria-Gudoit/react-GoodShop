import { getGoodsByLimit } from "api/Api";
import { useEffect, useState } from "react";
import css from "./goodsPage.module.css";
import "antd/dist/antd.css";
import { FilterSelectors, fetchFilterGoods } from "../../store/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { Sort } from "../Sort";

export const GoodsPage = () => {
  const goodCategories = useSelector(FilterSelectors.getFilterGoods);

  const sortType = useSelector(FilterSelectors.getSort);

  const dispatch = useDispatch();

  useEffect(() => {
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    dispatch(fetchFilterGoods({ sortBy, order }));
  }, [sortType]);

  return (
    <div>
      <Sort />
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
            <tr>
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
