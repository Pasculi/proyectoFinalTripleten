import React, { useEffect, useState } from "react";
import "./App.css";
import api from "../../utils/ThirdPartyApi";
import Main from "../Main/Main";
import { Route, Routes, useNavigate } from "react-router-dom";
import TopRate from "../TopRate/TopRate";
import About from "../About/About";
import Upcoming from "../Upcoming/Upcoming";
import Layout from "../Layout/Layout";
import DetailsMovie from "../DetailsMovie/DetailsMovie";
import SearchResults from "../SearchResults/SearchResults";
import NotFound from "../NotFound/NotFound";
import SearchContext from "../contexts/SearchContext/SearchContext";


function App() {
  const [searchKey, setSearchKey] = useState("");
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [currentPage, setCurrentPage] = useState(1);
  const [limitMovies, setLimitMovies] = useState(3);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <SearchContext>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                handleSearchMovie={handleSearchMovie}
                setSearchKey={setSearchKey}
                searchKey={searchKey}
                limitMovies={limitMovies}
                setLimitMovies={setLimitMovies}
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
            <Route
              path="top-rated/*"
              element={
                <TopRate
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
              path="upcoming"
              element={
                <Upcoming
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
            <Route path="about" element={<About />} />
            <Route path="details/:id" element={<DetailsMovie />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <div className="app"></div>
      </SearchContext>
    </>
  );
}
export default App;
