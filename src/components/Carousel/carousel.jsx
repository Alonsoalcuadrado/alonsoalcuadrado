import React from "react";
import { Carousel,  CarouselItem, Row ,Col} from "react-bootstrap";
import './carouselStyle.scss'

 function  carousel({imgesCarousel}) {
return(
    <Carousel variant="dark" className="carousel">
            { imgesCarousel.map(imgeCarousel =>(
                <CarouselItem key= {imgeCarousel.id}>
                   <Row xs={1} lg={2}>
                        <Col className="carousel__col"> <img className="carousel__image" src={imgeCarousel.imgC}  alt="Not found"/> </Col>
                        <Col className="carousel__text"> En los procesos de gestión, el uso de las tecnología permite un ahorro  de tiempo como de dinero en la realización de tareas, simplificando los procesos,  la gestión del tiempo se llevan a cabo de forma más ágil y eficiente </Col>
                  </Row>
                </CarouselItem>
            ))
}

         
       
    </Carousel>
);
}
export default carousel;
