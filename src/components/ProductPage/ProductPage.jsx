import React, { useEffect } from 'react';
import { useParams, useHistory  } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import 'antd/dist/antd.css';
import { Card as CardAntd } from 'antd';
import 'antd/dist/antd.css';
import { productPageSelectors } from 'store/productPageSlice';
import { fetchProduct } from 'store/productPageSlice';
import css from "./product.module.css"
import { Loader } from "../common"


export const ProductPage = () => {
    const { id } = useParams()

    const history = useHistory();

    const products = useSelector(productPageSelectors.getProduct)

    const isLoaded = useSelector(productPageSelectors.isLoaded)
    const isLoading = useSelector(productPageSelectors.isLoading)
    const isError = useSelector(productPageSelectors.isError)

    const dispatch = useDispatch();

    const getProduct = (id) => dispatch(fetchProduct(id))

    useEffect(() => {
        getProduct(id)
    }, [])


    return (
        <div>
            {isLoading && <Loader />}
            {isLoaded &&
                products.map((product) => (<div className="site-card-border-less-wrapper">
                    <div className={css.wrapper}>
                        <CardAntd
                            title={product.label}
                            bordered={false}
                            style={{
                                width: 500,
                            }}>
                            <img className={css.img} alt="product" src={product.img} />
                            <p>{product.description}</p>
                            <p>{`${product.price} $`}</p>
                            <button type='button'>Добавить в корзину</button>
                        </CardAntd></div>
                </div>
                ))}
            {isError && <button onClick={() => history.goBack()}>Продукт не найден, вернуться назад</button>}
        </div>
    )
};