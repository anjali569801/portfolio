import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function KnowMore({setKnowMore}) {

 const onLeftArrowClick=()=>{
    setKnowMore(false)
 }
  
  return (
    <div id='knowMore' className='mt-10 '>
   <FaArrowLeft onClick={onLeftArrowClick} className='mr-auto font-extrabold text-3xl animate-hue-rotate'/>
    <div className='mt-5 flex flex-col space-y-10  text-center  p-10 md:space-x-24 mx-[-150px] items-center md:flex-row md:space-y-2 font-serif'>
        
        <div className='border-4 border-secondary p-5 rounded-full hover:scale-110 ease-in shadow-lg shadow-secondary sixe-52 shrink-0 bg-gradient-to-r from-stop1 to-stop2'>
          <img src="profilePic.jpeg" alt="photo" className=' size-52 border border-secondary  rounded-full object-cover ' />

          </div>
       <p className='text-left text-lg mx-28 animate-hue-rotate'>I'm a passionate and dedicated Frontend Developer with a solid foundation in HTML, CSS, Tailwind CSS, React JS, HTML, MongoDB, and JavaScript. I've recently completed a 6-month training program at Codeyogi, where I honed my skills and gained practical experience through hands-on projects.

            I'm eager to leverage my technical expertise to create visually appealing and user-friendly web applications. I'm proficient in responsive design, state management. I'm also comfortable working with Bootstrap and python.

            In addition to my technical skills, I'm a creative individual with a passion for writing poetry and painting. This creativity allows me to bring unique perspectives to my work and develop innovative solutions.

            I'm excited to embark on my freelance career and contribute my skills to exciting projects. I'm eager to collaborate with clients to deliver high-quality web applications that meet their specific needs and exceed their expectations.</p> 
    </div>
    </div>
  )
}

export default KnowMore