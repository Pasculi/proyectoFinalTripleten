import React, { useEffect, useState } from "react";
import "./App.css";
import api from "../../utils/ThirdPartyApi";
import Main from "../Main/Main";
import { Route, Routes } from "react-router-dom";
import TopRate from "../TopRate/TopRate";
import About from "../About/About";
import Upcoming from "../Upcomming/Upcoming";
import Layout from "../Layout/Layout";
import DetailsMovie from "../DetailsMovie/DetailsMovie";

function App() {
  const [searchKey, setSearchKey] = useState("");

  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);

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

  console.log(searchKey);
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
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              handleSearchMovie={handleSearchMovie}
              setSearchKey={setSearchKey}
              searchKey={searchKey}
            />
          }
        >
          <Route
            index
            element={
              <Main
                loading={loading}
                setLoading={setLoading}
                limitMovies={limitMovies}
                setLimitMovies={setLimitMovies}
                currentPage={currentPage}
                movies={movies}
                filterMovies={filterMovies}
                mostrarMas={mostrarMas}
              />
            }
          />
          <Route
            path="popular/*"
            element={
              <Main
                loading={loading}
                setLoading={setLoading}
                limitMovies={limitMovies}
                setLimitMovies={setLimitMovies}
                currentPage={currentPage}
                movies={movies}
                filterMovies={filterMovies}
                mostrarMas={mostrarMas}
              />
            }
          />
          <Route path="top-rated/*" element={<TopRate />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<DetailsMovie />} />
        </Route>

        {/* <Route path="/" element={<Main />} />
        <Route path="top-rate" element={<TopRate />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="about" element={<About />} /> */}
      </Routes>

      <div className="app">
        {/*  <Header
          handleSearchMovie={handleSearchMovie}
          setSearchKey={setSearchKey}
          searchKey={searchKey}
        />
        <Navigation /> */}
        {/* <Main
          loading={loading}
          setLoading={setLoading}
          limitMovies={limitMovies}
          setLimitMovies={setLimitMovies}
          currentPage={currentPage}
          movies={movies}
          filterMovies={filterMovies}
        />
        <Upcoming />
        <About />
        <Pagination
          limitMovies={limitMovies}
          mostrarMas={mostrarMas}
        />
        <Footer /> */}
      </div>
    </>
  );
}
export default App;
