import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Welcome from '../../components/welcome/Welcome'
import SignInPage from '../SignInPage/SignInPage'
import WeatherPage from '../WeatherPage/WeatherPage'
import RecommendationsPage from '../RecommendationsPage/RecommendationsPage'
import DetailRecommendationPage from '../DetailRecommendationPage/DetailRecommendationPage'
import FavoritesPage from '../FavoritesPage/FavoritesPage';


class App extends Component {


  render() {
    return(
      <Router>
        <div>
          <nav>
            <h3>Rain-Or-Shine</h3>
          </nav>
          <Switch>
            <Route exact path='/' render={(props) =>
              <Welcome/>
            }/>
            <Route exact path='/signin' render={(props)=> <SignInPage/>}/>
            <Route exact path='/weather'render={(props)=> <WeatherPage/>}/>
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
