import React from "react";
import "./RecommendationsList.css";
import { Link } from "react-router-dom";

const RecommendationsList = props => {
  return (
    <div className="RecommendationsList">
      {props.venues.map((venue, id) => {
        const imgSource =
          venue.venue.categories.length > 0 && venue.venue.categories[0].icon;
        return (
          <div key={props.key}>
            <Link to={`/recommendations/${id}`} >
              <span onClick={() => props.handleVenueClick(id)}>
                {venue.venue.name}
                {imgSource && (
                  <img
                    src={`${imgSource.prefix}bg_32${imgSource.suffix}`}
                    alt="icon"
                  />
                )}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendationsList;
