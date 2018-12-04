import React, { Component } from "react";
import "../App/App.css";
import Favorite from '../../components/Favorite/Favorite'

class FavoritesPage extends Component {
  render() {
    return (
      <div>
        <h2>Your Favorites</h2>
        <Favorite/>
      </div>
    );
  }
}

export default FavoritesPage;
