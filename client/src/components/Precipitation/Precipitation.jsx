import React from "react";
import "./Precipitation.css";

const Precipitation = props => (
  <div className="Precipitation">
    <h3>Precipitation</h3>
    <div className="circle">
      <h5>{props.precipitation}%</h5>
      <h6>{props.precipitationType}</h6>
    </div>
  </div>
);
export default Precipitation;
