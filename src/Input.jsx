import React from 'react'


function Input({type,placeholder}) {
  return (
    <div className=''>           
        <input type={type} placeholder={placeholder} className={`w-[300px] sm:w-[200px]  border p-2 rounded-md ${type==='submit'?'bg-secondary font-bold  text-main':'bg-transparent'} placeholder-secondary `}></input>
    </div>
  )
}

export default Input