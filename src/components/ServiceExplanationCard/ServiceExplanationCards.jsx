import React from 'react'
import './ServiceExplanationCardsStyle.scss'
import ServiceExplanationCard from './ServiceExplanationCard'




function ServiceExplanationCards({InformationServiceCards}) {
    return (
            <div className="services" id="services" name="services">
                 <h2 className="services__title"> SERVICIOS</h2>
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
