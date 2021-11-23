import React from 'react'
import './ServiceExplanationCardsStyle.scss'
import { Col,Row } from 'react-bootstrap'


function ServiceExplanationCard({serviceCardTitle,serviceCardPoints,serviceCardId,serviceCardImge}) {
    if((serviceCardId%2)===0){
        return ( 
            <Row className="card-information">
                <Col xs={12}md={{ span: 7, offset: 5 }} className="card-information__card">
                    <Row>
                    <Col md ><img className="card-information__img" src={serviceCardImge} alt="Not found"></img></Col>
                        <Col xs> 
                            <Row><p className="card-information__title">{serviceCardTitle}</p></Row> 
                                
                                    <ul >
                                        <Row className="card-information__points">
                                        {
                                            serviceCardPoints.map(serviceCardPoint=>(
                                            <li key={serviceCardPoint.id}>{serviceCardPoint.p}</li>
                                            ))
                                        }
                                    </Row> 
                                </ul>
                                
                        </Col>
                    </Row>
                </Col>
            </Row>      
    )
    }
    else{
        return (
            <Row className="card-information">
                <Col xs={12} md={7} className="card-information__card">
                    <Row>
                        <Col md ><img className="card-information__img" src={serviceCardImge} alt="Not found"></img></Col>
                        <Col xs> 
                            <Row><p className="card-information__title">{serviceCardTitle}</p></Row> 
                              <ul>
                                <Row className="card-information__points">
                                    {
                                     serviceCardPoints.map(serviceCardPoint=>(
                                     <li key={serviceCardPoint.id}>{serviceCardPoint.p}</li>))
                                    }
                               </Row> 
                                </ul>   
                        </Col>
                    </Row>
                </Col>
           </Row>   
        )
    }
}
export default ServiceExplanationCard
