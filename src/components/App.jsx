import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import css from "./style.module.css";
import { GoodsSelectors } from "store";
import { useSelector } from "react-redux";
import { MainPage } from "./MainPage";
import { RegistrationPage } from "./RegistrationPage";

export const App = () => {
  const isAuth = useSelector(GoodsSelectors.getAuth);

  return (
    <div className={css.wrapper}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        {isAuth && <Redirect to="/" />}
        <Route path="/registration" exact>
          <RegistrationPage />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};
