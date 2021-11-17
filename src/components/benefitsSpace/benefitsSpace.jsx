import React from 'react'
import BenefitsCards from './benefitsCards'
import './benefitsStyle.scss'



function benefitsSpace({imgBS, cardsInfo}) {

  const cardsInfo2 =[...cardsInfo]
    return (
      <>
       
        <div className="container">
        
        <h2 className="titleS">BENEFICIOS</h2>
          <div className="row ">
            <div class="col-6   "><img src={imgBS} alt="Not found"></img></div>
            <div class="col-5">
                 {
                    cardsInfo2.map(cardInfo2 =>(
                      <div className='row'><BenefitsCards infoCard={cardInfo2}></BenefitsCards></div>
                   ))
                 }
              </div>
              
            
          </div>
        </div>
      </>
    )
}




export default benefitsSpace
