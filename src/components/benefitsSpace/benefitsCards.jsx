import React from 'react'
import './benefitsStyle.scss'

function benefitsCardsRight({infoCard}) {
    const infoCard2 = {...infoCard}
    console.log({infoCard2})

    if((infoCard2.id%2)===0){
        return(
            <>    
                    <div className="cardBig col ">
                        <p className="p-title">{infoCard2.title}</p>
                        <p>{infoCard2.text}</p>
                    </div>
                    <div key={infoCard2.id}  className="cardSmall col-2 "><img src={infoCard2.icono} alt="Not found"></img></div>
         </>
        
        )
      }
      else{
        return(
            <>
            <div key={infoCard2.id}  className="cardSmall col-2 "><img src={infoCard2.icono} alt="Not found"></img></div>
            <div className="cardBig col ">
                <p className="p-title">{infoCard2.title}</p>
                <p>{infoCard2.text}</p>
            </div>
        </>

        )
      }

    
}

export default benefitsCardsRight

