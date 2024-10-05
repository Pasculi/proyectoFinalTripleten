import React from 'react'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'



const Layout = ({ handleSearchMovie,
              setSearchKey,
  searchKey,
  limitMovies,
  setLimitMovies
}) => {
  return (
    <div>
      <Header
        handleSearchMovie={handleSearchMovie}
        setSearchKey={setSearchKey}
        searchKey={searchKey}
      />
      <Navigation limitMovies={limitMovies} setLimitMovies={setLimitMovies} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout