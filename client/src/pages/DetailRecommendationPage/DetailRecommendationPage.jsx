import React, { Component } from "react";
import "../App/App.css";
import Recommendation from "../../components/Recommendation/Recommendation";


class DetailRecommendationsPage extends Component {
  render() {
    return (
      <div>
        <Recommendation 
          user={this.props.user} 
          key={this.props.key} 
          venue={this.props.venue} 
          venues={this.props.venues}
        />
      </div>
    );
  }
}

export default DetailRecommendationsPage;
