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
const base_url = 'http://api.openweathermap.org/data/2.5/'
const api_key = `?api_key=${process.env.Open_Weather_API_KEY}`



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      temperature: 0,
      rainChance: 0,
      aqi: 0,
      userLocation: null,
      userLat: 0,
      userLon: 0
    }
    this.handleGetUserLocation = this.handleGetUserLocation.bind(this)
  }


  handleGetUserLocation(e){
    e.preventDefault()
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.setState({
          userLat: position.coords.latitude,
          userLon: position.coords.longitude
        })
        console.log(this.state.userLat, this.state.userLon)
      });
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }

  

  componentDidMount(){
    axios.get(`${base_url}weather/?lat=${this.state.userLat}lon=${this.state.userLon}&appid=${api_key}`)
    .then(res =>{
      var data=res.data;
      this.setState({
        temperature: data.main.temp,
        rainChance: data.rain,
        userLocation: data.name,

      })
    })
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
                temperature={this.state.temperature}
                rainChance={this.state.rainChance}
                aqi={this.state.aqi}
              />}/>
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
