import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Header from "../Header/Header";
import "./App.css";
import Pagination from "../Pagination/Pagination";
import api from "../../utils/ThirdPartyApi";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";

function App() {
  const [searchKey, setSearchKey] = useState("");

  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: 'Loading Movies' })
  const [playing, setPlaying] = useState(false)

  const [moviesPerPage, setMoviesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(20);
  const [limitMovies, setLimitMovies] = useState(3);
  const [loading, setLoading] = useState(true);
  const [categoria, setCategoria] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const findMovies = () => {
    api
      .getFindOne(searchKey)
      .then((data) => {
        const allMovies = data.results;
        console.log(data.results);
        setMovies(allMovies);
        setMovie(allMovies[0]);
      })
      .catch((error) => console.error(error));
  };

  console.log(searchKey)
  const filterMovies = movies.filter((movies) =>
    movies.title.toLowerCase().includes(searchKey.toLowerCase())
  );

  console.log(filterMovies);


  const handleSearchMovie = (e) => {
    e.preventDefault();
    console.log(searchKey);
    findMovies(searchKey);
  };

  useEffect(() => {
    findMovies();
    setLoading(loading);
  }, []);


  const mostrarMas = () => {
    setLimitMovies(limitMovies + 3);
  };


  return (
    <>
      <div className="app">
        <Header
          handleSearchMovie={handleSearchMovie}
          setSearchKey={setSearchKey}
          searchKey={searchKey}
        />
        <Navigation />
        <Main
          loading={loading}
          setLoading={setLoading}
          limitMovies={limitMovies}
          setLimitMovies={setLimitMovies}
          currentPage={currentPage}
          movies={movies}
          filterMovies={filterMovies}
        />
        <Pagination
          /* chargePage={chargePage} */
          limitMovies={limitMovies}
          mostrarMas={mostrarMas}
        />
        <Footer />
      </div>
    </>
  );
}
export default App;
