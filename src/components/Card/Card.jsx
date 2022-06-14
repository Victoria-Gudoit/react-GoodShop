import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import css from "./card.module.css";
const { Meta } = Card;

export const CardOriginal = (props) => (
    <div className={css.main}>
        <h1>Популярные Категории:</h1>
        {props.popularCategories.map((item) => (
            <div className={css.wrapper}>
                <h2 className={css.title}>{item.category.label}</h2>
                {item.items.map((i) => (
                    <Card
                        hoverable
                        style={{
                            width: 200,
                        }}
                        cover={<img className={css.img} alt="example" src={i.img} />}
                    >
                        <Meta title={i.label} description={i.price} />
                    </Card>
                ))}
            </div>))}</div>
);
