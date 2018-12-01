import React from "react";
import "./Temperature.css";

const Temperature = props => (
  <div className="Temperature">
    <h1>{props.temperature}°F</h1>
    <p>Location:</p>
  </div>
);
export default Temperature;
