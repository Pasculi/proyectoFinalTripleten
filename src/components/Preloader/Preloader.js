import React from 'react'

const Preloader = ({loading}) => {
  return <div>{loading ? <h1>'Cargando...'</h1> : " "}</div>;
}

export default Preloader
