

// import React from "react";
// import bg from "../../assets/images/Common/car-Exchange.jpg";

// function Exchange() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="w-full h-[60vh] text-white relative flex items-center justify-center"
//         style={{
//           background: `url(${bg})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Text Content */}
//         <div className="absolute z-10 text-white text-center px-4">
//           <h1 className="font-bold text-5xl capitalize">Exchange Your Car</h1>
//           <p className="text-lg mt-2">
//             Get the best value for your car and upgrade today!
//           </p>
//         </div>

//         {/* Blur Overlay */}
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-[5px]"></div>
//       </div>

//       {/* Exchange Form Section */}
//       <div className="max-w-5xl mx-auto my-10 p-6 bg-gray-100 shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-center">Get Your Car Exchange Quote</h2>
//         <p className="text-gray-600 text-center mb-6">
//           Fill in the details and get an instant quote for your car exchange.
//         </p>
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input type="text" placeholder="Your Name" className="p-3 border rounded-md" />
//           <input type="text" placeholder="Car Model & Year" className="p-3 border rounded-md" />
//           <input type="text" placeholder="Current Car Condition" className="p-3 border rounded-md" />
//           <input type="text" placeholder="Preferred New Car" className="p-3 border rounded-md" />
//           <textarea
//             placeholder="Additional Details"
//             className="p-3 border rounded-md col-span-1 md:col-span-2"
//           ></textarea>
//           <button className="bg-blue-600 text-white py-3 rounded-md w-full md:col-span-2 hover:bg-blue-700">
//             Get Quote
//           </button>
//         </form>
//       </div>

//       {/* Benefits Section */}
//       <div className="bg-blue-600 text-white py-12">
//         <h2 className="text-3xl font-bold text-center mb-4">Why Exchange Your Car?</h2>
//         <div className="flex flex-wrap justify-center gap-6">
//           <div className="bg-white text-blue-600 p-6 rounded-lg shadow-md w-64 text-center">
//             <h3 className="text-xl font-bold">Best Value</h3>
//             <p className="text-gray-700">Get the highest resale value for your car.</p>
//           </div>
//           <div className="bg-white text-blue-600 p-6 rounded-lg shadow-md w-64 text-center">
//             <h3 className="text-xl font-bold">Hassle-Free Process</h3>
//             <p className="text-gray-700">Quick and easy documentation & transfer.</p>
//           </div>
//           <div className="bg-white text-blue-600 p-6 rounded-lg shadow-md w-64 text-center">
//             <h3 className="text-xl font-bold">Upgrade to a New Car</h3>
//             <p className="text-gray-700">Choose from a wide range of latest models.</p>
//           </div>
//         </div>
//       </div>

//       {/* Steps to Exchange */}
//       <div className="max-w-5xl mx-auto my-12 p-6">
//         <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//           <div className="p-6 border rounded-lg shadow-md">
//             <h3 className="text-xl font-bold">Step 1</h3>
//             <p className="text-gray-600">Enter your car details and get a quote.</p>
//           </div>
//           <div className="p-6 border rounded-lg shadow-md">
//             <h3 className="text-xl font-bold">Step 2</h3>
//             <p className="text-gray-600">Get an evaluation and finalize the offer.</p>
//           </div>
//           <div className="p-6 border rounded-lg shadow-md">
//             <h3 className="text-xl font-bold">Step 3</h3>
//             <p className="text-gray-600">Upgrade to a new car with an easy exchange process.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Exchange;


// fixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// import React, { useState } from "react";
// import bg from "../../assets/images/Common/exchange.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
// import Navbar from "../../Components/Common/Navbar";
// import benz from "../../assets/images/Common/benz.png";
// import bmw from "../../assets/images/Common/bmw-logo.png";
// import landrover from "../../assets/images/Common/land-rover-logo.png";
// import mahindra from "../../assets/images/Common/mahindra.png";
// import mg from "../../assets/images/Common/mg.png";

// const carBrands = [
//   { name: "Mahindra", logo: benz },
//   { name: "Honda", logo: bmw },
//   { name: "Ford", logo: landrover },
//   { name: "Hyundai", logo: mahindra },
//   { name: "Tata", logo: mg },
//   { name: "Toyota", logo: mg },
//   { name: "Ford", logo: landrover },
//   { name: "Hyundai", logo: mahindra },
//   { name: "Tata", logo: mg },
//   { name: "Toyota", logo: mg },
// ];

// const generateYears = () => {
//   const currentYear = new Date().getFullYear();
//   return Array.from({ length: currentYear - 1970 }, (_, i) => (currentYear - i).toString());
// };

// // const manufacturingYears = generateYears();
// // const carModels = ["XUV700", "Scorpio-N", "Thar", "Bolero"];
// // const carVariants = ["Petrol", "Diesel", "Electric"];
// // const registrationTypes = ["Individual", "Company"];
// // const kmDriven = ["0-10K KM", "10K-30K KM", "30K-50K KM", "50K+ KM"];
// // const carLocations = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"];

// const manufacturingYears = generateYears();
// const carModels = ["XUV700", "Scorpio-N", "Thar", "Bolero"];
// const fuelTypes = ["Petrol", "Diesel", "Electric"];
// const transmissionTypes = ["Manual", "Automatic"];
// const carVariants = {
//   Petrol: ["1.2L Base", "1.5L Turbo", "2.0L Premium"],
//   Diesel: ["1.5L Diesel", "2.0L Diesel High"],
//   Electric: ["EV Standard", "EV Long Range"],
// };

// const registrationStates = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"];
// const rtoCodes = {
//   Delhi: ["DL1", "DL2", "DL3"],
//   Mumbai: ["MH1", "MH2", "MH3"],
//   Bangalore: ["KA1", "KA2", "KA3"],
//   Chennai: ["TN1", "TN2", "TN3"],
//   Hyderabad: ["TS1", "TS2", "TS3"],
// };

// const kmDriven = ["0-10K KM", "10K-30K KM", "30K-50K KM", "50K+ KM"];
// const carLocations = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"];

// function Exchange() {
//   const [showSelection, setShowSelection] = useState(false);
//   const [step, setStep] = useState(1);
//   const [search, setSearch] = useState("");
//   const [selectedData, setSelectedData] = useState({
//     brand: null,
//     year: null,
//     model: null,
//     variant: null,
//     registrationState: null,
//     km: null,
//     location: null,
//   });

//   // const steps = [
//   //   { label: "Brand", key: "brand", data: carBrands },
//   //   { label: "Year", key: "year", data: manufacturingYears },
//   //   { label: "Model", key: "model", data: carModels },
//   //   { label: "Variant", key: "variant", data: carVariants },
//   //   { label: "Registration", key: "registration", data: registrationTypes },
//   //   { label: "KM", key: "km", data: kmDriven },
//   //   { label: "Location", key: "location", data: carLocations },
//   // ];

//   // const steps = [
//   //   { label: "Brand", key: "brand", data: carBrands },
//   //   { label: "Year", key: "year", data: manufacturingYears },
//   //   { label: "Model", key: "model", data: carModels },
//   //   { label: "Fuel Type", key: "fuel", data: fuelTypes },
//   //   ...(selectedData.fuel ? [{ label: "Transmission", key: "transmission", data: transmissionTypes }] : []),
//   //   ...(selectedData.transmission
//   //     ? [{ label: "Variant", key: "variant", data: carVariants[selectedData.fuel] || [] }]
//   //     : []),
//   //   { label: "Registration State", key: "registrationState", data: registrationStates },
//   //   ...(selectedData.registrationState
//   //     ? [{ label: "RTO Code", key: "rto", data: rtoCodes[selectedData.registrationState] || [] }]
//   //     : []),
//   //   { label: "KM", key: "km", data: kmDriven },
//   //   { label: "Location", key: "location", data: carLocations },
//   // ];

//   const steps = [
//     { label: "Brand", key: "brand", data: carBrands },
//     { label: "Year", key: "year", data: manufacturingYears },
//     { label: "Model", key: "model", data: carModels },
//     { label: "Variant", key: "variant", data: [] }, // Variant Step now handles Fuel & Transmission
//     { label: "Registration State", key: "registrationState", data: registrationStates },
//     { label: "KM", key: "km", data: kmDriven },
//     { label: "Location", key: "location", data: carLocations },
//   ];

//   const getVariantStepData = () => {
//     if (!selectedData.fuel) return fuelTypes; // Show Fuel Type first
//     if (!selectedData.transmission) return transmissionTypes; // Then Transmission
//     return carVariants[selectedData.fuel] || []; // Finally, Show Variants
//   };

//   const handleSelection = (key, value) => {
//     setSelectedData((prev) => ({ ...prev, [key]: value }));

//     // Ensure fuel → transmission → variant before moving to KM step
//     if (key === "fuel") {
//       setSelectedData((prev) => ({ ...prev, fuel: value, transmission: null, variant: null }));
//     } else if (key === "transmission") {
//       setSelectedData((prev) => ({ ...prev, transmission: value, variant: null }));
//     } else if (key === "variant") {
//       setStep(step + 1); // Move to KM step **ONLY** after selecting Variant
//     } else {
//       setStep(step + 1);
//     }
//   };

//   return (
//     <div>
//       <Navbar />

//       {/* Main UI */}
//       <div
//         className="flex flex-col md:flex-row items-center justify-center h-screen bg-cover bg-left"
//         style={{ backgroundImage: `url(${bg})` }}
//       >
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 h-[70vh] flex flex-col justify-center items-start px-12 text-white">
//           <h1 className="text-5xl font-bold leading-tight">Sell your car in minutes</h1>
//           <p className="mt-3 text-lg">Get doorstep pickup and instant payment</p>
//         </div>

//         {/* Right Section */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <div className="bg-white shadow-lg rounded-2xl p-8  w-[90%] max-w-lg ">

//             {/* Selected Items Display */}
//             {showSelection && (
//               <div className="bg-gray-100 p-4 rounded-lg mb-4">
//                 <div className="flex justify-between items-center">
//                   {/* <h3 className="text-lg font-semibold">Selected Details</h3> */}
//                   <FontAwesomeIcon
//                     icon={faTimes}
//                     className="text-gray-600 cursor-pointer"
//                     onClick={() => {
//                       setShowSelection(false);
//                       setSelectedData({ brand: null, year: null, model: null, variant: null });
//                       setStep(1);
//                     }}
//                   />
//                 </div>
//                 <div className="mt-2 text-sm">
//                   {Object.entries(selectedData).map(([key, value]) =>
//                     value ? (
//                       <span key={key} className="uppercase">
//                          {value}
//                       </span>
//                     ) : null
//                   )}
//                 </div>
//               </div>
//             )}

//             {!showSelection ? (
//               // ✅ Initial UI (Like Reference Image)
//               <>
//                 <h2 className="text-2xl font-bold text-gray-800 text-center">Enter your car number</h2>
//                 <div className="flex items-center border rounded-lg overflow-hidden mt-6">
//                   <span className="bg-gray-200 px-4 py-3 text-gray-600">IND</span>
//                   <input
//                     type="text"
//                     placeholder="DL 01 AB 12XX"
//                     className="flex-1 p-3 text-lg border-none focus:ring-0 focus:outline-none"
//                   />
//                 </div>
//                 <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg">
//                   Get Car Price
//                 </button>

//                 <div className="text-center my-4 text-gray-500 text-sm">Or</div>

//                 <h3 className="text-gray-700 text-center font-semibold">Start with your car brand</h3>
//                 <div className="grid grid-cols-3   gap-4 mt-4">
//                   {carBrands.slice(0, 6).map((brand, index) => (
//                     <div
//                       key={index}
//                       className={`flex flex-col items-center p-2 border rounded-lg cursor-pointer  hover:bg-gray-100 transition ${selectedData.brand === brand.name ? "border-blue-500 shadow-md" : "border-gray-300"
//                         }`}
//                       onClick={() => {
//                         setSelectedData({ ...selectedData, brand: brand.name });
//                         setShowSelection(true);
//                         setStep(2);
//                       }}
//                     >
//                       <img src={brand.logo} alt={brand.name} className="w-12 h-12 object-contain" />
//                       <span className="text-sm mt-2">{brand.name}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="text-center mt-4">
//                   <button
//                     onClick={() => {
//                       setShowSelection(true);
//                       setStep(1);
//                     }}
//                     className="text-orange-600 font-semibold hover:underline"
//                   >
//                     View All →
//                   </button>
//                 </div>
//               </>
//             ) : (
//               // ✅ Step-by-step Selection UI
//               <>

//                 <div className="overflow-x-auto scrollbar-hide whitespace-nowrap flex gap-2 mt-4 pb-2">
//                   {steps.map((s, index) => (
//                     <button
//                       key={index}
//                       className={`px-3 py-1 rounded-md text-sm font-semibold ${step === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
//                         }`}
//                       onClick={() => setStep(index + 1)}
//                     >
//                       {s.label}
//                     </button>
//                   ))}
//                 </div>

//                 <h2 className="text-2xl font-bold text-gray-800 text-center">
//                   {step === 4 ? (selectedData.fuel ? (selectedData.transmission ? "Variant" : "Transmission") : "Fuel Type") : steps[step - 1].label}
//                 </h2>

//                 <div className="flex items-center border rounded-lg px-3 py-2 mt-4 bg-gray-100">
//                   <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 mr-2" />
//                   <input
//                     type="text"
//                     placeholder={`Search ${steps[step - 1].label.toLowerCase()}...`}
//                     className="p-2 w-full outline-none bg-transparent"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 mt-4 max-h-[50vh] overflow-y-auto scrollbar-hide">
//                   {(step === 4 ? getVariantStepData() : steps[step - 1].data)
//                     .filter((item) =>
//                       typeof item === "string"
//                         ? item.toLowerCase().includes(search.toLowerCase())
//                         : item.name.toLowerCase().includes(search.toLowerCase())
//                     )
//                     .map((item, index) => (
//                       <div
//                         key={index}
//                         className={`p-3 border rounded-lg text-center cursor-pointer ${selectedData[steps[step - 1].key] === (item.name || item)
//                           ? "border-blue-500 shadow-md"
//                           : "border-gray-300 hover:border-blue-400"
//                           }`}
//                         onClick={() => handleSelection(step === 4 ? (selectedData.fuel ? (selectedData.transmission ? "variant" : "transmission") : "fuel") : steps[step - 1].key, item)}
//                       >
//                         {item.logo && <img src={item.logo} alt={item.name} className="w-12 h-12 object-contain mx-auto" />}
//                         <span className="text-sm">{item.name || item}</span>
//                       </div>
//                     ))}
//                 </div>
//                 {step === steps.length && (
//               <div className="text-center">
//                 <h2 className="text-2xl font-bold text-gray-800">Confirm Your Car Details</h2>
//                 <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-600">Get Final Car Price</button>
//               </div>
//             )}

//                 {/* {step === steps.length && (
//                   <button
//                     className="w-full mt-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700"
//                     onClick={() => alert(JSON.stringify(selectedData, null, 2))}
//                   >
//                     Confirm Selection
//                   </button>
//                 )} */}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Exchange;

import React, { useState } from "react";
import bg from "../../assets/images/Common/exchange.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faMagnifyingGlass, faPen, faPenAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../Components/Common/Navbar";
import benz from "../../assets/images/Common/benz.png";
import bmw from "../../assets/images/Common/bmw-logo.png";
import landrover from "../../assets/images/Common/land-rover-logo.png";
import mahindra from "../../assets/images/Common/mahindra.png";
import mg from "../../assets/images/Common/mg.png";

const carBrands = [
  { name: "Mahindra", logo: benz },
  { name: "Honda", logo: bmw },
  { name: "Ford", logo: landrover },
  { name: "Hyundai", logo: mahindra },
  { name: "Tata", logo: mg },
  { name: "Toyota", logo: mg },
  { name: "Ford", logo: landrover },
  { name: "Hyundai", logo: mahindra },
  { name: "Tata", logo: mg },
  { name: "Toyota", logo: mg },
];

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: currentYear - 1970 }, (_, i) =>
    (currentYear - i).toString()
  );
};


const manufacturingYears = generateYears();
const carModels = ["XUV700", "Scorpio-N", "Thar", "Bolero"];
const fuelTypes = ["Petrol", "Diesel", "Electric"];
const transmissionTypes = ["Manual", "Automatic"];
const carVariants = {
  Petrol: ["1.2L Base", "1.5L Turbo", "2.0L Premium"],
  Diesel: ["1.5L Diesel", "2.0L Diesel High"],
  Electric: ["EV Standard", "EV Long Range"],
};

const registrationStates = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
];
const rtoCodes = {
  Delhi: ["DL1", "DL2", "DL3"],
  Mumbai: ["MH1", "MH2", "MH3"],
  Bangalore: ["KA1", "KA2", "KA3"],
  Chennai: ["TN1", "TN2", "TN3"],
  Hyderabad: ["TS1", "TS2", "TS3"],
};

const kmDriven = ["0-10K KM", "10K-30K KM", "30K-50K KM", "50K+ KM"];
const carLocations = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"];

function Exchange() {
  const [showSelection, setShowSelection] = useState(false);
  const [step, setStep] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedData, setSelectedData] = useState({
    brand: null,
    year: null,
    model: null,
    variant: null,
    registrationState: null,
    km: null,
    location: null,
  });

  // const steps = [
  //   { label: "Brand", key: "brand", data: carBrands },
  //   { label: "Year", key: "year", data: manufacturingYears },
  //   { label: "Model", key: "model", data: carModels },
  //   { label: "Variant", key: "variant", data: carVariants },
  //   { label: "Registration", key: "registration", data: registrationTypes },
  //   { label: "KM", key: "km", data: kmDriven },
  //   { label: "Location", key: "location", data: carLocations },
  // ];

  // const steps = [
  //   { label: "Brand", key: "brand", data: carBrands },
  //   { label: "Year", key: "year", data: manufacturingYears },
  //   { label: "Model", key: "model", data: carModels },
  //   { label: "Fuel Type", key: "fuel", data: fuelTypes },
  //   ...(selectedData.fuel ? [{ label: "Transmission", key: "transmission", data: transmissionTypes }] : []),
  //   ...(selectedData.transmission
  //     ? [{ label: "Variant", key: "variant", data: carVariants[selectedData.fuel] || [] }]
  //     : []),
  //   { label: "Registration State", key: "registrationState", data: registrationStates },
  //   ...(selectedData.registrationState
  //     ? [{ label: "RTO Code", key: "rto", data: rtoCodes[selectedData.registrationState] || [] }]
  //     : []),
  //   { label: "KM", key: "km", data: kmDriven },
  //   { label: "Location", key: "location", data: carLocations },
  // ];

  const steps = [
    { label: "Brand", key: "brand", data: carBrands },
    { label: "Year", key: "year", data: manufacturingYears },
    { label: "Model", key: "model", data: carModels },
    { label: "Variant", key: "variant", data: [] }, // Variant Step now handles Fuel & Transmission
    {
      label: "Registration State",
      key: "registrationState",
      data: registrationStates,
    },
    { label: "KM", key: "km", data: kmDriven },
    { label: "Location", key: "location", data: carLocations },
  ];

  const getVariantStepData = () => {
    if (!selectedData.fuel) return fuelTypes; // Show Fuel Type first
    if (!selectedData.transmission) return transmissionTypes; // Then Transmission
    return carVariants[selectedData.fuel] || []; // Finally, Show Variants
  };

  const handleSelection = (key, value) => {
    setSelectedData((prev) => ({ ...prev, [key]: value }));

    // Ensure fuel → transmission → variant before moving to KM step
    if (key === "fuel") {
      setSelectedData((prev) => ({
        ...prev,
        fuel: value,
        transmission: null,
        variant: null,
      }));
    } else if (key === "transmission") {
      setSelectedData((prev) => ({
        ...prev,
        transmission: value,
        variant: null,
      }));
    } else if (key === "variant") {
      setStep(step + 1); // Move to KM step **ONLY** after selecting Variant
    } else {
      setStep(step + 1);
    }
  };

  

  return (
    <div>
      <Navbar />

      {/* Main UI */}
      <div
        className="flex flex-col md:flex-row items-center justify-center h-screen bg-cover bg-left"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 h-[70vh] flex flex-col justify-center items-start px-12 text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Sell your car in minutes
          </h1>
          <p className="mt-3 text-lg">
            Get doorstep pickup and instant payment
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-white shadow-lg rounded-2xl p-8  w-[90%] max-w-lg ">
            {/* Selected Items Display */}
            {showSelection && (
              <div>
                {step > 0 && step <= steps.length  &&(

                  <div className="bg-gray-100 p-2 px-4 rounded-lg mb-4 flex gap-4">
                  <div className="flex justify-between items-center">
                    {/* <h3 className="text-lg font-semibold">Selected Details</h3> */}
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-gray-600 cursor-pointer"
                      onClick={() => {
                        setShowSelection(false);
                        setSelectedData({
                          brand: null,
                          year: null,
                          model: null,
                          variant: null,
                        });
                        setStep(1);
                      }}
                    />
                  </div>
                  <div className="mt-2 text-sm">
                    {Object.entries(selectedData).map(([key, value]) =>
                      value ? (
                        <span key={key} className="uppercase">
                          {value}
                        </span>
                      ) : null
                    )}
                  </div>
                 
                </div>
                )}
                {step === steps.length + 1 && (
                  <div className="flex items-center gap-5 p-4 border-b">
                     <FontAwesomeIcon
                      icon={faTimes}
                      className="text-gray-600 cursor-pointer text-lg"
                      onClick={() => {
                        setShowSelection(false);
                        setSelectedData({
                          brand: null,
                          year: null,
                          model: null,
                          variant: null,
                        });
                        setStep(1);
                      }}
                    />

                    <img
                      src={carBrands.find((b) => b.name === selectedData.brand)?.logo}
                      alt={selectedData.brand}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="text-left">
                      <h3 className="text-lg font-bold">{selectedData.brand}, {selectedData.model}</h3>
                      <p className="text-gray-600">{selectedData.year} | {selectedData.fuel} | {selectedData.variant}</p>
                    </div>
                    <button
                      className="sm:ml-20 text-lg text-gray-800 hover:text-blue-500 cursor-pointer"
                      onClick={() => setStep(1)}
                    >
                      {/* Edit */}
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    
                  </div>
                )}


              </div>


            )}
            {step === 1 && (
              // ✅ Initial UI (Like Reference Image)
              <>
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                  Enter your car number
                </h2>
                <div className="flex items-center border rounded-lg overflow-hidden mt-6">
                  <span className="bg-gray-200 px-4 py-3 text-gray-600">
                    IND
                  </span>
                  <input
                    type="text"
                    placeholder="DL 01 AB 12XX"
                    className="flex-1 p-3 text-lg border-none focus:ring-0 focus:outline-none"
                  />
                </div>
                <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg">
                  Get Car Price
                </button>

                <div className="text-center my-4 text-gray-500 text-sm">Or</div>

                <h3 className="text-gray-700 text-center font-semibold">
                  Start with your car brand
                </h3>
                <div className="grid grid-cols-3   gap-4 mt-4">
                  {carBrands.slice(0, 6).map((brand, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center p-2 border rounded-lg cursor-pointer  hover:bg-gray-100 transition ${selectedData.brand === brand.name
                        ? "border-blue-500 shadow-md"
                        : "border-gray-300"
                        }`}
                      onClick={() => {
                        setSelectedData({ ...selectedData, brand: brand.name });
                        setShowSelection(true);
                        setStep(2);
                      }}
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-12 h-12 object-contain"
                      />
                      <span className="text-sm mt-2">{brand.name}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-4">
                  <button
                    onClick={() => {
                      setShowSelection(true);
                      setStep(1);
                    }}
                    className="text-orange-600 font-semibold hover:underline"
                  >
                    View All →
                  </button>
                  
                </div>
              </>
            )}{" "}
            {step > 1 && step <= steps.length && (
              // ✅ Step-by-step Selection UI
              <>
                <div className="overflow-x-auto scrollbar-hide whitespace-nowrap flex gap-2 mt-4 pb-2">
                  {steps.map((s, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1 rounded-md text-sm font-semibold ${step === index + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                        }`}
                      onClick={() => setStep(index + 1)}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-800 text-center">
                  {step === 4
                    ? selectedData.fuel
                      ? selectedData.transmission
                        ? "Variant"
                        : "Transmission"
                      : "Fuel Type"
                    : steps[step - 1].label}
                </h2>

                <div className="flex items-center border rounded-lg px-3 py-2 mt-4 bg-gray-100">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-gray-500 mr-2"
                  />
                  <input
                    type="text"
                    placeholder={`Search ${steps[
                      step - 1
                    ].label.toLowerCase()}...`}
                    className="p-2 w-full outline-none bg-transparent"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 max-h-[50vh] overflow-y-auto scrollbar-hide">
                  {(step === 4 ? getVariantStepData() : steps[step - 1].data)
                    .filter((item) =>
                      typeof item === "string"
                        ? item.toLowerCase().includes(search.toLowerCase())
                        : item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item, index) => (
                      <div
                        key={index}
                        className={`p-3 border rounded-lg text-center cursor-pointer ${selectedData[steps[step - 1].key] ===
                          (item.name || item)
                          ? "border-blue-500 shadow-md"
                          : "border-gray-300 hover:border-blue-400"
                          }`}
                        onClick={() =>
                          handleSelection(
                            step === 4
                              ? selectedData.fuel
                                ? selectedData.transmission
                                  ? "variant"
                                  : "transmission"
                                : "fuel"
                              : steps[step - 1].key,
                            item
                          )
                        }
                      >
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="w-12 h-12 object-contain mx-auto"
                          />
                        )}
                        <span className="text-sm">{item.name || item}</span>
                      </div>
                    ))}
                </div>

              </>
            )}

            {step === steps.length + 1 && (
              <div className="text-center bg-amber-10 leading-8">
                <div className="mt-4 text-left">
                  <label className="text-gray-700 font-semibold text-xl ">Enter your phone number</label>
                  <p className="opacity-50 text-sm font-medium">We will save the offer for you</p>
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    className="w-full p-3 border border-gray-400 rounded-lg mt-2 outline-none "
                  />
                </div>

                {/* WhatsApp Updates Checkbox */}
                <div className="flex items-center mt-3 leading-12">
                  <input type="checkbox" id="whatsapp" className="mr-2" />
                  <label htmlFor="whatsapp" className="text-gray-600">Get instant updates from us on <span className="font-semibold">WhatsApp</span></label>
                </div>

                {/* Get Car Price Button */}
                <button className= "my-5 w-full bg-blue-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-600">
                  Get Final Car Price
                </button>

                {/* Privacy Policy */}
                <p className="text-xs text-gray-500 mt-3">
                  By continuing, you agree to our <span className="text-blue-500 cursor-pointer">Privacy Policy</span> and <span className="text-blue-500 cursor-pointer">Terms of Use</span>.
                </p>
              </div>
            )}



            {/* {step === steps.length && (
                  <button
                  className="w-full mt-6 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700"
                  onClick={() => alert(JSON.stringify(selectedData, null, 2))}
                  >
                  Confirm Selection
                  </button>
                  )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
