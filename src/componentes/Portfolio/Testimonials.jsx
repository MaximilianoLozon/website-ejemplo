import React from "react";
import './Testimonials.css'
import IMG from '../../assets/consultoria-digital.jpg'

const Testimonials = () => {
return(
<div class="scroll-snap-card">

    <div class="slide">
        <div className="foto"><img src={IMG} alt="" /></div>
        <div className="textos">
            <h3>Nombre</h3>
            <h5>Cargo, Empresa / Profesion</h5>
            <p class="tip">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nam quos illo facilis, error dolores repellendus quae, illum iusto, velit autem dignissimos quisquam. Impedit quae rem a iure sit numquam.</p>
        </div>
    </div>
    <div class="slide">
        <div className="foto"><img src={IMG} alt="" /></div>
        <div className="textos">
            <h3>Nombre</h3>
            <h5>Cargo, Empresa / Profesion</h5>
            <p class="tip">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nam quos illo facilis, error dolores repellendus quae, illum iusto, velit autem dignissimos quisquam. Impedit quae rem a iure sit numquam.</p>
        </div>
    </div>
    <div class="slide">
        <div className="foto"><img src={IMG} alt="" /></div>
        <div className="textos">
            <h3>Nombre</h3>
            <h5>Cargo, Empresa / Profesion</h5>
            <p class="tip">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nam quos illo facilis, error dolores repellendus quae, illum iusto, velit autem dignissimos quisquam. Impedit quae rem a iure sit numquam.</p>
        </div>
    </div>

</div>
)
}
export default Testimonials
