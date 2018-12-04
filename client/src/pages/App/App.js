import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavButton from "../../components/Nav/NavButton";
import SignInPage from "../SignInPage/SignInPage";
import WeatherPage from "../WeatherPage/WeatherPage";
import RecommendationsPage from "../RecommendationsPage/RecommendationsPage";
import DetailRecommendationPage from "../DetailRecommendationPage/DetailRecommendationPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import Favorite from  '../../components/Favorite/Favorite';
import Login from '../../components/Login/Login';
import Signup from '../../components/SignUp/Signup';
import {UserProfile} from '../../components/User/UserProfile';
import Axios from "axios";
require("dotenv").config();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*---- AUTH  ----*/
      token: '',
      user: null,
      error: null,
      lockedResult: '',
      /*---- WEATHER ----*/
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
      /*--- VENUES ---*/
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
    this.checkForLocalToken = this.checkForLocalToken.bind(this)
    this.logout = this.logout.bind(this)
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  /*--------  Auth Functionality   --------*/

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  handleClick(e) {
    e.preventDefault()
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
    Axios.get('/locked/test').then(result => {
      this.setState({
        lockedResult: result.data
      })
    })
  }

  logout() {
    // Remove the token from localStorage
    localStorage.removeItem('mernToken')
    // Remove the user info from the state
    this.setState({
      token: '',
      user: null
    })
  }

  checkForLocalToken() {
    // Look in local storage for the token
    let token = localStorage.getItem('mernToken')
    if (!token || token === 'undefined') {
      // There was no token
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: null
      })
    } else {
      // We did find a token in localStorage
      // Send it to the back to be verified
      Axios.post('/auth/me/from/token', {
        token
      }).then( result => {
        if (result.data.type !== 'success') {
          this.setState({
            error: result.data
          })
        } else {
          // Put the token in localStorage
          localStorage.setItem('mernToken', result.data.token)
          this.setState({
            token: result.data.token,
            user: result.data.user
          })
        }
      })
    }
  }

  /*-------------  App Functionality  ---------------*/

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

    /*-------- fetch from Backend API --------*/
    fetch("/api/weather")
      .then(res => res.json())
      .then(weather => {
        console.log(weather.currently);
        // console.log(weather.venues)
        return this.setState({
          /*------- Assign to state from weather Api ----------*/
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
          /*--------- Assign to state from foursquare api ----------*/
          venues: weather.response.groups[0].items

        });
      });


  }

  render() {
    let user = this.state.user
    if (user) {
      return (
        <div className="App">
          <header>
          </header>
          <div className="content-box">
          <Router>
        <div>
          <nav>
            <Link to='/' >
              <img className="Title Logo" src="https://i.imgur.com/djkztGB.png" alt="logo"></img>
              <h3 className="Title">Rain-Or-Shine</h3>
            </Link>
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
              path="/"
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
                  venueId={this.state.venueId}
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
                  user={this.state.user}
                />
              )}
            />
            <Route exact path="/favorites" 
              render={() => 
                <FavoritesPage 
                  favorites={this.state.favorites}
                />} />
              )}/>
          </Switch>
        </div>
      </Router>
            <UserProfile user={user} logout={this.logout} />
            <p><a onClick={this.handleClick}>Test the protected route. Results below...</a></p>
            <p>{this.state.lockedResult}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header>
          </header>
          <div className="content-box">
            <Signup liftToken={this.liftTokenToState} />
            <Login liftToken={this.liftTokenToState} />
          </div>
        </div>
      )
    }
  }
}

export default App;
