import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Navbar from './component/Navbar'
import Container from './component/Container'
import Page2 from './component/Page2'
import ReviewCard from './component/ReviewCard'
import Footer from './component/Footer'
import Question from './component/Question'
import Shop from './component/Shop'
import Cart from './component/Cart'
import Auth from './component/Auth'
import SearchResult from "./component/SearchResult";
import UserProfile from "./component/UserProfile"
import VerifyOtp from "./component/VerifyOtp"
// import Login from "./component/Login"
// import SignUp from './component/SignUp'

// Wrapper component to extract id from URL and pass to Aboutdrink
// const EnergyPage = () => {
//   const { id } = useParams()
//   return <Aboutdrink category="energy" drinkId={parseInt(id)} />
// }

// const ColdPage = () => {
//   const { id } = useParams()
//   return <Aboutdrink category="cold" drinkId={parseInt(id)} />
// }

// const WinePage = () => {
//   const {id} = useParams()
//   return <Aboutdrink category="wine" drinkId={parseInt(id)} />
// }

const App = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
    } catch (e) {
      return 'light'
    }
  })

  React.useEffect(() => {
    try { localStorage.setItem('theme', theme) } catch (e) {}
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <div className='dark:bg-[#0A0A0B]'>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar theme={theme} setTheme={setTheme}
              
              />
              <Container />
              <Page2 />
              <ReviewCard />
              <Question />
              <Footer />
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/auth" element={<Auth/>} /> 
        <Route path="/search/:id" element={<SearchResult />} />

          <Route path="/profile" element={<UserProfile theme={theme} setTheme={setTheme} />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
      </Routes>
    </div>
  )
}

export default App