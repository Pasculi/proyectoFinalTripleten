import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Header from "../Header/Header";
import { API_KEY, TOKEN, URL_BASE, URL_IMAGE } from "../../utils/constants";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({});
  const [playing, serPlaying] = useState(false);


  //Mostrar el detalle de una movie
const type = search ? 'search' : 'discover'

  useEffect(() => {
    const fetchMovies = fetch(`${URL_BASE}/${type}/movie?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const allMovie = data.results
        setMovies(allMovie);
        console.log(allMovie);
  })
  }, []);
  
  return (
    <div className="App">
      {
        movies?.map((movie) => (
          <div key={movie.id}>
            <img className='image-poster' src={`${URL_IMAGE}${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <button onClick={() => setTrailer(movie.trailer)}>Ver trailer</button>
          </div>
          ))
      }
    </div>
  );
}
export default App;
