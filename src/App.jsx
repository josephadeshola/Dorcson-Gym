import { useState } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import MembershipPlans from './components/MembershipPlans'
import WorkoutPrograms from './components/WorkoutPrograms'
import Trainers from './components/Trainers'
import Equipment from './components/Equipment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/SignUp'
function App() {

  return (
    <>
    <Navigation/>
     
     <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/membership" element={<MembershipPlans/>}/>
        <Route path="/programs" element={ <WorkoutPrograms/>}/>
        <Route path="/trainers" element={<Trainers/>}/>
        <Route path="/equipment" element={<Equipment/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/auth/register" element={<Signup/>}/>
        <Route path="/auth/login" element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
