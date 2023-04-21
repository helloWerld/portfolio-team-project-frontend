import React from 'react';
import react from '../assets/react.svg';
import blockWrapper from '../wrappers/blockWrapper';
import EducationCardList from '../components/EducationCardList';

const Education = () => {
  
  return (
    <div className='flex flex-col xl:flex-row w-full h-full items-center justify-center gap-8'>
        <div className='flex flex-col w-full xl:w-2/5'>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-5xl lg:text-6xl font-bold w-fit'>Education</h1>
          <p className='text-white w-full mt-5 text-lg leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci sit amet convallis semper.
          </p>
          <div className='flex flex-row items-center justify-start mt-3'>
            <img src={react} className='w-12 h-12 rounded-full bg-white p-2'/>
          </div>
        </div>
        <div className='flex w-full xl:w-3/5 justify-center'>
          <EducationCardList />
        </div>
    </div>
  )
}

export default blockWrapper(Education);