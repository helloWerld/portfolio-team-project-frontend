import React from 'react';
import blockWrapper from '../wrappers/blockWrapper';
import ExperienceCardList from '../components/ExperienceCardList';
import SkillsBars from '../components/SkillsBars';

const Skills = () => {

  return (
    <div className='flex flex-col w-full h-full lg:flex-row items-center justify-center'>
          <div className='flex flex-col w-full lg:w-1/2'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-5xl md:text-6xl font-bold w-fit'>Skills &<br /> Experience</h1>
            <p className='text-white w-full lg:w-4/5 mt-5 text-lg leading-loose'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci sit amet convallis semper.
            </p>
          </div>
          <div className='flex flex-col w-full lg:w-1/2 text-white gap-8 mt-8'>
            <SkillsBars />
            <ExperienceCardList />
        </div>
    </div>

  )
}

export default blockWrapper(Skills)