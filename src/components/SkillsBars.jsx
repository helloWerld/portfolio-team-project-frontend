import React from 'react'

const skills = [
  {
    name: 'Front End',
    level: '92'
  },
  {
    name:'Back End',
    level: '60'
  },
  {
    name: 'React JS',
    level: '71'
  },
  {
    name: 'Angular',
    level: '33'
  }
];

const SkillsBars = () => {


  return (
    <div className='flex flex-col gap-3'>
      {skills.map((skill) => (
        <div className='flex flex-col justify-start' key={skill.name}>
          <h3 className=''>{skill.name}</h3>
          <div style={{ width: `${skill.level}%` }} className='h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 rounded-full'></div>
        </div>
      ))}
    </div>
  )
}

export default SkillsBars