import 'antd/dist/antd.css';
import { Card as CardAntd } from 'antd';
import css from "./card.module.css";
const { Meta } = CardAntd;

export const CardItem = (props) => {
    return (
        <CardAntd
        hoverable
        style={{
            width: 200,}}
        cover={<img className={css.img} alt="example" src={props.img} />}>
        <Meta title={props.label} description={props.price} />
    </CardAntd>  
    )
}