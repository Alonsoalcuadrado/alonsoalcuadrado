//AboutUs
import React from 'react';
import './About.scss';
import about1 from './../../assets/Allura.png';
import about2 from './../../assets/StuckAtHome.png';
import vec1 from './../../assets/Vector.jpg';


export default function AboutsUs(){
    return(
        <>
            <div className="aboutUs">
                <div className="about_us__image mt-4">
                    <img width="100%" src={vec1} alt="" />
                    <div className="about_us__info">
                        <div className="row container">
                            <div className="col ">
                                <img src={about2}/>
                            </div>
                            <div className="col about_us__info--data mt-2">
                                <h2>Acerca de nosotros</h2>
                                <p> Somos una empresa enfocada en brindar un servicio Integral de diseño y desarrollo WEB con la finalidad de potencializar los negocios de nuestros clientes, para que así obtengan los máximos beneficios de tener presencia dentro de internet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row container">
                    <div className="col mt-4">
                        <p>Estamos comprometidos al desarrollo de <br /> herramientas, planes y servicios para que nuestros <br /> clientes obtengan los mejores beneficios para sus <br /> negocios y sacar la mayor ventaja del <br /> posicionamiento en la WEB y así puedan llegar a su <br /> mercado deseado.</p>
                    </div>
                    <div className="col">
                        <img src={about1} alt="about" />
                    </div>
                </div>
            </div>
        </>
    );
}