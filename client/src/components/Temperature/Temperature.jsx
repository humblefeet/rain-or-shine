import React from "react";
import "./Temperature.css";

class Temperature extends React.Component{
  render(){
    let src;
    switch(this.props.weatherIcon){
      case("clear-day"):
        src="https://i.imgur.com/FP5Wypi.png";
        break;
      case("clear-night"):
        src="https://i.imgur.com/c0rRzvF.png";
        break;
      case("partly-cloudy-day"):
        src="https://i.imgur.com/7d1ud3t.png";
        break;
      case("partly-cloudy-night"):
        src="https://i.imgur.com/Ci2q8DV.png";
        break;
      case("cloudy"):
        src="https://i.imgur.com/5Z8PUih.png";
        break;
      case("rain"):
        src="https://i.imgur.com/qvmjHJi.png";
        break;
      case("sleet"):
        src="https://i.imgur.com/5Sf3Iaz.png";
        break;
      case("snow"):
        src="https://i.imgur.com/RCwsGEX.png";
        break;
      case("wind"):
        src="https://i.imgur.com/VnlLMjz.png"
        break;
      case("fog"):
        src="https://i.imgur.com/sdRze4e.png";
        break;
      default:
        src="https://i.imgur.com/7d1ud3t.png";
    }
    return(
  
  <div className="Temperature">
    <h1>{this.props.temperature}°F</h1>
    <h5>Low: {this.props.temperatureMin}    </h5>
    <h5>  High: {this.props.temperatureMax}</h5>
    <h4>Real Feel: {this.props.feelsLikeTemp}°F</h4>
    <h5>{this.props.weatherDescription}</h5>
    <h5>{this.props.weatherSummary}</h5>
    <h3>{this.props.userLocation}</h3>
    <img src={src} alt="weather icon"/>
  </div>
    )
  }
};
export default Temperature;
