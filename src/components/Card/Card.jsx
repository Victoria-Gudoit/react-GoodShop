import React from 'react';
import css from "./card.module.css";
import { Col, Row } from 'antd';
import { CardItem } from '.';

export const Card = (props) => (
    <div className={css.main}>

        <h1>Популярные Категории:</h1>
        {props.popularCategories.map((item) => (
            <div className={css.wrapper}>
                <h2 className={css.title}>{item.category.label}</h2> <Row gutter={[16, 24]}>
                    {item.items.slice(0, 8).map((item) => (<Col className="gutter-row" span={6}>
                        <CardItem {...item}/>
                      </Col>
                    ))}
                </Row>
                </div>))}
                </div>
);
