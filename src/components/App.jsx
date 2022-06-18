import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import css from "./style.module.css";
import { registrationSelectors } from "store/registrationSlice";
import { useSelector } from "react-redux";
import { MainPage } from "./MainPage";
import { RegistrationPage } from "./RegistrationPage";
import { CategoryPage } from "./CategoryPage";
import { Menu } from "./Menu";

export const App = () => {
  const isAuth = useSelector(registrationSelectors.getAuth);

  return (
    <div className={css.wrapper}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/:id" exact>
          <CategoryPage />
        </Route>
        <Route path="/:id" exact>
          <Menu />
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
