import React, { useEffect, useState } from "react";
import "./Main.css";
import api from "../../utils/ThirdPartyApi";
import Card from "../Card/Card";
import Skeletons from "../Skeletons/Skeletons";


const Main = ({ limitMovies, loading, setLoading, currentPage }) => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    api
    .getPopular(currentPage)
    .then((data) => {
      const allMovies = data.results;
      setMovies(allMovies);
        setLoading(loading);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="main" id="header-start">
        <div className="main-container">
          {loading ? [1,2,3].map((_, index) => {
            return (
             
              <Skeletons />
           ) 
          }
          ) : movies?.slice(0, limitMovies).map((movie, index) => {
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
