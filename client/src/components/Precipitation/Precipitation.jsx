import React from "react";
import "./Precipitation.css";

const Precipitation = props => (
  <div className="Precipitation">
    <div className="circle">
    <h5>Precipitation</h5>
      <h5>{props.precipitation}%</h5>
      <h6>{props.precipitationType}</h6>
    </div>
  </div>
);
export default Precipitation;
