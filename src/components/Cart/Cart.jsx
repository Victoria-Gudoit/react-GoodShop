import React, { useEffect } from "react"
import 'antd/dist/antd.css';
import { Table as TableAntd, Col, Row } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, cartSelectors, addToCart, removeFromCart } from "store/cartSlice";
import css from "./cart.module.css"
import { Loader } from '../common';

export const Cart = () => {

  const goodInCart = useSelector(cartSelectors.getCart)
console.log(goodInCart);
  const isLoaded = useSelector(cartSelectors.isLoaded)
  const isLoading = useSelector(cartSelectors.isLoading)
  const isError = useSelector(cartSelectors.isError)

  const dispatch = useDispatch();

  const getCart = () => dispatch(fetchCart())

  useEffect(() => {
    getCart()
  }, [])

  const columns = [
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
      render: (label, e) => (
        <p>{e.good?.label}</p>
      )
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price, e) => (
        <p>{e.good?.price}</p>
      )
    },

    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Add',
      dataIndex: 'add',
      key: 'add',
      render: (add, e) => (
        <button onClick={() => dispatch(addToCart(e.good))} type='button'>+</button>
      )
    },
    {
      title: 'Remove',
      dataIndex: 'remove',
      key: 'remove',
      render: (remove, e) => (
        <button onClick={() => dispatch(removeFromCart(e.good))} type='button'>-</button>
      )
    },
  ];

  if (goodInCart?.length !== 0) {
    return (
      <div className={css.wrapper}>
         {isLoading && <Loader />}
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            {isLoaded && <TableAntd columns={columns} dataSource={goodInCart} />}
            <button className={css.button} type="button">Купить</button>
          </Col>
        </Row>
        {isError && <p>Товар в корзине не найден, попробуйте позже</p>}
      </div>
    )
  } 
    return <h2>Корзина пуста</h2>
  
}

