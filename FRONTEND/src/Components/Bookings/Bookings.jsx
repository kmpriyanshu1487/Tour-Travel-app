import React, { useState } from 'react';
import './Bookings.css';
import axios from 'axios'; // Assuming axios is installed for making HTTP requests

const Bookings = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
        vehicleCode: '',
        message: '',
        screenshot: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const sendEmail = async () => {
        try {
            const response = await axios.post('/send-email', formData);
            console.log(response.data);

        } catch (error) {
            console.error('Error sending email:', error);

        }
    };

    return (
        <div className="myForm-main">
            <div id='myForm-container'>
                <form id="myForm">
                    <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} /><br />
                    <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} /><br />
                    <input type="text" id="contact" name="contact" placeholder="Contact Number" onChange={handleChange} /><br />
                    <input id="address" name="address" placeholder="Address" onChange={handleChange} /><br />
                    <input type="text" id="vehicleCode" name="vehicleCode" placeholder="Vehicle Code" onChange={handleChange} /><br />
                    <input type="text" id="state" name="state" placeholder="Destination state" onChange={handleChange} /><br />
                    <textarea id="message" name="message" placeholder='Your Message'  onChange={handleChange} /><br />
                    <label htmlFor="screenshot">Upload Screenshot of Payment:</label><br />

                    <input type="file" id="screenshot" name="screenshot" accept="image/*" onChange={handleChange} /><br />
                    <button id='myForm-btn' type="button" onClick={sendEmail}>Send Email</button>
                </form>

            </div>
        </div>
    );
};

export default Bookings;
