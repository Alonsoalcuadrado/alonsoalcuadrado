//AboutUs
import React from 'react';
import './About.scss';
import about1 from './../../assets/Allura.png';
import about2 from './../../assets/StuckAtHome.png';
import vec1 from './../../assets/Vector.png';
import NavBar from '../../components/Navbar';


export default function AboutsUs(){
    return(
        <div>
            <NavBar></NavBar>
            <div className="nfo1">
                <div id="back" className="mt-4">
                    <img src={vec1} alt="" id="vec1"/>
                </div>
                <div className="aboutus">
                <div className="row container-fluid">
                    <div className="col">
                        <img src={about2} id="img"/>
                    </div>
                    <div className="col mt-4">
                        <h2>Acerca de nosotros</h2>
                        <p> Somos una empresa enfocada en brindar un <br /> servicio Integral de diseño y desarrollo WEB con la <br /> finalidad de potencializar los negocios de nuestros <br /> clientes, para que así obtengan los máximos <br /> beneficios de tener presencia dentro de internet.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="row container-fluid">
                <div className="col mt-4">
                    <p>Estamos comprometidos al desarrollo de <br /> herramientas, planes y servicios para que nuestros <br /> clientes obtengan los mejores beneficios para sus <br /> negocios y sacar la mayor ventaja del <br /> posicionamiento en la WEB y así puedan llegar a su <br /> mercado deseado.</p>
                </div>
                <div className="col">
                    <img src={about1} alt="about" />
                </div>
            </div>
        </div>
    );
}