import React from 'react'

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
    certification: 'Web 3 Tech',
    institution: 'Alchemy University',
    date_issued: 'March 2023'
  },
  {
    certification: 'Python',
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
    certification: 'Express and NodeJS',
    institution: 'Nucamp',
    date_issued: 'March 2023'
  },
  {
    certification: 'Modern Web Apps',
    institution: 'LinkedIn Learning',
    date_issued: 'March 2023'
  },
  {
    certification: 'Javascript Fundamentals',
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

const EducationCardList = () => {
  return (
    <div className='flex flex-row items-center justify-center lg:justify-center w-full gap-3 flex-wrap'>
      {educations.map((education) => (
        <div key={education.certification}  className='flex flex-col items-center 2xl:gap-1 justify-center w-fit h-fit border border-white rounded-2xl text-white py-1 px-2 md:py-2 md:px-3 transition duration-300 ease-in-out hover:bg-black hover:scale-125 hover:shadow-lg hover:shadow-indigo-300/10'>
          <h2 className='text-md 2xl:text-xl font-semibold'>{education.certification}</h2>
          <p className='text-xs 2xl:text-md'>{education.institution} - {education.date_issued}</p>
        </div>
      ))}
    </div>
  )
}

export default EducationCardList