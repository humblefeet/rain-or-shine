import React from "react";
import "./AirQuality.css";

const AirQuality = props => (
  <div className="AirQuality">
    <h3>{props.aqi}aqi</h3>
  </div>
);
export default AirQuality;
