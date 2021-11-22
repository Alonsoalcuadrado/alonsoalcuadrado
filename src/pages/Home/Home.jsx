import React from 'react'
import {Carousel,ServiceCards,BenefitsSpace} from '../../components'
import {imgCarouselOne,imgCarouselTwo,imgCarouselThree,imgCarouselFour,imgCarouselFive,iconBenefitOne,iconBenefitTwo,iconBenefitThree,benefitsSpaceImge} from '../../assets/index'

const ArrayImgesCarousel =[
  { id:1,imgC:imgCarouselOne},
  { id:2, imgC: imgCarouselTwo },
  { id:3, imgC: imgCarouselThree},
  { id:4, imgC: imgCarouselFour},
  { id:5,imgC:imgCarouselFive}
]

const ArrayServicesCardsInformation=[
  {
      id:1,title: 'Pagina WEB', items:[{ id:1,p: "Página WEB personalizada" },{ id:2,p: " Contacto directo" }, { id:3,p:"Dominio WEB"}, { id:4,p:"Almacenamiento"}]
  },
  { 
      id:2,title: 'Pagina E-COMMERS', items :[{id:1,p: "Página WEB personalizada"},{id:2,p:"Contacto Directo"},{id:3,p:" Dominio WEB"},{id:4,p:"Base de Datos"},{id:5,p:" Almacenamiento"}]
  },
  {
      id:3,title: 'GESTOR WEB ADMINISTRATIVO', items :[{id:1,p: "Aplicación para tu negocio"},{id:2,p: " Contacto directo"}, {id:3,p:"Soporte continuo"},{id:4,p:" Servidor"},{id:5,p:"Base de Datos" },{id:6,p:"Dominio"}]
  },
]
const ArrayBenefitsCardsInformation=[
  {id:1, icono:iconBenefitOne, title:'Presencia en la red',text:'Ten presencia en internet con tu página WEB, amplia tu negocio y llega a tu mercado más fácil'},
  {id:2, icono:iconBenefitTwo, title:'Hazte de nuevos clientes',text:'Amplia tu cartera de clientes y llega a tu nicho de mercado mucho más fácil'},
  {id:3, icono:iconBenefitThree, title:'Hazte de nuevos clientes',text:'Crea tu catálogo de productos o servicios al alcance de cualquier cliente potencial'},
]

const Home = () => {
  return (
    <div className='home-container'>
     <Carousel imgesCarousel={ArrayImgesCarousel}></Carousel>
     <ServiceCards InformationServiCards={ArrayServicesCardsInformation}/>
     <BenefitsSpace benefitsSpaceImge={benefitsSpaceImge} InformationBenefitsCards={ArrayBenefitsCardsInformation}></BenefitsSpace>
    </div>
  )
}

export default Home
