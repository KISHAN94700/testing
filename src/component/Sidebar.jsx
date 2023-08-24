import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='flex flex-col items-center justify-center border-2 border-black w-[15%] h-[91.2vh] text-blue-500 underline decoration-sky-500 font-bold sidebar'>
      <div className='flex justify-center border-b-2 border-black  w-full mb-2'><Link to="/" className='text-2xl'>Contact</Link></div>
      <div className='flex flex-wrap justify-center border-b-2 border-black  w-full'><Link to="map" className='text-2xl text-center'>Charts and Map</Link></div>
    </div>
  )
}

export default Sidebar
