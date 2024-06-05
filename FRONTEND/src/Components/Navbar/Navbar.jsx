import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MenuItems } from '../Menuitems';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Navbar = () => {
  const [clicked, setClicked] = useState(false); // Define the 'clicked' state variable

  useEffect(() => {
    Aos.init();
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('authToken'));

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    window.location.replace('/home');
  };

  const handleClick = () => { // Define the handleClick function
    setClicked(!clicked);
  };

  return (
    <nav className='navbar-items'>
      <div className="nav-logo"><h1 className='navbar-logo'>EXPLORER </h1><p data-aos='fade-up' data-aos-duration='1000'>For Booking:-9140884957</p></div>
      
      <div className="hamburger" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>{item.title}
            </Link>
          </li>
        ))}
        <li>
          {isLoggedIn ? (
            <button id='nav-btn' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to='/login'>
              <button id='nav-btn'>Login</button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
