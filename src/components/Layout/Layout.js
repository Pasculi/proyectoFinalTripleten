import React from 'react'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'



const Layout = ({ handleSearchMovie,
              setSearchKey,
              searchKey}) => {
  return (
    <div>
      <Header
        handleSearchMovie={handleSearchMovie}
        setSearchKey={setSearchKey}
        searchKey={searchKey}
      />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout