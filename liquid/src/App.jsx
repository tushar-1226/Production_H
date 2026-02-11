import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Container from './component/Container'
import Page2 from './component/Page2'
import ReviewCard from './component/ReviewCard'
import Footer from './component/Footer'
import Question from './component/Question'
import Shop from './component/Shop'
import Aboutdrink from './component/Aboutdrink'

const App = () => {
  const [theme, setTheme] = useState("light")
  
  return (
    <>
    
      
      <Routes>
        <Route path="/" element={<> <Navbar theme={theme} setTheme={setTheme} /><Container /><Page2 /><ReviewCard /><Question /><Footer /></>} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/aboutdrink' element={<Aboutdrink/>}/>
      </Routes>
      
    </>
  )
}

export default App