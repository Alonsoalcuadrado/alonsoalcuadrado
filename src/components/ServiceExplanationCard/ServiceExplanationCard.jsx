import React from 'react'
import './ServiceExplanationCardsStyle.scss'
import { Col,Row } from 'react-bootstrap'


function ServiceExplanationCard({serviceCardTitle,serviceCardPoints,serviceCardId,serviceCardImge}) {
    if((serviceCardId%2)===0){
        return (
        
            <div className="card-information ">
               <div className="card-information__card--aling-left">
                  <Row>
                      <Col> <img className="card-information__img" src={serviceCardImge} alt="Not found"></img></Col>
                      <Col> 
                        <p className="card-information__title">{serviceCardTitle}</p>
                            <ul className="card-information__points">
                                {
                                    serviceCardPoints.map(serviceCardPoint=>(
                                        <li key={serviceCardPoint.id}>{serviceCardPoint.p}</li>
                                    ))
                                }
                            </ul>
                      </Col>
                  </Row>
               </div>
            </div>
    )
    }
    else{
        return (
        
            <div className="card-information">
               <div className="card-information__card--aling-right">
                  <Row >
                      <Col> <img className="card-information__img" src={serviceCardImge} alt="Not found"></img></Col>
                      <Col> 
                        <p className="card-information__title">{serviceCardTitle}</p>
                            <ul className="card-information__points">
                                {
                                    serviceCardPoints.map(serviceCardPoint=>(
                                        <li key={serviceCardPoint.id}> {serviceCardPoint.p}</li>
        
                                    ))
                                }
                            </ul>
                      </Col>
                  </Row>
               </div>
            </div>
        )
    }
}
export default ServiceExplanationCard
