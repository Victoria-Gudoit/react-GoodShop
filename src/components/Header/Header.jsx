import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import { getProductByText } from "api/Api";
import css from "./header.module.css";
import { Input, DropDownSearch } from "../common"
import { useSelector } from "react-redux";
import { cartSelectors} from 'store/cartSlice';
import { ShoppingCartOutlined } from "@ant-design/icons";

export const Header = () => {
  const [text, setText] = useState("");

  const goodInCart = useSelector(cartSelectors.getCart);

  const [options, setOptions] = useState([])
  const [dropDownSearch, setDropDownSearch] = useState(false)

  const debouncedItems = useCallback(debounce((text) => {
    getProductByText(text).then((r) => setOptions(r.items)
    )
  }, 1000), [])

  useEffect(() => {
    if (text.length > 2) {
      debouncedItems(text)
      setDropDownSearch(true)
    } else {
      setDropDownSearch(false)
    }

  }, [text]);

  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Link to={"/"} className={css.logo}>
          Book Friend
        </Link>
        <div>
          <Input text={text} setText={setText} />
          {dropDownSearch && <DropDownSearch options={options} />}
        </div>

        <ul className={css.list}>
          {["cart", 'goods'].map((route) => (
            <li key={route}>
              <Link className={css.link} to={`/${route}`}>
                {route === 'cart' ? <> <ShoppingCartOutlined style={{ fontSize: '23px' }} /> {goodInCart?.length ? goodInCart?.length : ''} </> : 'Все товары'}
                
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};