import React, { useState, useRef } from "react";
import "./Header.css";
import logo from "../../images/logo.webp";
import { Button } from "@mui/material";
import ImageSearchTwoToneIcon from "@mui/icons-material/ImageSearchTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";


const Header = ({ setLimitMovies, setSearchKey, handleSearchMovie }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const classRefMenu = useRef(null)
  const classRefList = useRef(null)

  const handleClickButtonMenu = () => {
    setMenuOpen(
      classRefMenu.current.classList.toggle("isActive"),
      classRefList.current.classList.toggle("header-menu-hamburg-show")
    );
    
  };

  const handleResetLimit = () => {
    setLimitMovies(3);
    classRefMenu.current.classList.toggle("isActive");
    classRefList.current.classList.toggle("header-menu-hamburg-show");
  };

  return (
    <header className="header">
      <div className="nav-hamburg">
        <Button variant="contained" onClick={handleClickButtonMenu}>
          <MenuIcon
            fontSize="large"
            variant="contained"
            className="menu-icon"
            anchor="right"
          />
        </Button>
      </div>
      <div className="header-menu-hamburg" ref={classRefMenu}>
        <ul className="header-menu-hamburg-list" ref={classRefList}>
          <li>
            <Link to="popular" onClick={handleResetLimit}>
              Lo mas popular
            </Link>
          </li>
          <li>
            <Link to="top-rated" onClick={handleResetLimit}>
              Mejor valorados
            </Link>
          </li>
          <li>
            <Link to="upcoming" onClick={handleResetLimit}>
              Próximos estrenos
            </Link>
          </li>
          <li>
            <Link to="about" onClick={handleResetLimit}>
              Acerca de
            </Link>
          </li>
        </ul>
      </div>
      <div className="header-container">
        <div className="header-logo-container">
          <img src={logo} alt="Cinema Logo" className="logo" />
        </div>
        <h1 className="header-titulo">MovieLand</h1>
        <br />
        <form className="header-form" onSubmit={handleSearchMovie}>
          <input
            className="header-search"
            type="text"
            placeholder="Buscar película..."
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />{" "}
          <Button
            className="header-button"
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
