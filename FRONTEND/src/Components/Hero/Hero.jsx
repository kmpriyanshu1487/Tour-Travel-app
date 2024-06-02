import React, { useEffect } from 'react'
import './Hero.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Hero = (props) => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <div className={props.cName}>
        <img id='heroImg-main' src={props.heroImg} alt="heroImg" />
        <div className="hero-text">
          <h1 >{props.title}</h1>
          <p >{props.text}</p>
          <a href={props.url} className={props.btnClass} >{props.buttonText}  <i class="fa fa-arrow-right" aria-hidden="true"  ></i></a>
         
        </div>
        

      </div>
    </>
  )
}

export default Hero
