import React, { useEffect, useState } from "react";
import "./DetailsMovie.css";
import api from "../../utils/ThirdPartyApi";
import { URL_IMAGE } from "../../utils/constants";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";


const DetailsMovie = () => {
  const [detail, setDetail] = useState(null);
  const [trailer, setTrailer] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [defaultTrailer, setDefaultTrailer] = useState(null)

  const { id } = useParams();


  const detailsMovie = () => {
    api.getDetailsMovie(id).then((response) => {
      const result = response;
  
      setDetail(result);
    });
  };
  const detailsMovieTrailer = () => {
    api.getMovieId(id).then((response) => {
      const datailKeyMovie = response.results;
      const firstMovie = (datailKeyMovie[0].key);
  
      datailKeyMovie.map((oficial) => {
        
        if (oficial.name === 'Official Trailer') {
          const trailer = (oficial.key)
          setTrailer(trailer);
          setPlaying(true)
        } else {
          setDefaultTrailer(firstMovie)
          
        }
      });
    });
  };
  useEffect(() => {
    detailsMovie();
    detailsMovieTrailer();
  }, [id]);

  return (
    <div className="details-movie-container">
      <div className="details-image-container">
        <img
          className="details-image"
          src={`${URL_IMAGE}${detail?.poster_path}`}
          alt="imagen de la pelicula"
        />
        <p className="details-parrafo">
          <a
            className="details-homepage"
            href={detail?.homepage}
            target="_blank"
          >
            {detail?.homepage}
          </a>
        </p>
      </div>

      <div className="details-info">
        <h1 className="details-title"> {detail?.title}</h1>
        <h3 className="details-view"> {detail?.overview}</h3>
        <div>
          <div>
            <h3 className="details-view">
              Release Date: {detail?.release_date}
            </h3>
          </div>
          <div className="details-trailer">
            {playing ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer}`}
                controls
                width={"100%"}
                height={"100%"}
                /* light={`${URL_IMAGE}${detail?.poster_path}`} */
              />
            ) : (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${defaultTrailer}`}
                controls
                width={"100%"}
                height={"100%"}
                /* light={`${URL_IMAGE}${detail?.poster_path}`} */
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsMovie;
