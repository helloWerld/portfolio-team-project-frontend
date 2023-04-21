import React from 'react';
import ProjectGallery from '../components/ProjectGallery';
import blockWrapper from '../wrappers/blockWrapper';

const Portfolio = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-col h-1/2 justify-center'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-5xl md:text-6xl font-bold w-fit'>My Portfolio</h1>
        <p className='text-white w-full lg:w-4/6 mt-5 text-lg leading-loose'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci sit amet convallis semper.
        </p>
      </div>
      <div className='absolute bottom-0 left-0 right-0 items-end'>
        <ProjectGallery />
      </div>
    </div>
  )
}

export default blockWrapper(Portfolio);