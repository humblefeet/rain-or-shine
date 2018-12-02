import React from "react";
import "./RecommendationsList.css";
import Recommendation from "../Recommendation/Recommendation";

const RecommendationsList = props => (
  <div className="RecommendationsList">
    {props.response.groups[0].items.map(place => {
      // <Recommendation place={place} />;
      console.log(place);
    })}
  </div>
);

export default RecommendationsList;
