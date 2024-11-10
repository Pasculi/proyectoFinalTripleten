import React, { useEffect, useState } from "react";
import "./SearchResults.css";
import Skeletons from "../Skeletons/Skeletons";
import api from "../../utils/ThirdPartyApi";
import { useSearchParams } from "react-router-dom";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";


const SearchResults = ({ limitMovies, loading, mostrarMas }) => {
  const [params, setParams] = useSearchParams();

  const queryParams = params.get("query");

  const [searchMovie, setSearchMovie] = useState([]);

  const searchMovies = () => {
    api.getSearchMovies(queryParams).then((response) => {
      setSearchMovie(response.results);
    });
  };

  useEffect(() => {
    searchMovies();
  }, [params]);

  const dinamicArray = Array.from(Array(limitMovies).keys());


  return (
    <>
      <div className="main" id="header-start">
        <div className="main-container">
          {loading
            ? dinamicArray.map((items, index) => {
                return <Skeletons key={index} />;
              })
            : searchMovie?.slice(0, limitMovies).map((movie, index) => {
                return (
                  <Card
                    key={index}
                    id={movie.id}
                    title={movie.title}
                    vote={movie.vote_average}
                    poster={movie.poster_path}
                  />
                );
              })}
        </div>
      </div>
      {searchMovie?.length >= 0 ? (
        <Pagination
          limitMovies={limitMovies}
          mostrarMas={mostrarMas}
          queryParams={queryParams}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default SearchResults;
