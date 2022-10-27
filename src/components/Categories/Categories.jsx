import {
  GoodsCategoriesSelectors,
  fetchGoodCategories,
} from "store/goodCategoriesSlice";
import { useSelector, useDispatch } from "react-redux";
import scss from "./categories.module.scss";
import { useEffect } from "react";

export const Categories = ({ value, onChangeCategory }) => {
  const categories = useSelector(GoodsCategoriesSelectors.getGoodCategories);

  const dispatch = useDispatch();

  const getGoodCategories = () => dispatch(fetchGoodCategories());

  useEffect(() => {
    getGoodCategories();
  }, []);

  return (
    <div className={scss.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            // className={value === category.categoryTypeIds ? "active" : ""}
            onClick={() => onChangeCategory(index)}
          >
            {category.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
