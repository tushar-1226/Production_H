import React from 'react'
import Title from './component/Title'
import Navbar from './component/Navbar'
import Container from './component/Container'
import Page2 from './component/Page2'
import ReviewCard from './component/ReviewCard'
import Achievement from './component/Achievement'


const App = () => {
  return (
    <div className='pt-16'>
      <Navbar />
      <Title />
      <Container />
      <Page2 />
      <Achievement />
      <ReviewCard />
    </div>
  )
}

export default App