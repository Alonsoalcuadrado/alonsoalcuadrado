import React from 'react'
import {  Col,Row } from 'react-bootstrap'
import ServiceCard from './serviceCard'
import './serviceCardsStyle.scss';


function serviceCards({serviCards}) {
    const serviCard = [...serviCards]
    return (
        <div className="service-cards ">
             <h2 className="service-cards__title">SERVICIOS</h2>
            <Row>
                {
                     serviCard.map(card=>(
                        <Col key ={card.id}> <ServiceCard title={card.title} itemsType={card.items}/></Col>
                     ))
                }
            </Row>
        </div>
       
        
    )
}
export default serviceCards
