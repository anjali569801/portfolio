import React,{useState} from 'react'
import './App.css'
import Navbar from './Navbar'

import { Route, Router, Routes } from 'react-router-dom'
import KnowMore from './KnowMore'
import MainPage from './MainPage'
import ShiningStarBackground from './ShiningStarBackground'

function App() {

const [knowMore,setKnowMore] =useState(false)

  return (
    <div className='bg-main  overflow-y-scroll h-[100vh] w-[100vw] selection:bg-secondary selection:text-main  text-secondary flex flex-col items-center'>
      
      
      <Navbar setKnowMore={setKnowMore}></Navbar>
      <div className='md:px-48 sm:px-20 px-8 mt-20 space-y-20'>
      
      {/* <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/aboutME' element={<KnowMore/>}></Route>
      </Routes> */}
      {!knowMore && (<MainPage setKnowMore={setKnowMore}></MainPage>)}
      {knowMore && (<KnowMore setKnowMore={setKnowMore}></KnowMore>)}

      
      
      </div>
      
    </div>
  )
}

export default App

