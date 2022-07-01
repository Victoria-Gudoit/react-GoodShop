import { useParams, Link } from "react-router-dom";
import css from "./search.module.css"

export const DropDownSearch = (props) => {
    const { categoryTypeId } = useParams()
  return (
    <ul className={css.wrapper}>
      {props.options ? props.options.map((item) => (
        <li>
          <Link to={`/${categoryTypeId}/${item.id}`}>
            {item.label}
          </Link>
        </li>
      )) : <li>Ничего не найдено, попробуйте изменить запрос</li> }
    </ul>
  );
};