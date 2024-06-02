import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './ContactUs.css';

const ContactUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .sendForm('service_aoc2235', 'template_pnivayh', form.current, {
        publicKey: 'x22Awww_dKYEVowGz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully');
          setSubmitting(false);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setSubmitError(null);
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
          setSubmitting(false);
          setSubmitError('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form className="contact-form" onSubmit={handleSubmit} ref={form}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                data-aos="fade-right"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                data-aos="fade-left"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                data-aos="fade-right"
              ></textarea>
            </div>
            <button id="contact-btn" type="submit" data-aos="fade-up" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send'}
            </button>
            {submitError && <p className="error-message">{submitError}</p>}
          </form>
          <h3>Contact Information</h3>
          <p data-aos="fade-right">
            <i className="fa fa-phone"></i>9140884957
          </p>
          <p data-aos="fade-left">
            <i className="fa fa-envelope"></i>kmpriyanshu741@gmail.com
          </p>
          <p data-aos="fade-right">
            <i className="fa fa-map-marker"></i>123, Street Name, City, Country
          </p>
        </div>
        <div className="contact-info" data-aos="fade-left">
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
};

export default ContactUs;
