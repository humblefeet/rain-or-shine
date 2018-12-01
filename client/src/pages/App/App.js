import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from '../../components/Nav/Nav'
import SignInPage from '../SignInPage/SignInPage'
import WeatherPage from '../WeatherPage/WeatherPage'
import RecommendationsPage from '../RecommendationsPage/RecommendationsPage'
import DetailRecommendationPage from '../DetailRecommendationPage/DetailRecommendationPage'
import FavoritesPage from '../FavoritesPage/FavoritesPage';
require('dotenv').config()
const axios = require('axios');
const base_url = 'https://localhost:3000'
const four_square_base_url = 'https://api.foursquare.com/v2/'
const FOURSQUARE_CLIENT_ID= process.env.REACT_APP_FOURSQUARE_CLIENT_ID
const FOURSQUARE_CLIENT_SECRET=process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET
// const API_KEY = `?api_key=${process.env.REACT_APP_DARK_SKY_API_KEY}`;
// var userLat;
// var userLon;

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      temperature: null,
      rainChance: null,
      aqi: null,
      userLocation: '',
      userLat: null,
      userLon: null,
      summary: '',
      data: '',
      places: null
    }
  }

  getUserLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
          this.setState({
            userLat: parseFloat(position.coords.latitude).toPrecision(12),
            userLon: parseFloat(position.coords.longitude).toPrecision(12)
          })
      })
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }

  componentDidMount(){
    this.getUserLocation()

    axios.post(`/api/weather`, {
      userLat: this.state.userLat,
      userLon: this.state.userLon
    })
    .then(response => console.log(response))


    axios.get('/api/weather')
      .then( (result) => {
        this.setState({
          data: result.data
        })
      })
      .then(console.log(this.state.data))

    axios.get(`${four_square_base_url}venues/explore?ll=40.7,-74&client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=20181130`)
      .then(response => response.json())
      .then(place=>  this.setState({places: place}))
  }

  render() {
    return(
      <Router>
        <div>
          <nav>
            <h3>Rain-Or-Shine</h3>
            <i className="material-icons">menu</i>
          </nav>
          <Switch>
            <Route exact path='/' render={(props) =>
              <NavBar handleGetUserLocation={this.handleGetUserLocation}/>
            }/>
            <Route exact path='/signin' render={(props)=> <SignInPage/>}/>
            <Route exact path='/weather'render={(props)=>
              <WeatherPage
                // temperature={this.state.temperature}
                // rainChance={this.state.rainChance}
                // aqi={this.state.aqi}
              />}/>  
                {console.log(this.state.places)}

            <Route exact path='/recommendations' render={(props)=> <RecommendationsPage/>}/>
            <Route exact path='/recommendations/:id'render={(props)=> <DetailRecommendationPage/>}/>
            <Route exact path='/favorites' render={() => <FavoritesPage/>}/>
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;
