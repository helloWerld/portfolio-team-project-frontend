import React, { useRef } from 'react'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'

const ExperienceCardList = () => {
  const jobs = [
    {
      title: 'Frontend Developer',
      company: 'Google',
      dates_employed: '2017 - 2019',
      description: 'Praesent vel cursus porttitor. Etiam vitae sem porttitor. Etiam sem sapien.'
    },
    {
      title: 'Sr. Frontend Developer',
      company: 'Facebook',
      dates_employed: '2020 - 2022',
      description: 'Praesent bibendum lacus vel cursus bibendum lacus  sapien.'
    },
    {
      title: 'Sr. Frontend Developer',
      company: 'Facebook',
      dates_employed: '2020 - 2022',
      description: 'Praesent bibendum vel cursus porttitor. Etiam  sem porttitor. Etiam vitae sem sapien.'
    },
  ]

  const cardSliderRef = useRef(null);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row overflow-x-scroll scrollbar-hide gap-3 min-w-full transition duration-300 ease-in-out scroll-smooth'  ref={cardSliderRef}>
        {jobs.map((job, i) => (
          <div className='min-w-fit fit border border-white p-6 rounded-2xl' key={i}>
            <h2 className='font-mono text-xl'>{job.title}</h2>
            <h3 className='font-semibold'>{job.company}</h3>
            <p className='text-sm'>{job.dates_employed}</p>
            <p className='mt-2 w-80 text-clip'>{job.description}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-row mt-8 justify-start gap-5'>
        <AiOutlineCaretLeft className='text-4xl cursor-pointer rounded-full bg-transparent hover:bg-white hover:text-black pr-1' onClick={() => { cardSliderRef.current.scrollLeft -= 150 }} />
        <AiOutlineCaretRight className='text-4xl cursor-pointer rounded-full bg-transparent hover:bg-white hover:text-black pl-1' onClick={() => { cardSliderRef.current.scrollLeft += 150 }} />
      </div>
    </div>
  )
}

export default ExperienceCardList