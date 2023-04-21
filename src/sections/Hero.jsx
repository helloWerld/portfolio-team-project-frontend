import React from 'react';
import { AiFillGithub, AiOutlineDownload } from 'react-icons/ai';
import heroWrapper from '../wrappers/heroWrapper';

const Hero = () => {
  return (
    <div className='flex flex-col w-full h-full justify-center'>
        <h1 className='text-5xl md:text-6xl mb-8 text-white font-bold hover:animate-wiggle  w-fit'>Hi,<br />I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 w-fit'>Russell</span>,<br /> web developer</h1>
        <h2 className='text-lg md:text-xl font-semibold font-mono text-gray-200 w-fit whitespace-normal'>Nucamp Full Stack Developer Bootcamp Gradaute</h2>
        <ul className='mt-5 list-disc list-inside text-gray-300 text-md md:text-lg'>
          <li>2+ Years Experience with React JS</li>
          <li>Alchemy Web3 Developer Certified</li>
          <li>Google Data Anaytics Certified</li>
        </ul>
        <div className='flex flex-col w-fit md:flex-row gap-3 mt-8'>
          <button className='flex flex-row gap-2 items-center bg-black text-white px-6 py-2 rounded-xl border border-white hover:shadow-xl hover:scale-105 hover:shadow-indigo-600/20 hover:shadow-md transition-all duration-300 ease-in-out'>
            <AiOutlineDownload size={30} />
            Resume
          </button>
          <button className='flex flex-row gap-2 items-center bg-black text-white px-6 py-2 rounded-xl border border-white hover:shadow-xl hover:scale-105 hover:shadow-rose-600/20 hover:shadow-md transition-all duration-300 ease-in-out'>
            <AiFillGithub size={30} />
            Github
          </button>
        </div>
    </div>
  )
}

export default heroWrapper(Hero, true);