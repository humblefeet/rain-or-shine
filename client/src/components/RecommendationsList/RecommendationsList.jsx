import React from "react";
import "./RecommendationsList.css";
import Recommendation from "../Recommendation/Recommendation";
import { BrowserRouter as Router, Link } from "react-router-dom";

const RecommendationsList = props => (
  <div className="RecommendationsList">
    {props.places.map(place => (
      <div>
        <Link to={`/recommendations/:${place.venue.id}`} key={place.venue.id}>
          <span
            onClick={() => {
              props.handleVenueClick(place.venue.id);
            }}
          >
            {place.venue.name}
          </span>
        </Link>
      </div>
    ))}
  </div>
);

export default RecommendationsList;
