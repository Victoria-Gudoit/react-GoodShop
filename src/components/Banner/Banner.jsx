import React from "react";
import "antd/dist/antd.css";
import css from "./banner.module.css";

import { Carousel } from "antd";

export const Banner = () => (
  <div className={css.block}>
  <Carousel autoplay>
    <div className={css.banner_one}></div>
    <div className={css.banner_two}></div>
    <div className={css.banner_three}></div>
  </Carousel></div>
);
