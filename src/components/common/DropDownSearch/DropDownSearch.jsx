import {  Link } from "react-router-dom";
import css from "./search.module.css"

export const DropDownSearch = ({options}) => {
  
  return (
    <ul className={css.wrapper}>
      {options.length ? options.map((item) => (
        <li key={item.id}>
          <Link to={`/${item.categoryTypeId}/${item.id}`}>
            {item.label}
          </Link>
        </li>
      )) : <li>Ничего не найдено, попробуйте изменить запрос</li> }
    </ul>
  );
};