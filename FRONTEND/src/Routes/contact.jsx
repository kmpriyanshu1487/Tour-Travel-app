import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Footer from '../../src/Components/Footer/Footer'
import contactImg from '../Assests/contact.jpg'
import ContactUs from '../Components/ContactUs/ContactUs'
const contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Contact Us"
        btnClass="hide"
      />
      <ContactUs/>
        <Footer/>
    </div>
  )
}

export default contact;
