import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Header from "../Header/Header";
import "./App.css";
import Pagination from "../Pagination/Pagination";
import Main from "../Popular/Popular";
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
  const [categoria, setCategoria] = useState("");

  const mostrarMas = () => {
    setLimitMovies(limitMovies + 3);
  };
  
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Navigation />
      <Main
        movies={movies}
        search={search}
        setMovies={setMovies}
        setTrailer={setTrailer}
        limitMovies={limitMovies}
      />

      <Pagination mostrarMas={mostrarMas} />
      <Footer />
    </>
  );
}
export default App;
{<div className="hero"></div>}