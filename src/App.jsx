import React from 'react';

import AboutUs from './components/AboutUs';
import Best_Captains from './components/Best_Captains';
import Ticket_booking from './components/Ticket_booking';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/header';
import Intro from './components/Intro';
import Awards from './components/Awards';
import Records from './components/Records';
import Navbar from './components/Navbar';

import './App.css';



const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Records />
    <Best_Captains />
    <Intro />
    <Awards />
    <Gallery />
    <Ticket_booking />
    <Footer />
  </div>
);

export default App;