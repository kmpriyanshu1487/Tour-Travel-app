import React,{useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'


const Distinationdata = (props) => {
useEffect(()=>{
  Aos.init();
},[])


  return (
    <div className={props.className}>
      <div className="desc-text">
        <h2 data-aos='fade-up'>{props.heading}</h2>
        <p data-aos='fade-up'>{props.text}</p>
      </div>
      <div className="image" >
        <img data-aos='fade-up' src={props.img1} alt="img" />
        <img data-aos='fade-up' src={props.img2} alt="img" />
      </div>
    </div>
  );
};

export default Distinationdata;
