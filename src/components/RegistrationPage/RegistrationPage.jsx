import { useState } from "react";
import css from "./registration.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction, fetchUser } from "store/registrationSlice";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";

export const RegistrationPage = () => {
  const [login, setLogin] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const checkAuth = () => dispatch(authAction.checkAuth());

  const handleRegistration = () => {
    dispatch(
      fetchUser({
        login,
        email,
        password,
      })
    );
  };

  const validate = Yup.object({
    firstName: Yup.string()
      .min(2, "Не меньше двух символов!")
      .required("First name is required"),
    lastName: Yup.string().min(2, "Не меньше двух символов!"),
    email: Yup.string()
      .email("Email некорректный!")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Пароль не меньше 6 символов!")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Пароли должны совпадать!")
      .required("Password is required"),
  });

  const handleSubmit = () => {
    checkAuth();
  };

  return (
    <div>
      <div className={css.wrapper}>
        <form className={css.loginForm}>
          <h1 className={css.title}>Регистрация</h1>
          <div>
            <input
              className={css.loginFormInput}
              type="text"
              placeholder="first name"
              onChange={(event) => setLogin(event.target.value)}
              value={login}
              required
            />
          </div>
          <div>
            <input
              className={css.loginFormInput}
              type="text"
              placeholder="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
          </div>
          <div>
            <input
              className={css.loginFormInput}
              type="password"
              placeholder="Пароль"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            />
          </div>
          <div className={css.block}>
            <Link
              to={"/login"}
              onClick={handleRegistration}
              className={css.btn}
              type="submit"
            >
              Зарегистрироваться
            </Link>
            <Link to={"/"} className={css.btn} type="reset">
              Отмена
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
