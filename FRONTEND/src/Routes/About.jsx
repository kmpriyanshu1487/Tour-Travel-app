import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../../src/Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import AboutImg from '../Assests/about.jpg'
import AboutUs from '../Components/AboutUs/AboutUs'

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default About
