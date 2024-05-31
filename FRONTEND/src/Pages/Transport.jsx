import React, { useEffect } from 'react';
import './Transport.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import tempoTraveler from '../Assests/vehicle/tempoImg.jpg';
import carImg from '../Assests/vehicle/Cars/car1.jpg';
import busImg from '../../src/Assests/vehicle/Cars/bus2.jpg';

const Transport = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="trans-container">
        <div className='trans-card' data-aos='fade-right'>
          <h2>Tempo Traveller</h2>
          <img src={tempoTraveler} alt="img" />
          <button id='trans-btn'>See Details <i className='fa-solid fa-angles-right'></i> </button>
        </div>
        <div className='trans-card' data-aos='fade-down'>
          <h2>Car for Rental</h2>
          <img src={carImg} alt="img" />
          <Link to='/carTypes'>
            <button id='trans-btn'>See Details<i className='fa-solid fa-angles-right'></i> </button>
          </Link>
        </div>
        <div className='trans-card' data-aos='fade-up'>
          <h2>Bus for Rental</h2>
          <img src={busImg} alt="img" />
          <button id='trans-btn'>See Details<i className='fa-solid fa-angles-right'></i> </button>
        </div>
        <div className='trans-card' data-aos='fade-left'>
          <h2>Package Tour</h2>
          <img src={busImg} alt="img" />
          <button id='trans-btn'>See Details<i className='fa-solid fa-angles-right'></i> </button>
        </div>
      </div>
    </>
  );
};

export default Transport;
