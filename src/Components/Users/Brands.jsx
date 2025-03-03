// import React, { useEffect, useState } from "react";
// import benz from "../../assets/images/Common/benz.png";
// import bmw from "../../assets/images/Common/bmw-logo.png";
// import landrover from "../../assets/images/Common/land-rover-logo.png";
// import mahindra from "../../assets/images/Common/mahindra.png";
// import mg from "../../assets/images/Common/mg.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// function Brands() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [show, setShow] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     setShow(true);
//   }, []);

//   const brands = [
//     { img: benz, name: "Mercedes-Benz" },
//     { img: bmw, name: "BMW" },
//     { img: landrover, name: "Land Rover" },
//     { img: mahindra, name: "Mahindra" },
//     { img: mg, name: "MG" },
//     { img: mg, name: "MGdfd" },
//     { img: landrover, name: "Land Rover X" },
//     { img: mahindra, name: "Mahindra Y" },
//     { img: mg, name: "MG Z" },
//     { img: mg, name: "MG AAA" },
//   ];

//   const visibleBrands = [
//     ...brands,
//     ...brands.slice(0, 5), // Duplicate the first 5 brands for seamless looping
//   ].slice(startIndex, startIndex + 5);

//   const centerIndex = Math.floor(visibleBrands.length / 2);

//   // Function to handle the next slide (Loop Back Smoothly)
//   const handleNext = () => {
//     setStartIndex((prevIndex) => (prevIndex + 1) % brands.length);
//   };

//   // Function to handle the previous slide (Loop Back Smoothly)
//   const handlePrev = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
//   };

//   // Auto-slide effect (Loops continuously)
//   useEffect(() => {
//     if (!isPaused) {
//       const interval = setInterval(handleNext, 3000); // Auto-slide every 3 seconds
//       return () => clearInterval(interval);
//     }
//   }, [isPaused, startIndex]);

//   return (
//     <div className="px-72" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
//       <h1 className="font-bold text-2xl py-12">Search Cars By Brand</h1>
//       <div className="w-full flex justify-between gap-4 relative overflow-hidden">
//         {visibleBrands.map((brand, i) => (
//           <div
//             key={i}
//             className={`w-1/5 text-center transition-transform duration-700 ease-out ${
//               i === 2 ? "scale-150 drop-shadow-xl" : "scale-100"
//             } ${show ? "transition-transform duration-700 ease-out" : ""}`}
//           >
//             <img
//               src={brand.img}
//               alt={brand.name}
//               className={`w-2/3 m-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out ${
//                 i === 2 ? "pt-5" : ""
//               }`}
//             />
//             <h1 className="text-center text-lg font-semibold">{brand.name}</h1>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-center mt-4 relative">
//         <button
//           onClick={handlePrev}
//           className="bg-gray-200 w-10 h-10 mx-2 rounded-full flex items-center justify-center shadow-md transition-opacity duration-300"
//         >
//           <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
//         </button>

//         <button
//           onClick={handleNext}
//           className="bg-gray-200 w-10 h-10 mx-2 rounded-full flex items-center justify-center shadow-md transition-opacity duration-300"
//         >
//           <FontAwesomeIcon icon={faAngleRight} className="text-2xl" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Brands;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import benz from "../../assets/images/Common/benz.png";
// import bmw from "../../assets/images/Common/bmw-logo.png";
// import landrover from "../../assets/images/Common/land-rover-logo.png";
// import mahindra from "../../assets/images/Common/mahindra.png";
// import mg from "../../assets/images/Common/mg.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// function Brands(props) {
//   const brands = [
//     { img: benz, name: "Mercedes-Benz" },
//     { img: bmw, name: "BMW" },
//     { img: landrover, name: "Land Rover" },
//     { img: mahindra, name: "Mahindra" },
//     { img: mg, name: "MG" },
//     { img: mg, name: "MGdfd" },
//     { img: landrover, name: "Land Rover X" },
//     { img: mahindra, name: "Mahindra Y" },
//     { img: mg, name: "MG Z" },
//     { img: mg, name: "MG AAA" },
//   ];

//   return (
//     <div className="px-56 pb-56">
//       <h1 className="font-bold text-2xl py-12 ">{props.heading} </h1>
//       {props.showhr && (
//         <div>

//         <ul className="flex gap-8">
//           <li>Brand</li>
//           <li>transmission</li>
//           <li>Body Type</li>
//         </ul>
//           <hr className='py-1'/>
//         </div>
//       )}
      
//       <Swiper
//         slidesPerView={5}  // Show 5 brands at a time
//         spaceBetween={20}  // Space between slides
//         centeredSlides={true} // Centers active slide
//         loop={true} // Infinite loop
//         autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
//         navigation={{ nextEl: ".next", prevEl: ".prev" }} // Custom navigation
//         modules={[Navigation, Autoplay]}
//         className="relative"
//       >
//         {brands.map((brand, index) => (
//           <SwiperSlide key={index}>
//             {({ isActive }) => (  // Check if the slide is active
//               <div className={`text-center transition-all duration-700  py-6 ${isActive ? "scale-150 drop-shadow-xl " : "scale-100"}`}>
//                 <img src={brand.img} alt={brand.name} className="w-2/3 mx-auto  hover:grayscale-0 transition-all duration-700" />
//               </div>
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <div className="flex justify-center gap-4 mt-6">
//         <button className="prev bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
//           <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
//         </button>
//         <button className="next bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
//           <FontAwesomeIcon icon={faAngleRight} className="text-2xl" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Brands;



// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import benz from "../../assets/images/Common/benz.png";
// import bmw from "../../assets/images/Common/bmw-logo.png";
// import landrover from "../../assets/images/Common/land-rover-logo.png";
// import mahindra from "../../assets/images/Common/mahindra.png";
// import mg from "../../assets/images/Common/mg.png";
// import autometic from "../../assets/images/Common/automatic.svg";
// import Manual from "../../assets/images/Common/manual.svg"
// import clutchless from "../../assets/images/Common/imt.svg"


// function Brands(props) {
//   const [selectedCategory, setSelectedCategory] = useState("brand");

//   const brands = [
//     { img: benz, name: "Mercedes-Benz" },
//     { img: bmw, name: "BMW" },
//     { img: landrover, name: "Land Rover" },
//     { img: mahindra, name: "Mahindra" },
//     { img: mg, name: "MG" },
//   ];

//   const transmissions = [
//     { img: autometic, name: "Automatic" },
//     { img: Manual, name: "Manual" },
//     { img: clutchless, name: "CVT" },
//   ];

//   const bodyTypes = [
//     { img: benz, name: "SUV" },
//     { img: bmw, name: "Sedan" },
//     { img: mg, name: "Hatchback" },
//   ];

//   const getData = () => {
//     switch (selectedCategory) {
//       case "transmission":
//         return transmissions;
//       case "bodyType":
//         return bodyTypes;
//       default:
//         return brands;
//     }
//   };

//   return (
//     <div className="px-56 pb-56">
//       <h1 className="font-bold text-2xl py-12">{props.heading}</h1>
//       {props.showhr && (
//         <div>
//           <ul className="flex gap-8">
//             <li
//               className={`cursor-pointer ${selectedCategory === "brand" ? "font-bold text-blue-500" : ""}`}
//               onClick={() => setSelectedCategory("brand")}
//             >
//               Brand
//             </li>
//             <li
//               className={`cursor-pointer ${selectedCategory === "transmission" ? "font-bold text-blue-500" : ""}`}
//               onClick={() => setSelectedCategory("transmission")}
//             >
//               Transmission
//             </li>
//             <li
//               className={`cursor-pointer ${selectedCategory === "bodyType" ? "font-bold text-blue-500" : ""}`}
//               onClick={() => setSelectedCategory("bodyType")}
//             >
//               Body Type
//             </li>
//           </ul>
//           <hr className="py-1" />
//         </div>
//       )}

//       <Swiper
//         slidesPerView={5}
//         spaceBetween={20}
//         centeredSlides={true}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         navigation={{ nextEl: ".next", prevEl: ".prev" }}
//         modules={[Navigation, Autoplay]}
//         className="relative"
//       >
//         {getData().map((item, index) => (
//           <SwiperSlide key={index}>
//             {({ isActive }) => (
//               <div
//                 className={`text-center transition-all duration-700 py-6 ${
//                   isActive ? "scale-150 drop-shadow-xl" : "scale-100"
//                 }`}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-2/3 mx-auto hover:grayscale-0 transition-all duration-700"
//                 />
//                 <p className="mt-2">{item.name}</p>
//               </div>
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <div className="flex justify-center gap-4 mt-6">
//         <button className="prev bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
//           <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
//         </button>
//         <button className="next bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
//           <FontAwesomeIcon icon={faAngleRight} className="text-2xl" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Brands;





import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Brand Images
import benz from "../../assets/images/Common/benz.png";
import bmw from "../../assets/images/Common/bmw-logo.png";
import landrover from "../../assets/images/Common/land-rover-logo.png";
import mahindra from "../../assets/images/Common/mahindra.png";
import mg from "../../assets/images/Common/mg.png";

// Transmission Images
import automatic from "../../assets/images/Common/automatic.svg";
import manual from "../../assets/images/Common/manual.svg";
import clutchless from "../../assets/images/Common/imt.svg";

// Body Type Images
import suv from "../../assets/images/Common/suv.svg";
import sedan from "../../assets/images/Common/sedan.svg";
import hatchback from "../../assets/images/Common/hatchback.svg";
import convertible from "../../assets/images/Common/convertible.svg";
import coupe from "../../assets/images/Common/sedan.svg";
import pickup from "../../assets/images/Common/suv.svg";


function Brands(props) {
  const [selectedCategory, setSelectedCategory] = useState("brand");

  const brands = [
    { img: benz, name: "Mercedes-Benz" },
    { img: bmw, name: "BMW" },
    { img: landrover, name: "Land Rover" },
    { img: mahindra, name: "Mahindra" },
    { img: mg, name: "MG" },
  ];

  const transmissions = [
    { img: automatic, name: "Automatic" },
    { img: manual, name: "Manual" },
    { img: clutchless, name: "Clutchless Manual" },
  ];

  const bodyTypes = [
    { img: suv, name: "SUV" },
    { img: sedan, name: "Sedan" },
    { img: hatchback, name: "Hatchback" },
    { img: convertible, name: "Convertible" },
    { img: coupe, name: "Coupe" },
    { img: pickup, name: "Pickup Truck" },
  ];

  const getData = () => {
    switch (selectedCategory) {
      case "transmission":
        return transmissions;
      case "bodyType":
        return bodyTypes;
      default:
        return brands;
    }
  };

  return (
    <div className="px-56 pb-20">
      <h1 className="font-bold text-2xl py-8">{props.heading}</h1>

      {/* Category Selection */}
      {props.showhr&&(

      <div className="flex gap-8 text-gray-600 text-lg border-b">
        <span
          className={`cursor-pointer pb-2 ${
            selectedCategory === "brand" ? "text-blue-500 border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setSelectedCategory("brand")}
        >
          BRANDS
        </span>
        <span
          className={`cursor-pointer pb-2 ${
            selectedCategory === "transmission" ? "text-blue-500 border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setSelectedCategory("transmission")}
        >
          TRANSMISSION
        </span>
        <span
          className={`cursor-pointer pb-2 ${
            selectedCategory === "bodyType" ? "text-blue-500 border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setSelectedCategory("bodyType")}
        >
          BODY TYPE
        </span>
      </div>
      )}

      {/* Data Display */}
      {selectedCategory === "transmission" || selectedCategory === "bodyType" ? (
        <div className="grid grid-cols-3 gap-6 mt-6 p-6 bg-gray-100 rounded-lg">
          {getData().map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-all"
            >
              <img src={item.img} alt={item.name} className="w-16 h-16" />
              <p className="mt-2 text-lg font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          modules={[Navigation, Autoplay]}
          className="relative mt-6 "
        >
          {getData().map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`text-center transition-all duration-700 py-6 ${
                    isActive ? "scale-125 drop-shadow-xl" : "scale-100"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-2/3 mx-auto hover:grayscale-0 transition-all duration-700"
                  />
                  <p className="mt-2">{item.name}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>


//     

      )}

      {/* Custom Navigation Buttons (Only for brands) */}
      {/* {selectedCategory === "brand" && (
        <div className="flex justify-center gap-4 mt-6">
          <button className="prev bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
            <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
          </button>
          <button className="next bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
            <FontAwesomeIcon icon={faAngleRight} className="text-2xl" />
          </button>
        </div>
      )} */}
    </div>
  );
}

export default Brands;


