import React from "react";
import "./Main.css";
import Card from "../Card/Card";
import Skeletons from "../Skeletons/Skeletons";
import Pagination from "../Pagination/Pagination";
import DetailsMovie from "../DetailsMovie/DetailsMovie";
import { Route, Routes } from "react-router-dom";

const Main = ({ limitMovies, loading, mostrarMas, filterMovies }) => {
  return (
    <>
      {/* <Routes>
        <Route path=":id" element={<DetailsMovie />} />
      </Routes> */}
      <div className="main" id="header-start">
        <div className="main-container">
          {loading
            ? [1, 2, 3].map((_, index) => {
                return <Skeletons key={index} />;
              })
            : filterMovies?.slice(0, limitMovies).map((movie, index) => {
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
      <Pagination limitMovies={limitMovies} mostrarMas={mostrarMas} />
    </>
  );
};

export default Main;
