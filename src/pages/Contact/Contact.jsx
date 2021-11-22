import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; 
import './Contact.scss';


export default function Contact() {
    return (
      <div className="container">
          <div className="d-flex justify-content-end mt-2">
              <a className="btn btn-primary" href="https://api.whatsapp.com/send/?phone=528715345184&text=Hola, estoy interesado en un servicio, me gustaría más información&app_absent=0" target="_blank">Whatsapp <i class="fa fa-whatsapp" aria-hidden="true" ></i></a>
          </div>
        <div className="d-flex justify-content-around card-body">
          <div className="info">
            <div className="col-12">
              <div className="info_business">
                <h3> Dirección</h3>
                <div className="mt-3">
                  <h5>
                    <i className="fa fa-map-marker info_business--marker_icon" aria-hidden="true"></i>
                    Av. Aldama 1051-C, Tercero de Cobián Centro <br /> C.P 27000 Torreón, Coah.
                  </h5>
                </div>
                <div className="mt-3">
                  <h5>
                    <i className="fa fa-phone info_business--phone_icon" aria-hidden="true"></i>
                    8711234567
                  </h5>
                </div>
                <div className="mt-3">
                  <h5>
                    <i className="fa fa-envelope info_business--envelope_icon" aria-hidden="true"></i>
                    ejemplo@gmail.com
                  </h5>
                </div>
              </div>
              <iframe className="info_location mt-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.9352557160646!2d-103.4373840708259!3d25.547002108970982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdbc57ebdde55%3A0xd41e3ff157854f89!2sAv.%20Aldama%201051%2C%20Tercero%20de%20Cobi%C3%A1n%20Centro%2C%2027000%20Torre%C3%B3n%2C%20Coah.!5e0!3m2!1ses-419!2smx!4v1636147163336!5m2!1ses-419!2smx" width="450" height="350" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
          <h3 className="col-4 ">Contactanos
          <form action="mailto:rocker2503@gmail.com" method="POST">
            <div className="card-header contact_info text-light">
              <div>
                <h5>
                  <span>Nombre completo</span>
                </h5>
                <input className="form-control text-left" type="text" />
              </div>
              <div className="mt-3">
                <h5>
                  <span>Correo Electrónico</span>
                </h5>
                <input className="form-control text-right" type="text" />
              </div>
              <div className="mt-3">
                <h5>
                  <span>Teléfono</span>
                </h5>
                <input className="form-control text-right" type="number" name="cellphone" />
              </div>
              <div className="mt-3">
                <h5>
                  <span>Organización</span>
                </h5>
                <input className="form-control text-right" type="text" name="org" />
              </div>
              <div className="buttons">
                  <input
                className="btn btn-block buttons__send mt-2 col-5"
                type="submit"
                value="Enviar"
                />
              </div>
            </div>
          </form>
          </h3>
        </div>
      </div>
    );
  }

