import React from 'react'
import "./App.css"
import { Outlet } from 'react-router-dom'
import NavBar from './Componentes/NavBar.jsx'
function App() {
  return(
    <>
    <NavBar />
      <Outlet />
    </>
  )
}

export default App