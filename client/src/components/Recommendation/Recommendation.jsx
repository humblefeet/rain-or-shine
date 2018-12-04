import React from "react";
import "./Recommendation.css";

const Recommendation = props => {
  return(
  <div key={props.key}>
    <h3>{props.venue.venue.name}</h3>
    <h5>{props.venue.venue.categories[0].shortName}</h5>
    <div>
      <h4>{props.venue.venue.location.address}</h4>
      {/* <h4>{props.venue.venue.location}</h4> */}
    </div>
    <div>
      <p>"{props.venue.reasons.items[0].summary}"</p>
    </div>
  </div>
  )
};

export default Recommendation;
