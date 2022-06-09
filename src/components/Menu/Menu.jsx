import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { BarsOutlined } from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Каталог", "sub2", <BarsOutlined />, [
    getItem("улалала", "sub3", null, [
      getItem("оаоаоаоа", "7"),
      getItem("Фэнтези", "8"),
    ]),
    getItem("Бизнес-Литература", "sub4", null, [
      getItem("Саморазвитие", "9"),
      getItem("Менеджмент", "10"),
    ]),
  ]),
];

export const MenuOriginal = () => (
  <div>
    <Menu
      style={{
        width: 256,
      }}
      mode="horizontal"
      items={items}
    />
  </div>
);
