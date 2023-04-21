import React, { useRef } from 'react';
import sampleImage from '../assets/output.jpg';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

const ProjectGallery = () => {

  const projects = [
    {
      name: 'Sample Project 1',
      image: sampleImage,
      link: '#',
    },
    {
      name: 'Sample Project 2',
      image: sampleImage,
      link: '#',
    },
    {
      name: 'Sample Project 3',
      image: sampleImage,
      link: '#',
    },
    {
      name: 'Sample Project 4',
      image: sampleImage,
      link: '#',
    },
    {
      name: 'Sample Project 5',
      image: sampleImage,
      link: '#',
    },
    {
      name: 'Sample Project 6',
      image: sampleImage,
      link: '#',
    },
    {
      name: 'Sample Project 7',
      image: sampleImage,
      link: '#',
    },
    {
      name: 'Sample Project 8',
      image: sampleImage,
      link: '#',
    },
  ];

  const cardSliderRef = useRef(null); 

  return (
    <div className='flex flex-col relative w-full gap-3 bg-black pt-3' >
      {/* <div className='flex flex-row mb-8 ml-12 md:ml-32 2xl:ml-48 justify-start gap-5 text-white'>
        <AiOutlineCaretLeft className='text-2xl cursor-pointer' onClick={() => { cardSliderRef.current.scrollLeft -= 250 }} />
        <AiOutlineCaretRight className='text-2xl cursor-pointer' onClick={() => { cardSliderRef.current.scrollLeft += 250 }} />
      </div> */}
      <div className='flex flex-row w-full h-full text-white justify-between py-auto items-center justify-between px-12'>
        <AiOutlineCaretLeft className='text-4xl cursor-pointer rounded-full bg-transparent hover:bg-white hover:text-black pr-1' onClick={() => { cardSliderRef.current.scrollLeft -= 250 }} />
        <AiOutlineCaretRight className='text-4xl cursor-pointer rounded-full bg-transparent hover:bg-white hover:text-black pl-1' onClick={() => { cardSliderRef.current.scrollLeft += 250 }} />
      </div>
      <div className='flex flex-row gap-3 overflow-x-scroll scrollbar-hide scroll-smooth' ref={cardSliderRef}>
        {projects.map((project) => (
          <img src={project.image} className='flex w-full object-cover hover:scale-105 transition duration-300 ease-in-out' key={project.name} />
        ))}
      </div>
    </div>
  )
}

export default ProjectGallery