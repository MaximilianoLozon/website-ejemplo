import React from 'react'
import './Navbar.css'
import {useState} from 'react'


const Nav = () => {
  const[activeNav, setActiveNav]= useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}>Inicio</a>
      <a href="#Portfolio" onClick={() => setActiveNav('#Porfolio')} className={activeNav==='#Porfolio' ? 'active' : ''}>Portfolio</a>
      <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav==='#Contact' ? 'active' : ''}>Contacto</a>
    </nav>
  )
}

export default Nav