import css from "./loginPage.module.css";
import { Link } from "react-router-dom";
import { GoodsSelectors } from "store";
import { useSelector } from "react-redux";

export const LoginPage = () => {
  const isAuth = useSelector(GoodsSelectors.getAuth);

  return (
    <div className={css.wrapper}>
      {isAuth ? (
        <button className={css.btn}>Выйти</button>
      ) : (
        <div>
          <button className={css.btn}>Войти</button>
          <Link to={"/registration"} className={css.btn}>
            Зарегистрироваться
          </Link>
        </div>
      )}
    </div>
  );
};
