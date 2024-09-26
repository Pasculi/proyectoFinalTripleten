import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="nav">
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="/popular">Lo mas popular</a>
          </li>
          <li>
            <a href="/top_rated">Mejor valorados</a>
          </li>
          <li>
            <a href="/upcoming">Próximos estrnos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation
