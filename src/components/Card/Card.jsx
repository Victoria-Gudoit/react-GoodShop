import React from 'react';
import 'antd/dist/antd.css';
import { Card as CardAntd } from 'antd';
import css from "./card.module.css";
import { Col, Row } from 'antd';
const { Meta } = CardAntd;

export const Card = (props) => (
    <div className={css.main}>

        <h1>Популярные Категории:</h1>
        {props.popularCategories.map((item) => (
            <div className={css.wrapper}>
                <h2 className={css.title}>{item.category.label}</h2> <Row gutter={[16, 24]}>
                    {item.items.slice(0, 8).map((i) => (<Col className="gutter-row" span={6}>
                        <CardAntd
                            hoverable
                            style={{
                                width: 200,}}
                            cover={<img className={css.img} alt="example" src={i.img} />}>
                            <Meta title={i.label} description={`${i.price} $`} />
                        </CardAntd> </Col>
                    ))}
                </Row>
                </div>))}
                </div>
);
