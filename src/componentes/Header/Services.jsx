import React from "react";
import './Services.css'
import IMG1 from '../../assets/online-marketing.jpg'
import IMG2 from '../../assets/community-manager.jpg'
import IMG3 from '../../assets/analitica-web.jpg'
import IMG4 from '../../assets/consultoria-digital-alt.jpg'
import IMG5 from '../../assets/diseño-grafico.jpg'

const data =[
    {
      id:1,
      imagen:IMG1,
      titulo:'Marketing online',
      descripcion:'Desarrollo estrategias de marketing online para empresas. Les ayudo a gestionar y controlar todo los aspectos que influyen en el mundo 2.0. Marca personal, branding, estudio de la competencia, de los clientes, plan de social media.'
    },
    {
      id:2,
      imagen:IMG2,
      titulo:'Community manager',
      descripcion:'Gestiono todas tus redes para que tu empresa sea visible en internet. Como Community Manager me encargo de crear una comunidad alrededor de una marca y de mantenerla fiel a ella.'
    },
    {
      id:3,
      imagen:IMG3,
      titulo:'Analitica Web',
      descripcion:'¿Cuánta gente te visita al mes? ¿Cuántos seguidores has ganado en el último año? ¿Desde donde te visita más gente? Conociendo a fondo los datos de tu negocio podrás sacarle más partido. Yo me encargo de todo ello. Analizo exhaustivamente a tú público y te doy la clave para que este se incremente día a día.'
    },
    {
      id:4,
      imagen:IMG4,
      titulo:'Consultoria digital',
      descripcion:'¿Tienes un negocio offline y no sabes como llevarlo al mundo digital? No te preocupes, yo te guío en el camino. Realizamos un plan de transformación digital a tu medida, ajustándonos a tus necesidades y te recomendamos los mejores recursos para que saques el máximo partido al mundo 3.0'
    },
    {
      id:5,
      imagen:IMG5,
      titulo:'Diseño Gráfico',
      descripcion:'Creación de piezas individuales a medida, como logos, fotos, flayers, videos, reels, videoclips, documentos pdfs u otros.'
    }
    
  ]

const Services = () => {
    return(
        <div className="container services">
            <div className="tittle__services">
                <h1>Haz crecer tu negocio</h1>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sed. Odit repellendus ipsa ullam eveniet commodi, in aspernatur tenetur, hic esse qui ea magnam iure autem? Pariatur, delectus. Porro, cupiditate?</h3>
                <h5>(obligatorio, informa detalladamente acerca de tus servicios a tus potenciales clientes)</h5>
            </div>
            <div className="services__container">
                <div className="services__elements">{
                    data.map(({id,imagen,titulo,descripcion}) =>{
                        return(
                            <article key={id} className="services__item">
                                <div className="services__item-image">
                                    <img src={imagen} alt={titulo} />
                                </div>
                                <div className="item__texts">
                                    <h3>{titulo}</h3>
                                </div>
                            </article>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default Services