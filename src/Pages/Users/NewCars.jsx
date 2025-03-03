import React from 'react'
import Navbar from '../../Components/Common/Navbar'
import Brands from '../../Components/Users/Brands'
import YourChoise from '../../Components/Users/YourChoise'
import Featured from '../../Components/Users/Featured'
import Footer from '../../Components/Common/Footer'

function NewCars() {
  return (
    <div>
        <Navbar/>
        <Brands/>
        <YourChoise/>
        <Featured/>
        <Footer/>
    </div>
  )
}

export default NewCars