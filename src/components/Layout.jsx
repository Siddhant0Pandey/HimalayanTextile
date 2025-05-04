import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout