import React from "react";
import { Carousel,  CarouselItem } from "react-bootstrap";


 function  carousel({imgesCarousel}) {
return(
    <Carousel className="carousel">
        {
            imgesCarousel.map(imgeCarousel =>(
                <CarouselItem key= {imgeCarousel.id}><img className="carousel__image w-100" src={imgeCarousel.imgC}  alt="Not found"/> </CarouselItem>
            ))
        }
    </Carousel> 
  
);
}
export default carousel;
