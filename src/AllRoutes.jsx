import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home';
import About from './components/Aboutpage/About';
import ProjectPage from './components/Projectspage/Project';
import Work from './components/InternPage/Intern';
import Contact from './components/Contactpage/Contact';
import Skills from './components/Skillspage/Skills';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Projects' element={<ProjectPage/>}></Route>
        <Route path='/Work' element={<Work/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default AllRoutes;