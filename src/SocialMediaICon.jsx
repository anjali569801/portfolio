import React from 'react'

function SocialMediaICon( {children,to}) {
  return (
    <a href={to} target='_blank' className='flex items-center border border-secondary shadow-md shadow-secondary   p-2 size-10 rounded-full hover:bg-secondary hover:animate-pulse hover:text-main '>
      {children}</a>
    
  )
}

export default SocialMediaICon