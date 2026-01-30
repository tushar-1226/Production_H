import React from 'react'
import Navbar from './component/Navbar'
import Container from './component/Container'
import Page2 from './component/Page2'
import ReviewCard from './component/ReviewCard'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='pt-16'>
      <Navbar />
      <Container />
      <Page2 />
      <ReviewCard />
      <Footer/>
    </div>
  )
}

export default App