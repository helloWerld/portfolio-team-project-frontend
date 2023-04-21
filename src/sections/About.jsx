import React from 'react';
import headshot from '../assets/output.jpg';
import blockWrapper from '../wrappers/blockWrapper';

const About = () => {
  return (
      <div className='flex flex-col md:flex-row w-full h-full md:items-center justify-center gap-8'>
        <div className='flex flex-col md:w-1/2 xl:w-2/3'>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-5xl md:text-6xl font-bold w-fit'>About Me</h1>
          <p className='text-white mt-5 text-md md:text-lg leading-loose w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci sit amet convallis semper.
            Vivamus quis odio ac leo porttitor aliquet nec et nunc. Nam efficitur molestie nunc, hendrerit vestibulum sapien consequat vel.
          </p>
        </div>
        <img src={headshot} className='rounded-3xl w-11/12 md:w-1/2 xl:w-1/3'/>
      </div>
  )
}

export default blockWrapper(About);