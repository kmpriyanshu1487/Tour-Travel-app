import '../Trips/Trip.css'
import React from "react";

const TripData = (props) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.img} alt="img" />
        
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <button>View more</button>
    </div>
  );
};

export default TripData;
