import css from "./loginPage.module.css";
import { Link } from "react-router-dom";
import { GoodsSelectors } from "store";
import { useSelector } from "react-redux";

export const LoginPage = () => {
  const checkAuth = useSelector(GoodsSelectors.checkAuth);

  return (
    <div>
      {checkAuth ? (
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
