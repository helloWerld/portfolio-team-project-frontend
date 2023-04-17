import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const ScrollDownArrow = ({ arrow }) => {

  return (
    arrow ? 
    <div className='flex flex-row w-full justify-between bottom-6 absolute px-6'>
      <div className='flex flex-col items-center justify-center gap-10'>
        <div className='animate-bounce'>
          <AiOutlineDown className='text-white' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-10'>
        <div className='animate-bounce'>
          <AiOutlineDown className='text-white' />
        </div>
      </div>
    </div>
      :
      <div className='flex flex-row w-full justify-between bottom-6 absolute '>
        <div className='flex flex-col items-center justify-center gap-10'>
          <div className='animate-bounce'>
            <p className='origin-center rotate-90 text-white '>scroll down</p>
          </div>
          <div className=''>
            <AiOutlineDown color={'white'} />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-10'>
          <div className='animate-bounce'>
            <p className='origin-center rotate-90 text-white '>scroll down</p>
          </div>
          <div className=''>
            <AiOutlineDown color={'white'} />
          </div>
        </div>
      </div>
  )
}

export default ScrollDownArrow