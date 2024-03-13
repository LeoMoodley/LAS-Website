import React from 'react';
import {FaInstagram,FaDiscord,FaLinkedin} from 'react-icons/fa';
import Navbar from '../Navbar';
import MeetTheTeam from '../MeetTheTeam';
import Events from '../Events';
const EventsPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="main-content">
      
      <Events />
      </div>
    </div>
  );
};
export default EventsPage;
