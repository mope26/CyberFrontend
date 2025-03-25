/* eslint-disable no-unused-vars */
import React from 'react'

import Signup from './pages/signup'
import Login from './pages/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about'

function App() {

  return (
     
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About/>}/>
       

      </Routes>
    </BrowserRouter>
  )
}

export default App
