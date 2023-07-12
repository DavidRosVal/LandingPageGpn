import React from "react";
import InterestCard from "../components/Card";
import myInterest from "../data/aboutMe";
import "./../sections/MyInterests.css";

function MyInterests() {
  const interestList = myInterest.map((i) => {
    return <InterestCard interest={i} />;
  });

  return (
    <div className="my-interests" id="carta">
      <h2>Carta</h2>
      <div className="container">{interestList}</div>
    </div>
  );
}

export default MyInterests;
