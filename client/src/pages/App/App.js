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
// import Axios from "axios";
require("dotenv").config();
// const REACT_APP_FOUR_SQUARE_BASE_URL = "https://api.foursquare.com/v2/";
// var todayDate = new Date()
//   .toISOString()
//   .slice(0, 10)
//   .split("-")
//   .join("");
// var latitude = 47.62;
// var longitude = -122.32;
// var FOURSQUARE_FETCH = `${REACT_APP_FOUR_SQUARE_BASE_URL}venues/explore?ll=${latitude},${longitude}
//   &client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT_ID}
//   &client_secret=${
//     process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET
//   }&v=${todayDate}`;
var  dummy= [
              {name: "park",
              location: "dagjkdnbfkadjhfladsknfladf"},
              {name: "dfadfadf",
              location:"dafgladnflakdjfla"},
              {name: "dfkajhdgjdsg",
              location: "dakfjhadlfskjadsf"}
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherDescription: null,
      temperature: 50,
      feelsLikeTemp: 34,
      temperatureMin: 30,
      temperatureMax: 70,
      precipitation: 65,
      precipitationType: "snow",
      hourlySummary: null,
      aqi: 0,
      userLocation: "Seattle",
      latitude: null,
      longitude: null,
      venues: dummy,
      venueId: null,
      venueInfo: null,
      allWeather: null,
      weatherIcon: null,
      coordinates: null
    };
    // this.getUserLocation = this.getUserLocation.bind(this);
    this.handleVenueClick = this.handleVenueClick.bind(this);
  }

  handleVenueClick = venueId => {
    this.setState({
      venueId: venueId
    });
  };

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

    /*--- fetch from Backend Weather API---*/
    fetch("/api/weather")
      .then(response => response.json())
      .then(weather => {
        console.log(weather);
        // console.log(weather.venues)
        return this.setState({
          // weatherDescription: weather.currently.summary,
          // temperature: Math.round(weather.currently.temperature),
          // temperatureMin: Math.round(weather.daily.data[0].temperatureMin),
          // temperatureMax: Math.round(weather.daily.data[0].temperatureMax),
          // feelsLikeTemp: Math.round(weather.currently.apparentTemperature),
          // precipitation: weather.currently.precipProbability * 100,
          // precipitationType: weather.currently.precipType,
          // allWeather: weather,
          // weatherIcon: weather.hourly.data[0].icon,
          // hourlySummary: weather.daily.summary,
          // venues: weather.venues

        });
      });

    /*--- fetch from Backend FourSquare API ---*/

  //   fetch("/api/recommendations")
  //     .then(response => response.json())
  //     .then(venues => {
  //       console.log(venues);
  //       return this.setState({
  //         // venues:venues
  //       });
  //     });
  }

  render() {
    return (
  //     <Router>
  //       <div>
  //         <nav>
  //           <h3>Rain-Or-Shine</h3>
  //           <NavButton />
  //           {/* {console.log(this.state.weatherIcon)} */}
  //           {console.log(this.state.venues)}
  //           {console.log(this.state.allWeather)}
  //         </nav>
  //         <Switch>
  //           <Route exact path="/signin" render={props => <SignInPage />} />
  //           <Route
  //             exact
  //             path="/weather"
  //             render={props => (
  //               <WeatherPage
  //                 feelsLikeTemp={this.state.feelsLikeTemp}
  //                 weatherDescription={this.state.weatherDescription}
  //                 temperature={this.state.temperature}
  //                 temperatureMin={this.state.temperatureMin}
  //                 temperatureMax={this.state.temperatureMax}
  //                 aqi={this.state.aqi}
  //                 precipitation={this.state.precipitation}
  //                 precipitationType={this.state.precipitationType}
  //                 weatherIcon={this.state.weatherIcon}
  //                 weatherSummary={this.state.weatherSummary}
  //               />
  //             )}
  //           />
  //           <Route
  //             exact
  //             path="/recommendations"
  //             render={props => (
  //               <RecommendationsPage
  //                 venues={this.state.venues}
  //                 handleVenueClick={this.handleVenueClick}
  //                 key={this.state.venueId}
  //               />
  //             )}
  //           />
  //           <Route
  //             exact
  //             path="/recommendations/:id"
  //             render={props => (
  //               <DetailRecommendationPage
  //                 venue={this.state.venues[this.state.venueId]}
  //                 key={this.state.venueId}
  //               />
  //             )}
  //           />
  //           <Route exact path="/favorites" render={() => <FavoritesPage />} />
  //         </Switch>
  //       </div>
  //     </Router>
  <div></div>
    )
  }
}

export default App;
