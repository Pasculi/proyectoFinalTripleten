import React from "react";
import "./Main.css";
import Card from "../Card/Card";
import Skeletons from "../Skeletons/Skeletons";
import Pagination from "../Pagination/Pagination";


const Main = ({ limitMovies, loading, mostrarMas, movies }) => {
  const dinamicArray = Array.from(Array(limitMovies).keys());

  return (
    <>
      <div className="main" id="header-start">
        <div className="main-container">
          {loading
            ? dinamicArray.map((_, index) => {
                return <Skeletons key={index} />;
              })
            : movies?.slice(0, limitMovies).map((movie, index) => {
                return (
                  <Card
                    key={index}
                    id={movie.id}
                    title={movie.title}
                    vote={movie.vote_average}
                    poster={movie.poster_path}
                  />
                );
              })}
        </div>
      </div>
      {movies?.length >= 0 ? (
        <Pagination limitMovies={limitMovies} mostrarMas={mostrarMas} />
      ) : (
        ""
      )}
    </>
  );
};

export default Main;
