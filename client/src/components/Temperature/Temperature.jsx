import React from "react";
import "./Temperature.css";

const Temperature = props => (
  <div className="Temperature">
    <h1>{props.temperature}°F</h1>
    <h3>{props.tempMin}</h3>/ <h3>{props.tempMax}</h3>
    <h5>{props.weatherDescription}</h5>
  </div>
);
export default Temperature;
