// import React, { useState } from "react";

// const Insurance = () => {
//   const [carNumber, setCarNumber] = useState("");

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-whit bg-amber-100  shadow-lg rounded-lg p-8 text-center max-w-lg w-full">
      
//         <h2 className="text-lg font-medium text-gray-700">Compare & <span className="font-bold text-black">save upto 91%+</span></h2>
//         <p className="text-gray-500 text-sm">on Car Insurance</p>
//         <p className="text-blue-500 text-sm mt-1 font-semibold">⚡ Renew in <span className="font-bold">2 minutes</span>*</p>
//         <div className="mt-4">
//           <input
//             type="text"
//             placeholder="Enter car number (eg. DL-10-CB-1234)"
//             value={carNumber}
//             onChange={(e) => setCarNumber(e.target.value)}
//             className="w-full border p-3 rounded-lg text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button className="mt-4 w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
//           View Prices →
//         </button>   
//         <p className="text-sm text-gray-500 mt-3">
//           Brand new car? <span className="text-blue-600 font-semibold cursor-pointer">Click here</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Insurance;


import React from 'react'
import bg from '../../assets/images/Common/car-insurance-bg.jpg'
import Navbar from '../../Components/Common/Navbar'
import DetailedCarForm from '../../Components/Users/DetailedCarForm'

function Insurance() {
  return (
    <div>
        <Navbar/>
        <div
        className="flex flex-col md:flex-row items-center md:h-screen bg-cover bg-left px-8 "
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Left Section */}
        <div className="w-full md:w-2/3 h-[70vh] flex flex-col justify-center items-start px-12 text-white">
          <h1 className="text-5xl font-bold leading-tight">
          Secure your journey with the right insurance plan
          </h1>
          <p className="mt-3 text-lg">
          Get insured in minutes, enjoy doorstep service and instant claims!
          </p>
        </div>
        <div className='w-full md:ml- md:mt-8 lg:pl-72'>
        <DetailedCarForm/>
        </div>
       
      </div>
    </div>
  )
}

export default Insurance


