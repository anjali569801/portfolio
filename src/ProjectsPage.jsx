import React from 'react'
import ProjectCard from './ProjectCard'
import H1 from './H1'

const ProjectsPage = () => {
  return (
   <div id='Project'>
    <H1>Practice Projects :-</H1>
     <div className='fle  justify-center sm:justify-normal items-center flex-wrap mt-4 grid lg:grid-cols-3 sm:grid-cols-2'>
      
      <ProjectCard layout='https://gradient-maker-with-js-css.netlify.app' thumbnail='gradientMakerThumbnail.jfif' projectName="Gradient-generator"></ProjectCard>
      <ProjectCard layout='https://random-product-cart.netlify.app' thumbnail='e-commarceThumbnail.jfif' projectName='e-commarce-clone'></ProjectCard>
      <ProjectCard layout='https://qlinebiotectclone.netlify.app' thumbnail='QLineThumbnail.jfif' projectName='QLine-biotech-clone'></ProjectCard>
      <ProjectCard layout='https://todo-lists-page.netlify.app' thumbnail='todoThumbnail.webp' projectName="TodoList"></ProjectCard>
      <ProjectCard layout='https://create-login-form.netlify.app' thumbnail='loginThumbnail.jfif' projectName='signup login demo page'></ProjectCard>

    </div>
   </div>
  )
}

export default ProjectsPage