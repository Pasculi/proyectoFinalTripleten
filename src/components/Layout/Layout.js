import React from 'react'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Layout.css'



const Layout = ({ handleSearchMovie,
              setSearchKey,
  searchKey,
  limitMovies,
  setLimitMovies
}) => {
  return (
    <div className="layout">
      <Header
        handleSearchMovie={handleSearchMovie}
        setSearchKey={setSearchKey}
        searchKey={searchKey}
        setLimitMovies={setLimitMovies}
      />
      <Navigation limitMovies={limitMovies} setLimitMovies={setLimitMovies} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout