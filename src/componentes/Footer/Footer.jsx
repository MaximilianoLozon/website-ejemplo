import React from "react"
import Contact from './Contact'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
    return(
    <footer id="Contact">
      <Contact />
      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/maxi.lozon/" target={'_blank'}><BsFacebook/></a>
        <a href='https://www.linkedin.com/in/maximiliano-lozon/' target={'_blank'}><BsLinkedin/></a>
        <a href="https://github.com/MaximilianoLozon" target={'_blank'}><BsInstagram/></a>
      </div>
      <div className="footer__copyrigth">
        <small>&copy: Maxi Lozon Dev</small>
      </div>
    </footer>
    )
}
export default Footer