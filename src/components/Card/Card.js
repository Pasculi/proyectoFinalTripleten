import React from "react";
import { URL_IMAGE } from "../../utils/constants";
import "./Card.css";

const Card = ({id, title, vote, poster}) => {

  return (
    <>

        <div className="card-item" key={id}>
          <div className="card-footer-rating">{vote.toFixed(1)}</div>
          <img
            className="card-image-poster"
            src={`${URL_IMAGE}${poster}`}
            alt={title}
          />
          <div className="card-title">
            <h4>{title}</h4>
          </div>
          <div className="card-footer">
            <div>
              <button className="card-btn" /* onClick={() => setTrailer(trailer)} */>
                Ver trailer
              </button>
            </div>
          </div>
        </div>

    </>
  );
};

export default Card;