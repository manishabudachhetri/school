import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Events from '../components/home/Events'
import Reviews from '../components/home/Reviews'
import QuickQueries from '../components/home/QuickQueries'
import Stats from '../components/home/Stats'
import Team from '../components/home/Team'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <QuickQueries />
      <Stats />
      <Events />
      <Team />
      <Reviews />
    </div>
  )
}

export default Home