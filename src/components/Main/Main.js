import React from "react";
import "./Main.css";
import Card from "../Card/Card";
import Skeletons from "../Skeletons/Skeletons";

const Main = ({ limitMovies, loading, movies, filterMovies }) => {
  return (
    <>
      <div className="main" id="header-start">
        <div className="main-container">
          {loading
            ? [1, 2, 3].map((_, index) => {
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
    </>
  );
};

export default Main;
