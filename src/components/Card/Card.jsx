import React from 'react';
import css from "./card.module.css";
import { Col, Row } from 'antd';
import { CardItem } from '.';
import { Link } from 'react-router-dom';

export const Card = ({ popularCategories }) => (

    <div className={css.main}>
        <h1>Популярные Категории:</h1>
        {popularCategories.map((item) => (
            <div className={css.wrapper}>
                <h2 className={css.title}>{item.category.label}</h2> <Row gutter={[16, 24]}>
                    {item.items.slice(0, 8).map((item) => (<Col className="gutter-row" span={6}>
                        <Link to={`/${item.categoryTypeId}/${item.id}`}>
                            <CardItem {...item} />
                        </Link>
                    </Col>
                    ))}
                </Row>
            </div>))}
    </div>
);
