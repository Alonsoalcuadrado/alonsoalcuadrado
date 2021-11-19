
import React from "react";
import { Card,Button } from "react-bootstrap";
import './serviceCardsStyle.scss';

function serviceCards({title,itemsType}){

    const items = [...itemsType]


   return(
      <Card className="service-card">
          <div className="service-card__card-header"><h3>{title}</h3></div> 
              <Card.Body>  
                <Card.Text className="service-card__card-text">
                  <ul>
                        {
                          items.map(item => (
                              <li key={item.id}>{item.p}</li>
                          ))
                        }
                  </ul>
                </Card.Text>
                <Button className="service-card__button">Más Información</Button>
          </Card.Body>
      </Card>
    );
}

export default serviceCards;