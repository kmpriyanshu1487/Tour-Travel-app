import '../Trips/Trip.css'
import React,{useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const TripData = (props) => {
  useEffect(() => {
    Aos.init();
}, []);

  return (
    <div className="t-card">
      <div className="t-image" data-aos='fade-left'>
        <img src={props.img} alt="img" />
        
      </div>
      <h4 data-aos='fade-right'>{props.heading}</h4>
      <p data-aos='fade-up'>{props.text}</p>
      <button data-aos='fade-down'>View more</button>
    </div>
  );
};

export default TripData;
