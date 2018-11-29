import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Welcome from '../../components/welcome/Welcome'
import SignInPage from '../SignInPage/SignInPage'

class App extends Component {


  render() {
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path='/' render={(props) =>
              <Welcome/>
            }/>
            <Route exact path='/signup' render={(props) =>
              <SignInPage/>
            }/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
