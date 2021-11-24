import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BenefitsCards from './benefitsCards'
import './benefitsStyle.scss'
function benefitsSpace({benefitsSpaceImge, InformationBenefitsCards}) {
    return (
      <div className="benefits-space">
          <h2 className="benefits-space__title">BENEFICIOS</h2>
            <Row xs={1} md={2}>
              <Col><img className="benefits-space__imge" src={benefitsSpaceImge} alt="Not found"></img></Col>
              <Col>
                  {
                      InformationBenefitsCards.map(InformationBenefitsCard =>(
                        <Row><BenefitsCards infoCard={InformationBenefitsCard}></BenefitsCards></Row>
                    ))
                  }
                </Col>
            </Row>
      </div>
    )
}
export default benefitsSpace
