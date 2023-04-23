import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-row w-full h-fit items-center gap-1 justify-end px-5 bg-black text-white'>
      <div className='flex flex-row items-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 w-fit gap-1'>
        Made with
        <Link to='/profile'>
          <AiFillHeart className='text-rose-600' />
        </Link>
        using React
      </div>
    </div>
  )
}

export default Footer