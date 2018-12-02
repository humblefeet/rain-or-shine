import React, { Component } from "react";
import "../App/App.css";
import "./WeatherPage.css";
import Temperature from "../../components/Temperature/Temperature";
import AirQuality from "../../components/AirQuality/AirQuality";
import Precipitation from "../../components/Precipitation/Precipitation";
import RecommendationsButton from "../../components/RecommendationsButton/RecommendationsButton";

class WeatherPage extends Component {
  render() {
    return (
      <div className="WeatherPage">
        <h2>Weather Page</h2>

        <Temperature
          weatherDescription={this.props.weatherDescription}
          temperature={this.props.temperature}
          tempMin={this.props.tempMin}
          tempMax={this.props.tempMax}
        />
        <Precipitation
          precipitation={this.props.precipitation}
          className="lowerTwo"
        />
        <AirQuality aqi={this.props.aqi} className="lowerTwo" />
        <RecommendationsButton />
      </div>
    );
  }
}

export default WeatherPage;
