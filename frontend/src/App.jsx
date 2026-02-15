import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Doctors from './pages/Doctors.jsx'
import Appointment from './pages/Appointment.jsx'
import MyProfile from './pages/MyProfile.jsx'
import MyAppointments from './pages/MyAppointments.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/myprofile' element={<MyProfile/>} />
        <Route path='/myappointments' element={<MyAppointments/>} />
      </Routes>
    </div>
  )
}

export default App