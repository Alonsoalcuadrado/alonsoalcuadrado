import React from 'react'
import ServiceExplanationCards from '../../components/ServiceExplanationCard/ServiceExplanationCards'


const InformationServiceCards=[
    {id:1 ,title:"Página WEB",servicesPoints:[{id:2,p:"punto 1"},{id:3,p:"punto 2"}]},
    {id:1 ,title:"Página WEB",servicesPoints:[{id:2,p:"punto 1"},{id:3,p:"punto 2"}]}
]


function Services() {
    return (
        <div>
            <ServiceExplanationCards InformationServiceCards={InformationServiceCards} />
        </div>
    )
}

export default Services
