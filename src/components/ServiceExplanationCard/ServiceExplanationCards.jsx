import React from 'react'
import './ServiceExplanationCardsStyle.scss'
import ServiceExplanationCard from './ServiceExplanationCard'


function ServiceExplanationCards({InformationServiceCards}) {
    return (
            <div className="services">
                 <h1 className="services__title"> SERVICIOS</h1>
                 {
                    InformationServiceCards.map(InformationServiceCard=>(
                         <ServiceExplanationCard 
                         key={InformationServiceCard.id} 
                         serviceCardId={InformationServiceCard.id} 
                         serviceCardImge={InformationServiceCard.servicesImge}
                         serviceCardTitle={InformationServiceCard.servicesTitle} 
                         serviceCardPoints={InformationServiceCard.servicesPoints}/>
                    ))
                 }
            </div>
    )
}

export default ServiceExplanationCards
