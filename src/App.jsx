import { useState } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import MembershipPlans from './components/MembershipPlans'
import WorkoutPrograms from './components/WorkoutPrograms'
import Trainers from './components/Trainers'
import Equipment from './components/Equipment'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Navigation/>
     <Hero/>
     <MembershipPlans/>
     <WorkoutPrograms/>
     <Trainers/>
     <Equipment/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
