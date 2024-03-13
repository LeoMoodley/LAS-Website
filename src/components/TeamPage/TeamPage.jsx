import React from 'react';
import {FaInstagram,FaDiscord,FaLinkedin} from 'react-icons/fa';
import Navbar from '../Navbar';
import MeetTheTeam from '../MeetTheTeam';
import Events from '../Events';
const TeamPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="main-content">
      
      <MeetTheTeam />
      </div>
    </div>
  );
};
export default TeamPage;
