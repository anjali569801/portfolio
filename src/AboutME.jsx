import React from 'react';
import Button from './Button';
import SocialMediaIcons from './SocialMediaIcons';
import H1 from './H1';
import { Link } from 'react-router-dom';

function AboutME({setKnowMore}) {
  const onButtonClick=()=>{
    setKnowMore(true)
  }

  return (
    <div id='AboutME' className=' flex flex-col space-y-10   md:mx-auto text-center  p-10 md:space-x-24 items-center md:flex-row md:space-y-2 font-serif'>

          <div className='border-4 border-secondary p-5 rounded-full hover:scale-110 ease-in shadow-lg shadow-secondary sixe-52 shrink-0'>
          <img src="src\profilePic.jpeg" alt="photo" className='size-52 border border-secondary object-cover  rounded-full '/>

          </div>
        <div className=' sm:flex flex-col items-center md:items-start space-y-5  animate-hue-rotate'>
            <h2 className='text-xl '>hello, It's Me</h2>
            <H1 className='animate-twinkle'>Anjali</H1>
            <span className='text-xl md:flex items-center'>And I'm a <H1 className='ml-3 md:animate-bounce animate-twinkle'>Frontend Developer</H1></span>
            

        <p className="text-lg text-left">I'm a passionate and dedicated Frontend Developer with a solid foundation in HTML, CSS, Tailwind CSS, React JS, MongoDB, Bootstrap, and JavaScript. I've  completed a 6-month training program at Codeyogi, where I honed my skills and gained practical experience through hands-on projects.


</p> 
        <div className=' space-y-10 '>
            <SocialMediaIcons></SocialMediaIcons>
            {/* <Button ><Link to={'/aboutME'}>KNOW MORE</Link></Button> */}
            <Button onClick={onButtonClick}><a href='#knowMore'>KNOW MORE</a></Button>
            
        </div>
        </div>
    </div>
  )
}

export default AboutME


