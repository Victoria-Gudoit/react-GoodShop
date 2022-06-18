import { Link } from "react-router-dom";
import css from "./header.module.css";

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Link to={"/"} className={css.logo}>
          Book Friend
        </Link>
        <ul className={css.list}>
          {["О нас", "Контакты", "Корзина"].map((route) => (
            <li key={route}>
              <Link className={css.link} to={`/${route}`}>
                {route}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
