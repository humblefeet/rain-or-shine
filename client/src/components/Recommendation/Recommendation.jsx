import React from "react";
import "./Recommendation.css";

const Recommendation = props => (
  <div>
    <h3>{props.venue.venue.name}</h3>
  </div>
);

export default Recommendation;
