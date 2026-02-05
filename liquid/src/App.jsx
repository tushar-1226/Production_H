import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Container from './component/Container'
import Page2 from './component/Page2'
import ReviewCard from './component/ReviewCard'
import Footer from './component/Footer'

const App = () => {

  const [theme, setTheme] = useState("light")

  return (

    <div className='dark:bg-[#111113]'>

      <Navbar theme={theme} setTheme={setTheme}  />
      <Container />
      <Page2 />
      <ReviewCard />
      <Footer/>
    </div>
  )
}

export default App