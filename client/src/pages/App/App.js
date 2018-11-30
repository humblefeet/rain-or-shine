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
const base_url = 'https://api.darksky.net/forecast/'
const API_KEY = `?api_key=${process.env.REACT_APP_DARK_SKY_API_KEY}`;




class App extends Component {
  constructor(props){
    super(props)
    this.state={
      temperature: Number,
      rainChance: Number,
      aqi: Number,
      userLocation: String,
      userLat: Number,
      userLon: Number,
      summary: String,
      data: ''
    }
  }


  componentWillMount(e){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.setState({
          userLat: parseFloat(position.coords.latitude).toPrecision(12),
          userLon: parseFloat(position.coords.longitude).toPrecision(12),
        })
        console.log(this.state.userLat, this.state.userLon)
      });
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }

  

  componentDidMount(){
    console.log("fetch here")
    // axios.get(`${base_url}${API_KEY}/${this.state.userLat},${this.state.userLon}`)
    // .then(res => {this.setState({
    //   data: res.data
      
    // })
    // console.log(res)})
      // this.setState({
      //   temperature: data.currently.temperature,
      //   rainChance: data.currently.precipProbability,
      //   summary: data.hourly.summary
      // })
    
    // console.log(this.state.data)
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
