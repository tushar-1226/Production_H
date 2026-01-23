import React from 'react'
import Title from './component/Title'
import Navbar from './component/Navbar'
import Container from './component/Container'
import Page2 from './component/Page2'
import ReviewCard from './component/ReviewCard'


const App = () => {
  return (
    <div >
      <Navbar/>
      <Title/>
      <Container/>
      <Page2/>
      <ReviewCard/>
    </div>
  )
}

export default App