import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MenuItems } from '../Menuitems';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Navbar = () => {

useEffect(()=>{
  Aos.init();
},[])

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className='navbar-items'>
      <h1 className='navbar-logo'>EXPLORER</h1>
      <div className="hamburger" onClick={handleClick}>
        <i  className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
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
          {localStorage.getItem('auth-Token') ? (
            <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/home'); }}>
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
