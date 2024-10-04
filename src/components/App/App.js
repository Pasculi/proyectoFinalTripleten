import React, { useEffect, useState } from "react";
import "./App.css";
import api from "../../utils/ThirdPartyApi";
import Main from "../Main/Main";
import { Route, Routes, useNavigate } from "react-router-dom";
import TopRate from "../TopRate/TopRate";
import About from "../About/About";
import Upcoming from "../Upcomming/Upcoming";
import Layout from "../Layout/Layout";
import DetailsMovie from "../DetailsMovie/DetailsMovie";
import SearchResults from "../SearchResults/SearchResults";
import NotFound from "../NotFound/NotFound";


function App() {
  const [searchKey, setSearchKey] = useState("");
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [moviesPerPage, setMoviesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(20);
  const [limitMovies, setLimitMovies] = useState(3);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

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
        setMovies(allMovies);
        setMovie(allMovies[0]);
      })
      .catch((error) => console.error(error));
  };

  const handleSearchMovie = (e) => {
    e.preventDefault();
    setSearchKey("");
    e.target.reset();
    navigate(`search?query=${searchKey}`);
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
                mostrarMas={mostrarMas}
              />
            }
          />
          <Route
            path="popular"
            element={
              <Main
                loading={loading}
                setLoading={setLoading}
                limitMovies={limitMovies}
                setLimitMovies={setLimitMovies}
                currentPage={currentPage}
                movies={movies}
                mostrarMas={mostrarMas}
              />
            }
          />
          <Route
            path={`search`}
            element={
              <SearchResults
                loading={loading}
                limitMovies={limitMovies}
                mostrarMas={mostrarMas}
              />
            }
          />
          <Route path="top-rated/*" element={<TopRate />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<DetailsMovie />} />
        </Route>
          <Route path='*' element={<NotFound />} />
      </Routes>

      <div className="app"></div>
    </>
  );
}
export default App;
