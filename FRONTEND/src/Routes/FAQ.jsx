import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import Faq from '../Components/FAQ/Faq'
import FeedImg from '..//Assests/faq2.jpg'

const FAQ = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={FeedImg}
        title="FAQ"
        text="I don’t pretend we have all the answers. But the questions are certainly worth thinking about."
        buttonText=""
        btnClass="hide"
      />
      <Faq/>
      <Footer/>
    </div>
  )
}

export default FAQ
