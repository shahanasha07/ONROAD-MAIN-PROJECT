import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Users/Home'
import Service from '../Pages/Users/Service'
import ServiceBooking from '../Pages/Users/ServiceBooking'
import Signup from '../Pages/Users/SignUp'
import Getquote from '../Pages/Users/Getquote'
import EMI from '../Components/Users/EMI'
import UsedCars from '../Pages/Users/UsedCars'
import SellCarForm from '../Pages/Users/SellCarForm'
import Exchange from '../Pages/Users/Exchange'
import NewCars from '../Pages/Users/NewCars'
import AllUsedcars from '../Pages/Users/AllUsedcars'
import Insurance from '../Pages/Users/Insurance'

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
        <Route path='/sell-car' element={<SellCarForm/>} />
        <Route path='/exchange-car' element={<Exchange/>} />
        <Route path='/new-car' element={<NewCars/>} />
        <Route path='/used' element={<AllUsedcars/>} />
        <Route path='/car-insurance' element={<Insurance/>} />
    </Routes>
  )
}

export default Common