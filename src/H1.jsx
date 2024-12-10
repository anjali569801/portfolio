import React from 'react'

function H1({children,className}) {
  return (
    <>
    <h1 className={'text-3xl underline  underline-offset-1 font-bold '+ className}>{children}</h1>
    </>
  )
}

export default H1