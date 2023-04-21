import React from 'react'
import heroWrapper from '../wrappers/heroWrapper';

const Contact = () => {

  return (
    <div className='flex flex-col lg:flex-row w-full h-screen'>
      <div className='flex flex-col w-full h-1/2 lg:h-full lg:w-1/2 absolute justify-center'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-5xl lg:text-6xl font-bold w-fit'>Contact Me</h1>
        <p className='w-full text-white w-full text-lg leading-loose ml-2'>
          Ready to build your dream project?
        </p>
        <form className='w-full flex flex-col gap-3 mt-5 justify-center items-start'>
          <div className='flex flex-row gap-3 w-2/3'>
            <input type="text" className='w-full px-3 py-2 bg-transparent border border-white rounded-xl text-white' placeholder='Full Name' />
            <input type="text" className='w-full px-3 py-2 bg-transparent border border-white rounded-xl text-white' placeholder='Email Address'/>
          </div>
          <div className='w-2/3 '>
            <textarea type="text" className='w-full h-40 px-3 py-2 bg-transparent border border-white rounded-xl text-white' placeholder='Message'></textarea>
          </div>
          <button type='submit' className='bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-black text-lg px-3 py-2 w-fit text-center rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/30'>Submit</button>
        </form>
      </div>
      <div className='w-full h-1/2 lg:w-1/2 lg:h-screen absolute bottom-0 left-0 right-0 lg:right-0 lg:left-auto'>
        <iframe className='w-full h-full lg:h-screen' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114018.46213880564!2d-80.19925084648446!3d26.74192066317234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5ccb595adc1%3A0x15efc7b51fe16bde!2sWest%20Palm%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1681157390472!5m2!1sen!2sus"></iframe>
      </div>
    </div>
  )
}

export default heroWrapper(Contact);