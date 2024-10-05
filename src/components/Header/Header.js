import React from "react";
import "./Header.css";
import logo from "../../images/logo.webp";
import { Button } from "@mui/material";
import ImageSearchTwoToneIcon from "@mui/icons-material/ImageSearchTwoTone";


const Header = ({ setSearchKey, handleSearchMovie }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <img src={logo} alt="Cinema Logo" className="logo" />
        </div>
        <h1 className="header-titulo">MovieLand</h1>
        <br />
        <form onSubmit={handleSearchMovie}>
          <input
            className="header-search"
            type="text"
            placeholder="Buscar película..."
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />{" "}
          <Button
            variant="contained"
            endIcon={<ImageSearchTwoToneIcon />}
            type="submit"
          ></Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
