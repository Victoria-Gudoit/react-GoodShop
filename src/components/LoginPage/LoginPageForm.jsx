import React from "react";
import css from "./loginPage.module.css";
import { useState } from "react";
import { authAction, fetchUserr } from "store/registrationSlice";
import { useDispatch } from "react-redux";

export const LoginPageForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const checkAuth = () => dispatch(authAction.checkAuth());

  const handleLogin = () => {
    dispatch(fetchUserr({ login, password }));
    checkAuth();
  };

  return (
    <h1>
      <form className={css.loginForm}>
        <h2>Авторизация</h2>
        <div>
          <input
            className={css.loginFormInput}
            type="text"
            placeholder="Логин"
            onChange={(event) => setLogin(event.target.value)}
            value={login}
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
        <div>
          <button onClick={handleLogin} className={css.blackBtn} type="submit">
            Войти
          </button>
        </div>
      </form>
    </h1>
  );
};
