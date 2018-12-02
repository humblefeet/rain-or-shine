import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Welcome from "../../components/welcome/Welcome";
import NavButton from "../../components/Nav/NavButton";
import SignInPage from "../SignInPage/SignInPage";
import WeatherPage from "../WeatherPage/WeatherPage";
import RecommendationsPage from "../RecommendationsPage/RecommendationsPage";
import DetailRecommendationPage from "../DetailRecommendationPage/DetailRecommendationPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
require("dotenv").config();
// const axios = require("axios");
const WEATHER_BASE_URL = "api.openweathermap.org/data/2.5/weather?";
const FOUR_SQUARE_BASE_URL = "https://api.foursquare.com/v2/";
// const FOURSQUARE_CLIENT_ID = process.env.REACT_APP_FOURSQUARE_CLIENT_ID;
// const FOURSQUARE_CLIENT_SECRET = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET;
const WEATHER_API_KEY = "03cf491e7ee66694a1ac4c9586ef95ff";
var todayDate = new Date()
  .toISOString()
  .slice(0, 10)
  .split("-")
  .join("");
var latitude = 47.62;
var longitude = -122.32;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherDescription: null,
      temperature: 0,
      tempMin: 0,
      tempMax: 0,
      precipitation: 0,
      aqi: 0,
      userLocation: "",
      latitude: null,
      longitude: null,
      places: []
    };
    this.getUserLocation = this.getUserLocation.bind(this);
  }

  getUserLocation() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     latitude = parseFloat(position.coords.latitude).toPrecision(4);
    //     longitude = parseFloat(position.coords.longitude).toPrecision(4);
    //   });
    // } else {
    //   alert("Geolocation is not supported by this browser.");
    // }
    /*-- 2 approaches to finding lat and long --*/
    // var options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // };
    // function success(pos) {
    //   var crd = pos.coords;
    //   latitude = crd.latitude.toFixed(2);
    //   longitude = crd.longitude.toFixed(2);
    // }
    // function error(err) {
    //   console.warn(`ERROR(${err.code}): ${err.message}`);
    // }
    // navigator.geolocation.getCurrentPosition(success, error, options);
  }

  componentDidMount() {
    this.getUserLocation();

    fetch(
      "https://cors-anywhere.herokuapp.com/" +
        `${WEATHER_BASE_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    )
      .then(response => response.json())
      .then(weather =>
        this.setState({
          weatherDescription: weather.weather[0].description,
          temperature: weather.main.temp,
          tempMin: weather.main.temp_min,
          tempMax: weather.main.temp_max
        })
      );

    fetch(
      `${FOUR_SQUARE_BASE_URL}venues/explore?ll=${latitude},${longitude}&client_id=${
        process.env.REACT_APP_FOURSQUARE_CLIENT_ID
      }&client_secret=${
        process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET
      }&v=${todayDate}`
    )
      .then(response => response.json())
      .then(places =>
        this.setState({
          places: places
        })
      );
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <h3>Rain-Or-Shine</h3>
            <NavButton />
            {console.log(latitude)}
            {console.log(longitude)}
            {console.log(this.state.tempMin)}
            {console.log(this.state.tempMax)}

            {console.log(this.state.places)}
            {console.log(this.state.weather)}
            {console.log(todayDate)}
          </nav>
          <Switch>
            <Route exact path="/signin" render={props => <SignInPage />} />
            <Route
              exact
              path="/weather"
              render={props => (
                <WeatherPage
                  tempMin={this.state.tempMin}
                  tempMax={this.state.tempMax}
                  weatherDescription={this.state.weatherDescription}
                  temperature={this.state.temperature}
                  aqi={this.state.aqi}
                />
              )}
            />
            <Route
              exact
              path="/recommendations"
              render={props => (
                <RecommendationsPage places={this.state.places} />
              )}
            />
            <Route
              exact
              path="/recommendations/:id"
              render={props => <DetailRecommendationPage />}
            />
            <Route exact path="/favorites" render={() => <FavoritesPage />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
