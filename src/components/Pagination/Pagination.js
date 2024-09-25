import React from "react";
import "./Pagination.css";

const Pagination = ({ mostrarMas }) => {
  return (
    <>
      <nav className="pagination">
        <a href="#" className="pagination-btn more" onClick={mostrarMas}>
          Ver mas...
        </a>
      </nav>
    </>
  );
};

export default Pagination;
