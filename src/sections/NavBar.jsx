import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./../src/assets/logocesarin.png" alt="logo navbar" />
      </div>
      <div className="navbar-links">
        <Link
          activeClass="active"
          to="acercade"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Acerca de
        </Link>
        <Link
          activeClass="active"
          to="carta"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Carta
        </Link>
        <Link
          activeClass="active"
          to="contacto"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
