import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import LoginSignupForm from '../Components/Signup_Login/LoginSignup';

const LoginSignupPage = () => {
  return (
    <div>
      <Navbar />
      <LoginSignupForm />
      <Footer />
    </div>
  );
}

export default LoginSignupPage;
