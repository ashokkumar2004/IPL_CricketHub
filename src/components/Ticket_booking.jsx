import React from 'react';
import { images } from '../constants';

const Ticket_booking = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Ticket Booking</h1>
      <div className="app__wrapper-content">
       
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Tickets Available Right Now</p>
        <p className="p__opensans">Book Tickets of your favorite team matches</p>
        <p className="p__opensans">and enjoy!!!</p>
      </div>
      <a href="https://in.bookmyshow.com/explore/c/ipl"><button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Purchase Ticket</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default Ticket_booking;
