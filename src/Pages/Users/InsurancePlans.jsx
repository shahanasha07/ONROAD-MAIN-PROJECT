

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilter, faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import benz from "../../assets/images/Common/benz.png";
// import bmw from "../../assets/images/Common/bmw-logo.png";
// import landrover from "../../assets/images/Common/land-rover-logo.png";
// import mahindra from "../../assets/images/Common/mahindra.png";
// import mg from "../../assets/images/Common/mg.png";

// const carDetails = {
//   name: "HONDA Elevate",
//   location: "DELHI",
//   year: "2025",
//   fuel: "Petrol",
//   idv: "₹15,23,800",
//   ncb: "0%",
// };

// const insurancePlans = [
//   {
//     company: "United India Insurance",
//     idv: 1523800,
//     claimsSettled: "95%",
//     price: 15643,
//     garages: "109 Cashless Garages",
//   },
//   {
//     company: "The New India Assurance Co. Ltd.",
//     idv: 1523800,
//     claimsSettled: "95%",
//     price: 15400,
//     garages: "67 Cashless Garages",
//   },
//   {
//     company: "ICICI Lombard",
//     idv: 1600000,
//     claimsSettled: "97%",
//     price: 16200,
//     garages: "150 Cashless Garages",
//   },
// ];

// const filters = [
//   "Zero Depreciation",
//   "24x7 Roadside Assistance",
//   "Engine Protection Cover",
//   "Consumables",
//   "Key & Lock Replacement",
//   "Invoice Price Cover",
//   "Personal Accident Cover",
//   "Third Party Cover",
// ];

// function InsurancePage() {
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [sortOrder, setSortOrder] = useState("lowToHigh");

//   const toggleFilter = (filter) => {
//     setSelectedFilters((prev) =>
//       prev.includes(filter)
//         ? prev.filter((item) => item !== filter)
//         : [...prev, filter]
//     );
//   };

//   const sortedPlans = [...insurancePlans].sort((a, b) =>
//     sortOrder === "lowToHigh" ? a.price - b.price : b.price - a.price
//   );

//   return (
//     <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex gap-6">
//       {/* Left Section - Car Details & Filters */}
//       <div className="w-1/3">
//         <div className="p-4 bg-gray-100 rounded-lg mb-4">
//           <h2 className="text-xl font-bold">{carDetails.name}</h2>
//           <p className="text-gray-600">{carDetails.location} | {carDetails.year} | {carDetails.fuel}</p>
//           <p className="text-gray-600">IDV Cover: ₹{carDetails.idv.toLocaleString()}</p>
//           <p className="text-gray-600">No Claim Bonus (NCB): {carDetails.ncb}</p>
//         </div>
//         <div className="p-4 bg-gray-100 rounded-lg">
//           <h3 className="font-semibold text-lg">Sort & Filter</h3>
//           <button
//             onClick={() => setSortOrder(sortOrder === "lowToHigh" ? "highToLow" : "lowToHigh")}
//             className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 w-full"
//           >
//             Sort by Premium {sortOrder === "lowToHigh" ? "Low to High" : "High to Low"}
//             <FontAwesomeIcon icon={sortOrder === "lowToHigh" ? faArrowDown : faArrowUp} />
//           </button>
//           <div className="grid grid-cols-1 gap-2 mt-4">
//             {filters.map((filter, index) => (
//               <label key={index} className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   checked={selectedFilters.includes(filter)}
//                   onChange={() => toggleFilter(filter)}
//                 />
//                 <span>{filter}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Insurance Plans */}
//       <div className="w-2/3">
//         <h3 className="font-semibold text-lg">1-Year Own Damage + 3-Year Third Party Plans</h3>
//         {sortedPlans.map((plan, index) => (
//           <div key={index} className="p-4 bg-gray-100 mt-2 rounded-lg flex justify-between items-center">
//             <div>
//               <h4 className="font-bold text-md">{plan.company}</h4>
//               <p className="text-gray-600">IDV Cover: ₹{plan.idv.toLocaleString()}</p>
//               <p className="text-gray-600">Claims Settled: {plan.claimsSettled}</p>
//               <p className="text-gray-600">{plan.garages}</p>
//             </div>
//             <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold">
//               ₹{plan.price.toLocaleString()} →
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default InsurancePage;





// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilter, faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import Navbar from '../../Components/Common/Navbar';
// import { div } from 'framer-motion/client';

// const carDetails = {
//   name: "HONDA Elevate",
//   location: "DELHI",
//   year: "2025",
//   fuel: "Petrol",
//   idv: "₹15,23,800",
//   ncb: "0%",
// };

// const insurancePlans = [
//   {
//     company: "United India Insurance",
//     idv: 1523800,
//     claimsSettled: "95%",
//     price: 15643,
//     garages: "109 Cashless Garages",
//   },
//   {
//     company: "The New India Assurance Co. Ltd.",
//     idv: 1523800,
//     claimsSettled: "95%",
//     price: 15400,
//     garages: "67 Cashless Garages",
//   },
//   {
//     company: "ICICI Lombard",
//     idv: 1600000,
//     claimsSettled: "97%",
//     price: 16200,
//     garages: "150 Cashless Garages",
//   },
// ];

// const recommendedAddons = [
//   "Zero Depreciation",
//   "24x7 Roadside Assistance",
//   "Engine Protection Cover",
//   "Consumables",
// ];

// const otherAddons = [
//   "Key & Lock Replacement",
//   "Invoice Price Cover",
//   "Personal Accident Cover",
//   "Third Party Cover",
// ];

// const sortOptions = [
//   { label: "Premium Low to High", value: "lowToHigh" },
//   { label: "Premium High to Low", value: "highToLow" },
//   { label: "IDV Low to High", value: "idvLowToHigh" },
//   { label: "IDV High to Low", value: "idvHighToLow" },
// ];

// const deductibles = [
//   "₹2500 Voluntary Deductible",
//   "₹5000 Voluntary Deductible",
//   "₹7500 Voluntary Deductible",
//   "₹15000 Voluntary Deductible",
//   "Anti-theft device discount",
// ];

// function InsurancePage() {
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [sortOrder, setSortOrder] = useState("lowToHigh");

//   const toggleFilter = (filter) => {
//     setSelectedFilters((prev) =>
//       prev.includes(filter)
//         ? prev.filter((item) => item !== filter)
//         : [...prev, filter]
//     );
//   };

//   const sortedPlans = [...insurancePlans].sort((a, b) => {
//     if (sortOrder === "lowToHigh") return a.price - b.price;
//     if (sortOrder === "highToLow") return b.price - a.price;
//     if (sortOrder === "idvLowToHigh") return a.idv - b.idv;
//     if (sortOrder === "idvHighToLow") return b.idv - a.idv;
//     return 0;
//   });

//   return (
//     <div>


//         <Navbar/>
//     <div className="p-6 pt-22 max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex justify-end gap-6">
//       {/* Left Section - Car Details & Filters */}
//       <div className="w-1/3 fix">
//         <div className="p-4 bg-gray-100 rounded-lg mb-4">
//           <h2 className="text-xl font-bold">{carDetails.name}</h2>
//           <p className="text-gray-600">{carDetails.location} | {carDetails.year} | {carDetails.fuel}</p>
//           <p className="text-gray-600">IDV Cover: {carDetails.idv}</p>
//           <p className="text-gray-600">No Claim Bonus (NCB): {carDetails.ncb}</p>
//         </div>
//         <div className="p-4 bg-gray-100 rounded-lg">
//           <h3 className="font-semibold text-lg">Sort & Filter</h3>
//           <div className="mt-2">
//             {sortOptions.map((option) => (
//               <label key={option.value} className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="sort"
//                   checked={sortOrder === option.value}
//                   onChange={() => setSortOrder(option.value)}
//                 />
//                 <span>{option.label}</span>
//               </label>
//             ))}
//           </div>
//           <h4 className="font-semibold mt-4">Recommended Addons</h4>
//           {recommendedAddons.map((addon) => (
//             <label key={addon} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={selectedFilters.includes(addon)}
//                 onChange={() => toggleFilter(addon)}
//               />
//               <span>{addon}</span>
//             </label>
//           ))}
//           <h4 className="font-semibold mt-4">Other Addons</h4>
//           {otherAddons.map((addon) => (
//             <label key={addon} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={selectedFilters.includes(addon)}
//                 onChange={() => toggleFilter(addon)}
//               />
//               <span>{addon}</span>
//             </label>
//           ))}
//           <h4 className="font-semibold mt-4">Deductibles</h4>
//           {deductibles.map((deductible) => (
//             <label key={deductible} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={selectedFilters.includes(deductible)}
//                 onChange={() => toggleFilter(deductible)}
//               />
//               <span>{deductible}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Right Section - Insurance Plans */}
//       <div className="w-2/3">
//         <h3 className="font-semibold text-lg">1-Year Own Damage + 3-Year Third Party Plans</h3>
//         {sortedPlans.map((plan, index) => (
//           <div key={index} className="p-4 bg-gray-100 mt-2 rounded-lg flex justify-between items-center relative">
//             <div>
//               <h4 className="font-bold text-md">{plan.company}</h4>
//               <p className="text-gray-600">IDV Cover: ₹{plan.idv.toLocaleString()}</p>
//               <p className="text-gray-600">Claims Settled: {plan.claimsSettled}</p>
//             </div>
//             <div className="absolute bottom-4 right-4 text-right">
//               <p className="text-gray-600 text-sm">{plan.garages}</p>
//               <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold mt-2">
//                 ₹{plan.price.toLocaleString()} →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//      </div>
//     </div>
//   );
// }

// export default InsurancePage;





// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown, faArrowUp, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import Navbar from '../../Components/Common/Navbar';

// const carDetails = {
//   name: "HONDA Elevate",
//   location: "DELHI",
//   year: "2025",
//   fuel: "Petrol",
//   idv: "₹15,23,800",
//   ncb: "0%",
// };

// const insurancePlans = [
//   {
//     company: "United India Insurance",
//     idv: 1523800,
//     claimsSettled: "95%",
//     price: 15643,
//     garages: "109 Cashless Garages",
//   },
//   {
//     company: "The New India Assurance Co. Ltd.",
//     idv: 1523800,
//     claimsSettled: "95%",
//     price: 15400,
//     garages: "67 Cashless Garages",
//   },
//   {
//     company: "ICICI Lombard",
//     idv: 1600000,
//     claimsSettled: "97%",
//     price: 16200,
//     garages: "150 Cashless Garages",
//   },
// ];

// const categories = {
//   "Sort Options": [
//     { label: "Premium Low to High", value: "lowToHigh" },
//     { label: "Premium High to Low", value: "highToLow" },
//     { label: "IDV Low to High", value: "idvLowToHigh" },
//     { label: "IDV High to Low", value: "idvHighToLow" },
//   ],
//   "Recommended Addons": [
//     "Zero Depreciation",
//     "24x7 Roadside Assistance",
//     "Engine Protection Cover",
//     "Consumables",
//   ],
//   "Other Addons": [
//     "Key & Lock Replacement",
//     "Invoice Price Cover",
//     "Personal Accident Cover",
//     "Third Party Cover",
//   ],
//   "Deductibles": [
//     "₹2500 Voluntary Deductible",
//     "₹5000 Voluntary Deductible",
//     "₹7500 Voluntary Deductible",
//     "₹15000 Voluntary Deductible",
//     "Anti-theft device discount",
//   ],
// };

// function InsurancePage() {
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [sortOrder, setSortOrder] = useState("lowToHigh");
//   const [expandedCategories, setExpandedCategories] = useState(
//     Object.keys(categories).reduce((acc, key) => ({ ...acc, [key]: true }), {})
//   );

//   const toggleFilter = (filter) => {
//     setSelectedFilters((prev) =>
//       prev.includes(filter)
//         ? prev.filter((item) => item !== filter)
//         : [...prev, filter]
//     );
//   };

//   const toggleCategory = (category) => {
//     setExpandedCategories((prev) => ({
//       ...prev,
//       [category]: !prev[category],
//     }));
//   };

//   const sortedPlans = [...insurancePlans].sort((a, b) => {
//     if (sortOrder === "lowToHigh") return a.price - b.price;
//     if (sortOrder === "highToLow") return b.price - a.price;
//     if (sortOrder === "idvLowToHigh") return a.idv - b.idv;
//     if (sortOrder === "idvHighToLow") return b.idv - a.idv;
//     return 0;
//   });

//   return (
//     <div>
//         <Navbar/>
//     <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex justify-end gap-6 overflow-hidden pt-18">
//       {/* Left Section - Fixed Position */}
//       <div className="w-[22vw] h-screen fixed left-56 top-16 bg-gray-100 p-4 rounded-lg overflow-y-auto scrollbar pb-20">
//         <h2 className="text-xl font-bold mb-4">{carDetails.name}</h2>
//         <p className="text-gray-600">{carDetails.location} | {carDetails.year} | {carDetails.fuel}</p>
//         <p className="text-gray-600">IDV Cover: {carDetails.idv}</p>
//         <p className="text-gray-600 mb-4">No Claim Bonus (NCB): {carDetails.ncb}</p>

//         {Object.entries(categories).map(([category, options]) => (
//           <div key={category} className="mb-4">
//             <button
//               className="flex justify-between w-full text-left font-semibold bg-gray-200 px-4 py-2 rounded-md"
//               onClick={() => toggleCategory(category)}
//             >
//               {category}
//               <FontAwesomeIcon icon={expandedCategories[category] ? faChevronUp : faChevronDown} />
//             </button>
//             {expandedCategories[category] && (
//               <div className="mt-2 px-4">
//                 {options.map((option, index) => (
//                   <label key={index} className="flex items-center space-x-2">
//                     <input
//                       type={category === "Sort Options" ? "radio" : "checkbox"}
//                       name={category === "Sort Options" ? "sort" : option}
//                       checked={category === "Sort Options" ? sortOrder === option.value : selectedFilters.includes(option)}
//                       onChange={() => category === "Sort Options" ? setSortOrder(option.value) : toggleFilter(option)}
//                     />
//                     <span>{option.label || option}</span>
//                   </label>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Right Section - Insurance Plans (Scrollable) */}
//       <div className="w-2/3 overflow-y-auto h-screen pr-4">
//         <h3 className="font-semibold text-lg">1-Year Own Damage + 3-Year Third Party Plans</h3>
//         {sortedPlans.map((plan, index) => (
//           <div key={index} className="p-4 bg-gray-100 mt-2 rounded-lg flex flex-col relative">
//             <div className="flex justify-between">
//               <div>
//                 <h4 className="font-bold text-md">{plan.company}</h4>
//                 <p className="text-gray-600">IDV Cover: ₹{plan.idv.toLocaleString()}</p>
//                 <p className="text-gray-600">Claims Settled: {plan.claimsSettled}</p>
//               </div>
//               <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold">
//                 ₹{plan.price.toLocaleString()} →
//               </button>
//             </div>
//             <div className="mt-2 text-right text-sm text-gray-600">
//               {plan.garages}
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
//   );
// }

// export default InsurancePage;



// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown, faArrowUp, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import { useLocation } from 'react-router-dom';

// const insurancePlans = [
//   {
//     company: "United India Insurance",
//     idv: 1523800,
//     claimsSettled: "95%",
//     price: 15643,
//     garages: "109 Cashless Garages",
//   },
//   {
//     company: "The New India Assurance Co. Ltd.",
//     idv: 1523800,
//     claimsSettled: "95%",
//     price: 15400,
//     garages: "67 Cashless Garages",
//   },
//   {
//     company: "ICICI Lombard",
//     idv: 1600000,
//     claimsSettled: "97%",
//     price: 16200,
//     garages: "150 Cashless Garages",
//   },
// ];

// const categories = {
//   "Sort Options": [
//     { label: "Premium Low to High", value: "lowToHigh" },
//     { label: "Premium High to Low", value: "highToLow" },
//     { label: "IDV Low to High", value: "idvLowToHigh" },
//     { label: "IDV High to Low", value: "idvHighToLow" },
//   ],
//   "Recommended Addons": [
//     "Zero Depreciation",
//     "24x7 Roadside Assistance",
//     "Engine Protection Cover",
//     "Consumables",
//   ],
//   "Other Addons": [
//     "Key & Lock Replacement",
//     "Invoice Price Cover",
//     "Personal Accident Cover",
//     "Third Party Cover",
//   ],
//   "Deductibles": [
//     "₹2500 Voluntary Deductible",
//     "₹5000 Voluntary Deductible",
//     "₹7500 Voluntary Deductible",
//     "₹15000 Voluntary Deductible",
//     "Anti-theft device discount",
//   ],
// };

// function InsurancePage() {
//   const location = useLocation();
//   const carDetails = location.state?.carDetails || {};
//   console.log(carDetails);

//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [sortOrder, setSortOrder] = useState("lowToHigh");
//   const [expandedCategories, setExpandedCategories] = useState(
//     Object.keys(categories).reduce((acc, key) => ({ ...acc, [key]: true }), {})
//   );

//   const toggleFilter = (filter) => {
//     setSelectedFilters((prev) =>
//       prev.includes(filter)
//         ? prev.filter((item) => item !== filter)
//         : [...prev, filter]
//     );
//   };

//   const toggleCategory = (category) => {
//     setExpandedCategories((prev) => ({
//       ...prev,
//       [category]: !prev[category],
//     }));
//   };

//   const sortedPlans = [...insurancePlans].sort((a, b) => {
//     if (sortOrder === "lowToHigh") return a.price - b.price;
//     if (sortOrder === "highToLow") return b.price - a.price;
//     if (sortOrder === "idvLowToHigh") return a.idv - b.idv;
//     if (sortOrder === "idvHighToLow") return b.idv - a.idv;
//     return 0;
//   });


//   return (
//     <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col gap-6 overflow-hidden">
//       {/* Car Details & Protection Options */}
//       {/* <div className="bg-gray-100 p-4 rounded-lg flex justify-between">
//         <div>
//           <h2 className="text-xl font-bold">{carDetails.name || "Selected Car"}</h2>
//           <p className="text-gray-600">{carDetails.location} | {carDetails.year} | {carDetails.fuel}</p>
//           <p className="text-gray-600">IDV Cover: {carDetails.idv}</p>
//           <p className="text-gray-600">No Claim Bonus (NCB): {carDetails.ncb}</p>
//         </div>
//         <div className="flex gap-4">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Standard Protection</button>
//           <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Long Term Protection</button>
//         </div>
//       </div> */}



//       <div className="bg-gray-100 p-4 rounded-lg flex justify-between">
//   <div>
//     <h2 className="text-xl font-bold">{carDetails.brand || "Selected Car"}</h2>
//     <p className="text-gray-600">
//       {carDetails.location || "Location Not Selected"} | {carDetails.year || "Year Not Selected"} | {carDetails.fuel || "Fuel Not Selected"}
//     </p>
//     <p className="text-gray-600">IDV Cover: {carDetails.idv || "N/A"}</p>
//     <p className="text-gray-600">No Claim Bonus (NCB): {carDetails.ncb || "N/A"}</p>
//   </div>
//   <div className="flex gap-4">
//     <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Standard Protection</button>
//     <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Long Term Protection</button>
//   </div>
// </div>


//       <div className="flex gap-6 overflow-hidden">
//         {/* Left Section - Fixed Filters */}
//         <div className="w-1/3 h-screen sticky top-0 bg-gray-100 p-4 rounded-lg overflow-y-auto">
//           {Object.entries(categories).map(([category, options]) => (
//             <div key={category} className="mb-4">
//               <button
//                 className="flex justify-between w-full text-left font-semibold bg-gray-200 px-4 py-2 rounded-md"
//                 onClick={() => toggleCategory(category)}
//               >
//                 {category}
//                 <FontAwesomeIcon icon={expandedCategories[category] ? faChevronUp : faChevronDown} />
//               </button>
//               {expandedCategories[category] && (
//                 <div className="mt-2 px-4">
//                   {options.map((option, index) => (
//                     <label key={index} className="flex items-center space-x-2">
//                       <input
//                         type={category === "Sort Options" ? "radio" : "checkbox"}
//                         name={category === "Sort Options" ? "sort" : option}
//                         checked={category === "Sort Options" ? sortOrder === option.value : selectedFilters.includes(option)}
//                         onChange={() => category === "Sort Options" ? setSortOrder(option.value) : toggleFilter(option)}
//                       />
//                       <span>{option.label || option}</span>
//                     </label>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Right Section - Insurance Plans (Scrollable) */}
//         <div className="w-2/3 overflow-y-auto h-screen pr-4">
//           <h3 className="font-semibold text-lg">1-Year Own Damage + 3-Year Third Party Plans</h3>
//           {sortedPlans.map((plan, index) => (
//             <div key={index} className="p-4 bg-gray-100 mt-2 rounded-lg flex flex-col relative">
//               <div className="flex justify-between">
//                 <div>
//                   <h4 className="font-bold text-md">{plan.company}</h4>
//                   <p className="text-gray-600">IDV Cover: ₹{plan.idv.toLocaleString()}</p>
//                   <p className="text-gray-600">Claims Settled: {plan.claimsSettled}</p>
//                 </div>
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
//                   ₹{plan.price.toLocaleString()} →
//                 </button>
//               </div>
//               <div className="mt-2 text-right text-sm text-gray-600">
//                 {plan.garages}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InsurancePage;



import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Common/Navbar";
import unitedindiaLogo from '../../assets/images/Common/Unitedindia-insurance.avif'
import newindiaLogo from '../../assets/images/Common/newindia-insurance.avif'
import zurichLogo from '../../assets/images/Common/zurich-insurance.avif'
import CoveragePopup from "../../Components/Users/CoveragePopup";

const insurancePlans = {
  standard: [
    { logo:unitedindiaLogo, company: "United India Insurance", idv: 1523800, claimsSettled: "95%", price: 15643, garages: "109 Cashless Garages" },
    { logo:newindiaLogo, company: "The New India Assurance Co. Ltd.", idv: 1523800, claimsSettled: "95%", price: 15400, garages: "67 Cashless Garages" },
    { logo:zurichLogo, company: "United India Insurance", idv: 1523800, claimsSettled: "95%", price: 15643, garages: "109 Cashless Garages" },
    
  ],
  longTerm: [
    { logo:zurichLogo, company: "ICICI Lombard", idv: 1600000, claimsSettled: "97%", price: 16200, garages: "150 Cashless Garages" },
    { logo:newindiaLogo, company: "HDFC ERGO", idv: 1650000, claimsSettled: "98%", price: 17000, garages: "180 Cashless Garages" },
    { logo:unitedindiaLogo, company: "United India Insurance", idv: 1523800, claimsSettled: "95%", price: 15643, garages: "109 Cashless Garages" },
    
  ]
};

const categories = {
  "Sort Options": [
    { label: "Premium Low to High", value: "lowToHigh" },
    { label: "Premium High to Low", value: "highToLow" },
    { label: "IDV Low to High", value: "idvLowToHigh" },
    { label: "IDV High to Low", value: "idvHighToLow" },
  ],
  "Recommended Addons": ["Zero Depreciation", "24x7 Roadside Assistance", "Engine Protection Cover", "Consumables"],
  "Other Addons": ["Key & Lock Replacement", "Invoice Price Cover", "Personal Accident Cover", "Third Party Cover"],
  "Deductibles": ["₹2500 Voluntary Deductible", "₹5000 Voluntary Deductible", "₹7500 Voluntary Deductible", "₹15000 Voluntary Deductible", "Anti-theft device discount"],
};

function InsurancePlans() {
  const location = useLocation();
  const navigate = useNavigate();
  const carDetails = location.state?.carDetails || {};

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [expandedCategories, setExpandedCategories] = useState(Object.keys(categories).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
  const [activePlan, setActivePlan] = useState("standard");
  const [loading, setLoading] = useState(false);

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]));
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const sortedPlans = [...insurancePlans[activePlan]].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    if (sortOrder === "idvLowToHigh") return a.idv - b.idv;
    if (sortOrder === "idvHighToLow") return b.idv - a.idv;
    return 0;
  });

  const handleEditCarDetails = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/car-insurance", { state: { editMode: true, step: "last", carDetails } });
    }, 1000);
  };

  return (
    <div>

      <div className="fixed top-0">
        <Navbar />
      </div>
      <div className="p-6 mt-18 max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col gap-6 overflow-hidden">
        {/* Car Details & Edit */}
        <div className="w-[23vw] bg-gray-100 p-4 rounded-lg flex justify-between items-center fixed leading-8">
          <div>
            <h2 className="text-xl font-bold">{carDetails.brand || "Selected Car"}</h2>
            <p className="text-gray-600">{carDetails.location || "Location Not Selected"} | {carDetails.year || "Year Not Selected"} | {carDetails.fuel || "Fuel Not Selected"}</p>
            <p className="text-gray-600">IDV Cover: {carDetails.idv || "N/A"}</p>
            <p className="text-gray-600">No Claim Bonus (NCB): {carDetails.ncb || "N/A"}</p>
          </div>
          <button className="text-blue-600 font-semibold hover:underline flex items-center" onClick={handleEditCarDetails}>
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            {loading ? "Loading..." : "Edit"}
          </button>
        </div>
  
        <div className="flex justify-end gap-6 overflow-hidden ">
          {/* Left Section - Filters */}
           <div className="w-[23vw] h-scree h-[65vh] fixed top-66 left-52 bg-gray-100 p-4 rounded-lg overflow-y-sc overflow-scroll scrollbar">

            {Object.entries(categories).map(([category, options]) => (
              <div key={category} className="mb-4">
                <button className="flex justify-between w-full text-left font-semibold bg-gray-200 px-4 py-2 rounded-md" onClick={() => toggleCategory(category)}>
                  {category}
                  <FontAwesomeIcon icon={expandedCategories[category] ? faChevronUp : faChevronDown} />
                </button>
                {expandedCategories[category] && (
                  <div className="mt-2 px-4">
                    {options.map((option, index) => (
                      <label key={index} className="flex items-center space-x-2">
                        <input type={category === "Sort Options" ? "radio" : "checkbox"} name={category === "Sort Options" ? "sort" : option} checked={category === "Sort Options" ? sortOrder === option.value : selectedFilters.includes(option)} onChange={() => category === "Sort Options" ? setSortOrder(option.value) : toggleFilter(option)} />
                        <span>{option.label || option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section - Insurance Plans */}
          <div className="w-2/3 overflow-y-auto h-screen pr-4 transition-opacity duration-500 ease-in-out">

            <div className=" flex justify-cente gap-4 py-2">
              <button className={`w-1/2 px-6 py-2 rounded-lg font-semibold ${activePlan === "standard" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setActivePlan("standard")}>
                Standard Protection
              </button>
              <button className={`w-1/2 px-6 py-2 rounded-lg font-semibold ${activePlan === "longTerm" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setActivePlan("longTerm")}>
                Long Term Protection
              </button>
            </div>
            <h3 className="font-semibold text-lg">{activePlan === "standard" ? "1-Year Own Damage + 3-Year Third Party Plans" : "Long Term Protection Plans"}</h3>
            {sortedPlans.map((plan, index) => (
              <div key={index} className="p-4 bg-gray-100 mt-2 rounded-lg flex flex-col relative">
                <div className="flex items-start justify-between">
                  <div className="">
                    <img src={plan.logo} alt="" className="w-46"/>
                    <h4 className="font-bold text-md">{plan.company}</h4>
                    <p className="text-gray-600">IDV Cover: ₹{plan.idv.toLocaleString()}</p>
                    <p className="text-gray-600">Claims Settled: {plan.claimsSettled}</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">₹{plan.price.toLocaleString()} →</button>
                </div>
                <div className="mt-2 text-right text-sm text-gray-600 space-x-10">
                  <span>{plan.garages}</span>
                  <span
                  className="cursor-pointer"
                    onClick={() => {
                      setSelectedPlan(plan);
                      setIsPopupOpen(true);
                    }}
                  >View coverag</span>
                </div>
                <CoveragePopup
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
  selectedPlan={selectedPlan}
/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsurancePlans;
