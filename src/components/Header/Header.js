import React from "react";
import "./Header.css"; // Si quieres agregar estilos personalizados
import logo from '../../images/logo.webp'; // Asegúrate de la ruta correcta al logo

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Cinema Logo" className="logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul><br />
        <label htmlFor="">Buscar movie </label>
        <input type="text" />
      </nav>
    </header>
  );
};

export default Header;
