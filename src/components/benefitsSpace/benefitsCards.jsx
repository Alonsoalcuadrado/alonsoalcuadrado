import React from 'react'
import './benefitsStyle.scss'

function benefitsCardsRight({infoCard}) {
    if((infoCard.id%2)===0){
        return(
            <>    
                    <div className="cardBig col ">
                        <p className="p-title">{infoCard.title}</p>
                        <p>{infoCard.text}</p>
                    </div>
                    <div key={infoCard.id}  className="cardSmall col-2 "><img src={infoCard.icono} alt="Not found"></img></div>
         </>
        
        )
      }
      else{
        return(
            <>
            <div key={infoCard.id}  className="cardSmall col-2 "><img src={infoCard.icono} alt="Not found"></img></div>
            <div className="cardBig col ">
                <p className="p-title">{infoCard.title}</p>
                <p>{infoCard.text}</p>
            </div>
        </>

        )
      }

    
}

export default benefitsCardsRight

