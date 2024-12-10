import React from 'react';
// import { BiSolidShow } from "react-icons/bi";
// import { FaFileCode } from "react-icons/fa6";
import H1 from './H1';


function ProjectCard ({layout,code,projectName,thumbnail}) {
  return (
  
    <a href={layout} target='_blank' className=' m-5'>
    
    <div className=' sm:size-52 md:size-72 border-2  rounded-xl border-secondary p-4 bg-cover project-card '    style={{ backgroundImage: `url('${thumbnail}')` }}>
    <h1 className='self-start text-black text-2xl  font-semibold underline underline-offset-2 lg:overflow-auto '>{projectName}</h1>
  </div>
    </a>

   
  )
}

export default ProjectCard;

