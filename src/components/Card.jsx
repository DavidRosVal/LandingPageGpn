import React from "react";
import "./Card.css";

function InterestCard({ interest }) {
  return (
    <div className="InterestCard">
      <div className="img-circle">
        <img src={interest.image} alt="" />
      </div>

      <div className="texto-card">
        <h3>{interest.name}</h3>
        <p>{interest.description}</p>
      </div>
    </div>
  );
}

export default InterestCard;
