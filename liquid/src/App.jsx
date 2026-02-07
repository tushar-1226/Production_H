import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Container from './component/Container'
import Page2 from './component/Page2'
import ReviewCard from './component/ReviewCard'
import Footer from './component/Footer'
import Question from './component/Question'
import Shop from './component/Shop'

const App = () => {
  const [theme, setTheme] = useState("light")

  return (
    <BrowserRouter>
      <div className='dark:bg-[#111113]'>
        
        <Routes>
          
          <Route path="/" element={
            <>
              <Navbar theme={theme} setTheme={setTheme} />
              <Container />
              <Page2 />
              <ReviewCard />
              <Question />
              <Footer />
            </>
          } />
          
          
          <Route path="/shop" element={<Shop/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App