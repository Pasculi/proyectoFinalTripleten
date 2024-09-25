import React, { useState } from "react";
import YouTube from "react-youtube";
import Header from "../Header/Header";
import "./App.css";
import Pagination from "../Pagination/Pagination";
import Main from "../Main/Main";
import Card from "../Card/Card";
import { api } from "../../utils/ApiMovie";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [moviesPerPage, setMoviesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitMovies, setLimitMovies] = useState(3);
  const [loading, setLoading] = useState(false);

  const mostrarMas = () => {
    setLimitMovies(limitMovies + 3);
  };


  return (
    <>
      <Card />
      <Main
        search={search}
        setSearch={setSearch}
        movies={movies}
        setMovies={setMovies}
        setTrailer={setTrailer}
        limitMovies={limitMovies}
        setLoading={setLoading}
      />
      <Pagination mostrarMas={mostrarMas} />
    </>
  );
}
export default App;
