import React from "react";
import "./Header.css"; // Si quieres agregar estilos personalizados
import logo from "../../images/logo.webp"; // Asegúrate de la ruta correcta al logo

const Header = ({ handleSearch }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <img src={logo} alt="Cinema Logo" className="logo" />
        </div>
          <h1 className='header-titulo'>MovieLand</h1>
        <br />
        <input
          className="header-search"
          type="text"
          placeholder="Buscar película..."
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;
