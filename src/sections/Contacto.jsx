import React from "react";
import "./Contacto.css";

function Contacto() {
  return (
    <div className="contacto-container">
      <div className="contacto">
        <div className="texto-contacto">
          <h2>CONTACTO</h2>
          <p>
            ¡Me encantaría saber de ti! Si tienes alguna pregunta, consulta o
            deseas realizar un pedido personalizado, puedes contactarme a través
            de nuestro chat en Instagram. Haz clic en el enlace a continuación
            para redirigirte directamente al chat y comenzar a disfrutar de
            nuestros deliciosos postres
          </p>
        </div>
        <div className="contacto-boton">
          <a href="https://www.instagram.com/cesarin.artesanal/">
            <button>REALIZAR PEDIDO</button>
          </a>
        </div>
        <div className="contacto-instagram">
          <img src="./../src/assets/instagram.png" alt="" />
          <p>@cesarin.artesanal</p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
