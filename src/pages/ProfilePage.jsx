import React from 'react'
import avatar from '../assets/react.svg'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AiFillSetting, AiFillEdit, AiFillLock } from 'react-icons/ai'


const ProfilePage = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center bg-stone-900 text-white pt-40 relative'>
      <Link to='/'><AiOutlineHome className='absolute top-12 left-12 hover:bg-white hover:text-black rounded-full w-10 h-10 p-1' /></Link>
      <AiFillSetting className=' w-20 h-20 bg-white text-stone-900 rounded-full p-2'/>
      <h2 className='text-2xl mt-5'>Profile Settings</h2>
      <hr className='w-24 mt-3' />
      <div className='flex flex-col border w-2/3 h-fit rounded-xl mt-12 border-white/10 p-6 gap-5 text-xl'>
        <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
          <p className='w-1/2 border-r'>Display Name </p>
          <p className='w-1/2 text-lg'>Russell Trzaska </p>
          <AiFillEdit className='absolute right-6 cursor-pointer' />
        </div>
        <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
          <p className='w-1/2 border-r'>Title </p>
          <p className='w-1/2 text-lg'>Full Stack Web Developer</p>
          <AiFillEdit className='absolute right-6 cursor-pointer' />
        </div>
        <hr className='w-full border-white/10 my-2' />
        <h2 className='w-full font-semibold'>Email & Password</h2>
        <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
          <p className='w-1/3 border-r'>Email</p>
          <p className='w-2/3 text-lg'>example@gmail.com</p>
          <AiFillEdit className='absolute right-6 cursor-pointer' />
        </div>
        <div className='flex flex-row px-5 w-full justify-center bg-white/10 rounded-xl py-3 items-center hover:bg-white hover:text-stone-900 cursor-pointer'>
          <AiFillLock />
          <h2 className='ml-2 text-xl'> Reset Your Password</h2>
        </div>
      </div>
      <div className='flex flex-col border w-2/3 h-fit rounded-xl mt-12 border-white/10 p-6 gap-8 text-xl'>
        <h2 className='w-full font-semibold'>Sidebar Links</h2>
        <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
          <p className='w-1/3 border-r'>LinkedIn </p>
          <p className='w-2/3 text-lg'>https://www.linkedin.com/russelltrzaska </p>
          <AiFillEdit className='absolute right-6 cursor-pointer' />
        </div>
        <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
          <p className='w-1/3 border-r'>GitHub</p>
          <p className='w-2/3 text-lg'>example@gmail.com</p>
          <AiFillEdit className='absolute right-6 cursor-pointer' />
        </div>
        <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
          <p className='w-1/3 border-r'>Social Media</p>
          <p className='w-2/3 text-lg'>example@gmail.com</p>
          <AiFillEdit className='absolute right-6 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage