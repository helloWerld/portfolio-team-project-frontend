import React from 'react';
import blockWrapper from '../blockWrapper';
import ExperienceCardList from '../components/ExperienceCardList';

const Skills = () => {
  const skills = [
    {
      name: 'Front End',
      level: '92'
    },
    {
      name:'Back End',
      level: '83'
    },
    {
      name: 'React JS',
      level: '71'
    },
    {
      name: 'Angular',
      level: '62'
    }
  ];

  return (
    <div className='flex flex-col w-full h-full lg:flex-row items-center justify-center'>
          <div className='flex flex-col w-full lg:w-1/2'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-5xl md:text-6xl font-bold w-fit'>Skills &<br /> Experience</h1>
            <p className='text-white w-full lg:w-4/5 mt-5 text-lg leading-loose'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci sit amet convallis semper.
            </p>
          </div>
          <div className='flex flex-col w-full lg:w-1/2 text-white gap-8 mt-8'>
            <div className='flex flex-col w-11/12 gap-3'>
              {skills.map((skill) => (
                <div className='flex flex-col w-full' key={skill.name}>
                  <h3 className='w-full'>{skill.name}</h3>
                  <div className={`h-2 w-[${skill.level}%] bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 rounded-full`}></div>
                </div>
              ))}
            </div>
            <ExperienceCardList />
        </div>
    </div>

  )
}

export default blockWrapper(Skills, 'tr')