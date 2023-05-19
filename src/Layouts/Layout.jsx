import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'

export default function Layout() {
  return (

  <>
    <header>
      <nav>
        <h1> Jobs</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="careers">Careers</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="help">Help</NavLink>
      </nav>
      <Breadcrumb />
    </header>

    <main>
    <Outlet />

    </main>
  
  </>

  )
}
