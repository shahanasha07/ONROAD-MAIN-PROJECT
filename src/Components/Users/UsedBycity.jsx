// import React from 'react'
// import mumbai from '../../assets/images/Users/mumbai.png'

// function UsedBycity() {


//   return (
//     <div className='w-full h-[30vh] bg-amber-100 grid grid-cols-2'>
//         <div className='border'>
//             <img src={mumbai} alt="" />
//             <p>Mumbai</p>
//         </div>
//         <div>
//             <img src={mumbai} alt="" />
//             <p>Mumbai</p>
//         </div>
//         <div>
//             <img src={mumbai} alt="" />
//             <p>Mumbai</p>
//         </div>
//         <div>
//             <img src={mumbai} alt="" />
//             <p>Mumbai</p>
//         </div>
//     </div>
//   )
// }

// export default UsedBycity



import React from 'react';
import mumbai from '../../assets/images/Users/mumbai.png';
import delhi from '../../assets/images/Users/delhi.png';
import bangalore from '../../assets/images/Users/delhi.png';
import chennai from '../../assets/images/Users/delhi.png';

const cities = [
  { name: "Mumbai", img: mumbai },
  { name: "Delhi", img: delhi },
  { name: "Bangalore", img: bangalore },
  { name: "Chennai", img: chennai },
  { name: "Hyderabad", img: mumbai },
  { name: "Kolkata", img: delhi },
  { name: "Pune", img: bangalore },
  { name: "Ahmedabad", img: chennai },
  { name: "Kolkata", img: delhi },
  { name: "Pune", img: bangalore },
];

function UsedByCity() {
  return (
    <div className='w-full py-10 '>
      <h2 className="text-2xl font-bold mb-4">Used Cars By City</h2>

      <div className='grid grid-cols-5 gap-3 mx-auto border border-gray-400 px-4 py-4'>
        {cities.map((city, index) => (
          <div key={index} className='flex flex-col items-center border border-gray-400 p-4 rounded-lg hover:shadow-lg transition'>
            <img src={city.img} alt={city.name} className='w-12 h-12' />
            <p className='mt-2 text-lg font-medium'>{city.name}</p>
          </div>
        ))}
      </div>

      {/* Button for more cities */}
      <div className="text-center border border-t-0 border-gray-400 ">
        <button className=" font-medium cursor-pointer py-1">Other Cities</button>
      </div>
    </div>
  );
}

export default UsedByCity;
