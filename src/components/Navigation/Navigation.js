import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav">
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="popular">Lo mas popular</Link>
          </li>
          <li>
            <Link to="top-rated">Mejor valorados</Link>
          </li>
          <li>
            <Link to="upcoming">Próximos estrnos</Link>
          </li>
          <li>
            <Link to="about">Acerca de</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation
