import React, { useState } from 'react';
import logo from '../assets/react.svg';
import { AiFillLinkedin, AiFillGithub, AiFillYoutube } from 'react-icons/ai';



const Navbar = () => {
  const menu = ['About', 'Skills', 'Portfolio', 'Education', 'Contact'];

  return (
    <div className='w-full md:h-screen'>
      <div className='hidden md:flex flex-col bg-black h-screen w-full justify-between items-center h-24'>
        <div className='flex flex-col gap-4 mb-5 bg-black w-full px-5 py-5 text-white items-center rounded-3xl'>
          <h1 className='font-extrabold text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 w-fit'>RT</h1>
          <h1 className='font-bold text-xl text-center'>Russell Trzaska</h1>
          <h2 className='text-xs text-center'>Full Stack Software Developer</h2>
        </div>
        <div className='flex flex-col text-lg text-white w-full text-center'>
          {menu.map((item, index) => (
            <div className='text-gray-400 py-3 hover:text-white bg-black cursor-pointer' key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-row mb-24 gap-3 text-2xl text-white hover:cursor-pointer'>
          <AiFillLinkedin className='hover:scale-125'/>
          <AiFillGithub className='hover:scale-125'/>
          <AiFillYoutube className='hover:scale-125'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar