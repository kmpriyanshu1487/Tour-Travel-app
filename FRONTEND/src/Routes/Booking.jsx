import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Bookings from '../Components/Bookings/Bookings'
import Footer from '../Components/Footer/Footer'
import contactImg from '../Assests/contact.jpg'
import Hero from '../Components/Hero/Hero'

const Booking = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Bookings"
        btnClass="hide"
      />
      <Bookings/>
      <Footer/>
    </div>
  )
}

export default Booking
