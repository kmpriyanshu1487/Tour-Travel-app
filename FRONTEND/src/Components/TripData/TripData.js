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
      <div className="t-image" >
        <img src={props.img} alt="img" data-aos='fade-up'/>
      </div>
      <h4 data-aos='fade-up'>{props.heading}</h4>
      <p className='trip-desc' data-aos='fade-up'>{props.text}</p>
      <button>View more</button>
    </div>
  );
};

export default TripData;
