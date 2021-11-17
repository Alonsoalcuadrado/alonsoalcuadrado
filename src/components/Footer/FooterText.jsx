import React from 'react'
import './FooterStyle.scss'
import 'font-awesome/css/font-awesome.min.css';

function FooterText() {
    return (
        <div className="containerFooter">
        <div className="row">
            <div className="col-3 f-start  ">
               <p>Empresa 100% lagunera dedicada al desarrollo de herramientas WEB comprometidos con la innovación y el desarrollo </p> 
                <div className="row containerIcons">
                    <div className="col-2"><i class="fa fa-facebook"></i></div>
                    <div className="col-2"><i class="fa fa-linkedin"></i></div>
                    <div className="col-2"><i class="fa fa-twitter"></i></div>
                </div>
            </div>
            <div class="col f-med ">Todos los derech os reservados a A2© TRC</div>
            <div className="col-3 f-end"> <p>Calle Aldama </p><p>#1051 int C </p><p>CP 27000</p><p>Torreón Coahuila</p></div>
        </div>
        
    </div>
    )
}

export default FooterText
