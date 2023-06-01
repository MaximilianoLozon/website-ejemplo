import React from "react"
import Pieces from './Pieces'
import Clients from './Clients'
import Testimonials from './Testimonials'
import './Portfolio.css'

const Portfolio = () =>{
    return(
        <section id="Portfolio">
            <div className="container portfolio__content">
                <div className="textos__porfolio">
                    <h3>Piezas de diseños</h3>
                    <p>*Sugeridas* Las piezas gráficas son expresiones visuales de una marca.</p>
                </div>
                <Pieces/>
                <div className="textos__porfolio">
                    <h3>Cuentas de Clientes</h3>
                    <p>*Opcional*. Podemos mostrar como trabajamos con nuestras marcas.</p>
                </div>
                <Clients/>
                <div className="textos__porfolio">
                    <h3>Testimonios</h3>
                    <p>*Opcional*. Nada mejor que una valoracion positiva de nuestros clientes para atraer clientes.</p>
                </div>
                <Testimonials/>
            </div>
        </section>
    )
}
export default Portfolio