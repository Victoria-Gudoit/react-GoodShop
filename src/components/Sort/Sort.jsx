import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterSelectors, filterActions } from "../../store/filterSlice";
import scss from "./sort.module.scss";

const sortList = [
  { name: "по цене ↓", sortProperty: "price" },
  { name: "по цене ↑", sortProperty: "-price" },
];

export const Sort = () => {
  const [open, setOpen] = useState(false);
  const sortRef = useRef();

  const sort = useSelector(FilterSelectors.getSort);

  const dispatch = useDispatch();

  const onClickListItem = (obj) => {
    dispatch(filterActions.setSortType(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className={scss.sort}>
      <div className={scss.label}>
        <b>Сортировка: </b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className={scss.popup}>
          <ul>
            {sortList.map((obj, index) => (
              <li key={index} onClick={() => onClickListItem(obj)}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
