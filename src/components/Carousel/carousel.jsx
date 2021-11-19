import React from "react";
import { Carousel,  CarouselItem } from "react-bootstrap";
 function  carousel({imgCo}) {
    let imgsCarousel= [...imgCo]
return(
    <Carousel className="carousel">
        {
            imgsCarousel.map(imgCarousel =>(
                <CarouselItem key= {imgCarousel.id}><img className="carousel__image w-100" src={imgCarousel.imgC}  alt="Not found"/> </CarouselItem>
            ))
        }
    </Carousel> 
  
);
}
export default carousel;
