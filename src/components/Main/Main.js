import React, { useEffect, useState } from "react";
import { API_KEY, TOKEN, URL_BASE, URL_IMAGE } from "../../utils/constants";
import "./Main.css";
import api from "../../utils/ApiMovie";

const Main = ({
  movies,
  setMovies,
  setTrailer,
  limitMovies,
  categoria,
  setCategoria,
}) => {


useEffect(() => {
  setCategoria(categoria);
  fetch(api.getMovies(categoria))
    .then((res) => res.json())
    .then((data) => {
      const allMovies = data.results;
      console.log(allMovies);
      setMovies(allMovies);
    })
    .catch((error) => console.error(error));
}, [setCategoria]);

  return (
    <>
      <div className="card-container">
        {movies?.slice(0, limitMovies).map((movie) => (
          <>
            <div className="card-item" key={movie.id}>
              <div className="card-footer-rating">
                {movie.vote_average.toFixed(1)}
              </div>
              <img
                className="card-image-poster"
                src={`${URL_IMAGE}${movie.poster_path}`}
                alt={movie.title}
              />

              <div className="card-title">
                <h4>{movie.title}</h4>
              </div>
              <div className="card-footer">
                <div>
                  <button
                    className="card-btn"
                    onClick={() => setTrailer(movie.trailer)}
                  >
                    Ver trailer
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Main;


//Mostrar el detalle de una movie

  /* const fetchMovies = async () => {
    const type = search ? "search" : "upcoming";
    await fetch(`${URL_BASE}/movie/${type}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const allMovie = data.results;
        setMovies(allMovie);
        console.log(allMovie);
      });
  }; */

  /*   useEffect(() => {
    fetchMovies();
  }, []);
 */