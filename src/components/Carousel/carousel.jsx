import React from "react";
import { Carousel,  CarouselItem, Row ,Col} from "react-bootstrap";
import './carouselStyle.scss'

 function  carousel({paramsCarousel}) {
return(
    <Carousel  className="carousel">
            { paramsCarousel.map(paramCarousel =>(
                <CarouselItem key= {paramCarousel.id}>
                   <Row xs={1} lg={2} className="carousel__row">
                        <Col className="carousel__col-image"> <img className="carousel__image" src={paramCarousel.imgC}  alt="Not found"/> </Col>
                        <Col className="carousel__col-text"><p className="carousel__text">{paramCarousel.textCarousel}</p></Col>
                  </Row>
                </CarouselItem>
            ))
}
    </Carousel>
);
}
export default carousel;
