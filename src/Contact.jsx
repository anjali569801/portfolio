import React from 'react'
import Input from './Input'
import H1 from './H1'
import H3 from './H3'
import Button from './Button'

function Contact() {
  return (
    <div id='Contact' className=' w-[70vw]  flex flex-col items-center'>
        <H1>Contact Me!</H1>
        <h2 className='text-2xl'>Let's work together</h2>
        <form className='  w-[600px] p-5 rounded-lg  mt-8 flex flex-col items-center justify-center space-y-5 '>
            
            <div className='flex flex-col sm:flex-row gap-4 '>
                <div className='space-y-4'>
                    <Input type='text' placeholder='enter your name'></Input>
                    <Input type='email' placeholder='enter your email'></Input>
                    <Input type='text' placeholder='subject'></Input>
                    <Input type='number' placeholder='phone number'></Input>
            
                </div>
              <textarea cols={35} rows={8} className=' max-h-[215px] bg-transparent border p-2 rounded-md placeholder-secondary' placeholder='enter your message'></textarea>
              
            </div>
            
            <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}

export default Contact