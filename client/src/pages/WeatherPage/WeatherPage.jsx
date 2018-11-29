import React, { Component } from 'react';
import '../App/App.css';
import NavBar from '../../components/Nav/Nav'

class WeatherPage extends Component {


    render() {
        return(
            <div>
                <NavBar/>
                <h2>Weather Page</h2>
            </div>
        )
    }
}

export default WeatherPage;