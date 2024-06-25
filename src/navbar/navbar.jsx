// src/navbar/navbar.jsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-slate-700 flex flex-col md:flex-row md:justify-between items-center w-full rounded-lg px-4'>
      <h1 className='text-white relative  md:top-0'>Portfolio</h1>
      <div className='flex gap-2 relative top-[4px] md:top-[3px] h-12'>
      <Link to='/home'>
        <Button className="bg-white bg-opacity-20 hover:bg-opacity-40 text-white border border-white hover:border-transparent transition-colors duration-300">
          Home
        </Button>
        </Link>
        <Link to='/about'>
        <Button className="bg-white bg-opacity-20 hover:bg-opacity-40 text-white border border-white hover:border-transparent transition-colors duration-300">
          About
        </Button>
        </Link>
        <Link to='/skills'>
        <Button className="bg-white bg-opacity-20 hover:bg-opacity-40 text-white border border-white hover:border-transparent transition-colors duration-300">
          Skills
        </Button>
        </Link>
        <Link to='/education'>
        <Button className="bg-white bg-opacity-20 hover:bg-opacity-40 text-white border border-white hover:border-transparent transition-colors duration-300">
          Education
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
