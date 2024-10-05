import React, { useEffect, useState } from 'react'
import './About.css'
import api from "../../utils/ThirdPartyApi";
import { Link } from 'react-router-dom';


const About = () => {

  const [user, setUser] = useState('');

  const getUser = () => {
    api.getUserGitHub()
      .then((response) => {
        const profile = response;
        setUser(profile);
      })
  }

  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
      <div className="user-container">
        <div className="user-conatiner-info">
          <div className="user-conatiner-presentation">
            <h3 className="user-subtitle">Hola soy,</h3>
            <h1 className="user-about">{user.name}</h1>
            <h3 className="user-subtitle">{`${user.bio} de la academia TripleTen`}</h3>
          </div>
          <img className="user-avatar" src={user.avatar_url} alt="" />
        </div>
        <p className="user-bio">
          Soy un ingeniero en informática con más de 15 años de experiencia en
          el sector de las telecomunicaciones, donde he trabajado como
          especialista en monitoreo y control en Telsur Chile, una empresa líder
          en servicios de voz, datos, y televisión. Mi trabajo consiste en
          vigilar, resolver, y prevenir fallas de red, utilizando herramientas
          de networking y sistemas de gestión. Además, tengo una pasión por el
          desarrollo web, que me ha llevado a realizar un bootcamp de desarrollo
          web fullstack impartido por TripleTen Latam, una academia de
          tecnología que forma a profesionales en las últimas tendencias y
          tecnologías del mercado. Mi objetivo es aprender a crear aplicaciones
          web dinámicas, funcionales, y atractivas, utilizando el stack MERN
          (MongoDB, Express, React, y Node.js), así como otras tecnologías como
          CSS Flexbox, CSS Grid Layout, y MySQL. Me motiva el desafío de
          desarrollar soluciones innovadoras que aporten valor a los usuarios y
          clientes.
        </p>
        <div className="user-url">
          <Link to={user.html_url} target="_blank" rel="">
            {user.html_url}
          </Link>
          <p className="user-git">Repossitorios github</p>
          <div className="user-repos">{user.public_repos}</div>
        </div>
      </div>
    </>
  );
}

export default About