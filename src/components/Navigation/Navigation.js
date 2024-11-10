import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom';




const Navigation = ({ setLimitMovies }) => {

  const handleResetLimit = () => {
    setLimitMovies(3)
  }

  return (
    <div className="nav">
      
      <nav className="nav-menu">
        <ul>
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
              Próximos estrnos
            </Link>
          </li>
          <li>
            <Link to="about">Acerca de</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation
