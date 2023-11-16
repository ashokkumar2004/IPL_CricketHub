import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import FooterOverlay from './FooterOverlay';
import  Contact_us from './Contact_us';
import { images } from '../constants';
import '../CSS/Footer.CSS';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Contact_us />
    

    <div className="app__footer-links">
      {/* <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Model Town,Rohtak</p>
        <p className="p__opensans">+91 9992878491</p>
       
      </div> */}


      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Designed by Ashok Kumar R,Yaswanth Bala ,Karthickeyan S</p>
    </div>

  </div>
);

export default Footer;
