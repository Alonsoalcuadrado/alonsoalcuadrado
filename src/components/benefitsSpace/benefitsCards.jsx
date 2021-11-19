import React from 'react'
import { Col } from 'react-bootstrap'
import './benefitsStyle.scss'
function benefitsCardsRight({infoCard}) {
    if((infoCard.id%2)===0){
        return(
           
            <>
                <Col className="benefits-cards__card--large">
                    <p className="benefits-cards__title">{infoCard.title}</p>
                    <p>{infoCard.text}</p>
               </Col>
                <div key={infoCard.id} className="benefits-cards__card--small">
                    <img className="benefits-cards__imge" src={infoCard.icono} alt="Not found"></img>
                </div>
            </>
        
        )
      }
      else{
        return(
            <>
                <div key={infoCard.id} className="benefits-cards__card--small">
                    <img className="benefits-cards__imge" src={infoCard.icono} alt="Not found"></img>
                </div>
                <Col className="benefits-cards__card--large">
                    <p className="benefits-cards__title">{infoCard.title}</p>
                    <p>{infoCard.text}</p>
               </Col>
            </>
        )
      }

    
}

export default benefitsCardsRight

