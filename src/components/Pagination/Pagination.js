import React from "react";
import "./Pagination.css";



const Pagination = ({ mostrarMas, limitMovies }) => {

  console.log(limitMovies);
  return (
    <>
      <nav className="pagination">
        <div selector="btn-mas">
          {limitMovies === 21 ? (
            ""
          ) : (
            <a href="#" className="pagination-btn more" onClick={mostrarMas}>
              Ver mas...
            </a>
          )}
        </div>
      </nav>
      <span id="btn-mas"></span>
    </>
  );
};

export default Pagination;
