// src/components/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Para agregar estilos
import YotubePlayer from "react-player/youtube";
import { Button } from "@mui/material";


const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Página No Encontrada</h1>
      <h3 className="not-found-subtitle">
        Lo sentimos, pero la página que buscas no existe.
      </h3>
      <YotubePlayer
        url={`https://youtu.be/TSXXi2kvl_0`}
        loop
        playing={true}
        width={"903px"}
        height={"508px"}
        volume={0.1}
      />
      <Link to="/" className="not-found-btn">
        <Button variant="contained">Volver al inicio</Button>
      </Link>
    </div>
  );
};

export default NotFound;
