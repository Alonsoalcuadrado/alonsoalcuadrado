import React from "react";
import { Carousel,  CarouselItem } from "react-bootstrap";


 function  carousel({imgCo}) {
    
    let imgsCarousel= [...imgCo]
    
return(

 <Carousel className="fluid" variant="dark">
       
       {
           imgsCarousel.map(imgCarousel =>(
            <CarouselItem key= {imgCarousel.id}><img className="d-block w-100" src={imgCarousel.imgC}  alt="Not found"/> </CarouselItem>
           ))

       }
 </Carousel> 
  
);
}
export default carousel;
