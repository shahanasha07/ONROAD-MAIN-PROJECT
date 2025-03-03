// import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import bmw from "../../assets/images/Common/ix1-bmw.webp";
// import benz from "../../assets/images/Common/c-class-benz.webp";
// import fortuner from "../../assets/images/Common/fortuner-toyota.webp";
// import camry from "../../assets/images/Common/camry-toyota.webp";
// import defender from "../../assets/images/Common/land-rover-defender.webp";
// import rangeRover from "../../assets/images/Common/range-rover.webp";
// import mahindra from "../../assets/images/Common/mahindra.webp";


// function Featured() {
//   const carposter = [
//     { img: rangeRover, name: ' Land Rover Range Rover Velar', price: ' 1.12 Crore' },
//     { img: bmw, name: 'BMW iX1', price: '73.96 Lakh' },
//     { img: benz, name: 'Mercedes-Benz C-Class ', price: '75.60 Lakh' },
//     { img: fortuner, name: 'Toyota Fortuner Legender ', price: ' 56.49 Lakh' },
//     { img: camry, name: ' Toyota Camry', price: '61.42 Lakh' },
//     { img: defender, name: ' Land Rover Defender', price: '1.33 Crore' },
//     { img: mahindra, name: 'Mahindra ', price: '17.17 Lakh' }
//   ]

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalItems = carposter.length;
//   const itemsPerView = 3;
//   const maxIndex = totalItems - itemsPerView;

//   const slideRight = () => {
//     if (currentIndex < maxIndex) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const slideLeft = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="px-72 py-8">
//       <h1 className="font-bold text-2xl">Featured Cars</h1>
//       <ul className="flex gap-6 capitalize mt-4">
//         <li className="underline underline-offset-8 decoration-4 decoration-[#593636]">
//           trending cars
//         </li>
//         <li>popular cars</li>
//         <li>upcoming cars</li>
//       </ul>


//       <div className="relative w-full my-6 overflow-hidden z-10">
//         <button
//           onClick={slideLeft}
//           className={`bg-gray-100 w-10 h-10 absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full flex items-center justify-center shadow-md z-10 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
//             }`}
//           disabled={currentIndex === 0}
//         >
//           <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
//         </button>

//         <div className="overflow-hidden w-full">
//           <div
//             className="flex gap-4 transition-transform duration-500"
//             style={{ transform: `translateX(-${currentIndex * 320}px)` }}
//           >
//             {carposter.map((car, index) => (
//               <div key={index} className="bg-[#D9D9D9] dark:bg-[#8E1616]  w-[300px] flex-shrink-0 h-[45vh] rounded-lg">
//                 <div className="w-full h-3/5 rounded-t-lg bg-white flex items-center justify-center">
//                   <img src={car.img} alt="Car" className="w-4/5" />
//                 </div>
//                 <div className="px-6 py-4 leading-[1.8rem]">
//                   <p>{car.name} </p>
//                   <p className="font-bold">{car.price} </p>
//                   <button className="px-12 py-1 rounded-sm font-medium text-[#593636] border">
//                     <Link to={'/car-details'}>Get Quote</Link>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>

//         <button
//           onClick={slideRight}
//           className={`bg-gray-100 w-10 h-10 absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full flex items-center justify-center shadow-md ${currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           disabled={currentIndex >= maxIndex}
//         >
//           <FontAwesomeIcon icon={faAngleRight} className="text-2xl" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Featured;



// import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import bmw from "../../assets/images/Common/ix1-bmw.webp";
// import benz from "../../assets/images/Common/c-class-benz.webp";
// import fortuner from "../../assets/images/Common/fortuner-toyota.webp";
// import camry from "../../assets/images/Common/camry-toyota.webp";
// import defender from "../../assets/images/Common/land-rover-defender.webp";
// import rangeRover from "../../assets/images/Common/range-rover.webp";
// import mahindra from "../../assets/images/Common/mahindra.webp";

// function Featured(props) {
//   const [selectedCategory, setSelectedCategory] = useState("trending");
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const categories = {
//     trending: [
//       { img: rangeRover, name: "Land Rover Range Rover Velar", price: "1.12 Crore" },
//       { img: bmw, name: "BMW iX1", price: "73.96 Lakh" },
//       { img: benz, name: "Mercedes-Benz C-Class", price: "75.60 Lakh" },
//       { img: fortuner, name: "Toyota Fortuner Legender", price: "56.49 Lakh" },
//       { img: camry, name: "Toyota Camry", price: "61.42 Lakh" },
//       { img: defender, name: "Land Rover Defender", price: "1.33 Crore" },
//       { img: mahindra, name: "Mahindra XUV700", price: "17.17 Lakh" },
//     ],
//     popular: [
//       { img: fortuner, name: "Toyota Fortuner Legender", price: "56.49 Lakh" },
//       { img: camry, name: "Toyota Camry", price: "61.42 Lakh" },
//       { img: bmw, name: "BMW iX1", price: "73.96 Lakh" },
//       { img: benz, name: "Mercedes-Benz C-Class", price: "75.60 Lakh" },
//       { img: fortuner, name: "Toyota Fortuner Legender", price: "56.49 Lakh" },
//     ],
//     upcoming: [
//       { img: defender, name: "Land Rover Defender", price: "1.33 Crore" },
//       { img: camry, name: "Toyota Camry", price: "61.42 Lakh" },
//       { img: rangeRover, name: "Land Rover Range Rover Velar", price: "1.12 Crore" },
//       { img: bmw, name: "BMW iX1", price: "73.96 Lakh" },
//     ],
//   };

//   const carList = categories[selectedCategory] || [];
//   const totalItems = carList.length;
//   const itemsPerView = 3;
//   const maxIndex = totalItems - itemsPerView;

//   const slideRight = () => {
//     if (currentIndex < maxIndex) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const slideLeft = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="px-72 py-8">
//       <h1 className="font-bold text-2xl">{props.heading} </h1>
//       <ul className="flex gap-6 capitalize mt-4">

//         {["trending", "popular", "upcoming"].map((category) => (
//           <li
//             key={category}
//             onClick={() => {
//               setSelectedCategory(category);
//               setCurrentIndex(0); // Reset slider when category changes
//             }}
//             className={`cursor-pointer ${
//               selectedCategory === category
//                 ? "underline underline-offset-8 decoration-4 decoration-[#593636]"
//                 : ""
//             }`}
//           >
//             {category} cars
//           </li>
//         ))}
//       </ul>

//       <div className="relative w-full my-6 overflow-hidden z-10">
//         {/* Left Button */}
//         <button
//           onClick={slideLeft}
//           className={`bg-gray-100 w-10 h-10 absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full flex items-center justify-center shadow-md z-10 ${
//             currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
//           }`}
//           disabled={currentIndex === 0}
//         >
//           <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
//         </button>

//         {/* Car Slider */}
//         <div className="overflow-hidden w-full">
//           <div
//             className="flex gap-4 transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * 320}px)` }}
//           >
//             {carList.map((car, index) => (
//               <div
//                 key={index}
//                 className="bg-[#D9D9D9] dark:bg-[#8E1616] w-[300px] flex-shrink-0 h-[45vh] rounded-lg transition-opacity duration-500"
//               >
//                 <div className="w-full h-3/5 rounded-t-lg bg-white flex items-center justify-center">
//                   <img src={car.img} alt={car.name} className="w-4/5" />
//                 </div>
//                 <div className="px-6 py-4 leading-[1.8rem]">
//                   <p>{car.name}</p>
//                   <p className="font-bold">{car.price}</p>
//                   <button className="px-12 py-1 rounded-sm font-medium text-[#593636] border">
//                     <Link to={`/car-details`} state={{ car }}>
//                       Get Quote
//                     </Link>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Button */}
//         <button
//           onClick={slideRight}
//           className={`bg-gray-100 w-10 h-10 absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full flex items-center justify-center shadow-md ${
//             currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={currentIndex >= maxIndex}
//         >
//           <FontAwesomeIcon icon={faAngleRight} className="text-2xl" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Featured;











import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import car images
import bmw from "../../assets/images/Common/ix1-bmw.webp";
import benz from "../../assets/images/Common/c-class-benz.webp";
import fortuner from "../../assets/images/Common/fortuner-toyota.webp";
import camry from "../../assets/images/Common/camry-toyota.webp";
import defender from "../../assets/images/Common/land-rover-defender.webp";
import rangeRover from "../../assets/images/Common/range-rover.webp";
import mahindra from "../../assets/images/Common/mahindra.webp";

function Featured({ showCategory }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isUsedCarPage = location.pathname === "/used-cars";

  const [selectedCategory , setSelectedCategory] =useState('trending')

  const handleNavigateToUsedCars = () => {
        navigate(`/used?category=all`);
      };
    

const navigate = useNavigate();

// const handleNavigateToUsedCars = (category) => {
//   navigate(`/used-cars?category=${category}`);
// };

  // Define car categories for the homepage
  const categories = {
    trending: [
      { img: rangeRover, name: "Land Rover Range Rover Velar", price: "1.12 Crore" },
      { img: bmw, name: "BMW iX1", price: "73.96 Lakh" },
      { img: benz, name: "Mercedes-Benz C-Class", price: "75.60 Lakh" },
      { img: fortuner, name: "Toyota Fortuner Legender", price: "56.49 Lakh" },
      { img: camry, name: "Toyota Camry", price: "61.42 Lakh" },
      { img: defender, name: "Land Rover Defender", price: "1.33 Crore" },
      { img: mahindra, name: "Mahindra XUV700", price: "17.17 Lakh" },
    ],
    popular: [
      { img: fortuner, name: "Toyota Fortuner Legender", price: "56.49 Lakh" },
      { img: camry, name: "Toyota Camry", price: "61.42 Lakh" },
      { img: bmw, name: "BMW iX1", price: "73.96 Lakh" },
      { img: benz, name: "Mercedes-Benz C-Class", price: "75.60 Lakh" },
    ],
    upcoming: [
      { img: defender, name: "Land Rover Defender", price: "1.33 Crore" },
      { img: camry, name: "Toyota Camry", price: "61.42 Lakh" },
      { img: rangeRover, name: "Land Rover Range Rover Velar", price: "1.12 Crore" },
      { img: bmw, name: "BMW iX1", price: "73.96 Lakh" },
    ],
  };

  // Define a separate array for popular used cars (Used Cars page only)
  const popularUsedCars = [
    { img: fortuner, name: "Used Toyota Fortuner", price: "30.49 Lakh" },
    { img: camry, name: "Used Toyota Camry", price: "35.42 Lakh" },
    { img: bmw, name: "Used BMW iX1", price: "48.96 Lakh" },
    { img: benz, name: "Used Mercedes-Benz C-Class", price: "50.60 Lakh" },
  ];

  return (
    <div className="px-56 py-8">
      <h1 className="font-bold text-2xl">
        {isUsedCarPage ? "Popular Used Cars" : "Featured Cars"}
      </h1>

      {/* Show category selection only on the homepage */}
      {showCategory && isHomePage && (
        <ul className="flex gap-6 capitalize mt-4 pb-6">
          {["trending", "popular", "upcoming"].map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer ${
                selectedCategory === category
                  ? "underline underline-offset-8 decoration-4 decoration-[#593636]"
                  : ""
              }`}
            >
              {category} cars
            </li>
          ))}
        </ul>
      )}

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3} // Show 3 slides at a time
        navigation={true} // Enable navigation
        modules={[Navigation]}
        className="mb-6 "
      >
        {(isUsedCarPage ? popularUsedCars : categories[selectedCategory]).map((car, index) => (
          <SwiperSlide key={index} className="bg-[#D9D9D9] dark:bg-[#8E1616] w-1/3 h-[45vh] rounded-lg">
            <Link to={`/car-details`} state={{ car }}> 
            <div className="w-full h-3/5 rounded-t-lg bg-white flex items-center justify-center">
              <img src={car.img} alt={car.name} className="w-4/5" />
            </div>
            <div className="px-6 py-4 leading-[1.8rem]">
              <p>{car.name}</p>
              <p className="font-bold">{car.price}</p>
              {isHomePage && (
                <button className="px-12 py-1 rounded-sm font-medium text-[#593636] border">
                  <Link to={`/car-details`} state={{ car }}>
                    Get Quote
                  </Link>
                </button>
              )}

            </div>
            
            </Link>
            
          </SwiperSlide>
          
        ))}
        {isUsedCarPage && (

            <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleNavigateToUsedCars}
      >
        View All Used Cars
      </button>
        )}
      </Swiper>
    </div>
  );
}

export default Featured;



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// // Import car images
// import bmw from "../../assets/images/Common/ix1-bmw.webp";
// import benz from "../../assets/images/Common/c-class-benz.webp";
// import fortuner from "../../assets/images/Common/fortuner-toyota.webp";
// import camry from "../../assets/images/Common/camry-toyota.webp";
// import defender from "../../assets/images/Common/land-rover-defender.webp";
// import rangeRover from "../../assets/images/Common/range-rover.webp";
// import mahindra from "../../assets/images/Common/mahindra.webp";
// import UsedCars from "../../Pages/Users/UsedCars";
// import { div } from "framer-motion/client";

// function Featured({ showCategory }) {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("trending");

//   // Define car categories
//   const categories = {
//     trending: [
//       { img: rangeRover, name: "Land Rover Range Rover Velar", price: "1.12 Crore" },
//       { img: bmw, name: "BMW iX1", price: "73.96 Lakh" },
//       { img: benz, name: "Mercedes-Benz C-Class", price: "75.60 Lakh" },
//       { img: fortuner, name: "Toyota Fortuner Legender", price: "56.49 Lakh" },
//       { img: camry, name: "Toyota Camry", price: "61.42 Lakh" },
//       { img: defender, name: "Land Rover Defender", price: "1.33 Crore" },
//       { img: mahindra, name: "Mahindra XUV700", price: "17.17 Lakh" },
//     ],
//   };

//   // Popular Used Cars (for Used Cars page)
//   const popularUsedCars = [
//     { img: fortuner, name: "Used Toyota Fortuner", price: "30.49 Lakh", category: "SUV" },
//     { img: camry, name: "Used Toyota Camry", price: "35.42 Lakh", category: "Sedan" },
//     { img: bmw, name: "Used BMW iX1", price: "48.96 Lakh", category: "Luxury" },
//     { img: benz, name: "Used Mercedes-Benz C-Class", price: "50.60 Lakh", category: "Luxury" },
//   ];

//   const handleNavigateToUsedCars = () => {
//     navigate(`/used?category=all`);
//   };

//   return (
//     <div className="px-56 py-8">
//       <h1 className="font-bold text-2xl">Featured Cars</h1>

//       {/* Swiper Slider */}
//       <Swiper spaceBetween={20} slidesPerView={3} navigation={true} modules={[Navigation]} className="mb-6">
//         {categories[selectedCategory].map((car, index) => (
//           <SwiperSlide key={index} className="bg-[#D9D9D9] dark:bg-[#8E1616] w-1/3 h-[45vh] rounded-lg">
//             <Link to={`/car-details`} state={{ car }}>
//               <div className="w-full h-3/5 rounded-t-lg bg-white flex items-center justify-center">
//                 <img src={car.img} alt={car.name} className="w-4/5" />
//               </div>
//               <div className="px-6 py-4 leading-[1.8rem]">
//                 <p>{car.name}</p>
//                 <p className="font-bold">{car.price}</p>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Button to go to Used Cars Page */}
    
//       <button
//         className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         onClick={handleNavigateToUsedCars}
//       >
//         View All Used Cars
//       </button>
//     </div>
//   );
// }

// export default Featured;
