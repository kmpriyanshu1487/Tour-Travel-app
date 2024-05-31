import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Distination from '../Components/Distination/Distination';
import Trip from '../Components/Trips/Trip';
import Footer from '../Components/Footer/Footer';
import SelectionCriteria from '../Components/SelectionCriteria/SelectionCriteria';
import Achievment from '../Components/Achievment/Achievment';


const Home = () => {
  
  const images = [
    require('../../src/Assests/HeroImg/hero1001.jpg'),
    require('../../src/Assests/HeroImg/hero1002.jpg'),
    require('../../src/Assests/HeroImg/hero1004.jpg'),
    require('../../src/Assests/HeroImg/hero1006.jpg'),
    require('../../src/Assests/HeroImg/hero1007.jpg'),
    require('../../src/Assests/HeroImg/hero1008.jpg'),
    require('../../src/Assests/HeroImg/hero1009.jpg'),
    require('../../src/Assests/HeroImg/hero1010.jpg'),
    require('../../src/Assests/HeroImg/hero1011.jpg'),
    require('../../src/Assests/HeroImg/hero1012.jpg')
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={images[currentImageIndex]}
        title="Have a Beautiful Journey"
        text="Choose Your Favourite Destination"
        buttonText="Available vehicles"
        url="/service"
        btnClass="show"
      />
      <SelectionCriteria />
      <Distination />
      <Trip />
      <Achievment />
      <Footer />
    </>
  );
};

export default Home;
