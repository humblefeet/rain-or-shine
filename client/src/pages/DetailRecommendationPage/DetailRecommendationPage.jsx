import React, { Component } from "react";
import "../App/App.css";
import Recommendation from "../../components/Recommendation/Recommendation";

class DetailRecommendationsPage extends Component {
  render() {
    return (
      <div>
        <h2>One Recommendation</h2>
        <Recommendation key={this.props.key} venue={this.props.venue} />
      </div>
    );
  }
}

export default DetailRecommendationsPage;
