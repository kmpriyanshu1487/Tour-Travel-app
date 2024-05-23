import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import AboutImg from '../Assests/service.jpg'
import Footer from '../../src/Components/Footer/Footer'
import Trip from '../Components/Trips/Trip'
import Transport from '../Pages/Transport'
const Service = () => {
  return (
    <div>
     <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Services"
        btnClass="hide"
      />
      <Transport/>
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Service
