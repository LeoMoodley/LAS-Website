import React from 'react';
import {FaInstagram,FaDiscord,FaLinkedin} from 'react-icons/fa';
import Navbar from './Navbar';
import Analytics from './Home';
import Events from './Events';
import MeetTheTeam from './MeetTheTeam';
import Newsletter from './Newsletter';
import Footer from './Footer';
const HomePageDeluxe = () => {
  return (
    <div>
      <Navbar/>
      <div className="main-content">
        <Analytics/>
        <Events/>
      
      <MeetTheTeam />
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  );
};
export default HomePageDeluxe;
