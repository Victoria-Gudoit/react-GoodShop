import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./goodsPage.module.css";
import {
  FilterSelectors,
  fetchFilterGoods,
  filterActions,
} from "../../store/filterSlice";
import { Sort } from "../Sort";
import { Categories } from "components/Categories/Categories";
import { Pagination } from "components/Pagination";

export const GoodsPage = () => {
  const goodCategories = useSelector(FilterSelectors.getFilterGoods);

  const sortType = useSelector(FilterSelectors.getSort);
  const category = useSelector(FilterSelectors.getCategoryId);
  const offset = useSelector(FilterSelectors.getOffset);

  const limit = useSelector(FilterSelectors.getLimit);

  //////////////
  const indexOfLastPost = offset * limit;
  const indexOfFirstPost = indexOfLastPost - limit;
  const currentProducts = goodCategories.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const countOfPages = Math.ceil(goodCategories.length / limit);

  const dispatch = useDispatch();

  const onChangeCategory = useCallback((index) => {
    dispatch(filterActions.setCategoryId(index));
  }, []);

  const onChangePage = (index) => {
    dispatch(filterActions.setOffset(index));
  };

  useEffect(() => {
    const categoryTypeIds = category > 0 ? `${category}` : "";
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    dispatch(fetchFilterGoods({ sortBy, order, categoryTypeIds, offset }));
  }, [sortType, category, offset]);

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
          {currentProducts.map((good) => (
            <tr key={good.id}>
              <td>{good.label}</td>
              <td>{good.price}</td>
              <td>{good.description}</td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        countOfPages={countOfPages}
        onChangePage={onChangePage}
        offset={offset}
      />
    </div>
  );
};
