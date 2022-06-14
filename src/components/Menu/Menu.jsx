import React from "react";
import "antd/dist/antd.css";
import {Menu} from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import {useEffect} from "react";
import {GoodsSelectors} from "store";
import {fetchGoodCategories} from "store/goodCategoriesSlice";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import css from "./menu.module.css";

export const MenuOriginal = () => {

    const goodCategoriees = useSelector(GoodsSelectors.getGoodCategories)
    const isLoaded = useSelector(GoodsSelectors.isLoaded)

    const dispatch = useDispatch();

    const getGoodCategories = () => dispatch(fetchGoodCategories())

    useEffect(() => {
        getGoodCategories()
    }, [])


    return (
        <div>
            <h2 className={
                css.title
            }>Категории</h2>
            <Menu> {
                isLoaded && goodCategoriees.map((item) => (
                    <MenuItem>{
                        item.label
                    }</MenuItem>
                ))
            } </Menu>
        </div>
    )
}
