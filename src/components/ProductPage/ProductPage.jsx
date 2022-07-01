import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import 'antd/dist/antd.css';
import { Card as CardAntd } from 'antd';
import 'antd/dist/antd.css';
import { productPageSelectors, fetchProduct } from 'store/productPageSlice';
import { cartSelectors, cartActions } from 'store/cartSlice';
import css from "./product.module.css"
import { Loader } from "../common"
import { Header } from 'components/Header';

export const ProductPage = () => {

    const { id } = useParams()

    const history = useHistory();

    const product = useSelector(productPageSelectors.getProduct)

    const good = useSelector(cartSelectors.getGoodById(id));

    const count = good ? good.count : 0


    useEffect(() => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ good, count },
            )

        };
        fetch('/api/cart', requestOptions)
    }, [good]);

    const isLoaded = useSelector(productPageSelectors.isLoaded)
    const isLoading = useSelector(productPageSelectors.isLoading)
    const isError = useSelector(productPageSelectors.isError)

    const dispatch = useDispatch();

    const getProduct = (id) => dispatch(fetchProduct(id))

    const handleAddToCart = (product) => {
        dispatch(cartActions.addToCart(product))
    }

    const handleRemoveFromCart = (product) => {
        dispatch(cartActions.removeFromCart(product))
    }

    useEffect(() => {
        getProduct(id)
    }, [id])

    return (
        <div>
            {isLoading && <Loader />}
            {isLoaded &&
                product.map((product) => (<div className="site-card-border-less-wrapper">
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
                            <button onClick={() => handleAddToCart(product)} type='button'>Добавить в корзину</button>
                            {good && (<><Header counter={good.count} />
                                <button onClick={() => handleRemoveFromCart(product)}>Удалить с корзины</button></>)}
                        </CardAntd></div>
                </div>
                ))}
            {isError && <button onClick={() => history.goBack()}>Продукт не найден, вернуться назад</button>}
        </div>
    )
};