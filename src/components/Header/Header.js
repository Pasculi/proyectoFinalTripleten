import React from "react";
import "./Header.css"; // Si quieres agregar estilos personalizados
import logo from "../../images/logo.webp"; // Asegúrate de la ruta correcta al logo

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Cinema Logo" className="logo" />
        </div>
        <br />
        <input className="header-search" type="text" placeholder="Buscar película..."/>
      </div>
    </header>
  );
};

export default Header;
