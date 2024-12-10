import React from 'react'
import Skill from './Skill'
import H1 from './H1'

function SkillPage() {
  return (
    <div id='Skills' className=''>
      <H1>Skills :-</H1>
      <div className='flex flex-wrap justify-center mt-10 '>
      <Skill src="javascript.jfif" name="JavaScript"></Skill>
      <Skill src="HTML.jfif" name="HTML"></Skill>
      <Skill src="css5.png" name="CSS5"></Skill>
      <Skill src="tailwind.png" name="Tailwind"></Skill>
      <Skill src="reactIcon.jfif" name="ReactJs"></Skill>
      <Skill src="bootstrap.jfif" name="Bootstrap"></Skill>
      <Skill src="mongoDB.jfif" name="MongoDB"></Skill>
      <Skill src="python.jfif" name="Python"></Skill>
      <Skill src="git.jfif" name="Git"></Skill>
      <Skill src="CPP.jfif" name="C++"></Skill>
     
    </div>
    </div>
  )
}

export default SkillPage