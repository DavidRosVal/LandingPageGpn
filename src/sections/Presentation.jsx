import React from "react";
import "./../sections/Presentation.css";
import NavBar from "./NavBar";

function Presentation() {
  return (
    <div className="presentation" id="principal">
      <NavBar />

      <div className="container-presentation">
        <div className="izquierda">
          <h1>SABORES ARTESANALES, PARA OCASIONES INOLVIDABLES</h1>
          <p>Regala momentos dulces llenos de amor y sabor</p>
        </div>
        <img src="./../src/assets/brownieprincipal.png" alt="personal photo" />
      </div>
    </div>
  );
}

export default Presentation;
