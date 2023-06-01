import React from "react";
import './Clients.css'
import {BsInstagram} from 'react-icons/bs'
import imagen1 from "../../assets/imgexpand1clic.jpg"
import imagen2 from "../../assets/imgexpand2clic.jpg"
import imagen3 from "../../assets/imgexpand3clic.jpg"
import imagen4 from "../../assets/imgexpand4clic.jpg"


const Clients = () => {
    return(
        <div className="content__cards">
            <div className="clients__cards">
                <div className="clients__card">
                    <div class="clients__card-details"><img src={imagen1} alt="" /></div>
                    <a href="https://www.instagram.com/_vzonline/" target={'_blank'}><button class="clients__card-button"><BsInstagram/></button></a>
                </div>
                <div className="clients__card">
                    <div class="clients__card-details"><img src={imagen2} alt="" /></div>
                    <a href="https://www.instagram.com/_vzonline/" target={'_blank'}><button class="clients__card-button"><BsInstagram/></button></a>
                </div>
                <div className="clients__card">
                    <div class="clients__card-details"><img src={imagen3} alt="" /></div>
                    <a href="https://www.instagram.com/_vzonline/" target={'_blank'}><button class="clients__card-button"><BsInstagram/></button></a>
                </div>
                <div className="clients__card">
                    <div class="clients__card-details"><img src={imagen4} alt="" /></div>
                    <a href="https://www.instagram.com/_vzonline/" target={'_blank'}><button class="clients__card-button"><BsInstagram/></button></a>
                </div>
                
            </div>
        </div>
    )
}
export default Clients
/*
<div class="card-details"><img src={imagen1} alt="" /></div>
<a href="https://www.instagram.com/_vzonline/" target={'_blank'}><button class="card-button"><BsInstagram/></button></a>

*/