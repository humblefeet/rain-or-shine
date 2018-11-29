import React, { Component } from 'react';
import '../App/App.css';
import NavBar from '../../components/Nav/Nav'

class RecommendationsPage extends Component {


    render() {
        return(
            <div>
                <NavBar/>
                <h2>Your Recommendations</h2>
            </div>
        )
    }
}

export default RecommendationsPage;