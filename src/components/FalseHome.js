import React from 'react';

import Navbar from './Navbar';
import Analytics from './Home';
import Events from './Events';
import Newsletter from './Newsletter';
import Footer from './Footer';
function FalseHome() {
  return (
      <div>
       <Navbar/>
      <Analytics/>
      <Events/>
      <Newsletter/>
      <Footer/>
      </div>
  );
}

export default FalseHome;
