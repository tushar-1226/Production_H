import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Navbar from './component/Navbar'
import Container from './component/Container'
import Page2 from './component/Page2'
import ReviewCard from './component/ReviewCard'
import Footer from './component/Footer'
import Question from './component/Question'
import Shop from './component/Shop'
import Aboutdrink from './component/Aboutdrink'

// Wrapper component to extract id from URL and pass to Aboutdrink
const EnergyPage = () => {
  const { id } = useParams()
  return <Aboutdrink category="energy" drinkId={parseInt(id)} />
}

const ColdPage = () => {
  const { id } = useParams()
  return <Aboutdrink category="cold" drinkId={parseInt(id)} />
}

const WinePage = () => {
  const {id} = useParams()
  return <Aboutdrink category="wine" drinkId={parseInt(id)} />
}

const App = () => {
  const [theme, setTheme] = useState("light")

  return (
    <div className='dark:bg-[#0A0A0B]'>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar theme={theme} setTheme={setTheme} />
              <Container />
              <Page2 />
              <ReviewCard />
              <Question />
              <Footer />
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
        {/* Updated: Now using ProductPage wrapper that extracts id and passes it as drinkId */}
        <Route path="/energy/:id" element={<EnergyPage />} />
        <Route path="/cold/:id" element={<ColdPage />} />
        <Route path="/wine/:id" element={<WinePage />} />
      </Routes>
    </div>
  )
}

export default App