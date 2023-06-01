import React from 'react'
import Navbar from './Navbar'
import Services from './Services'
import Logo from '../../assets/Logo.jpg'
import './Header.css'


const Header = () => {
  return (
    <header>
      <Navbar/>
      <div className="container header__container">
        <div className="logo header__logo">
          <img src={Logo} alt="img__logo"/>
          <h5>(opcional)</h5>
        </div>
        <div className='tittle__header'>
          <h1>Nombre</h1>
          <h2 className="tex-ligth">Community manager</h2>
          <div className="buttom__header"><a href="#Contact" className='btn'>Empezar</a></div>
        </div>
      </div>
      <Services/>
    </header>
  )
}

export default Header
/*<img src={Logo} alt="brand__logo"/>*/