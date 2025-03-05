// import React from "react";

// const CoveragePopup = ({ isOpen, onClose, selectedPlan }) => {
//   if (!isOpen || !selectedPlan) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white w-[40vw] p-6 rounded-lg shadow-lg relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           ✕
//         </button>

//         {/* Insurance Company Info */}
//         <div className="flex items-center gap-4">
//           <img src={selectedPlan.logo} alt="Insurance Logo" className="w-20" />
//           <div>
//             <h2 className="text-xl font-bold">{selectedPlan.company}</h2>
//             <p className="text-gray-600">IDV Cover: ₹{selectedPlan.idv.toLocaleString()}</p>
//             <p className="text-gray-600">Claims Settled: {selectedPlan.claimsSettled}</p>
//           </div>
//         </div>

//         {/* Coverage Details */}
//         <div className="mt-6">
//           <h3 className="font-semibold text-lg">What's Covered</h3>
//           <ul className="list-disc pl-5 text-gray-700">
//             <li>Accidental Damage (1 Year)</li>
//             <li>Theft Protection</li>
//             <li>Third Party Damage (3 Years)</li>
//             <li>Natural Calamities</li>
//             <li>Fire & Explosions</li>
//             <li>Man-made Hazards (Riots, Arson, etc.)</li>
//           </ul>
//         </div>

//         {/* View More / Close */}
//         <div className="mt-4 flex justify-end">
//           <button className="text-blue-600 font-semibold hover:underline" onClick={onClose}>
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoveragePopup;


// import React from "react";
// import { motion } from "framer-motion";

// const CoveragePopup = ({ isOpen, onClose, selectedPlan }) => {
//   if (!isOpen || !selectedPlan) return null;

//   return (
//     <div className="fixed bg-[#1111111d] inset-0 flex justify-end z-50">
//       {/* Background Blur Effect */}
//       <div className=" " onClick={onClose}></div>

//       {/* Sliding Popup */}
//       <motion.div
//         initial={{ x: "70%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ type: "spring", stiffness: 60 }}
//         className="bg-white w-[40vw] h-full shadow-xl p-6 overflow-y-auto relative"
//       >
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
//           onClick={onClose}
//         >
//           ✕
//         </button>

//         {/* Insurance Company Info */}
//         <div className="flex items-center gap-4 border-b pb-4">
//           <img src={selectedPlan.logo} alt="Insurance Logo" className="w-20" />
//           <div>
//             <h2 className="text-xl font-bold">{selectedPlan.company}</h2>
//             <p className="text-gray-600">IDV Cover: ₹{selectedPlan.idv.toLocaleString()}</p>
//             <p className="text-gray-600">Claims Settled: {selectedPlan.claimsSettled}</p>
//           </div>
//         </div>

//         {/* Coverage Details */}
//         <div className="mt-6">
//           <h3 className="font-semibold text-lg">What's Covered</h3>
//           <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-2">
//             <li>Accidental Damage (1 Year)</li>
//             <li>Theft Protection</li>
//             <li>Third Party Damage (3 Years)</li>
//             <li>Natural Calamities</li>
//             <li>Fire & Explosions</li>
//             <li>Man-made Hazards (Riots, Arson, etc.)</li>
//           </ul>
//         </div>

//         {/* Proceed to Buy Button */}
//         <div className="absolute bottom-4 left-0 w-full px-6">
//           <button className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
//             Proceed to Buy →
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default CoveragePopup;


// import React from "react";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCarCrash, faShieldAlt, faFire, faUserShield, faWater, faCarBurst, faLock } from "@fortawesome/free-solid-svg-icons";

// const coverageDetails = [
//   { icon: faCarCrash, label: "Accidental Damage (1 Year)" },
//   { icon: faLock, label: "Theft Protection" },
//   { icon: faUserShield, label: "Third Party Damage (3 Years)" },
//   { icon: faWater, label: "Natural Calamities" },
//   { icon: faFire, label: "Fire & Explosions" },
//   { icon: faCarBurst, label: "Man-made Hazards (Riots, Arson, etc.)" },
// ];

// const CoveragePopup = ({ isOpen, onClose, selectedPlan }) => {
//   if (!isOpen || !selectedPlan) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
//       {/* Background Blur Effect */}
//       <div className="absolute inset-0 backdrop-blur-sm" onClick={onClose}></div>

//       {/* Sliding Popup */}
//       <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ type: "spring", stiffness: 100 }}
//         className="bg-white w-[40vw] h-full shadow-xl p-6 overflow-y-auto relative"
//       >
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
//           onClick={onClose}
//         >
//           ✕
//         </button>

//         {/* Insurance Company Info */}
//         <div className="flex items-center gap-4 border-b pb-4">
//           <img src={selectedPlan.logo} alt="Insurance Logo" className="w-20" />
//           <div>
//             <h2 className="text-xl font-bold">{selectedPlan.company}</h2>
//             <p className="text-gray-600">IDV Cover: ₹{selectedPlan.idv.toLocaleString()}</p>
//             <p className="text-gray-600">Claims Settled: {selectedPlan.claimsSettled}</p>
//           </div>
//         </div>

//         {/* Coverage Details - Grid Layout with Icons */}
//         <div className="mt-6">
//           <h3 className="font-semibold text-lg mb-3">What's Covered</h3>
//           <div className="grid grid-cols-2 gap-4">
//             {coverageDetails.map((item, index) => (
//               <div key={index} className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-sm">
//                 <FontAwesomeIcon icon={item.icon} className="text-blue-500 text-xl" />
//                 <span className="text-gray-700">{item.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Proceed to Buy Button */}
//         <div className="absolute bottom-4 left-0 w-full px-6">
//           <button className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
//             Proceed to Buy →
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default CoveragePopup;



// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const coverageData = [
//   { title: "Accidental damage", icon: "🚗" },
//   { title: "Theft of the car", icon: "🔒" },
//   { title: "Damage due to fire", icon: "🔥" },
//   { title: "Natural calamities", icon: "🌪️" },
//   { title: "Man-made hazards", icon: "⚠️" },
// ];

// const exclusionsData = [
//   { title: "General wear & tear", icon: "🔧" },
//   { title: "Mechanical failure", icon: "⚙️" },
//   { title: "Damage to tyres", icon: "🚙" },
//   { title: "Consequential damage", icon: "⚠️" },
//   { title: "Cost of consumables", icon: "🛠️" },
// ];

// const InsurancePopup = ({ isOpen, onClose }) => {
//   const [expanded, setExpanded] = useState(null);

//   const toggleExpand = (section) => {
//     setExpanded(expanded === section ? null : section);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 bg-[#1111114d]  flex justify-end"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="w-1/3 h-full bg-white p-6 shadow-xl overflow-y-auto"
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 100 }}
//           >
//             <button onClick={onClose} className="absolute top-4 right-4">✖</button>
            
//             {/* Coverage Section */}
//             <div>
//               <h2 className="text-xl font-semibold mb-4">What's Covered?</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 {coverageData.map((item, index) => (
//                   <div key={index} className="p-4 flex items-center gap-2">
//                     <span className="text-2xl">{item.icon}</span>
//                     <p>{item.title}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Exclusions Section */}
//             <div className="mt-6">
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => toggleExpand("exclusions")}
//               >
//                 <h2 className="text-xl font-semibold">What's Not Covered?</h2>
//                 {expanded === "exclusions" ? <ChevronUp /> : <ChevronDown />}
//               </div>
//               <AnimatePresence>
//                 {expanded === "exclusions" && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     className="grid grid-cols-2 gap-4 mt-4"
//                   >
//                     {exclusionsData.map((item, index) => (
//                       <div key={index} className="p-4 flex items-center gap-2">
//                         <span className="text-2xl">{item.icon}</span>
//                         <p>{item.title}</p>
//                       </div>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Proceed to Buy Button */}
//             <div className="mt-6">
//               {/* <Button className="w-full bg-blue-600 text-white py-2 text-lg">Proceed to Buy</Button> */}
//               <button>Proceed to Buy </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default InsurancePopup;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const coverageData = [
  { title: "Accidental damage", icon: "🚗" },
  { title: "Theft of the car", icon: "🔒" },
  { title: "Damage due to fire", icon: "🔥" },
  { title: "Natural calamities", icon: "🌪️" },
  { title: "Man-made hazards", icon: "⚠️" },
];

const exclusionsData = [
  { title: "General wear & tear", icon: "🔧" },
  { title: "Mechanical failure", icon: "⚙️" },
  { title: "Damage to tyres", icon: "🚙" },
  { title: "Consequential damage", icon: "⚠️" },
  { title: "Cost of consumables", icon: "🛠️" },
];

const InsurancePopup = ({ isOpen, onClose, selectedPlan }) => {
  const [expanded, setExpanded] = useState({ coverage: true, exclusions: true });

  useEffect(() => {
    if (isOpen) {
      setExpanded({ coverage: true, exclusions: true });
    }
  }, [isOpen]);

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#11111124] bg-opacity-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-[30%] h-full bg-white p-6 shadow-xl overflow-y-auto relative"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>

            {/* Selected Insurance Plan */}
            {selectedPlan && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700">Selected Plan</h2>
                <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg mt-2">
                  <img src={selectedPlan.logo} alt={selectedPlan.company} className="w-12 h-12 object-contain" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{selectedPlan.company}</h3>
                    <p className="text-gray-600 text-sm">IDV: ₹{selectedPlan.idv.toLocaleString()}</p>
                    <p className="text-gray-600 text-sm">Claims Settled: {selectedPlan.claimsSettled}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Coverage Section */}
            <div className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand("coverage")}
              >
                <h2 className="text-xl font-semibold">What's Covered?</h2>
                {expanded.coverage ? <ChevronUp /> : <ChevronDown />}
              </div>
              <AnimatePresence>
                {expanded.coverage && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="grid grid-cols-2 gap-4 mt-4"
                  >
                    {coverageData.map((item, index) => (
                      <div key={index} className="p-4 flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <p>{item.title}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Exclusions Section */}
            <div className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand("exclusions")}
              >
                <h2 className="text-xl font-semibold">What's Not Covered?</h2>
                {expanded.exclusions ? <ChevronUp /> : <ChevronDown />}
              </div>
              <AnimatePresence>
                {expanded.exclusions && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="grid grid-cols-2 gap-4 mt-4"
                  >
                    {exclusionsData.map((item, index) => (
                      <div key={index} className="p-4 flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <p>{item.title}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Proceed to Buy Button */}
            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-3 text-lg rounded-lg">
                Proceed to Buy
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InsurancePopup;
