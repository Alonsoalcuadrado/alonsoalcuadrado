import React from 'react'
import {  Col,Row } from 'react-bootstrap'
import ServiceCard from './serviceCard'
import './serviceCardsStyle.scss';


function serviceCards({InformationServiCards}) {
   
    return (
        <div className="service-cards ">
             <h2 className="service-cards__title">SERVICIOS</h2>
            <Row>
                {
                     InformationServiCards.map(InformationServiCard=>(
                        <Col key ={InformationServiCard.id}> <ServiceCard title={InformationServiCard.title} itemsType={InformationServiCard.items}/></Col>
                     ))
                }
            </Row>
        </div>
       
        
    )
}
export default serviceCards
