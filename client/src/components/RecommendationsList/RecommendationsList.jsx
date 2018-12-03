import React from "react";
import "./RecommendationsList.css";
import { Link } from "react-router-dom";

const RecommendationsList = props => (
  <div className="RecommendationsList">
    {props.venues.map((venue, id) => (
      <div>
        <Link to={`/recommendations/${id}`} key={id}>
          <span onClick={() => props.handleVenueClick(id)}>
            {venue.venue.name}
            <img
              src={`${venue.venue.categories[0].icon.prefix}.png`}
              alt="icon"
            />
          </span>
        </Link>
      </div>
    ))}
  </div>
);

export default RecommendationsList;
