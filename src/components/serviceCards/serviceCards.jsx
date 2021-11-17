import React from 'react'
import {  Col } from 'react-bootstrap'
import ServiceCard from './serviceCard'
import './serviceCardsStyle.scss';




function serviceCards({serviCards}) {
    const serviCard = [...serviCards]
    return (
        <div className="container-lg ">
             <h2 className="titleS">SERVICIOS</h2>
            <div className="row">
                {
                     serviCard.map(card=>(
                        <Col key ={card.id}> <ServiceCard title={card.title} itemsType={card.items}/></Col>
                     ))
                }
            </div>

        </div>
       
        
    )
}

export default serviceCards
