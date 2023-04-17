import React, {useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'


const HamburgerMenu = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <div className='cursor-pointer' onClick={() => setCollapsed(false)}>
        <GiHamburgerMenu className='text-white text-3xl' />
      </div>
      {!collapsed &&
        <div className='fixed left-0 bottom-0 top-0 w-1/2 bg-white rounded-r-xl'>
          <AiOutlineClose className='text-3xl ml-6 mt-6 cursor-pointer' onClick={() => setCollapsed(true) } />
          <div className='flex flex-col items-end mr-12 gap-6 mt-12'>
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Portfolio</p>
            <p>Education</p>
            <p>Contact</p>
          </div>
        </div>
      }
    </>
  )
}

export default HamburgerMenu