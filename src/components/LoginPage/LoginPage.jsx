import css from "./loginPage.module.css";
import { Link } from "react-router-dom";
import { registrationSelectors } from "store/registrationSlice";
import { useSelector } from "react-redux";

export const LoginPage = () => {
  const isAuth = useSelector(registrationSelectors.getAuth);

  return (
    <div className={css.wrapper}>
      {isAuth ? (
        <button className={css.btn}>Выйти</button>
      ) : (
        <div>
          <Link to={"/login"} className={css.btn}>
            Войти
          </Link>
          <Link to={"/registration"} className={css.btn}>
            Зарегистрироваться
          </Link>
        </div>
      )}
    </div>
  );
};
