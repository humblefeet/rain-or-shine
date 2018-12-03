import React from "react";
import "./Recommendation.css";

const Recommendation = props => (
  <div>
    <h3>{props.venue.venue.name}</h3>
    <div>
      {props.venue.venue.location.formattedAddress.map(line => (
        <p>{line}</p>
      ))}
    </div>
    <div>
      <p>"{props.venue.reasons.items[0].summary}"</p>
    </div>
  </div>
);

export default Recommendation;
