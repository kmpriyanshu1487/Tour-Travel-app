import React, { useState } from 'react';
import './vehicleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the cross icon from Font Awesome
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    // Define your handleChange logic here
  };

  const sendEmail = () => {
    // Define your sendEmail logic here
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    window.location.href = '/service';
  };

  return (
    <div>
    <Navbar/>
    <div className="myForm-main">
      <div id='myForm-container'>
        
        <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={closeModal} />
        <form id="myForm">
          <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} /><br />
          <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} /><br />
          <input type="text" id="contact" name="contact" placeholder="Contact Number" onChange={handleChange} /><br />
          <input id="address" name="address" placeholder="Address" onChange={handleChange} /><br />
          <input type="text" id="vehicleCode" name="vehicleCode" placeholder="Vehicle Code" onChange={handleChange} /><br />
          <textarea id="message" name="message" placeholder='Your Message' onChange={handleChange} /><br />
          <label htmlFor="screenshot">Upload Screenshot of Payment:</label><br />
          <input type="file" id="screenshot" name="screenshot" accept="image/*" onChange={handleChange} /><br />
          <button id='myForm-btn' type="button" onClick={sendEmail}>Send Email</button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
