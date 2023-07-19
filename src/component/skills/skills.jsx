import React from 'react'
import { Zoom } from 'react-awesome-reveal'

const Skills = () => {

    let skills=[
        {
            id:1,
            skillName:"HTML"
        },
        {
            id:2,
            skillName:"Css"
        },
        {
            id:3,
            skillName:"Bootsrap"
        },
        {
            id:4,
            skillName:"Tailwind"
        },
        {
            id:5,
            skillName:"Material Tailwind"
        },
        {
            id:6,
            skillName:"JavaScript"
        },
        {
            id:7,
            skillName:"React"
        },
        {
            id:8,
            skillName:"Node JS"
        },
        {
            id:9,
            skillName:"Express js"
        },
        {
            id:10,
            skillName:"MongoDB"
        },
        {
            id:11,
            skillName:"MS Word"
        },
        {
            id:12,
            skillName:"MS Powerpoint"
        },
    ]

  return (
    <div className='bg-gray-900'>

  

    <div className=' flex flex-col items-center justify-center bg-gray-900  pb-20'>
        
            <div className='mb-10 mt-10'>
                <h1 className='text-4xl dancingFont'>SKILLS</h1>
               
            </div>
            <div className='flex gap-5 flex-wrap md:w-1/2 ml-10  md:ml-28   '>
            {
              skills.length>0 &&  skills.map(skill=>(
                  <span key={skill.id}  className='px-4 py-2 md:w-44 text-center rounded-lg monFont  bg-gradient-to-r from-indigo-500 to-cyan-600 text-white font-medium  ease-in-out duration-200 hover:-translate-y-1 ' >{skill.skillName}</span>
                  ))
                }
            </div>
    </div>
               
    </div>
  
  )
}

export default Skills