import React from "react";
import css from "./style.module.css";
import { MenuOriginal } from "./Menu";
import { Banner } from "./Banner";
import { LoginPage } from "./LoginPage";

export const MainPage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.block}>
        <MenuOriginal />
        <LoginPage />
      </div>
      <Banner />
    </div>
  );
};
