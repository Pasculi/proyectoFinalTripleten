import React from "react";
import { URL_IMAGE } from "../../utils/constants";
import "./Card.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Card = ({ id, title, vote, poster }) => {
  return (
    <>
      <div className="card-item" key={id}>
        <div className="card-footer-rating">{vote.toFixed(1)}</div>
        <Link to={`/details/${id}`}>
          <img
            id={id}
            className="card-image-poster"
            src={`${URL_IMAGE}${poster}`}
            alt={title}
          />
        </Link>

        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <div className="card-footer">
          <div>
            <Link to={`/details/${id}`}>
              <Button variant="contained">ver detalle</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
