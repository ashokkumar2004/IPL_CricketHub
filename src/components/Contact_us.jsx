import React, { useState } from 'react';
import axios from 'axios';
import SubHeading from './SubHeading';
import '../CSS/Contact_us.css';

const Contact_us = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attention, setAttention] = useState('');
  const [details, setDetails] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      attention,
      details,
    };

    axios.post('http://localhost:3001/api/newsletters', formData)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error submitting newsletter:', error);
        setMessage('Transmission failed!');
      });
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Get in touch with us" />
        <h4 className="headtext__cormorant">Contact us</h4>
        <p className="p__opensans">And never miss the latest updates!</p>
      </div>
      <div className="app__newsletter-input flex__center input-field">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="What's your good name?" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="What would you like to bring to our attention?" value={attention} onChange={(e) => setAttention(e.target.value)} />
          <input type="text" placeholder="Share details about" value={details} onChange={(e) => setDetails(e.target.value)} />
          <button type="submit" className="custom__button">Transmit message</button>
        </form>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Contact_us;
