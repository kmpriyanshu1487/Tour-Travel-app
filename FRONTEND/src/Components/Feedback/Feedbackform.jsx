import React from 'react'
import './Feedbackform.css'
const Feedback = () => {
  return (
    <>
      <div className='feedback-container'>
        <h1>Share Your Experience</h1>
        <div className="feedback-main">
          <div>
            <form className='feedback-form'>
              <input type="text" placeholder='Enter Your Name' />
              <input type="email" placeholder='Enter Your Email' />
              <textarea name="text" placeholder='Write Your Experience' ></textarea>
              <button>Submit</button>
            </form>
          </div>
          <div className="feedback-card">
            <div className="review-container">
              <h2>Our Past Customers</h2>
              <div className="review-main">
                <p>Name:</p>
              <p>Email:</p>
                <p>Message:</p>
              </div>
              <div className="review-main">
                <p>Name:</p>
              <p>Email:</p>
                <p>Message:</p>
              </div>
              <div className="review-main">
                <p>Name:</p>
              <p>Email:</p>
                <p>Message:</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Feedback



