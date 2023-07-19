import React from 'react'
import "./education.css"
import { Slide } from 'react-awesome-reveal'
const Education = () => {
    let data=[
        {
            title:"BSc Engineering in ICT",
            desc:"I am studing in Information and Communication Technology department at Islamic University,Kushtia",
            startYear:"2019",
            endYear:"2025",
            institute:"Islamic University"
        },
        {
            title:"HSC",
            desc:"I have passed this exam getting GPA 5",
            startYear:"2017",
            endYear:"2019",
            institute:"Rajshahi University School and College"
        },
        {
            title:"SSC",
            desc:"I have passed this exam getting GPA 5",
            startYear:"2015",
            endYear:"2017",
            institute:"Nazipur High School"
        },
        {
            title:"JSC",
            desc:"I have passed this exam getting GPA 5",
            startYear:"2014",
            endYear:"2015",
            institute:"Nazipur High School"
        },
    ]
  return (
    <div>
          <div id='education' class="main bg-gray-800 Satisfy">
        <h3 class="heading text-3xl  ">EDUCATION</h3>

        <div class="Timeline ml-4">
            <ul>
                { data.map((item)=>(
                    
                   
                <li className='border-2 border-indigo-500'>
                    <h3 class="text-2xl font-semibold openSans">{item.title}</h3>
                    <h1 className='text-gray-400'>{item.institute}</h1>
                    <p className=' openSans text-gray-300'>{item.desc}</p>
                    
                    <span class="circle"></span>
                    <span class="date">{item.startYear}-{item.endYear}</span>
                </li>
                  
               )) }
               
            </ul>
        </div>
    </div>


    </div>
  )
}

export default Education