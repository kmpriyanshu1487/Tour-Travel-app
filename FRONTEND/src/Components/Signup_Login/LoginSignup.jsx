import React, { useState } from 'react';
import './LoginSignup.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import loginImg from '../../Assests/homefinal6.jpg';
import axios from 'axios';
import Hero from '../Hero/Hero';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleState = () => {
    setState(state === "Login" ? "Sign UP" : "Login");
  };

  const login = async () => {
    console.log("Login function executed", formData);
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const responseData = await response.json();
      localStorage.setItem('authToken', responseData.token);

      window.location.replace('/home');
      alert('Login successful!');
    } catch (error) {
      alert('Error:', error.message);
    }
  };

  const signup = async () => {
    console.log("Signup function executed", formData);
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/home");
        alert('User created successfully');
      } else {
        alert(responseData.message + " User already exists");
      }
    } catch (error) {
      alert('Existing User Found:', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('', formData)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={loginImg}
        title={state}
        btnClass="hide"
      />
      <div className="login-container">
        <div className="login-form">
          <form onClick={handleSubmit}>
            {state === "Sign UP" && (
              <div className="loginform-group">
                <input type="text" name='name' value={formData.name} onChange={changeHandler} placeholder='Your Name' />
              </div>
            )}
            <div className="loginform-group">
              <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Your Email' />
            </div>
            <div className="loginform-group">
              <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Your Password' />
            </div>
            <button id='login-btn' type='submit' onClick={() => state === "Login" ? login() : signup()}>{state}</button>
          </form>
          <p>
            {state === "Login" ? "Not registered?" : "Already registered?"}
            <button id='toggle-btn' onClick={toggleState}>
              {state === "Login" ? "Create an account" : "Login"}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginSignup;
