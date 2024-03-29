import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo.png'; // Import your logo image
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-20 mr-4" /> 
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Laurier Analytics Society</h1>
      </div>
      <ul className='hidden md:flex'>
      <li className='p-4'>
          <Link to="/">Home</Link>
        </li>
        <li className='p-4'>
          <Link to="/teams">Teams</Link>
        </li>
        <li className='p-4'>
          <Link to="/events">Events</Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden' aria-label="Toggle Navigation Menu">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Laurier Analytics Society</h1>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Events</li>
        <li className='p-4 border-b border-gray-600'>Meet The Team</li>
        <li className='p-4 border-b border-gray-600'>About</li>
      </ul>
    </div>
  );
};

export default Navbar;