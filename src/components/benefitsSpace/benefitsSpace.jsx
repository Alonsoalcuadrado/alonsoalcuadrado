import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BenefitsCards from './benefitsCards'
import './benefitsStyle.scss'
function benefitsSpace({imgBS, cardsInfo}) {
    return (
      <div className="benefits-space">
          <h2 className="benefits-space__title">BENEFICIOS</h2>
            <Row>
              <Col><img className="benefits-space__imge" src={imgBS} alt="Not found"></img></Col>
              <Col>
                  {
                      cardsInfo.map(cardInfo =>(
                        <Row><BenefitsCards infoCard={cardInfo}></BenefitsCards></Row>
                    ))
                  }
                </Col>
            </Row>
      </div>
    )
}
export default benefitsSpace
