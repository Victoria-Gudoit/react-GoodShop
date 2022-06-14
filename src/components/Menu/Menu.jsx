import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import { useEffect } from "react";
import { GoodsCategoriesSelectors } from "store/goodCategoriesSlice"; 
import { fetchGoodCategories } from "store/goodCategoriesSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import css from "./menu.module.css";

export const MenuOriginal = () => {

    const goodCategories = useSelector(GoodsCategoriesSelectors.getGoodCategories)
    const isLoaded = useSelector(GoodsCategoriesSelectors.isLoaded)

    const dispatch = useDispatch();

    const getGoodCategories = () => dispatch(fetchGoodCategories())

    useEffect(() => {
        getGoodCategories()
    }, [])


    return (
        <div>
            <h2 className={css.title}>Категории</h2>
            <Menu> {
                isLoaded && goodCategories.map((item) => (
                    <MenuItem>{
                        item.label
                    }</MenuItem>
                ))
            } </Menu>
        </div>
    )
}
