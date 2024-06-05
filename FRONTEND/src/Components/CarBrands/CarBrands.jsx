import React from 'react';
import './CarBrands.css';
import logo7 from '../../Assests/CarBrands/comp7.png';
import logo2 from '../../Assests/CarBrands/comp2.png';
import logo4 from '../../Assests/CarBrands/comp4.png';
import logo5 from '../../Assests/CarBrands/comp5.png';

const CarBrands = () => {
  return (
    <div className='brand-conatiner'>
      <div className="wrapper">
        <div className="marquee">
          <div className="marquee-inner">
            <div><img src={logo7} alt="" /></div>
            <div><img src={logo2} alt="" /></div>
            <div><img src={logo4} alt="" /></div>
            <div><img src={logo5} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBrands;