import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-container">
           <div className="contact-wrapper">
            <div className="contact-form">
                <h3>Send us a message</h3>
                <form className='contact-form' action="">
                    <div className="form-group">
                        <input type="text" name='name' placeholder='Your Name' />
                    </div>
                    <div className="form-group">
                        <input type="text" name='email' placeholder='Your Email' />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder='Your Message'></textarea>
                    </div>
                    <button id='contact-btn' type='submit'>Send</button>
                </form>
                <h3>Contact Information</h3>
                <p><i className="fa fa-phone"></i>9140884957</p>
                <p><i className="fa fa-envelope"></i>kmpriyanshu741@gmail.com</p>
                <p><i className="fa fa-map-marker"></i>123, Street Name, City, Country</p>
            </div>
            <div className="contact-info">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1650.6549376079474!2d83.58618257650734!3d26.64434809160149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991600488abdc71%3A0x13b9d7e1735cfa1f!2s18%2C%20Tehsil%20Road%2C%20Chauri%20Chaura%2C%20Dumari%20Khurd%2C%20Uttar%20Pradesh%20273201%2C%20India!5e0!3m2!1sen!2sus!4v1714833756816!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
           </div>
        </div>
    );
}

export default ContactUs;
