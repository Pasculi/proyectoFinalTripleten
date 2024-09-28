import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Header from "../Header/Header";
import "./App.css";
import Pagination from "../Pagination/Pagination";
import Popular from "../Popular/Popular";
import Card from "../Card/Card";
import api from "../../utils/ThirdPartyApi";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import Main from "../Main/Main";

function App() {
  const [search, setSearch] = useState("");

  const [trailer, setTrailer] = useState(null);
  const [moviesPerPage, setMoviesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitMovies, setLimitMovies] = useState(3);
  const [loading, setLoading] = useState(true);
  const [categoria, setCategoria] = useState("");

  const mostrarMas = () => {
    setLimitMovies(limitMovies + 3);
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Navigation />
      <Main limitMovies={limitMovies} />
      {/* <Preloader />
      <Popular
      movies={movies}
      search={search}
      setMovies={setMovies}
      setTrailer={setTrailer}
      limitMovies={limitMovies}
      setLoading={setLoading}
      />
      */}
      <Pagination mostrarMas={mostrarMas} />
      <Footer />
    </>
  );
}
export default App;

