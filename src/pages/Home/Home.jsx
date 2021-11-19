import React from 'react'
import Carousel from '../../components/Carousel/carousel'
import ServiceCards from '../../components/serviceCards/serviceCards'
import BenefitsSpace from '../../components/benefitsSpace/benefitsSpace'

import imgCarousel1 from '../../assets/images/carousel1.png'
import imgCarousel2 from '../../assets/images/carousel2.png'
import imgCarousel3 from '../../assets/images/carousel3.png'
import imgCarousel4 from '../../assets/images/carousel4.png'
import imgCarousel5 from '../../assets/images/carousel5.png'

import iconoBene1 from '../../assets/images/iconoBene1.png'
import iconoBene2 from '../../assets/images/iconoBene2.png'
import iconoBene3 from '../../assets/images/iconoBene3.png'
import imgBenefitsSpace from '../../assets/images/benefitsSpaceImg.png'

const imgCars =[
  { id:1,imgC: imgCarousel1 },
  { id:2, imgC: imgCarousel2 },
  { id:3, imgC: imgCarousel3},
  { id:4, imgC: imgCarousel4},
  { id:5,imgC:imgCarousel5}
]

const cardsServices=[
  {
      id:1,
      title: 'Pagina WEB',
      items:[{ id:1,p: "Página WEB personalizada" },{ id:2,p: " Contacto directo" }, { id:3,p:"Dominio WEB"}, { id:4,p:"Almacenamiento"}]
  },
  { 
      id:2,
      title: 'Pagina E-COMMERS',
      items :[{id:1,p: "Página WEB personalizada"},{id:2,p:"Contacto Directo"},{id:3,p:" Dominio WEB"},{id:4,p:"Base de Datos"},{id:5,p:" Almacenamiento"}]
  },
  {
      id:3,
      title: 'GESTOR WEB ADMINISTRATIVO',
      items :[{id:1,p: "Aplicación para tu negocio"},{id:2,p: " Contacto directo"}, {id:3,p:"Soporte continuo"},{id:4,p:" Servidor"},{id:5,p:"Base de Datos" },{id:6,p:"Dominio"}]
  },
]

const benefits=[
  {id:1, icono:iconoBene1, title:'Presencia en la red',text:'Ten presencia en internet con tu página WEB, amplia tu negocio y llega a tu mercado más fácil'},
  {id:2, icono:iconoBene2, title:'Hazte de nuevos clientes',text:'Amplia tu cartera de clientes y llega a tu nicho de mercado mucho más fácil'},
  {id:3, icono:iconoBene3, title:'Hazte de nuevos clientes',text:'Crea tu catálogo de productos o servicios al alcance de cualquier cliente potencial'},
]

const Home = () => {
  return (
    <div className='home-container'>
     <Carousel imgCo={imgCars}></Carousel>
     <ServiceCards serviCards={cardsServices}/>
     <hr size="5"></hr>
     <BenefitsSpace imgBS={imgBenefitsSpace}cardsInfo={benefits}></BenefitsSpace>
    </div>
  )
}

export default Home
