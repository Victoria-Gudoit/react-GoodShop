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
import { PriceSlider } from "components/Slider";
import { Link } from "react-router-dom";

export const GoodsPage = () => {
  const goodCategories = useSelector(FilterSelectors.getFilterGoods);

  const sortType = useSelector(FilterSelectors.getSort);
  const category = useSelector(FilterSelectors.getCategoryId);
  const offset = useSelector(FilterSelectors.getOffset);
  const limit = useSelector(FilterSelectors.getLimit);
  const maxPrice = useSelector(FilterSelectors.getmaxPrice);
  const minPrice = useSelector(FilterSelectors.getminPrice);

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

  const onChangePrice = (max) => {
    dispatch(filterActions.setPrice(max));
  };

  useEffect(() => {
    const categoryTypeIds = category > 0 ? `${category}` : "";
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    dispatch(
      fetchFilterGoods({
        sortBy,
        order,
        categoryTypeIds,
        offset,
        maxPrice,
        minPrice,
      })
    );
  }, [sortType, category, offset, maxPrice, minPrice]);

  return (
    <div>
      <Sort />
      <Categories value={category} onChangeCategory={onChangeCategory} />
      <PriceSlider
        maxPrice={maxPrice}
        minPrice={minPrice}
        onChangePrice={onChangePrice}
      />
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
              <td>
                <Link to={`${good.categoryTypeId}/${good.id}`}>
                  {good.label}
                </Link>
              </td>
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
