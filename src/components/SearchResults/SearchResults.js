import React, { useEffect, useState } from "react";
import "./SearchResults.css";
import Skeletons from "../Skeletons/Skeletons";
import api from "../../utils/ThirdPartyApi";
import { useSearchParams } from "react-router-dom";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";


const SearchResults = ({ limitMovies, loading, mostrarMas }) => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("query"));

  const queryParams = params.get("query");
  console.log(queryParams);

  const [searchMovie, setSearchMovie] = useState([]);

  const searchMovies = () => {
    api.getSearchMovies(queryParams).then((response) => {
      console.log(response.results);
      setSearchMovie(response.results);
    });
  };
  console.log(searchMovie);
  useEffect(() => {
    searchMovies();
  }, [params]);

  return (
    <>
      <div className="main" id="header-start">
        <div className="main-container">
          {loading
            ? [1, 2, 3].map((_, index) => {
                return <Skeletons key={index} />;
              })
            : searchMovie?.slice(0, limitMovies).map((movie, index) => {
              console.log({movie})
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
        <Pagination limitMovies={limitMovies} mostrarMas={mostrarMas} />
      ) : (
        ""
      )}
    </>
  );
};

export default SearchResults;
