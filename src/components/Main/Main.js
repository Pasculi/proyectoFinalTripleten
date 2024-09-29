import React, { useEffect, useState } from "react";
import "./Main.css";
import api from "../../utils/ThirdPartyApi";
import Card from "../Card/Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Main = ({ limitMovies, loading, setLoading }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api
      .getPopular()
      .then((data) => {
        const allMovies = data.results;
        setMovies(allMovies);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const skeletons = Array(limitMovies).fill(0);

  return (
    <>
      <div className="main" id="header-start">
        <div className="main-container">
          {loading
            ? movies.map((_, index) => <Skeleton key={index} />)
            : movies?.slice(0, limitMovies).map((movie, index) => {
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
