import './AboutUs.css'
import React,{useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const AboutUs = () => {

  useEffect(() => {
    Aos.init();
}, []);
  return (
    <div className='about-containor'>
      <h1  data-aos='fade-up' data-aos-duration="2000">Our History</h1>
      <p data-aos='fade-up' data-aos-duration="2000">Founded in 2024, <b>Explorer</b> has been a trusted name in vehicle rentals for [Number] years. From humble beginnings, we've grown to become a premier destination for quality rental vehicles, serving countless satisfied customers. Our journey is marked by a commitment to excellence, customer satisfaction, and innovation in the rental industry. Today, we continue to uphold these values, offering a diverse fleet, convenient booking options, and personalized service to meet the needs of every traveler."</p>
      <h1 data-aos='fade-up' data-aos-duration="2000">Our Mission</h1>
      <p data-aos='fade-up' data-aos-duration="2000">At <b>Explorer</b>, our mission is to provide reliable, convenient, and affordable vehicle rental solutions to empower travelers to explore with confidence. We strive to exceed expectations by offering a diverse selection of well-maintained vehicles, seamless booking experiences, and exceptional customer service. Committed to sustainability and community engagement, we aim to enhance the travel experience while minimizing our environmental footprint. With integrity, innovation, and a passion for customer satisfaction, we are dedicated to being the preferred choice for all your rental needs.</p>
      <h1 data-aos='fade-up' data-aos-duration="2000">Our Vision</h1>
      <p data-aos='fade-up' data-aos-duration="2000">At <b>Explorer</b> our vision is to revolutionize the car rental industry by leveraging technology, sustainability, and exceptional service. We envision a future where renting a car is seamless, sustainable, and empowering for travelers worldwide. Through continuous innovation, we aim to set new standards of excellence, offering a diverse fleet of environmentally-friendly vehicles, personalized experiences, and unparalleled convenience. Committed to fostering a culture of integrity, collaboration, and social responsibility, we aspire to create lasting value for our customers, partners, and communities, while shaping the future of mobility.</p>
    </div>
  )
}

export default AboutUs;
