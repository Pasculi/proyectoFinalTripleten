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
import Main from "../Main/Main";

function App() {
  const [search, setSearch] = useState("");

  const [trailer, setTrailer] = useState(null);
  const [moviesPerPage, setMoviesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitMovies, setLimitMovies] = useState(3);
  const [loading, setLoading] = useState(true);
  const [categoria, setCategoria] = useState("");

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000); // 2 segundos de delay simulando la carga
  return () => clearTimeout(timer);
}, []);

   const mostrarMas = () => {
     setLimitMovies(limitMovies + 3);
  };
  
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="app">
        <Header handleSearch={handleSearch} />
        <Navigation />
        <Main
          loading={loading}
          setLoading={setLoading}
          limitMovies={limitMovies}
          setLimitMovies={setLimitMovies}
        />
        <Pagination limitMovies={limitMovies} mostrarMas={mostrarMas} />
        <Footer />
      </div>
    </>
  );
}
export default App;

