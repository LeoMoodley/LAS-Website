// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Analytics from './components/Home';
import Footer from './components/Footer';
import Events from './components/Events';
import MeetTheTeam from './components/MeetTheTeam';
import { Route, Routes } from 'react-router-dom';
import EventsPage from './components/EventsPage/EventsPage';
import HomePageDeluxe from './components/HomePageDeluxe';
import TeamPage from './components/TeamPage/TeamPage';


function App() {
  return (
    // <div>
    //   <Navbar/>
    //   <div className="main-content">
    //     <Analytics/>
    //     <Events/>
      
    //   <MeetTheTeam />
    //   </div>
    //   <Newsletter/>
    //   <Footer/>
    // </div>
    <section>
      <Routes>
        <Route exact path = "/" element = {<HomePageDeluxe />}></Route>
        <Route exact path = "/teams" element = {<TeamPage />}></Route>
        <Route exact path = "/events" element = {<EventsPage />}></Route>
      </Routes>
    </section>
  );
}

export default App;