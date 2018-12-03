import React from "react";
import "./RecommendationsList.css";
import Recommendation from "../Recommendation/Recommendation";
import { BrowserRouter as Router, Link } from "react-router-dom";

const RecommendationsList = props => (
  <div className="RecommendationsList">
    {props.places.map((place, id) => (
      <div>
        <Link to={`/recommendations/${id}`} key={id}>
          <span
            onClick={() => {
              props.handleVenueClick(id);
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
