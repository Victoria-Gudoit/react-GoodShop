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
import { GoodsPage } from "./GoodsPage";

export const App = () => {

  const isAuth = useSelector(registrationSelectors.getAuth);

  return (

    <div className={css.wrapper}>
      <Header />
      <Switch>
      <Route path="/cart" exact>
          <Cart />
        </Route> 
        <Route path="/goods" exact>
          <GoodsPage />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
         {isAuth && <Redirect to="/" />}
        <Route path="/registration" exact>
          <RegistrationPage />
        </Route>
        <Route path="/:categoryTypeId" exact>
          <CategoryPage />
        </Route>
        <Route path="/:categoryTypeId/:id" exact>
          <ProductPage />
        </Route>

        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};