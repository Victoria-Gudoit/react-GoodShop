import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Card as CardAntd } from 'antd';
import css from "../Card/card.module.css";
import { Col, Row } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { categorySelectors, fetchCategory } from 'store/categoryPageSlice';
import { Loader } from '../common';
const { Meta } = CardAntd;

export const CategoryPage = () => {
    const { id } = useParams()

    const category = useSelector(categorySelectors.getCategory)

    const isLoaded = useSelector(categorySelectors.isLoaded)
    const isLoading = useSelector(categorySelectors.isLoading)
    const isError = useSelector(categorySelectors.isError)

    const dispatch = useDispatch();

    const getCategory = (id) => dispatch(fetchCategory(id))

    useEffect(() => {
        getCategory(id)
    }, [])


    return (
        <div className={css.main}><Row gutter={[16, 24]}>
            {isLoading && <Loader />}
            {isLoaded && category.map((item) => (<Col className="gutter-row" span={6}>
                <div className={css.wrapper}>
                    <h2 className={css.title}>{item.label}</h2>
                    <CardAntd
                        hoverable
                        style={{
                            width: 200,
                        }}
                        cover={<img className={css.img} alt="example" src={item.img} />}>
                        <Meta title={`${item.price} $`} description={item.description} />
                    </CardAntd>
                </div> </Col>
            ))}  </Row>
            {isError && <p>Ой, попробуйте еще раз</p>}
        </div>
    )
};
