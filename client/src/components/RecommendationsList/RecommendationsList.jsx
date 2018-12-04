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
          <div className="single" onClick={() => props.handleVenueClick(id)} key={props.key}>
            <Link to={`/recommendations/${id}`} >
              <span >
                {imgSource && (
                  <img
                    src={`${imgSource.prefix}bg_32${imgSource.suffix}`}
                    alt="icon"
                  />
                )}                
                {venue.venue.name}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendationsList;
