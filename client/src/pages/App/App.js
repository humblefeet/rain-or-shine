import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavButton from "../../components/Nav/NavButton";
import SignInPage from "../SignInPage/SignInPage";
import WeatherPage from "../WeatherPage/WeatherPage";
import RecommendationsPage from "../RecommendationsPage/RecommendationsPage";
import DetailRecommendationPage from "../DetailRecommendationPage/DetailRecommendationPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import Favorite from  '../../components/Favorite/Favorite'
import { request } from "http";
import Axios from "axios";
require("dotenv").config();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherDescription: '',
      temperature: 0,
      feelsLikeTemp: 0,
      temperatureMin: 0,
      temperatureMax: 0,
      precipitation: 0,
      precipitationType: '',
      hourlySummary: '',
      aqi: 0,
      userLocation: '',
      latitude: 0,
      longitude: 0,
      venues: [],
      venueId: null,
      venueInfo: '',
      allData: '',
      weatherIcon: '',
      coordinates: 0,
      favorites:[]
    };
    // this.getUserLocation = this.getUserLocation.bind(this);
    this.handleVenueClick = this.handleVenueClick.bind(this);
  }

  handleVenueClick = venueId => {
    this.setState({
      venueId: venueId
    });
  };

  addFavorite = (venueId)=> {
    Axios
      .post('favorites/all',{
        venueId: venueId
      })
      .then(
        function(error){
          console.log(error)
        }
      )
      .then(function(response){
        console.log(response)
      })
  }

  handleAddFavorite=()=>{}

  // getUserLocation = () => {
  //   var options = {
  //     enableHighAccuracy: true,
  //     timeout: 5000,
  //     maximumAge: 0
  //   };
  //   function success(pos) {
  //     var crd = pos.coords;
  //     this.setState({
  //       latitude: crd.latitude.toFixed(2),
  //       longitude: crd.longitude.toFixed(2)
  //     });
  //   }
  //   function error(err) {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //   }
  //   navigator.geolocation.getCurrentPosition(success, error, options);
  // };

  componentDidMount() {
    // this.getUserLocation();

    /*--- fetch from Backend API---*/
    fetch("/api/weather")
      .then(response => response.json())
      .then(weather => {
        console.log(weather);
        // console.log(weather.venues)
        return this.setState({
          /*-- Assign state from weather Api --*/
          userLocation: weather.response.headerFullLocation,
          weatherDescription: weather.currently.summary,
          temperature: Math.round(weather.currently.temperature),
          temperatureMin: Math.round(weather.daily.data[0].temperatureMin),
          temperatureMax: Math.round(weather.daily.data[0].temperatureMax),
          feelsLikeTemp: Math.round(weather.currently.apparentTemperature),
          precipitation: weather.currently.precipProbability * 100,
          precipitationType: weather.currently.precipType,
          allData: weather,
          weatherIcon: weather.hourly.data[0].icon,
          hourlySummary: weather.daily.summary,
          /*-- Assign state from foursquare api--*/
          venues: weather.response.groups[0].items

        });
      });

    fetch('/favorites/all')
      .then(response=>response.json())
      .then(favorites =>{
        console.log(favorites)
        this.setState({
          favorites: favorites
        })
      })

    
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <img className="Title Logo" src="https://i.imgur.com/djkztGB.png"></img>
            <h3 className="Title">Rain-Or-Shine</h3>
            <NavButton />
            {/* {console.log(this.state.weatherIcon)} */}
            {console.log(this.state.venues)}
            {console.log(this.state.allWeather)}
            {console.log(this.state.venues[this.state.venueId])}
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
                  weatherIcon={this.state.weatherIcon}
                  weatherSummary={this.state.weatherSummary}
                  userLocation={this.state.userLocation}
                />
              )}
            />
            <Route
              exact
              path="/recommendations"
              render={props => (
                <RecommendationsPage
                  venues={this.state.venues}
                  handleVenueClick={this.handleVenueClick}
                  key={this.state.venueId}
                />
              )}
            />
            <Route
              exact
              path="/recommendations/:id"
              render={props => (
                <DetailRecommendationPage
                  venues={this.state.venues}
                  venue={this.state.venues[this.state.venueId]}
                  key={this.state.venueId}
                />
              )}
            />
            <Route exact path="/favorites" 
              render={() => 
                <FavoritesPage 
                  favorites={this.state.favorites}
                />} />
            <Route exact path="/favorites/:id"
              render={() =>(
                <Favorite/>
              )}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
