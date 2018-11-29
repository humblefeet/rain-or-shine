import React, { Component } from 'react';
import '../App/App.css';
import NavBar from '../../components/Nav/Nav'

class FavoritesPage extends Component {


    render() {
        return(
            <div>
                <NavBar/>
                <h2>Your Favorites</h2>
            </div>
        )
    }
}

export default FavoritesPage;