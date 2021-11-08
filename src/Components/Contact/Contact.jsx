import React from "react";
import './Contact.css';

export default function Contact() {
  return (
    <div className="container">
        <div className="d-flex justify-content-end mt-2">
            <button type="button" className="btn btn-primary"> Whatsapp</button>
        </div>
      <div class="d-flex justify-content-around card-body">
        <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.9352557160646!2d-103.4373840708259!3d25.547002108970982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdbc57ebdde55%3A0xd41e3ff157854f89!2sAv.%20Aldama%201051%2C%20Tercero%20de%20Cobi%C3%A1n%20Centro%2C%2027000%20Torre%C3%B3n%2C%20Coah.!5e0!3m2!1ses-419!2smx!4v1636147163336!5m2!1ses-419!2smx" width="450" height="350" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <h3 className="col-4">Contactanos
        <div class="card-header bg-dark text-light" id="card-body">
          <div className="">
            <h5>
              <span>Nombre completo</span>
            </h5>
            <input class="form-control text-left" type="text" />
          </div>
          <div class="mt-3">
            <h5>
              <span>Correo Electrónico</span>
            </h5>
            <input class="form-control text-right" type="text" />
          </div>
          <div class="mt-3">
            <h5>
              <span>Teléfono</span>
            </h5>
            <input class="form-control text-right" type="number" name="dia" />
          </div>
          <div class="mt-3">
            <h5>
              <span>Organización</span>
            </h5>
            <input class="form-control text-right" type="text" name="fecha" />
          </div>
          <div id="btn">
              <input
            class="btn btn-block mt-2 col-5"
            type="submit"
            value="Enviar"
            id="btnSend"
            />
          </div>
        </div>
        </h3>
      </div>
    </div>
  );
}
