import React from "react";
import './Pieces.css'
import imagen1 from "../../assets/mural1.jpg"
import imagen2 from "../../assets/mural2.jpg"


const Pieces = () => {
    return(
    <div className="pieces__content__cards">
      <div class="pieces__cards">
        <div className="pieces__item"><img src={imagen1} alt="" /></div>
        <div className="pieces__item"><img src={imagen2} alt="" /></div>
        <div className="pieces__item"><img src={imagen1} alt="" /></div>
        <div className="pieces__item"><img src={imagen2} alt="" /></div>
        <div className="pieces__item"><img src={imagen1} alt="" /></div>
        <div className="pieces__item"><img src={imagen2} alt="" /></div>
        <div className="pieces__item"><img src={imagen1} alt="" /></div>
        <div className="pieces__item"><img src={imagen2} alt="" /></div>
        <div className="pieces__item"><img src={imagen1} alt="" /></div>
      </div>
    </div>
    )
}
export default Pieces