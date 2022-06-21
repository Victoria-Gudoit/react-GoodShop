import React, { useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { Card as CardAntd } from 'antd';
import css from "../Card/card.module.css";
import { categorySelectors, fetchCategory } from 'store/categoryPageSlice';
import { Loader } from '../common';
const { Meta } = CardAntd;

export const CategoryPage = () => {
    const { categoryTypeId } = useParams()

    const history = useHistory();

    const category = useSelector(categorySelectors.getCategory)

    const isLoaded = useSelector(categorySelectors.isLoaded)
    const isLoading = useSelector(categorySelectors.isLoading)
    const isError = useSelector(categorySelectors.isError)

    const dispatch = useDispatch();

    const getCategory = (categoryTypeId) => dispatch(fetchCategory(categoryTypeId))

    useEffect(() => {
        getCategory(categoryTypeId)
    }, [])

    return (
        <div className={css.main}>
            <Row gutter={[16, 24]}>
                {isLoading && <Loader />}
                {isLoaded && category.map((item) => (
                    <Col className="gutter-row" span={6}>
                        <div className={css.wrapper}>
                            <Link to={`/${categoryTypeId}/${item.id}`}> <CardAntd
                                hoverable
                                style={{
                                    width: 200,
                                }}
                                cover={<img className={css.img} alt="example" src={item.img} />}>
                                <Meta title={`${item.label} $`} description={item.price} />
                            </CardAntd></Link>
                        </div>
                    </Col>
                ))}  </Row>
            {isError && <button onClick={() => history.goBack()}>Категория не найдена, вернуться назад</button>}
        </div>
    )
};