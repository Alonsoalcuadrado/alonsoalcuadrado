
import React from "react";
import { Card,Button } from "react-bootstrap";
import './serviceCardsStyle.scss';
import {Link } from "react-router-dom";

function serviceCards({title,itemsType}){
   return(
      <Card className="service-card">
          <div className="service-card__card-header"><h3>{title}</h3></div> 
              <Card.Body>  
                <Card.Text className="service-card__card-text">
                  <ul>
                        {
                          itemsType.map(item => (
                              <li key={item.id}>{item.p}</li>
                          ))
                        }
                  </ul>
                </Card.Text>
                <div className="service-card__footer-card">
                  <Button className="service-card__button" >
                    <Link className="service-card__link" to="/services#services">Más Información</Link>
                  </Button>
                </div>
          </Card.Body>
      </Card>
    );
}



export default serviceCards;