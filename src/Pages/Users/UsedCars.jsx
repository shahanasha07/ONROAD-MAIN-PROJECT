import React from 'react'
import bg from '../../assets/images/Users/bg-usedcar.jpg'
import Navbar from '../../Components/Common/Navbar'


function UsedCars() {
  return (
    <div>
        <Navbar/>
        <div 
        className='w-full h-[60vh] text-white'
        style={{background:`url(${bg})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'
    }}
   
    >
        <div className='absolute z-9 text-white py-52 w-1/2  px-4 leading-10'>

        <h1 className='font-bold text-5xl  capitalize'>explore pre-owned cars!!</h1>
        <p className='text-white'>Discover thousands of quality second-hand cars available for sale </p>
        </div>
        <div className=" bg-black/0 backdrop-blur-xs  w-full h-[60vh]  "></div>
    </div>
    </div>

    
  )
}

export default UsedCars