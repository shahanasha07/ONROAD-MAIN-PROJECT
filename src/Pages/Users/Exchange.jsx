import React from 'react'
import bg from '../../assets/images/Common/car-Exchange.jpg'

function Exchange() {
  return (
    <div>
         <div
                className='w-full h-[60vh] text-white relative flex items-center justify-center'
                style={{
                  background: `url(${bg})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              >
                {/* Text Content */}
                <div className='absolute z-10 text-white text-center px-4'>
                  <h1 className='font-bold text-5xl capitalize'>Exchange car  </h1>
                  <p className='text-white text-lg mt-2'>Discover thousands of quality second-hand cars available for sale</p>
                </div>
        
                {/* Blur Overlay */}
                <div className="absolute inset-0 bg-black/1 backdrop-blur-[3px] "></div>
              </div>
    </div>
  )
}

export default Exchange