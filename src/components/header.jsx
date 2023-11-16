import React from 'react';

import  SubHeading from './SubHeading';
import { images } from '../constants';
import '../CSS/Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">s
      <SubHeading title="IPL" />
      <h1 className="app__header-h1">Where talent meets opportunity</h1>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
