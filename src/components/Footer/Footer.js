// src/components/Footer.js
import React from "react";
import "./Footer.css"; // Si deseas agregar estilos

const Footer = () => {
  return (
    <footer className="footer" id='footer-id'>
      
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Cinema. Todos los derechos
          reservados. <br /> Diseño y desarrollo realizado por Jorge R.
          Sepúlveda Turpie.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
