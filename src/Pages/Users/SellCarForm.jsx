// import React from 'react'
// import bg from '../../assets/images/Common/sellcar.jpg'
// import Navbar from '../../Components/Common/Navbar'

// function SellCarForm() {
//   return (
//     <div>
//       <Navbar/>
//          <div
//                 className='w-full h-[60vh] text-white relative flex items-center justify-center'
//                 style={{
//                   background: `url(${bg})`,
//                   backgroundSize: 'cover',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundPosition: 'center'
//                 }}
//               >
//                 {/* Text Content */}
//                 <div className='absolute z-10 text-white text-center px-4'>
//                   <h1 className='font-bold text-5xl capitalize'>Sell Car Online in Bangalore for Free</h1>
//                   <p className='text-white text-lg mt-2'>Discover thousands of quality second-hand cars available for sale</p>
//                 </div>
        
//                 {/* Blur Overlay */}
//                 <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px] "></div>
//               </div>
//     </div>
//   )
// }

// export default SellCarForm






// import React, { useState } from "react";
// import bg from "../../assets/images/Common/sellcar.jpg";
// import Navbar from "../../Components/Common/Navbar";

// function SellCarForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     carModel: "",
//     carYear: "",
//     carPrice: "",
//     location: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//     alert("Car details submitted successfully!");
//   };

//   return (
//     <div>
//       <Navbar />

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
//           <h1 className="font-bold text-5xl capitalize">
//             Sell Your Car Online for Free
//           </h1>
//           <p className="text-white text-lg mt-2">
//             Get the best price for your car in just a few steps.
//           </p>
//         </div>

//         {/* Blur Overlay */}
//         <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]"></div>
//       </div>

//       {/* Sell Car Form */}
//       <div className="max-w-3xl mx-auto bg-white p-8 mt-10 shadow-md rounded-lg">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//           Enter Car Details
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-gray-600 font-medium">Your Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Enter your name"
//               className="w-full border border-gray-300 p-2 rounded-md focus:outline-blue-500"
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="block text-gray-600 font-medium">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               placeholder="Enter your phone number"
//               className="w-full border border-gray-300 p-2 rounded-md focus:outline-blue-500"
//             />
//           </div>

//           {/* Car Model */}
//           <div>
//             <label className="block text-gray-600 font-medium">Car Model</label>
//             <input
//               type="text"
//               name="carModel"
//               value={formData.carModel}
//               onChange={handleChange}
//               required
//               placeholder="Enter car model (e.g., Honda City, Maruti Swift)"
//               className="w-full border border-gray-300 p-2 rounded-md focus:outline-blue-500"
//             />
//           </div>

//           {/* Manufacturing Year */}
//           <div>
//             <label className="block text-gray-600 font-medium">Year of Manufacture</label>
//             <input
//               type="number"
//               name="carYear"
//               value={formData.carYear}
//               onChange={handleChange}
//               required
//               placeholder="Enter manufacturing year"
//               className="w-full border border-gray-300 p-2 rounded-md focus:outline-blue-500"
//             />
//           </div>

//           {/* Expected Price */}
//           <div>
//             <label className="block text-gray-600 font-medium">Expected Price (₹)</label>
//             <input
//               type="number"
//               name="carPrice"
//               value={formData.carPrice}
//               onChange={handleChange}
//               required
//               placeholder="Enter expected price"
//               className="w-full border border-gray-300 p-2 rounded-md focus:outline-blue-500"
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-gray-600 font-medium">Location</label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//               placeholder="Enter city or location"
//               className="w-full border border-gray-300 p-2 rounded-md focus:outline-blue-500"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-md font-bold hover:bg-blue-700 transition-all"
//           >
//             Submit Details
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SellCarForm;



// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt, faCar, faFileAlt, faCamera, faAngleUp, faAngleDoubleDown, faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import bg from "../../assets/images/Common/sellcar.jpg";
// import Navbar from "../../Components/Common/Navbar";

// const SellCarForm = () => {
//   const [activeSection, setActiveSection] = useState("location");
//   const [formData, setFormData] = useState({
//     city: "",
//     pincode: "",
//     makeYear: "",
//     makeMonth: "",
//     make: "",
//     model: "",
//     fuelType: "",
//     version: "",
//     color: "",
//     ownerType: "",
//     kmDriven: "",
//     expectedPrice: "",
//     images: [],
//   });

//   const toggleSection = (section) => {
//     setActiveSection(activeSection === section ? "" : section);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setFormData({ ...formData, images: files });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Car details submitted successfully!");
//   };

//   return (
//     <div>
//       <Navbar />

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
//         <div className="absolute z-10 text-white text-center px-4">
//           <h1 className="font-bold text-5xl uppercase">Sell Your Car Online for Free</h1>
//           <p className="text-white text-lg mt-2">
//             Sell your car from your doorstep at the best price.
//           </p>
//         </div>
//         <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]"></div>
//       </div>

//       {/* Sell Car Form */}
//       <div className="max-w-3xl mx-auto bg-white p-6 mt-[-50px] shadow-lg rounded-lg relative z-10">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Sell Your Car</h2>

//         {/* Location Section */}
//         <div className="border-b pb-3">
//           <div
//             className="flex items-center justify-between cursor-pointer"
//             onClick={() => toggleSection("location")}
//           >
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faMapMarkerAlt}  />
//               <h3 className="text-lg font-semibold">Location and Contact Details</h3>
//             </div>
//              <FontAwesomeIcon icon={ activeSection === "location" ? faAngleUp:faAngleDown}/>
//           </div>

//           {activeSection === "location" && (
//             <div className="mt-4">
//               <label className="block text-gray-600 font-medium">City</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="Enter city"
//                 className="w-full border border-gray-300 p-2 rounded-md outline-none mt-2"
//                 required
//               />

//               {/* Show Pincode Field Only If City is Entered */}
//               {formData.city && (
//                 <div className="mt-3">
//                   <label className="block text-gray-600 font-medium">Pincode</label>
//                   <input
//                     type="text"
//                     name="pincode"
//                     value={formData.pincode}
//                     onChange={handleChange}
//                     placeholder="Enter pincode"
//                     className="w-full border border-gray-300 p-2 rounded-md focus:outline-blue-500 mt-2"
//                   />
//                 </div>
//               )}

//               <button
//                 className="mt-4 w-full bg-red-500 text-white p-2 rounded-md font-bold hover:bg-red-600"
//                 onClick={() => toggleSection("carDetails")}
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Car Details Section */}
//         <div className="border-b py-3">
//           <div
//             className="flex items-center justify-between cursor-pointer"
//             onClick={() => toggleSection("carDetails")}
//           >
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCar} className="text-blue-500" />
//               <h3 className="text-lg font-semibold">Car Details</h3>
//             </div>
//             <FontAwesomeIcon icon={activeSection === "carDetails" ? faAngleUp:faAngleDown} />
//           </div>

//           {activeSection === "carDetails" && (
//             <div className="mt-4 grid grid-cols-2 gap-4">
//               <input type="number" name="makeYear" placeholder="Make Year" onChange={handleChange} className="border p-2 rounded" />
//               <input type="text" name="makeMonth" placeholder="Make Month" onChange={handleChange} className="border p-2 rounded" />
//               <input type="text" name="make" placeholder="Make" onChange={handleChange} className="border p-2 rounded" />
//               <input type="text" name="model" placeholder="Model" onChange={handleChange} className="border p-2 rounded" />
//               <input type="text" name="fuelType" placeholder="Fuel Type" onChange={handleChange} className="border p-2 rounded" />
//               <input type="text" name="version" placeholder="Version" onChange={handleChange} className="border p-2 rounded" />
//               <input type="text" name="color" placeholder="Color" onChange={handleChange} className="border p-2 rounded" />
//               <input type="text" name="ownerType" placeholder="Owner Type" onChange={handleChange} className="border p-2 rounded" />
//               <input type="number" name="kmDriven" placeholder="KM Driven" onChange={handleChange} className="border p-2 rounded" />
//               <input type="number" name="expectedPrice" placeholder="Expected Selling Price" onChange={handleChange} className="border p-2 rounded" />

//               {/* Image Upload */}
//               <div className="col-span-2 mt-4">
//                 <label className="block text-gray-600 font-medium">Upload Car Images</label>
//                 <input type="file" multiple onChange={handleImageUpload} className="border p-2 rounded w-full" />
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Post Your Ad Button */}
//         <button
//           className="mt-6 w-full bg-green-600 text-white p-2 rounded-md font-bold hover:bg-green-700"
//           onClick={handleSubmit}
//         >
//           Post Your Ad
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SellCarForm;





import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCar, faFileAlt, faCamera, faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import bg from "../../assets/images/Common/sellcar.jpg";
import Navbar from "../../Components/Common/Navbar";
import Footer from "../../Components/Common/Footer";

const SellCarForm = () => {
  const [activeSection, setActiveSection] = useState("location");
  const [formData, setFormData] = useState({
    city: "",
    pincode: "",
    makeYear: "",
    makeMonth: "",
    make: "",
    model: "",
    fuelType: "",
    version: "",
    color: "",
    ownerType: "",
    kmDriven: "",
    expectedPrice: "",
    registrationType: "",
    images: [],
  });

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Car details submitted successfully!");
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="w-full h-[60vh] text-white relative flex items-center justify-center"
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute z-10 text-white text-center px-4 ">
          <h1 className="font-bold text-5xl uppercase">Sell Your Car Online for Free</h1>
          <p className="text-white text-lg mt-2">
            Sell your car from your doorstep at the best price.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]"></div>
      </div>

      {/* Sell Car Form */}
      <div className="max-w-3xl mx-auto bg-white p-6 mt-[-50px] shadow-lg rounded-lg relative z-10 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sell Your Car</h2>

        {/* Location Section */}
        <div className="border-b pb-3">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("location")}>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="" />
              <h3 className="text-lg font-semibold">Location and Contact Details</h3>
            </div>
            
            <FontAwesomeIcon icon={activeSection === "location" ? faAngleUp:faAngleDown}/>
          </div>

          {activeSection === "location" && (
            <div className="mt-4">
              <label className="block text-gray-600 font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-blue-500 mt-2"
                required
              />

              {/* Show Pincode Field Only If City is Entered */}
              {formData.city && (
                <div className="mt-3">
                  <label className="block text-gray-600 font-medium">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-blue-500 mt-2"
                  />
                </div>
              )}

              <button className="mt-4 w-full bg-red-500 text-white p-2 rounded-md font-bold hover:bg-red-600" onClick={() => toggleSection("carDetails")}>
                Next
              </button>
            </div>
          )}
        </div>

        {/* Car Details Section */}
        <div className="border-b py-3">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("carDetails")}>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCar} className="text-blue-500" />
              <h3 className="text-lg font-semibold">Car Details</h3>
            </div>
            <FontAwesomeIcon icon={activeSection === "carDetails" ? faAngleUp:faAngleDown}/>
          </div>

          {activeSection === "carDetails" && (
            <div className="mt-4 grid grid-cols-2 gap-4">
              <input type="number" name="makeYear" placeholder="Make Year" onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="makeMonth" placeholder="Make Month" onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="make" placeholder="Make" onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="model" placeholder="Model" onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="fuelType" placeholder="Fuel Type" onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="version" placeholder="Version" onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="color" placeholder="Color" onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="ownerType" placeholder="Owner Type" onChange={handleChange} className="border p-2 rounded" />
              <input type="number" name="kmDriven" placeholder="KM Driven" onChange={handleChange} className="border p-2 rounded" />
              <input type="number" name="expectedPrice" placeholder="Expected Selling Price" onChange={handleChange} className="border p-2 rounded" />

              {/* Image Upload */}
              <div className="col-span-2 mt-4">
                <label className="block text-gray-600 font-medium">Upload Car Images</label>
                <input type="file" multiple onChange={handleImageUpload} className="border p-2 rounded w-full" />
              </div>
            </div>
          )}
        </div>

        {/* Registration Type Section */}
        <div className="border-b py-3">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("registrationType")}>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faFileAlt} className="text-green-500" />
              <h3 className="text-lg font-semibold">Registration Type</h3>
            </div>
            <FontAwesomeIcon icon={activeSection === "registrationType" ? faAngleUp:faAngleDown}/>
          </div>

          {activeSection === "registrationType" && (
            <select name="registrationType" onChange={handleChange} className="w-full border p-2 rounded mt-3">
              <option value="">Choose Registration Type</option>
              <option value="private">Private</option>
              <option value="commercial">Commercial</option>
            </select>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SellCarForm;
