import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Header from "../Header/Header";
import "./App.css";
import Pagination from "../Pagination/Pagination";
import Main from "../Main/Main";
import Card from "../Card/Card";

import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [moviesPerPage, setMoviesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitMovies, setLimitMovies] = useState(3);
  const [loading, setLoading] = useState(false);
  const [categoria, setCategoria] = useState("now_playing");

  const mostrarMas = () => {
    setLimitMovies(limitMovies + 3);
  };
  

  return (
    <>
      <Header />
      <Navigation />
      <Card />
      <Main
        movies={movies}
        setMovies={setMovies}
        setTrailer={setTrailer}
        limitMovies={limitMovies}
        categoria={categoria}
        setCategoria={setCategoria}
      />
      <Pagination mostrarMas={mostrarMas} />
      <Footer />
    </>
  );
}
export default App;
