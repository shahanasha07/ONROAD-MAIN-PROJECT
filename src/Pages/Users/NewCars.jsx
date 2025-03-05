import React, { useState } from 'react'
import Navbar from '../../Components/Common/Navbar'
import Brands from '../../Components/Users/Brands'
import YourChoise from '../../Components/Users/YourChoise'
import Featured from '../../Components/Users/Featured'
import Footer from '../../Components/Common/Footer'

function NewCars() {
    const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div className='fixed top-0 z-10'>

        <Navbar/>
      </div>

      <div className='px-56'>
         <p className=' font-light mt-22'>
     <h1 className='text-3xl font-bold py-3'> New Cars</h1>
      Are you planning on buying a new car? Well, we know that with so many car options available out there, it gets really difficult to find a good car which suits your need. Hence, we have put together a 
           {expanded && (
            <>
              complete list of new cars. Maruti Suzuki, Tata and Mahindra are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering a variety of cars from fuel-efficient hatchbacks to spacious SUVs. The 5 most popular cars are Hyundai Creta, Maruti Suzuki Brezza, Tata Nexon, Mahindra XUV700 and Mahindra Scorpio N. Explore the complete list of cars by exploring different brands or by applying multiple filters such as budget, fuel type, body type etc. You can find the car that suits you best from the list of cars below.

            </>
          )}
        </p>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="  font-medium mt-2 hover:underline transition-all duration-1000"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
        
      </div>
        <Brands/>
        <YourChoise/>
        <Featured/>
        <Footer/>
    </div>
  )
}

export default NewCars