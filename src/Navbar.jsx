import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


function Navbar({setKnowMore}) {
  
  const [menubar, setMenubar]=useState(true);

  const onMenubarClick=()=>{
    setMenubar(false)
  }
  const onCancelClick=()=>{
    setMenubar(true)
  }
  const handleNavbarClick=()=>{
    setKnowMore(false)
  }

 


  return (
    <div onClick={handleNavbarClick} className='z-10 animate-hue-rotate sticky top-0 bg-main text-secondary w-[100vw] font-bold flex space-x-6 justify-end items-center px-16  py-6 text-lg'>
 
        <div className='sm:flex space-x-6 hidden' >
        <a href='#AboutME' className='animate'>AboutME</a>
        <a href="#Project">Project</a>
        <a href="#Skills">Skills</a>
        {/* <Link to="/Services">Services</Link>
        <Link to="/Recommended">Recommended</Link>
        <Link to="/Resume">Resume</Link> */}
        <a href="#Contact">Contact</a> 
        </div>
        <IoMenu onClick={onMenubarClick}  className=' flex sm:hidden items-center  text-4xl font-extrabold'/>
          {!menubar && <div className='absolute  border-2 rounded-xl p-5 top-5 right-5 bg-secondary text-main '>
            <RxCross2 onClick={onCancelClick} className='absolute right-1 top-0 text-2xl font-extrabold border-2 border-main rounded-full ' />

            <div className='flex flex-col space-y-4 mt-3 '>
            
              <a href='#AboutME'>AboutME</a>
              <a href="#Project">Project</a>
              <a href="#Skills">Skills</a>
              <a href="#Contact">Contact</a> 
           
            </div>
          </div>}
    </div>
  );
}

export default Navbar;