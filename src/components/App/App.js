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
  

  useEffect(() => {
    const fetchMovies = fetch(`${URL_BASE}/movie/560?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  
  return (
    <div className="App">
      <div>{<img src={`${URL_IMAGE}${movies.poster_path}`}></img>}</div>
    </div>
  );
}
export default App;
