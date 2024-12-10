import React from 'react'

function Button({children,onClick}) {
  return (
    <div>
        <button onClick={onClick} className=' hover:bg-secondary hover:text-main border-4 shadow-lg shadow-secondary border-secondary rounded-md px-6 py-1'>{children}</button>
    </div>
  )
}

export default Button