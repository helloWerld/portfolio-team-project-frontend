import React from 'react';
import headshot from '../assets/output.jpg';
import ScrollDownArrow from '../components/ScrollDownArrow';

const About = () => {
  return (
    <div className='flex flex-row w-full h-screen relative justify-center bg-black/90 items-center'>
      <div className='flex flex-col md:flex-row ml-12 md:ml-32 2xl:ml-48 w-full gap-5 md:items-center'>
        <div className='flex flex-col w-11/12 md:w-2/3'>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-5xl md:text-6xl font-bold w-fit'>About Me</h1>
          <p className='text-white mt-5 text-md md:text-lg leading-loose w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci sit amet convallis semper.
            Vivamus quis odio ac leo porttitor aliquet nec et nunc. Nam efficitur molestie nunc, hendrerit vestibulum sapien consequat vel.
          </p>
        </div>
        <div className='w-2/3 md:w-1/3 mt-6 md:mr-20'>
          <img src={headshot} className='rounded-3xl'/>
        </div>
      </div>
      <ScrollDownArrow arrow />
    </div>
  )
}

export default About