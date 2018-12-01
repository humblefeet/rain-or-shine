import React, { Component } from "react";
import "../App/App.css";
import "./WeatherPage.css";

class WeatherPage extends Component {
  render() {
    return (
      <div className="WeatherPage">
        <h2>Weather Page</h2>

        <h3>{this.props.temperature}* F</h3>
        <h5>{this.props.rainChance}% chance of rain</h5>
        <h5>{this.props.aqi} AQI</h5>
      </div>
    );
  }
}

export default WeatherPage;
