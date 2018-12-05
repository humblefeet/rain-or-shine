import React from "react";
import "./Recommendation.css";
import Favorite from'../Favorite/Favorite'

class Recommendation extends React.Component {
  render(){
    return(
      <div className="Recommendation" key={this.props.key}>
        <h3 className="name">{this.props.venue.venue.name}</h3>
        <hr/>
        <h5>{this.props.venue.venue.categories[0].shortName}</h5>
        <div>
          <h4>{this.props.venue.venue.location.address}</h4>
        </div>
        <div>
          <p>"{this.props.venue.reasons.items[0].summary}"</p>
        </div>
        <Favorite user={this.props.user}/>
      </div>
    )
  }
};

export default Recommendation;
