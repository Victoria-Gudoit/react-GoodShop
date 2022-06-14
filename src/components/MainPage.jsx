import React from "react";
import css from "./style.module.css";
import { MenuOriginal } from "./Menu";
import { Banner } from "./Banner";
import { LoginPage } from "./LoginPage";
import { GoodCategory } from "./GoodCategory";

export const MainPage = () => {
  return (
    <div className={css.wrapper}>
      <LoginPage />
      <div className={css.block}>
        <MenuOriginal />
          <Banner />
      </div>
    <GoodCategory/>
    </div>
  );
};
