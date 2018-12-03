import React from "react";
import "./Temperature.css";

const Temperature = props => (
  <div className="Temperature">
    <h1>{props.temperature}°F</h1>
    <h6>Low: {props.temperatureMin}</h6>
    <h6>High: {props.temperatureMax}</h6>
    <h4>Real Feel: {props.feelsLikeTemp}°F</h4>
    <h5>{props.weatherDescription}</h5>
    <h5>Location here</h5>
  </div>
);
export default Temperature;
