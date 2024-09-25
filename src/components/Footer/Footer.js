// src/components/Footer.js
import React from "react";
import "./Footer.css"; // Si deseas agregar estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Cinema. Todos los derechos
          reservados. Diseño y desarrollo por Jorge R. Sepúlveda Turpie.
        </p>
        <ul className="footer-links">
          <li>
            <a href="/about">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
          <li>
            <a href="/privacy">Política de Privacidad</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
