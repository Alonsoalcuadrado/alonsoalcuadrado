import React from 'react'
import ServiceExplanationCards from '../../components/ServiceExplanationCard/ServiceExplanationCards'
import {ImgServicesCardsOne, ImgServicesCardsTwo,ImgServicesCardsThree } from '../../assets/index'

const InformationServiceCards=[
    {id:1 ,servicesTitle:"Página WEB",servicesImge:ImgServicesCardsOne,servicesPoints:[{id:11,p:"Diseño según su branding "},{id:12,p:"Pagina web personalizada"},{id:13,p:"Contacto directo"},{id:14,p:"Soporte"},{id:15,p:"Manejo de dominio y almacenaje"},{id:16,p:"Capacitación de uso"},]},
    {id:2 ,servicesTitle:"Página E-COMMERCE",servicesImge:ImgServicesCardsTwo,servicesPoints:[{id:21,p:"Diseño según su branding"},{id:22,p:"Página WEB personalizada"},{id:23,p:"Contacto directo"},{id:24,p:"Soporte"},{id:25,p:"Manejo de dominio y almacenaje"},{id:26,p:"Capacitación de uso"},{id:27,p:"Manejo de dominio y almacenaje"},{id:28,p:"Servidor y Base de Datos"}]},
    {id:3 ,servicesTitle:"Aplicación WEB",servicesImge:ImgServicesCardsThree,servicesPoints:[{id:31,p:"Análisis de necesidades"},{id:32,p:"Diseño de aplicación"},{id:33,p:"Implementaciín de aplicación"},{id:34,p:"Implementación de aplicación"},{id:35,p:"Contacto director"},{id:36,p:"Soporte Continuo"},{id:37,p:"Servidor y Base de Datos"},{id:38,p:"Diseño de aplicación"},{id:39,p:"Dominio"}]},
    

]


function Services() {
    return (
        <div>
            <ServiceExplanationCards InformationServiceCards={InformationServiceCards} />
        </div>
    )
}

export default Services
