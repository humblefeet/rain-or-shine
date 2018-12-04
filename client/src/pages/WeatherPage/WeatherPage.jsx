import React, { Component } from "react";
import "../App/App.css";
import "./WeatherPage.css";
import Temperature from "../../components/Temperature/Temperature";
// import AirQuality from "../../components/AirQuality/AirQuality";
import Precipitation from "../../components/Precipitation/Precipitation";
import { Link } from "react-router-dom";

class WeatherPage extends Component {
  render() {
    return (
      <div className="WeatherPage">
        <h2>Local Weather</h2>

        <Temperature
          weatherDescription={this.props.weatherDescription}
          temperature={this.props.temperature}
          feelsLikeTemp={this.props.feelsLikeTemp}
          temperatureMin={this.props.temperatureMin}
          temperatureMax={this.props.temperatureMax}
          weatherIcon={this.props.weatherIcon}
          weatherSummary={this.props.weatherSummary}
          userLocation={this.props.userLocation}
        />
        <Precipitation
          precipitationType={this.props.precipitationType}
          precipitation={this.props.precipitation}
          className="lowerTwo"
        />
        {/* <AirQuality aqi={this.props.aqi} className="lowerTwo" /> */}
        <Link to="/recommendations">
          <div className="button">
            <h3>Local Spots</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default WeatherPage;
