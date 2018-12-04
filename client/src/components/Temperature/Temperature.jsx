import React from "react";
import "./Temperature.css";

const Temperature = props => (
  <div className="Temperature">
    <h1>{props.temperature}°F</h1>
    <h5>Low: {props.temperatureMin}    </h5>
    <h5>  High: {props.temperatureMax}</h5>
    <h4>Real Feel: {props.feelsLikeTemp}°F</h4>
    <h5>{props.weatherDescription}</h5>
    <h5>{props.weatherSummary}</h5>
    <h3>{props.userLocation}</h3>
  </div>
);
export default Temperature;
