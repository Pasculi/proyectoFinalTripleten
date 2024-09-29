import React, { useEffect} from "react";
import { URL_IMAGE } from "../../utils/constants";
import "./Popular.css";
import api from "../../utils/ThirdPartyApi";


const Popular = ({
  movies,
  setMovies,
  setTrailer,
  limitMovies,
  setLoading,
  loading
}) => {


  useEffect(() => {
    
    (api.getPopular())
    .then((data) => {
      const allMovies = data.results;
      console.log(allMovies);
      setMovies(allMovies);
    })
      .catch((error) => console.error(error));
    setLoading(false);
}, [setMovies]);

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

export default Popular;


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