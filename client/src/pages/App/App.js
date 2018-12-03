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
import Recommendation from "../../components/Recommendation/Recommendation";
require("dotenv").config();
// const axios = require("axios");
const REACT_APP_DARK_SKY_WEATHER_BASE_URL = "https://api.darksky.net/forecast/";
const REACT_APP_DARK_SKY_WEATHER_API_KEY = "fb953733971e96653ed3ad18c8ee4db8";
const REACT_APP_FOUR_SQUARE_BASE_URL = "https://api.foursquare.com/v2/";
var todayDate = new Date()
  .toISOString()
  .slice(0, 10)
  .split("-")
  .join("");
var latitude = 47.62;
var longitude = -122.32;
var FOURSQUARE_FETCH = `${REACT_APP_FOUR_SQUARE_BASE_URL}venues/explore?ll=${latitude},${longitude}
  &client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT_ID}
  &client_secret=${
    process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET
  }&v=${todayDate}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherDescription: null,
      temperature: 0,
      feelsLikeTemp: 0,
      temperatureMin: 0,
      temperatureMax: 0,
      precipitation: 0,
      precipitationType: null,
      aqi: 0,
      userLocation: "",
      latitude: null,
      longitude: null,
      places: [],
      venueId: null,
      venueInfo: null,
      allWeather: null
    };
    this.getUserLocation = this.getUserLocation.bind(this);
    this.handleVenueClick = this.handleVenueClick.bind(this);
  }

  handleVenueClick = venueId => {
    this.setState({
      venueId: venueId
    });
    if (this.state.places.venue.contains(venueId)) {
      this.setState({
        venueInfo: this.state.places.venue
      });
    }
  };

  getUserLocation = () => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     var crd = position.coords;
    //     this.setState({
    //       latitude: crd.latitude.toFixed(2),
    //       longitude: crd.longitude.toFixed(2)
    //     });
    //   });
    // } else {
    //   alert("Geolocation is not supported by this browser.");
    // }

    /*-- 2 approaches to finding lat and long --*/
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    function success(pos) {
      var crd = pos.coords;
      // this.setState({
      latitude = crd.latitude.toFixed(2);
      longitude = crd.longitude.toFixed(2);
      // });
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  componentDidMount() {
    this.getUserLocation();

    /*--- fetch from Weather API---*/
    fetch(
      "https://cors-anywhere.herokuapp.com/" +
        `${REACT_APP_DARK_SKY_WEATHER_BASE_URL}${REACT_APP_DARK_SKY_WEATHER_API_KEY}/${latitude},${longitude}`
    )
      .then(response => response.json())
      .then(weather =>
        this.setState({
          weatherDescription: weather.currently.summary,
          temperature: Math.round(weather.currently.temperature),
          temperatureMin: Math.round(weather.daily.data[0].temperatureMin),
          temperatureMax: Math.round(weather.daily.data[0].temperatureMax),
          feelsLikeTemp: Math.round(weather.currently.apparentTemperature),
          precipitation: weather.currently.precipProbability * 100,
          precipitationType: weather.currently.precipType,
          allWeather: weather
        })
      );

    /*--- fetch from FourSquare ---*/
    //if (this.state.precipitation > 50) {query indoor places}
    //if (this.state.precipitation < 50 && this.state.precipitation >25 && this.state.temperature > 65){query all places}
    //if (this.state.precipitation < 25  || weatherDescription  === 'sunny'){query all outdoor places}
    fetch(FOURSQUARE_FETCH)
      .then(response => response.json())
      .then(places =>
        this.setState({
          places: places.response.groups[0].items
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
            {/* {console.log(this.state.latitude)}
            {console.log(this.state.longitude)} */}
            {console.log(this.state.places)}
            {console.log(this.state.allWeather)}
          </nav>
          <Switch>
            <Route exact path="/signin" render={props => <SignInPage />} />
            <Route
              exact
              path="/weather"
              render={props => (
                <WeatherPage
                  feelsLikeTemp={this.state.feelsLikeTemp}
                  weatherDescription={this.state.weatherDescription}
                  temperature={this.state.temperature}
                  temperatureMin={this.state.temperatureMin}
                  temperatureMax={this.state.temperatureMax}
                  aqi={this.state.aqi}
                  precipitation={this.state.precipitation}
                  precipitationType={this.state.precipitationType}
                />
              )}
            />
            <Route
              exact
              path="/recommendations"
              render={props => (
                <RecommendationsPage
                  places={this.state.places}
                  handleVenueClick={this.handleVenueClick}
                />
              )}
            />
            <Route
              exact
              path="/recommendations/:id"
              render={props => (
                <DetailRecommendationPage
                  venueId={this.state.venueId}
                  places={this.state.places}
                />
              )}
            />
            <Route exact path="/favorites" render={() => <FavoritesPage />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
