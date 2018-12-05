import React, { Component } from "react";
import "../App/App.css";
import RecommendationsList from "../../components/RecommendationsList/RecommendationsList";

class RecommendationsPage extends Component {
  render() {
    return (
      <div>
        <h2>Your Recommendations</h2>
        <RecommendationsList
          venues={this.props.venues}
          handleVenueClick={this.props.handleVenueClick}
          venueId={this.props.venueId}
          handleAddFavorite={this.props.handleAddFavorite}
        />
      </div>
    );
  }
}

export default RecommendationsPage;
