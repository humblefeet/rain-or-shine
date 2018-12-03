import React, { Component } from "react";
import "../App/App.css";
import Recommendation from "../../components/Recommendation/Recommendation";

class DetailRecommendationsPage extends Component {
  render() {
    return (
      <div>
        <h2>One Recommendation</h2>
        <Recommendation
          venueId={this.props.venueId}
          places={this.props.places}
        />
      </div>
    );
  }
}

export default DetailRecommendationsPage;
