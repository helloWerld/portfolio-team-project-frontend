import React from 'react'

const Portfolio = () => {
  const projects = ['Project 1','Project 2','Project 3','Project 4','Project 5','Project 6','Project 7','Project 8','Project 9','Project 10',]

  return (
    <div>
      <div className='flex flex-col w-full h-screen relative justify-between bg-black/95 items-center'>
        <div className='flex flex-col h-1/4 ml-48 justify-center mt-auto'>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-6xl font-bold w-fit'>My Portfolio</h1>
          <p className='text-white w-4/6 mt-5 text-lg leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci sit amet convallis semper.
            Vivamus quis odio ac leo porttitor aliquet nec et nunc. Nam efficitur molestie nunc, hendrerit vestibulum sapien consequat vel.
            Praesent bibendum lacus vel cursus porttitor. Etiam vitae sem sapien. Etiam ultricies malesuada magna vel congue.
            Vivamus sodales consequat sem vel dapibus. Praesent at tellus interdum, blandit elit ac, aliquam neque.
          </p>
        </div>
        <div className='grid grid-rows-2 grid-cols-5 h-4/6 w-full bg-black gap-2'>
          {projects.map((project) => (
            <div className='h-full w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-rose-600 hover:scale-105 transition duration-300 ease-in-out cursor-pointer'>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio