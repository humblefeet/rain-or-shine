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
const WEATHER_BASE_URL = "https://api.darksky.net/forecast/";
const FOUR_SQUARE_BASE_URL = "https://api.foursquare.com/v2/";
// const FOURSQUARE_CLIENT_ID = process.env.REACT_APP_FOURSQUARE_CLIENT_ID;
// const FOURSQUARE_CLIENT_SECRET = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET;
const WEATHER_API_KEY = `?api_key=${process.env.REACT_APP_DARK_SKY_API_KEY}`;
var todayDate = new Date()
  .toISOString()
  .slice(0, 10)
  .split("-")
  .join("");
var latitude;
var longitude;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      precipitation: 0,
      aqi: 0,
      userLocation: "",
      userLat: null,
      userLon: null,
      summary: null,
      data: null,
      places: null
    };
    this.getUserLocation = this.getUserLocation.bind(this);
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        (latitude = parseFloat(position.coords.latitude).toPrecision(4)),
          (longitude = parseFloat(position.coords.longitude).toPrecision(4));
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  componentDidMount() {
    this.getUserLocation();

    fetch(
      "https://cors-anywhere.herokuapp.com/" +
        `${WEATHER_BASE_URL}${WEATHER_API_KEY}/${latitude},${longitude}`
    )
      .then(response => response.json())
      .then(weather => this.setState({ data: weather }));

    fetch(
      `${FOUR_SQUARE_BASE_URL}venues/explore?ll=${latitude},${longitude}&client_id=${
        process.env.REACT_APP_FOURSQUARE_CLIENT_ID
      }&client_secret=${
        process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET
      }&v=${todayDate}`
    )
      .then(response => response.json())
      .then(place => this.setState({ places: place }));
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <h3>Rain-Or-Shine</h3>
            <NavButton />
          </nav>
          <Switch>
            <Route exact path="/signin" render={props => <SignInPage />} />
            <Route
              exact
              path="/weather"
              render={props => (
                <WeatherPage
                  precipitation={this.state.precipitation}
                  temperature={this.state.temperature}
                  places={this.state.places}
                  aqi={this.state.aqi}
                />
              )}
            />
            {console.log(latitude, longitude)}
            {console.log(this.state.places)}
            {console.log(this.state.data)}
            {console.log(todayDate)}

            <Route
              exact
              path="/recommendations"
              render={props => <RecommendationsPage />}
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
