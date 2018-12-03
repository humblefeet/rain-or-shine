import React, { Component } from "react";
import "../App/App.css";
import RecommendationsList from "../../components/RecommendationsList/RecommendationsList";

class RecommendationsPage extends Component {
  render() {
    return (
      <div>
        <h2>Your Recommendations</h2>
        <RecommendationsList
          places={this.props.places}
          handleVenueClick={this.props.handleVenueClick}
        />
      </div>
    );
  }
}

export default RecommendationsPage;
