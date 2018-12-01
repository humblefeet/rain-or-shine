import React from "react";
import "./Precipitation.css";

const Precipitation = props => (
  <div className="Precipitation">
    <h3>Chance of rain: {props.precipitation}%</h3>
  </div>
);
export default Precipitation;
