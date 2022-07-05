import 'antd/dist/antd.css';
import { Card as CardAntd } from 'antd';
import css from "./card.module.css";
const { Meta } = CardAntd;

export const CardItem = ({ img, label, price }) => {
    return (
        <CardAntd
            hoverable
            style={{
                width: 200,
            }}
            cover={<img className={css.img} alt="example" src={img} />}>
            <Meta title={label} description={price} />
        </CardAntd>
    )
}