import React from 'react';
import ScrollDownArrow from '../components/ScrollDownArrow';
import ExperienceCardList from '../components/ExperienceCardList';



const Skills = () => {
  const skills = [
    {
      name: 'Front End',
      level: 'w-[92%]'
    },
    {
      name:'Back End',
      level: 'w-[83%]'
    },
    {
      name: 'React JS',
      level: 'w-[71%]'
    },
    {
      name: 'Angular',
      level: 'w-[62%]'
    }
  ];

  return (
      <div className='flex flex-row w-full h-screen relative justify-center bg-black/90 items-center'>
        <div className='flex flex-col md:flex-row items-center ml-12 md:ml-32 2xl:ml-48 w-full'>
          <div className='flex flex-col w-10/12 md:w-1/2'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-5xl md:text-6xl font-bold w-fit'>Skills &<br /> Experience</h1>
            <p className='text-white w-4/5 mt-5 text-lg leading-loose'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci sit amet convallis semper.
            </p>
          </div>
          <div className='flex flex-col w-10/12 md:w-1/2 text-white gap-3 mt-8'>
            <div className='flex flex-col w-10/12 gap-3'>
              {skills.map((skill) => (
                <div className='flex flex-col w-full'>
                  <h3 className='w-full'>{skill.name}</h3>
                  <div className={`h-2 ${skill.level} bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 rounded-full`}></div>
                </div>
              ))}
            </div>
            <div className='w-10/12 mt-5'>
              <ExperienceCardList />
            </div>
          </div>
        </div>
        <ScrollDownArrow arrow />
      </div>
  )
}

export default Skills