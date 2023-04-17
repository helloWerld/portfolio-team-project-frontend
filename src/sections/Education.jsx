import React from 'react';
import react from '../assets/react.svg';
import ScrollDownArrow from '../components/ScrollDownArrow';

const Education = () => {
  

  const educations = [
    {
      certification: 'Full Stack Developer Bootcamp',
      institution: 'Nucamp',
      date_issued: 'March 2023'
    },
    {
      certification: 'Learning React JS',
      institution: 'Coursera',
      date_issued: 'Dec 2019'
    },
    {
      certification: 'HTML, CSS, Javascript',
      institution: 'LinkedIn Learning',
      date_issued: 'March 2023'
    },
    {
      certification: 'Web 3 Technologies',
      institution: 'Alchemy University',
      date_issued: 'March 2023'
    },
    {
      certification: 'Backend Development with Python',
      institution: 'Nucamp',
      date_issued: 'March 2023'
    },
    {
      certification: 'Modern Web Applications',
      institution: 'LinkedIn Learning',
      date_issued: 'March 2023'
    },
    {
      certification: 'Web 3 Technologies',
      institution: 'Alchemy University',
      date_issued: 'March 2023'
    },
    {
      certification: 'Backend Development with Python',
      institution: 'Nucamp',
      date_issued: 'March 2023'
    },
    {
      certification: 'Modern Web Applications',
      institution: 'LinkedIn Learning',
      date_issued: 'March 2023'
    },
    {
      certification: 'HTML, CSS, Javascript',
      institution: 'LinkedIn Learning',
      date_issued: 'March 2023'
    },
    {
      certification: 'Cybersecurity for Web Apps',
      institution: 'Codecademy',
      date_issued: 'March 2023'
    },
    {
      certification: 'Solidity 101',
      institution: 'Free Code Camp',
      date_issued: 'March 2023'
    },
  ]

  return (
    <div>
      <div className='flex flex-row w-full h-screen relative justify-center bg-black/95 items-center'>
        <div className='flex flex-col ml-48 w-1/3'>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-6xl font-bold w-fit'>Education</h1>
          <p className='text-white w-full mt-5 text-lg leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci sit amet convallis semper.
            Vivamus quis odio ac leo porttitor aliquet nec et nunc. Nam efficitur molestie nunc, hendrerit vestibulum sapien consequat vel.
          </p>
          <div className='mt-5'>
            <div className='flex items-center justify-center bg-white rounded-full h-16 w-16'><img src={react} /></div>
          </div>
        </div>
        <div className='ml-8 flex flex-row items-center justify-center w-2/3 gap-5 flex-wrap'>
          {educations.map((education) => (
            <div className='flex flex-col w-fit h-32 border border-white rounded-2xl text-white p-5 justify-between transition duration-300 ease-in-out hover:bg-black hover:scale-125 hover:shadow-lg hover:shadow-indigo-300/10'>
              <h2 className='text-xl font-semibold'>{education.certification}</h2>
              <h3>{education.institution}</h3>
              <p className='text-sm'>{education.date_issued}</p>
            </div>
          ))}
        </div>
      <ScrollDownArrow arrow />
      </div>
    </div>
  )
}

export default Education