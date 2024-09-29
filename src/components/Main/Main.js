import React, { useEffect, useState } from "react";
import "./Main.css";
import api from "../../utils/ThirdPartyApi";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const Main = ({ limitMovies }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api
      .getPopular()
      .then((data) => {
        const allMovies = data.results;
        setMovies(allMovies);
      })
      .catch((error) => console.error(error));
  }, []);

 

  return (
    <>
      <div className="main">
        <h1>Movies</h1>
        <div className="main-container">
          {movies?.slice(0, limitMovies).map((movie, index) => {
            return (
              <Card
                key={index}
                id={movie.id}
                title={movie.original_title}
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
