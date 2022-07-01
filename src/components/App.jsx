import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MainPage } from "./MainPage";
import { RegistrationPage } from "./RegistrationPage";
import { CategoryPage } from "./CategoryPage";
import { ProductPage } from "./ProductPage";
import { registrationSelectors } from "store/registrationSlice";
import css from "./style.module.css";
import { Cart } from "components/Cart";


export const App = () => {

  const isAuth = useSelector(registrationSelectors.getAuth);

  return (
    <div className={css.wrapper}>
      <Header />
      <Switch>
      <Route path="/cart/" exact>
          <Cart />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/:categoryTypeId" exact>
          <CategoryPage />
        </Route>
        <Route path="/:categoryTypeId/:id" exact>
          <ProductPage />
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