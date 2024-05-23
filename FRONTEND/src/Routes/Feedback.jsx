import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('/api/feedback', { message });
      alert('Feedback submitted successfully!');
      setMessage('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your feedback..."
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={handleSubmit}>Submit Feedback</button>
    </div>
  );
};

export default FeedbackForm;
