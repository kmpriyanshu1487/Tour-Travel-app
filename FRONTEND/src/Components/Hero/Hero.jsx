import React,{useEffect} from 'react'
import './Hero.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Hero = (props) => {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <>
      <div className={props.cName}>
        <img id='heroImg-main' src={props.heroImg} alt="heroImg" />
        <div className="hero-text">
            <h1 data-aos='fade-right'>{props.title}</h1>
            <p data-aos='fade-left'>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.buttonText} <i class="fa fa-arrow-right" data-aos='fade-right' aria-hidden="true"></i></a>
        </div>
        
      </div>
    </>
  )
}

export default Hero
