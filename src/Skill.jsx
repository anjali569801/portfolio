import React from 'react'

function Skill({src,name}) {
  return (
    <div className=' skill m-5 flex flex-col items-center text-cyan-7'>
        <img className='animate-bounce size-24  rounded-full' src={src} alt="img" />
        <h1 className='skill-name font-bold mt-2 text-xl font-serif'>{name}</h1>
    </div>
  )
}

export default Skill