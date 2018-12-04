import React from "react";
import "./Precipitation.css";

const Precipitation = props => (
  <div className="Precipitation">
    <div className="circle">
    <h4>Precipitation</h4>
      <h5>{props.precipitation}%</h5>
      <h6>{props.precipitationType}</h6>
    </div>
  </div>
);
export default Precipitation;
