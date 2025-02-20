import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Users/Home'
import Service from '../Pages/Users/Service'
import ServiceBooking from '../Pages/Users/ServiceBooking'
import Signup from '../Pages/Users/SignUp'
import Getquote from '../Pages/Users/Getquote'
import EMI from '../Components/Users/EMI'
import UsedCars from '../Pages/Users/UsedCars'

function Common() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/service-booking' element={<ServiceBooking/>}/>
        <Route path='/car-details' element={<Getquote/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/emi' element={<EMI/>} />
        <Route path='/used-cars' element={<UsedCars/>} />
    </Routes>
  )
}

export default Common