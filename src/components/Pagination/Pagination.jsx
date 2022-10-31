import React from "react";
import scss from "./pagination.module.scss";
import ReactPaginate from "react-paginate";

export const Pagination = ({ countOfPages, onChangePage, offset }) => {
  return (
    <ReactPaginate
      className={scss.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageCount={countOfPages}
      forcePage={offset - 1}
    />
  );
};
