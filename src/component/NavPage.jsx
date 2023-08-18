import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact  from '../pages/Contact'
import ProjectDisplay from './ProjectDisplay'


function NavPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/projectdisplay" element={<ProjectDisplay/>}  />
        <Route path="/contact" element={<Contact/>}  /> 
      </Routes>
    </div>
  )
}

export default NavPage
