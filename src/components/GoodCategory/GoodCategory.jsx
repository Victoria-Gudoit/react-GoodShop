import { useEffect } from "react";
import { CardOriginal } from "components/Card";
import { useDispatch, useSelector } from "react-redux";
import { popularCategoriesSelectors } from "store/popularCategoriesSlice";
import { fetchPopularCategories } from "store/popularCategoriesSlice";
import { Loader } from "../common"

export const GoodCategory = () => {

    const popularCategories = useSelector(popularCategoriesSelectors.getPopularCategories)

    const isLoaded = useSelector(popularCategoriesSelectors.isLoaded)
    const isLoading = useSelector(popularCategoriesSelectors.isLoading)
    const isError = useSelector(popularCategoriesSelectors.isError)

    const dispatch = useDispatch();

    const getPopularCategories = () => dispatch(fetchPopularCategories())

    useEffect(() => {
        getPopularCategories()
    }, [])

    return (
        <div>
            {isLoading && <Loader />}
            {isLoaded && <CardOriginal popularCategories={popularCategories} />}
            {isError && <p>Ой, попробуйте еще раз</p>}
        </div>
    )
}
