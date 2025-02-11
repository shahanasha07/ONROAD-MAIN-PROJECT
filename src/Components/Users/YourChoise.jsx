import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function YourChoise() {
    const [dropdown,setDropdown]=useState(null);
    const filters = [
        { label: "budget", options: ["under 5 lakh", "under 6 lakh", "under 7 lakh", "under 8 lakh"] },
        { label: "body type", options: ["SUV", "Sedan", "Hatchback", "Coupe"] },
        { label: "transmission", options: ["Manual", "Automatic"] },
        { label: "fuel type", options: ["Petrol", "Diesel", "Electric", "Hybrid"] }
      ];


  const handleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index); 
  };
    
  return (
    <div>
        <div className=" px-72">
      <h1 className="font-bold text-2xl py-6">Find The Cars Of Your Choice</h1>
      <div className="bg-white flex gap-4 px-4 py-8 rounded-xl shadow-2xl relative">
        {filters.map((filter, index) => (
          <div key={index} className="w-1/4 relative">
            <div
              className="bg-[#D9D9D9] dark:bg-red-900 rounded-sm py-5 px-4 capitalize font-medium flex justify-between items-center cursor-pointer"
              onClick={() => handleDropdown(index)}
            >
              {filter.label} <FontAwesomeIcon icon={faAngleDown} />
            </div>

            {dropdown === index && (
              <div className="absolute left-0 top-full mt-2 bg-white w-full rounded border border-gray-400/30 shadow-lg">
                <ul className="px-4 flex flex-col gap-2 py-3">
                  {filter.options.map((option, i) => (
                    <li key={i} className="bg-[#D9D9D9] rounded-sm px-4 py-2 cursor-pointer">
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}



export default YourChoise



// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// export default function CarFilter() {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const filters = [
//     { label: "budget", options: ["under 5 lakh", "under 6 lakh", "under 7 lakh", "under 8 lakh"] },
//     { label: "body type", options: ["SUV", "Sedan", "Hatchback", "Coupe"] },
//     { label: "transmission", options: ["Manual", "Automatic"] },
//     { label: "fuel type", options: ["Petrol", "Diesel", "Electric", "Hybrid"] }
//   ];

//   const handleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index); // Toggle dropdown
//   };

//   return (
//     <div className="w-full bg-amber-20 px-72">
//       <h1 className="font-bold text-2xl py-6">Find The Cars Of Your Choice</h1>
//       <div className="bg-white flex gap-4 px-4 py-8 rounded-xl shadow-2xl relative">
//         {filters.map((filter, index) => (
//           <div key={index} className="w-1/4 relative">
//             <div
//               className="bg-[#D9D9D9] rounded-sm py-5 px-4 capitalize font-medium flex justify-between items-center cursor-pointer"
//               onClick={() => handleDropdown(index)}
//             >
//               {filter.label} <FontAwesomeIcon icon={faAngleDown} />
//             </div>

//             {openDropdown === index && (
//               <div className="absolute left-0 top-full mt-2 bg-white w-full rounded border border-gray-400/30 shadow-lg">
//                 <ul className="px-4 flex flex-col gap-2 py-3">
//                   {filter.options.map((option, i) => (
//                     <li key={i} className="bg-[#D9D9D9] rounded-sm px-4 py-2 cursor-pointer">
//                       {option}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
