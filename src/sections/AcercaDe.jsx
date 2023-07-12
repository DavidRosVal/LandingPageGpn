import React from "react";
import "./AcercaDe.css";

function AcercaDe() {
  return (
    <div className="informacion">
      <div className="cesar">
        <div className="foto">
          <img src="./../src/assets/cesar.jpg" alt="cesar" />
        </div>
        <div className="texto-cesar">
          <span>¡Hola! Soy Cesar,</span>
          <p>
            chef y creador de Cesarin. Mi pasión por la repostería nació desde
            temprana edad y desde entonces he perfeccionado mis habilidades en
            la creación de postres que deleitan a todos los paladares. Mi
            enfoque se basa en utilizar ingredientes frescos y de calidad para
            brindarte sabores auténticos en cada bocado.
          </p>
        </div>
      </div>
      <div className="cesarin-contenedor">
        <div className="cesarin">
          <p>En </p>
          <span>Cesarin</span>
          <p>
            cada creación es única y refleja mi dedicación y amor por la
            repostería. Me enorgullece ofrecerte deliciosos tartas
            personalizados, cupcakes irresistibles y brownies artesanales que te
            transportarán a un mundo de dulzura. Cada detalle está
            cuidadosamente diseñado para hacer de tus momentos especiales algo
            inolvidable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AcercaDe;
