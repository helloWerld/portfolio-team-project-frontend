import React, {useState} from 'react'
import { AiFillCaretDown, AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AiFillSetting, AiOutlineSave, AiFillLock } from 'react-icons/ai'



const ProfilePage = () => {
  const [userData, setUserData] = useState({
    'name': 'Russell Trzaska',
    title: 'Full Stack Web Developer',
    email: 'example@gmail.com',
    sidebarLinks: {
      linkedin: 'https://www.linkedin.com/russelltrzaska',
      github: 'https://www.github.com/helloWerld',
      socialMedia: 'https://www.youtube.com/helloWerld'
    },
    sections: {
      hero: {
        headline: "Hi, I'm Russell, web developer",
        subHeadline: 'Full Stack Developer Bootcamp Graduate',
        bulletPoints: ['sample 1', 'sample 2', 'sample 3'],
        resumeLink: 'https://www.resumelink.com',
        githubLink: 'https://www.github.com'
      }
    }
  })

  const [expanded, setExpanded] = useState('')

  const toggleExpanded = (e) => {
    !!expanded && expanded === e.target.id ? setExpanded('') : setExpanded(e.target.id);
  }

  const updateUserData = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    setUserData({ ...userData, ...formJson })
    e.target.reset()
    // send userData to server
    //reset local userData to userData store on server
  }

  return (
    <div className='flex flex-col w-full h-full items-center bg-stone-900 text-white py-40 relative'>

       {/* Homepage Link */}
      <Link to='/'><AiOutlineHome className='absolute top-12 left-12 hover:bg-white hover:text-black rounded-full w-10 h-10 p-1' /></Link>

      {/* Heading */}
      <AiFillSetting className='w-20 h-20 bg-white text-stone-900 rounded-full p-2'/>
      <h2 className='text-2xl mt-5'>Profile Settings</h2>
      <hr className='w-24 mt-3' />

      {/* Basic Information Section */}
      <div className='flex flex-col border w-full xl:w-3/4 h-fit rounded-xl mt-12 border-white/10 p-6 gap-5 text-xl'>
        <h2 className='w-full font-semibold'>Basic Info</h2>

        <form
          className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'
          onSubmit={updateUserData}
        >
          <p className='w-1/4 border-r border-white/10'>Name </p>
          <input type='text' name='name' className='w-3/4 text-lg' placeholder={userData.name} />
          <button type='submit' className='absolute right-6 cursor-pointer hover:scale-105'>
            <AiOutlineSave />
          </button>
        </form>

        <form
          className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'
          onSubmit={updateUserData}
        >
          <p className='w-1/4 border-r border-white/10'>Title </p>
          <input type='text' name='title' className='w-3/4 text-lg' placeholder={userData.title} />
          <button type='submit' className='absolute right-6 cursor-pointer hover:scale-105'>
            <AiOutlineSave />
          </button>
        </form>

        <hr className='w-full border-white/10 my-2' />

        {/* Email and Password Section */}
        <h2 className='w-full font-semibold'>Email & Password</h2>
        <form
          className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'
          onSubmit={updateUserData}
        >
          <p className='w-1/4 border-r border-white/10'>Email </p>
          <input type='email' name='email' className='w-3/4 text-lg' placeholder={userData.email} />
          <button type='submit' className='absolute right-6 cursor-pointer hover:scale-105'>
            <AiOutlineSave />
          </button>
        </form>

        <div className='flex flex-row px-5 w-full xl:w-1/4 justify-center bg-white/10 rounded-xl py-3 items-center hover:bg-white hover:text-stone-900 cursor-pointer'>
          <AiFillLock />
          <h2 className='ml-2 text-xl'> Reset Password</h2>
        </div>
      </div>

      {/* SideBar Links Section */}
      <div className='flex flex-col border w-3/4 h-fit rounded-xl mt-12 border-white/10 p-6 gap-8 text-xl'>
        <h2 className='w-full font-semibold'>Sidebar Links</h2>

        <form
          className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'
          onSubmit={updateUserData}
        >
          <p className='w-1/4 border-r border-white/10'>LinkedIn</p>
          <input type='text' name='linkedin' className='w-3/4 text-lg' placeholder={userData.sidebarLinks.linkedin} />
          <button type='submit' className='absolute right-6 cursor-pointer hover:scale-105'>
            <AiOutlineSave />
          </button>
        </form>

        <form
          className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'
          onSubmit={updateUserData}
        >
          <p className='w-1/4 border-r border-white/10'>Name </p>
          <input type='text' name='name' className='w-3/4 text-lg' placeholder={userData.name} />
          <button type='submit' className='absolute right-6 cursor-pointer hover:scale-105'>
            <AiOutlineSave />
          </button>
        </form>

        <form
          className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'
          onSubmit={updateUserData}
        >
          <p className='w-1/4 border-r border-white/10'>Name </p>
          <input type='text' name='name' className='w-3/4 text-lg' placeholder={userData.name} />
          <button type='submit' className='absolute right-6 cursor-pointer hover:scale-105'>
            <AiOutlineSave />
          </button>
        </form>

      </div>

      {/* HomePage Sections */}
      <div className='flex flex-col border w-3/4 h-fit rounded-xl mt-12 border-white/10 p-6 gap-8 text-xl'>
        <h2 className='w-full font-semibold'>HomePage Sections</h2>

        {/* Hero Section */}
        <div className={`flex flex-col border-t ${expanded !='hero' && 'border-b'} border-white/10 py-6 text-2xl font-light px-10 cursor-pointer`}  id='hero' onClick={(e) => toggleExpanded(e)}>
          <div className='flex fex-row justify-between pointer-events-none'>
            <h2>Hero</h2>
            <AiFillCaretDown />
          </div>
        </div>
          {expanded === 'hero' &&
              <div className='flex flex-col w-full h-fit gap-8 text-xl border-b border-white/10 pb-6 -mt-6'>
                <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
                  <p className='w-1/4 border-r border-white/10'>Headline </p>
                  <input className='w-3/4 text-lg' placeholder={userData.sections.hero.headline} />
                  <AiOutlineSave className='absolute right-6 cursor-pointer hover:scale-105' />
                </div>
                <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
                  <p className='w-1/4 border-r border-white/10'>Sub Headline</p>
                  <input className='w-3/4 text-lg' placeholder={userData.sections.hero.subHeadline} />
                  <AiOutlineSave className='absolute right-6 cursor-pointer hover:scale-105' />
                </div>
                <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
                  <p className='w-1/4 border-r border-white/10'>Bullet Points</p>
                  <input className='w-3/4 text-lg' placeholder={userData.sections.hero.bulletPoints} />
                  <AiOutlineSave className='absolute right-6 cursor-pointer hover:scale-105' />
                </div>
                <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
                  <p className='w-1/4 border-r border-white/10'>Resume Button Link</p>
                  <input className='w-3/4 text-lg' placeholder={userData.sections.hero.resumeLink} />
                  <AiOutlineSave className='absolute right-6 cursor-pointer hover:scale-105' />
                </div>
                <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
                  <p className='w-1/4 border-r border-white/10'>GitHub Button Link</p>
                  <input className='w-3/4 text-lg' placeholder={userData.sections.hero.githubLink} />
                  <AiOutlineSave className='absolute right-6 cursor-pointer hover:scale-105' />
                </div>
          </div>}
        
        {/* About Section */}
        <div className={`flex flex-col border-t ${expanded !='about' && 'border-b'} border-white/10 py-6 text-2xl font-light px-10 cursor-pointer`}  id='about' onClick={(e) => toggleExpanded(e)}>
          <div className='flex fex-row justify-between pointer-events-none'>
            <h2>About</h2>
            <AiFillCaretDown />
          </div>
        </div>
          {expanded === 'about' &&
              <div className='flex flex-col w-full h-fit gap-8 text-xl border-b border-white/10 pb-6 -mt-6'>
                <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
                  <p className='w-1/4 border-r border-white/10'>Description </p>
                  <p className='w-3/4 text-lg px-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci sit amet convallis semper. Vivamus quis odio ac leo porttitor aliquet nec et nunc. Nam efficitur molestie nunc, hendrerit vestibulum sapien consequat vel.</p>
                  <AiOutlineSave className='absolute right-6 cursor-pointer hover:scale-105' />
                </div>
                <div className='flex flex-row justify-center text-center bg-white/10 rounded-xl py-3 items-center relative'>
                  <p className='w-1/4 border-r border-white/10'>Image</p>
                  <p className='w-3/4 text-lg'>Browse for Image</p>
                  <AiOutlineSave className='absolute right-6 cursor-pointer hover:scale-105' />
                </div>
              </div>}
      </div>
    </div>
  )
}

export default ProfilePage