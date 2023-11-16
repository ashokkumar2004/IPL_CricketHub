import React from 'react';

import { images } from '../constants';
import '../CSS/AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans_1">The Indian Premier League (IPL) (also known as the TATA IPL for sponsorship reasons) is a men's Twenty20 (T20) cricket league that is annually held in India and contested by ten city-based franchise teams. The BCCI founded the league in 2007. The competition is usually held in summer between March and May every year, and has an exclusive window in the ICC Future Tours Programme; due to it fewer international cricket tours take place during IPL seasons.</p>
        <a href="https://theframes.in/article/detail/all-about-ipl-152.htm"><button type="button" className="custom__button">Know More</button></a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <p className="p__opensans">The Indian Cricket League (ICL) was founded in 2007 with funding provided by Zee Entertainment Enterprises.The ICL was not recognised by the Board of Control for Cricket in India (BCCI) or the International Cricket Council (ICC), and the BCCI was not pleased with its committee members joining the ICL executive board.To prevent players from joining the ICL, the BCCI increased the prize money in its domestic tournaments and imposed lifetime bans on players joining the ICL, which the BCCI considered a rebel league.</p>
        <a href="https://www.iloveindia.com/sports/ipl/ipl-history.html"><button type="button" className="custom__button">Know More</button></a>
      </div>
    </div>
  </div>
);

export default AboutUs;
