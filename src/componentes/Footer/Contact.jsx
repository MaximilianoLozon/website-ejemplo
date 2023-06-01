import React from "react";
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'


const Contact = () => {
    return(
      <div className="container contact__container">
        <div className="contact__titulo"><h5>Ponte en</h5><h2>Contacto</h2></div>
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ponteencontacto@ejemplo.com</h5>
            <a href="mailto:maxi.lozon@gmail.com" target={'_blank'}>Envia un mail</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Enviame un mensaje</h5>
            <a href="https://api.whatsapp.com/send?phone=+5492364620580" target={'_blank'}>Escribime</a>
          </article>
          <article className='contact__option'>
            <AiFillFacebook className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>Encontrame en Redes</h5>
            <a href="https://m.me/maxi.lozon/"target={'_blank'}>Chat</a>
          </article>
        </div>
      </div>
    )
}
export default Contact