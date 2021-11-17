import React from "react";
import Items from "./items";
import './serviceCardsStyle.scss';




function serviceCards({title, itemsType}){

    const items = [...itemsType]


   return(
    <div className="card ">
   <div className="card-header"><h3 className="textCards">{title}</h3></div> 
    <div className="card-body ">  
         <div className="card-text container-md" >
          <ul>
            {
              items.map(item => (
                
                  
                  <Items key={item.id} item={item.p}></Items>
                  
              ))
            }
            </ul>

         </div>
       <div className="container-btn "> <a href='#!' class="btn button">Más Información</a></div>
      
    </div>
  </div>
        

    );
}

export default serviceCards;