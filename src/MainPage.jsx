import React from 'react'
import AboutME from './AboutME'
import SkillPage from './SkillPage'
import ProjectsPage from './ProjectsPage'
import Contact from './Contact'


function MainPage({setKnowMore}) {
  return (
   <div >
     <AboutME   setKnowMore={setKnowMore}></AboutME>
    <div className='animate-hue-rotate'><ProjectsPage setKnowMore={setKnowMore}></ProjectsPage>
      
      <SkillPage></SkillPage>
      <Contact></Contact>
      </div>
      </div>
  )
}

export default MainPage