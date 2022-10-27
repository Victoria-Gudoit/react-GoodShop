import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Menu as MenuAntd } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import {
  GoodsCategoriesSelectors,
  fetchGoodCategories,
} from "store/goodCategoriesSlice";
import { useSelector, useDispatch } from "react-redux";
import css from "./menu.module.css";
import { Link } from "react-router-dom";

export const Menu = () => {
  const goodCategories = useSelector(
    GoodsCategoriesSelectors.getGoodCategories
  );
  console.log(goodCategories);

  const dispatch = useDispatch();

  const getGoodCategories = () => dispatch(fetchGoodCategories());

  useEffect(() => {
    getGoodCategories();
  }, []);

  return (
    <div>
      <h2 className={css.title}>Категории</h2>
      <MenuAntd>
        {goodCategories.map((item) => (
          <MenuItem>{<Link to={item.id}>{item.label}</Link>}</MenuItem>
        ))}{" "}
      </MenuAntd>
    </div>
  );
};
