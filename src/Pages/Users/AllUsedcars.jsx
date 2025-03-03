

// // // import React, { useState, useEffect } from "react";
// // // import { useLocation } from "react-router-dom";

// // // // Sample car image – replace with your own
// // // import sampleCar from "../../assets/images/Common/mahindra.webp";

// // // // Constants for filter options
// // // const FUEL_TYPES = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"];
// // // const BODY_TYPES = ["SUV", "Sedan", "Hatchback", "MUV", "Coupe", "Convertible"];
// // // const TRANSMISSIONS = ["Manual", "Automatic"];
// // // const OWNERSHIPS = [1, 2, 3]; // 1st owner, 2nd owner, 3rd owner, etc.
// // // const SEAT_OPTIONS = [4, 5, 7];
// // // const COLOR_OPTIONS = ["White", "Black", "Silver", "Red", "Blue"];

// // // // Example used cars data
// // // const allUsedCars = [
// // //   {
// // //     id: 1,
// // //     brand: "Toyota",
// // //     model: "Fortuner",
// // //     year: 2018,
// // //     price: 3049000,      // in rupees
// // //     kmDriven: 53123,
// // //     fuelType: "Diesel",
// // //     bodyType: "SUV",
// // //     transmission: "Manual",
// // //     ownership: 1,
// // //     RTO: "KL07",
// // //     seats: 7,
// // //     color: "White",
// // //     image: sampleCar,
// // //   },
// // //   {
// // //     id: 2,
// // //     brand: "Toyota",
// // //     model: "Camry",
// // //     year: 2019,
// // //     price: 3542000,
// // //     kmDriven: 43000,
// // //     fuelType: "Petrol",
// // //     bodyType: "Sedan",
// // //     transmission: "Automatic",
// // //     ownership: 1,
// // //     RTO: "KL08",
// // //     seats: 5,
// // //     color: "Silver",
// // //     image: sampleCar,
// // //   },
// // //   {
// // //     id: 3,
// // //     brand: "BMW",
// // //     model: "iX1",
// // //     year: 2021,
// // //     price: 4896000,
// // //     kmDriven: 15000,
// // //     fuelType: "Electric",
// // //     bodyType: "SUV",
// // //     transmission: "Automatic",
// // //     ownership: 1,
// // //     RTO: "KL07",
// // //     seats: 5,
// // //     color: "Black",
// // //     image: sampleCar,
// // //   },
// // //   {
// // //     id: 4,
// // //     brand: "Mercedes",
// // //     model: "C-Class",
// // //     year: 2017,
// // //     price: 5060000,
// // //     kmDriven: 62000,
// // //     fuelType: "Petrol",
// // //     bodyType: "Sedan",
// // //     transmission: "Automatic",
// // //     ownership: 2,
// // //     RTO: "KL02",
// // //     seats: 5,
// // //     color: "Red",
// // //     image: sampleCar,
// // //   },
// // // ];

// // // function AllUsedcars() {
// // //   // Read optional category from URL, e.g. ?category=SUV
// // //   const location = useLocation();
// // //   const queryParams = new URLSearchParams(location.search);
// // //   const selectedCategory = queryParams.get("category") || "all";

// // //   // --------------------------
// // //   // FILTER STATES
// // //   // --------------------------
// // //   const [minBudget, setMinBudget] = useState(0);   // in Lakh
// // //   const [maxBudget, setMaxBudget] = useState(75);  // in Lakh
// // //   const [brand, setBrand] = useState("");
// // //   const [model, setModel] = useState("");
// // //   const [minYear, setMinYear] = useState(2010);
// // //   const [maxYear, setMaxYear] = useState(2025);
// // //   const [minKm, setMinKm] = useState(0);
// // //   const [maxKm, setMaxKm] = useState(200000);
// // //   const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);
// // //   const [selectedBodyTypes, setSelectedBodyTypes] = useState([]);
// // //   const [selectedTransmissions, setSelectedTransmissions] = useState([]);
// // //   const [selectedOwnerships, setSelectedOwnerships] = useState([]);
// // //   const [rto, setRto] = useState("");
// // //   const [selectedSeats, setSelectedSeats] = useState([]);
// // //   const [selectedColors, setSelectedColors] = useState([]);

// // //   // --------------------------
// // //   // SORT STATE
// // //   // --------------------------
// // //   const [sortBy, setSortBy] = useState("Best Match");

// // //   // --------------------------
// // //   // FILTERED RESULT
// // //   // --------------------------
// // //   const [filteredCars, setFilteredCars] = useState([]);

// // //   // --------------------------
// // //   // HELPER FUNCTIONS
// // //   // --------------------------
// // //   // Toggle a checkbox in an array (fuel types, body types, etc.)
// // //   const toggleValue = (value, array, setArray) => {
// // //     if (array.includes(value)) {
// // //       setArray(array.filter((v) => v !== value));
// // //     } else {
// // //       setArray([...array, value]);
// // //     }
// // //   };

// // //   // Convert price from rupees to Lakh
// // //   const priceToLakh = (price) => price / 100000;

// // //   // Check if car matches all active filters
// // //   const matchesFilters = (car) => {
// // //     // 1. Category filter (from URL)
// // //     if (selectedCategory !== "all" && car.bodyType !== selectedCategory) {
// // //       return false;
// // //     }
// // //     // 2. Brand filter
// // //     if (brand.trim() && !car.brand.toLowerCase().includes(brand.toLowerCase())) {
// // //       return false;
// // //     }
// // //     // 3. Model filter
// // //     if (model.trim() && !car.model.toLowerCase().includes(model.toLowerCase())) {
// // //       return false;
// // //     }
// // //     // 4. Budget filter
// // //     const carPriceLakh = priceToLakh(car.price);
// // //     if (carPriceLakh < minBudget || carPriceLakh > maxBudget) {
// // //       return false;
// // //     }
// // //     // 5. Year range
// // //     if (car.year < minYear || car.year > maxYear) {
// // //       return false;
// // //     }
// // //     // 6. KM Driven
// // //     if (car.kmDriven < minKm || car.kmDriven > maxKm) {
// // //       return false;
// // //     }
// // //     // 7. Fuel type
// // //     if (selectedFuelTypes.length > 0 && !selectedFuelTypes.includes(car.fuelType)) {
// // //       return false;
// // //     }
// // //     // 8. Body type
// // //     if (selectedBodyTypes.length > 0 && !selectedBodyTypes.includes(car.bodyType)) {
// // //       return false;
// // //     }
// // //     // 9. Transmission
// // //     if (
// // //       selectedTransmissions.length > 0 &&
// // //       !selectedTransmissions.includes(car.transmission)
// // //     ) {
// // //       return false;
// // //     }
// // //     // 10. Ownership
// // //     if (selectedOwnerships.length > 0 && !selectedOwnerships.includes(car.ownership)) {
// // //       return false;
// // //     }
// // //     // 11. RTO
// // //     if (rto.trim() && !car.RTO.toLowerCase().includes(rto.toLowerCase())) {
// // //       return false;
// // //     }
// // //     // 12. Seats
// // //     if (selectedSeats.length > 0 && !selectedSeats.includes(car.seats)) {
// // //       return false;
// // //     }
// // //     // 13. Colors
// // //     if (selectedColors.length > 0 && !selectedColors.includes(car.color)) {
// // //       return false;
// // //     }

// // //     return true; // Car passed all filters
// // //   };

// // //   // --------------------------
// // //   // MAIN EFFECT: FILTER + SORT
// // //   // --------------------------
// // //   useEffect(() => {
// // //     let cars = allUsedCars.filter((car) => matchesFilters(car));

// // //     // Sort
// // //     switch (sortBy) {
// // //       case "Price: Low to High":
// // //         cars.sort((a, b) => a.price - b.price);
// // //         break;
// // //       case "Price: High to Low":
// // //         cars.sort((a, b) => b.price - a.price);
// // //         break;
// // //       case "Newest Year First":
// // //         cars.sort((a, b) => b.year - a.year);
// // //         break;
// // //       case "Oldest Year First":
// // //         cars.sort((a, b) => a.year - b.year);
// // //         break;
// // //       default:
// // //         // "Best Match" or no recognized option – do nothing special
// // //         break;
// // //     }

// // //     setFilteredCars(cars);
// // //   }, [
// // //     selectedCategory,
// // //     brand,
// // //     model,
// // //     minBudget,
// // //     maxBudget,
// // //     minYear,
// // //     maxYear,
// // //     minKm,
// // //     maxKm,
// // //     selectedFuelTypes,
// // //     selectedBodyTypes,
// // //     selectedTransmissions,
// // //     selectedOwnerships,
// // //     rto,
// // //     selectedSeats,
// // //     selectedColors,
// // //     sortBy,
// // //   ]);

// // //   // --------------------------
// // //   // RENDER
// // //   // --------------------------
// // //   return (
// // //     <div className="flex gap-6 px-8 py-8">
// // //       {/* LEFT FILTER PANEL */}
// // //       <div className="w-1/4 bg-white p-4 shadow-md rounded-lg space-y-6">
// // //         <h2 className="text-xl font-bold mb-2">Filters</h2>

// // //         {/* Budget Filter */}
// // //         <div>
// // //           <h3 className="font-semibold">Budget (in Lakh)</h3>
// // //           <div className="flex gap-2 items-center mt-2">
// // //             <input
// // //               type="number"
// // //               className="border p-1 w-16"
// // //               min={0}
// // //               max={maxBudget}
// // //               value={minBudget}
// // //               onChange={(e) => setMinBudget(Number(e.target.value))}
// // //             />
// // //             <span>-</span>
// // //             <input
// // //               type="number"
// // //               className="border p-1 w-16"
// // //               min={minBudget}
// // //               max={200}
// // //               value={maxBudget}
// // //               onChange={(e) => setMaxBudget(Number(e.target.value))}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Brand + Model */}
// // //         <div>
// // //           <h3 className="font-semibold">Brand + Model</h3>
// // //           <input
// // //             type="text"
// // //             placeholder="Brand"
// // //             value={brand}
// // //             onChange={(e) => setBrand(e.target.value)}
// // //             className="border p-2 w-full mt-2 rounded"
// // //           />
// // //           <input
// // //             type="text"
// // //             placeholder="Model"
// // //             value={model}
// // //             onChange={(e) => setModel(e.target.value)}
// // //             className="border p-2 w-full mt-2 rounded"
// // //           />
// // //         </div>

// // //         {/* Model Year */}
// // //         <div>
// // //           <h3 className="font-semibold">Model Year</h3>
// // //           <div className="flex gap-2 items-center mt-2">
// // //             <input
// // //               type="number"
// // //               className="border p-1 w-16"
// // //               value={minYear}
// // //               onChange={(e) => setMinYear(Number(e.target.value))}
// // //             />
// // //             <span>-</span>
// // //             <input
// // //               type="number"
// // //               className="border p-1 w-16"
// // //               value={maxYear}
// // //               onChange={(e) => setMaxYear(Number(e.target.value))}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* KM Driven */}
// // //         <div>
// // //           <h3 className="font-semibold">KM Driven</h3>
// // //           <div className="flex gap-2 items-center mt-2">
// // //             <input
// // //               type="number"
// // //               className="border p-1 w-20"
// // //               value={minKm}
// // //               onChange={(e) => setMinKm(Number(e.target.value))}
// // //             />
// // //             <span>-</span>
// // //             <input
// // //               type="number"
// // //               className="border p-1 w-20"
// // //               value={maxKm}
// // //               onChange={(e) => setMaxKm(Number(e.target.value))}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Fuel Type */}
// // //         <div>
// // //           <h3 className="font-semibold">Fuel Type</h3>
// // //           <div className="flex flex-wrap gap-2 mt-2">
// // //             {FUEL_TYPES.map((fuel) => (
// // //               <label key={fuel} className="flex items-center gap-1 text-sm">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={selectedFuelTypes.includes(fuel)}
// // //                   onChange={() => toggleValue(fuel, selectedFuelTypes, setSelectedFuelTypes)}
// // //                 />
// // //                 {fuel}
// // //               </label>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Body Type */}
// // //         <div>
// // //           <h3 className="font-semibold">Body Type</h3>
// // //           <div className="flex flex-wrap gap-2 mt-2">
// // //             {BODY_TYPES.map((type) => (
// // //               <label key={type} className="flex items-center gap-1 text-sm">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={selectedBodyTypes.includes(type)}
// // //                   onChange={() => toggleValue(type, selectedBodyTypes, setSelectedBodyTypes)}
// // //                 />
// // //                 {type}
// // //               </label>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Transmission */}
// // //         <div>
// // //           <h3 className="font-semibold">Transmission</h3>
// // //           <div className="flex flex-wrap gap-2 mt-2">
// // //             {TRANSMISSIONS.map((t) => (
// // //               <label key={t} className="flex items-center gap-1 text-sm">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={selectedTransmissions.includes(t)}
// // //                   onChange={() => toggleValue(t, selectedTransmissions, setSelectedTransmissions)}
// // //                 />
// // //                 {t}
// // //               </label>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Ownership */}
// // //         <div>
// // //           <h3 className="font-semibold">Ownership</h3>
// // //           <div className="flex flex-wrap gap-2 mt-2">
// // //             {OWNERSHIPS.map((o) => (
// // //               <label key={o} className="flex items-center gap-1 text-sm">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={selectedOwnerships.includes(o)}
// // //                   onChange={() => toggleValue(o, selectedOwnerships, setSelectedOwnerships)}
// // //                 />
// // //                 {o}st
// // //               </label>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* RTO */}
// // //         <div>
// // //           <h3 className="font-semibold">RTO</h3>
// // //           <input
// // //             type="text"
// // //             placeholder="e.g. KL07"
// // //             value={rto}
// // //             onChange={(e) => setRto(e.target.value)}
// // //             className="border p-2 w-full mt-2 rounded"
// // //           />
// // //         </div>

// // //         {/* Seats */}
// // //         <div>
// // //           <h3 className="font-semibold">Seats</h3>
// // //           <div className="flex flex-wrap gap-2 mt-2">
// // //             {SEAT_OPTIONS.map((s) => (
// // //               <label key={s} className="flex items-center gap-1 text-sm">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={selectedSeats.includes(s)}
// // //                   onChange={() => toggleValue(s, selectedSeats, setSelectedSeats)}
// // //                 />
// // //                 {s}
// // //               </label>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Colors */}
// // //         <div>
// // //           <h3 className="font-semibold">Colors</h3>
// // //           <div className="flex flex-wrap gap-2 mt-2">
// // //             {COLOR_OPTIONS.map((c) => (
// // //               <label key={c} className="flex items-center gap-1 text-sm">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={selectedColors.includes(c)}
// // //                   onChange={() => toggleValue(c, selectedColors, setSelectedColors)}
// // //                 />
// // //                 {c}
// // //               </label>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* RIGHT CONTENT AREA */}
// // //       <div className="w-3/4">
// // //         {/* Heading: show total results + location + budget */}
// // //         <h1 className="text-2xl font-bold">
// // //           {filteredCars.length} Second Hand Cars in Kochi Under {maxBudget} Lakh
// // //         </h1>
// // //         <p className="text-gray-500 text-sm mt-1">Showing cars that match your filters.</p>

// // //         {/* Sorting */}
// // //         <div className="flex items-center mt-4">
// // //           <label className="mr-2 font-medium">Sort By:</label>
// // //           <select
// // //             className="border p-2 rounded"
// // //             onChange={(e) => setSortBy(e.target.value)}
// // //             value={sortBy}
// // //           >
// // //             <option>Best Match</option>
// // //             <option>Price: Low to High</option>
// // //             <option>Price: High to Low</option>
// // //             <option>Newest Year First</option>
// // //             <option>Oldest Year First</option>
// // //           </select>
// // //         </div>

// // //         {/* Car List Grid */}
// // //         <div className="grid grid-cols-3 gap-6 mt-6">
// // //           {filteredCars.map((car) => (
// // //             <div key={car.id} className="p-4 border rounded-lg shadow-lg">
// // //               <img
// // //                 src={car.image}
// // //                 alt={car.name}
// // //                 className="w-full h-40 object-cover mb-2 rounded"
// // //               />
// // //               <p className="font-bold">
// // //                 {car.brand} {car.model} ({car.year})
// // //               </p>
// // //               <p className="text-gray-600">
// // //                 ₹{(car.price / 100000).toFixed(2)} Lakh
// // //               </p>
// // //               <p className="text-sm text-gray-500">
// // //                 {car.kmDriven.toLocaleString()} km • {car.fuelType}
// // //               </p>
// // //               <p className="text-sm text-gray-500">
// // //                 {car.transmission} • {car.ownership}st Owner
// // //               </p>
// // //               <p className="text-sm text-gray-500">RTO: {car.RTO}</p>
// // //               <p className="text-sm text-gray-500">Seats: {car.seats} • Color: {car.color}</p>

// // //               <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded text-sm">
// // //                 View Seller Details
// // //               </button>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default AllUsedcars;







// // import React, { useState, useEffect } from "react";
// // import { useLocation } from "react-router-dom";
// // import sampleCar from "../../assets/images/Common/mahindra.webp";
// // import Navbar from "../../Components/Common/Navbar";

// // // Sample data for available brands & models
// // const BRANDS = ["Toyota", "BMW", "Mercedes"];
// // const MODELS = ["Fortuner", "Camry", "iX1", "C-Class"];

// // // Sample used cars data
// // const allUsedCars = [
// //   {
// //     id: 1,
// //     brand: "Toyota",
// //     model: "Fortuner",
// //     year: 2018,
// //     price: 3049000, // in rupees
// //     kmDriven: 53123,
// //     image: sampleCar,
// //   },
// //   {
// //     id: 2,
// //     brand: "Toyota",
// //     model: "Camry",
// //     year: 2019,
// //     price: 3542000,
// //     kmDriven: 43000,
// //     image: sampleCar,
// //   },
// //   {
// //     id: 3,
// //     brand: "BMW",
// //     model: "iX1",
// //     year: 2021,
// //     price: 4896000,
// //     kmDriven: 15000,
// //     image: sampleCar,
// //   },
// //   {
// //     id: 4,
// //     brand: "Mercedes",
// //     model: "C-Class",
// //     year: 2017,
// //     price: 5060000,
// //     kmDriven: 62000,
// //     image: sampleCar,
// //   },
// // ];

// // // A reusable collapsible filter section component
// // const FilterSection = ({ title, defaultOpen = true, children }) => {
// //   const [open, setOpen] = useState(defaultOpen);
// //   return (
// //     <div className="border-b pb-2 mb-2">
// //       <div
// //         className="flex justify-between items-center cursor-pointer"
// //         onClick={() => setOpen(!open)}
// //       >
// //         <h3 className="font-semibold text-lg">{title}</h3>
// //         <span className="text-xl">{open ? "−" : "+"}</span>
// //       </div>
// //       {open && <div className="mt-2">{children}</div>}
// //     </div>
// //   );
// // };

// // function AllUsedcars() {
// //   // If you want to read any URL parameters (like ?category=SUV), useLocation is available.
// //   const location = useLocation();
// //   const queryParams = new URLSearchParams(location.search);
// //   const selectedCategory = queryParams.get("category") || "all";

// //   // Filter state variables
// //   const [minBudget, setMinBudget] = useState(0); // in Lakh
// //   const [maxBudget, setMaxBudget] = useState(75); // in Lakh

// //   const [minYear, setMinYear] = useState(2010);
// //   const [maxYear, setMaxYear] = useState(2025);

// //   const [minKm, setMinKm] = useState(0);
// //   const [maxKm, setMaxKm] = useState(200000);

// //   const [selectedBrands, setSelectedBrands] = useState([]);
// //   const [selectedModels, setSelectedModels] = useState([]);

// //   // Sort state (if needed)
// //   const [sortBy, setSortBy] = useState("Best Match");

// //   // Filtered results
// //   const [filteredCars, setFilteredCars] = useState([]);

// //   // Helper to toggle checkbox values
// //   const toggleCheckbox = (value, selected, setSelected) => {
// //     if (selected.includes(value)) {
// //       setSelected(selected.filter((v) => v !== value));
// //     } else {
// //       setSelected([...selected, value]);
// //     }
// //   };

// //   // Helper: convert rupees to Lakh
// //   const priceToLakh = (price) => price / 100000;

// //   // Check if a car matches all active filters
// //   const matchesFilters = (car) => {
// //     // Optionally filter by category from URL (if used)
// //     if (selectedCategory !== "all") {
// //       // For example, you might filter by body type or similar here.
// //       // In this sample, we skip this check.
// //     }
// //     // Budget filter (price in Lakh)
// //     const carPriceLakh = priceToLakh(car.price);
// //     if (carPriceLakh < minBudget || carPriceLakh > maxBudget) return false;

// //     // Model Year
// //     if (car.year < minYear || car.year > maxYear) return false;

// //     // KM Driven
// //     if (car.kmDriven < minKm || car.kmDriven > maxKm) return false;

// //     // Brand filter
// //     if (selectedBrands.length > 0 && !selectedBrands.includes(car.brand)) return false;

// //     // Model filter
// //     if (selectedModels.length > 0 && !selectedModels.includes(car.model)) return false;

// //     return true;
// //   };

// //   // Effect to filter and sort the cars whenever a filter changes
// //   useEffect(() => {
// //     let cars = allUsedCars.filter((car) => matchesFilters(car));

// //     // Sorting options (if needed)
// //     switch (sortBy) {
// //       case "Price: Low to High":
// //         cars.sort((a, b) => a.price - b.price);
// //         break;
// //       case "Price: High to Low":
// //         cars.sort((a, b) => b.price - a.price);
// //         break;
// //       case "Newest Year First":
// //         cars.sort((a, b) => b.year - a.year);
// //         break;
// //       case "Oldest Year First":
// //         cars.sort((a, b) => a.year - b.year);
// //         break;
// //       default:
// //       // "Best Match" – no additional sort
// //     }
// //     setFilteredCars(cars);
// //   }, [
// //     selectedCategory,
// //     minBudget,
// //     maxBudget,
// //     minYear,
// //     maxYear,
// //     minKm,
// //     maxKm,
// //     selectedBrands,
// //     selectedModels,
// //     sortBy,
// //   ]);

// //   return (
// //     <div className="flex gap-6 px-4 py">
// //       {/* LEFT FILTER PANEL */}
// //       <Navbar/>
// //       <div className="w-1/4 max-h-screen overflow-y-auto p-4 bg-white shadow-md rounded-lg my-26">
// //         <h2 className="text-2xl font-bold mb-4">Filters</h2>

// //         {/* Budget Filter */}
// //         <FilterSection title="Budget (Lakh)">
// //           <div className="flex flex-col gap-2">
// //             <div className="flex items-center justify-between">
// //               <span className="text-sm">Min: {minBudget} Lakh</span>
// //               <input
// //                 type="range"
// //                 min="0"
// //                 max="75"
// //                 value={minBudget}
// //                 onChange={(e) => setMinBudget(Number(e.target.value))}
// //                 className="w-2/3"
// //               />
// //             </div>
// //             <div className="flex items-center justify-between">
// //               <span className="text-sm">Max: {maxBudget} Lakh</span>
// //               <input
// //                 type="range"
// //                 min="0"
// //                 max="200"
// //                 value={maxBudget}
// //                 onChange={(e) => setMaxBudget(Number(e.target.value))}
// //                 className="w-2/3"
// //               />
// //             </div>
// //           </div>
// //         </FilterSection>

// //         {/* Model Year Filter */}
// //         <FilterSection title="Model Year">
// //           <div className="flex flex-col gap-2">
// //             <div className="flex items-center justify-between">
// //               <span className="text-sm">From: {minYear}</span>
// //               <input
// //                 type="range"
// //                 min="2000"
// //                 max="2025"
// //                 value={minYear}
// //                 onChange={(e) => setMinYear(Number(e.target.value))}
// //                 className="w-2/3"
// //               />
// //             </div>
// //             <div className="flex items-center justify-between">
// //               <span className="text-sm">To: {maxYear}</span>
// //               <input
// //                 type="range"
// //                 min="2000"
// //                 max="2025"
// //                 value={maxYear}
// //                 onChange={(e) => setMaxYear(Number(e.target.value))}
// //                 className="w-2/3"
// //               />
// //             </div>
// //           </div>
// //         </FilterSection>

// //         {/* KM Driven Filter */}
// //         <FilterSection title="KM Driven">
// //           <div className="flex flex-col gap-2">
// //             <div className="flex items-center justify-between">
// //               <span className="text-sm">Min: {minKm} km</span>
// //               <input
// //                 type="range"
// //                 min="0"
// //                 max="100000"
// //                 step="1000"
// //                 value={minKm}
// //                 onChange={(e) => setMinKm(Number(e.target.value))}
// //                 className="w-2/3"
// //               />
// //             </div>
// //             <div className="flex items-center justify-between">
// //               <span className="text-sm">Max: {maxKm} km</span>
// //               <input
// //                 type="range"
// //                 min="0"
// //                 max="300000"
// //                 step="1000"
// //                 value={maxKm}
// //                 onChange={(e) => setMaxKm(Number(e.target.value))}
// //                 className="w-2/3"
// //               />
// //             </div>
// //           </div>
// //         </FilterSection>

// //         {/* Brand & Model Filter */}
// //         <FilterSection title="Brand & Model">
// //           <div className="flex flex-col gap-4">
// //             {/* Brand checkboxes */}
// //             <div>
// //               <h4 className="font-medium mb-1">Brand</h4>
// //               <div className="flex flex-wrap gap-2">
// //                 {BRANDS.map((brand) => (
// //                   <label key={brand} className="text-sm flex items-center gap-1">
// //                     <input
// //                       type="checkbox"
// //                       checked={selectedBrands.includes(brand)}
// //                       onChange={() =>
// //                         toggleCheckbox(brand, selectedBrands, setSelectedBrands)
// //                       }
// //                     />
// //                     {brand}
// //                   </label>
// //                 ))}
// //               </div>
// //             </div>
// //             {/* Model checkboxes */}
// //             <div>
// //               <h4 className="font-medium mb-1">Model</h4>
// //               <div className="flex flex-wrap gap-2">
// //                 {MODELS.map((model) => (
// //                   <label key={model} className="text-sm flex items-center gap-1">
// //                     <input
// //                       type="checkbox"
// //                       checked={selectedModels.includes(model)}
// //                       onChange={() =>
// //                         toggleCheckbox(model, selectedModels, setSelectedModels)
// //                       }
// //                     />
// //                     {model}
// //                   </label>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </FilterSection>
// //       </div>

// //       {/* RIGHT CONTENT AREA */}
// //       <div className="w-3/4">
// //         <div className="mb-4">
// //           <h1 className="text-2xl font-bold">
// //             {filteredCars.length} Used Cars Found
// //           </h1>
// //           {/* Sorting Dropdown */}
// //           <div className="mt-2">
// //             <label className="mr-2 font-medium">Sort By:</label>
// //             <select
// //               className="border p-2 rounded"
// //               onChange={(e) => setSortBy(e.target.value)}
// //               value={sortBy}
// //             >
// //               <option>Best Match</option>
// //               <option>Price: Low to High</option>
// //               <option>Price: High to Low</option>
// //               <option>Newest Year First</option>
// //               <option>Oldest Year First</option>
// //             </select>
// //           </div>
// //         </div>

// //         {/* Car List Grid */}
// //         <div className="grid grid-cols-3 gap-6">
// //           {filteredCars.map((car) => (
// //             <div key={car.id} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
// //               <img
// //                 src={car.image}
// //                 alt={`${car.brand} ${car.model}`}
// //                 className="w-full h-40 object-cover mb-2 rounded"
// //               />
// //               <p className="font-bold text-lg">
// //                 {car.brand} {car.model} ({car.year})
// //               </p>
// //               <p className="text-gray-600">
// //                 ₹{(car.price / 100000).toFixed(2)} Lakh
// //               </p>
// //               <p className="text-sm text-gray-500">{car.kmDriven.toLocaleString()} km</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AllUsedcars;





// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import sampleCar from "../../assets/images/Common/c-class-benz.webp";

// // Filter option arrays
// const BRANDS = ["Toyota", "BMW", "Mercedes"];
// const MODELS = ["Fortuner", "Camry", "iX1", "C-Class"];
// const FUEL_TYPES = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"];
// const TRANSMISSIONS = ["Manual", "Automatic"];
// const COLOR_OPTIONS = ["White", "Black", "Silver", "Red", "Blue"];

// // Sample used cars data with extra details
// const allUsedCars = [
//   {
//     id: 1,
//     brand: "Toyota",
//     model: "Fortuner",
//     year: 2018,
//     price: 3049000, // rupees
//     kmDriven: 53123,
//     fuelType: "Diesel",
//     transmission: "Manual",
//     color: "White",
//     image: sampleCar,
//   },
//   {
//     id: 2,
//     brand: "Toyota",
//     model: "Camry",
//     year: 2019,
//     price: 3542000,
//     kmDriven: 43000,
//     fuelType: "Petrol",
//     transmission: "Automatic",
//     color: "Silver",
//     image: sampleCar,
//   },
//   {
//     id: 3,
//     brand: "BMW",
//     model: "iX1",
//     year: 2021,
//     price: 4896000,
//     kmDriven: 15000,
//     fuelType: "Electric",
//     transmission: "Automatic",
//     color: "Black",
//     image: sampleCar,
//   },
//   {
//     id: 4,
//     brand: "Mercedes",
//     model: "C-Class",
//     year: 2017,
//     price: 5060000,
//     kmDriven: 62000,
//     fuelType: "Petrol",
//     transmission: "Automatic",
//     color: "Red",
//     image: sampleCar,
//   },
// ];

// // A reusable collapsible filter section component
// const FilterSection = ({ title, defaultOpen = true, children }) => {
//   const [open, setOpen] = useState(defaultOpen);
//   return (
//     <div className="border-b pb-2 mb-2">
//       <div
//         className="flex justify-between items-center cursor-pointer"
//         onClick={() => setOpen(!open)}
//       >
//         <h3 className="font-semibold text-lg">{title}</h3>
//         <span className="text-xl">{open ? "−" : "+"}</span>
//       </div>
//       {open && <div className="mt-2">{children}</div>}
//     </div>
//   );
// };

// function AllUsedcars() {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   // Optionally, you can use a URL param like ?category=SUV
//   const selectedCategory = queryParams.get("category") || "all";

//   // FILTER STATES
//   const [minBudget, setMinBudget] = useState(0); // in Lakh
//   const [maxBudget, setMaxBudget] = useState(75); // in Lakh

//   const [minYear, setMinYear] = useState(2010);
//   const [maxYear, setMaxYear] = useState(2025);

//   const [minKm, setMinKm] = useState(0);
//   const [maxKm, setMaxKm] = useState(200000);

//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [selectedModels, setSelectedModels] = useState([]);
//   const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);
//   const [selectedTransmissions, setSelectedTransmissions] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);

//   // SORT STATE
//   const [sortBy, setSortBy] = useState("Best Match");

//   // FILTERED RESULTS
//   const [filteredCars, setFilteredCars] = useState([]);

//   // Helper: Toggle checkbox value in an array
//   const toggleCheckbox = (value, selected, setSelected) => {
//     if (selected.includes(value)) {
//       setSelected(selected.filter((v) => v !== value));
//     } else {
//       setSelected([...selected, value]);
//     }
//   };

//   // Helper: convert rupees to Lakh
//   const priceToLakh = (price) => price / 100000;

//   // Check if a car passes all filters
//   const matchesFilters = (car) => {
//     // Optionally filter by category from URL if needed.
//     if (selectedCategory !== "all") {
//       // You could use this to filter by a specific car type.
//     }
//     // Budget filter
//     const carPriceLakh = priceToLakh(car.price);
//     if (carPriceLakh < minBudget || carPriceLakh > maxBudget) return false;
//     // Model Year filter
//     if (car.year < minYear || car.year > maxYear) return false;
//     // KM Driven filter
//     if (car.kmDriven < minKm || car.kmDriven > maxKm) return false;
//     // Brand filter
//     if (selectedBrands.length > 0 && !selectedBrands.includes(car.brand)) return false;
//     // Model filter
//     if (selectedModels.length > 0 && !selectedModels.includes(car.model)) return false;
//     // Fuel type filter
//     if (selectedFuelTypes.length > 0 && !selectedFuelTypes.includes(car.fuelType))
//       return false;
//     // Transmission filter
//     if (selectedTransmissions.length > 0 && !selectedTransmissions.includes(car.transmission))
//       return false;
//     // Colors filter
//     if (selectedColors.length > 0 && !selectedColors.includes(car.color)) return false;
//     return true;
//   };

//   // Apply filters and sorting when any filter state changes
//   useEffect(() => {
//     let cars = allUsedCars.filter((car) => matchesFilters(car));
//     switch (sortBy) {
//       case "Price: Low to High":
//         cars.sort((a, b) => a.price - b.price);
//         break;
//       case "Price: High to Low":
//         cars.sort((a, b) => b.price - a.price);
//         break;
//       case "Newest Year First":
//         cars.sort((a, b) => b.year - a.year);
//         break;
//       case "Oldest Year First":
//         cars.sort((a, b) => a.year - b.year);
//         break;
//       default:
//         break;
//     }
//     setFilteredCars(cars);
//   }, [
//     selectedCategory,
//     minBudget,
//     maxBudget,
//     minYear,
//     maxYear,
//     minKm,
//     maxKm,
//     selectedBrands,
//     selectedModels,
//     selectedFuelTypes,
//     selectedTransmissions,
//     selectedColors,
//     sortBy,
//   ]);

//   return (
//     <div className="flex gap-6 px-4 py-4">
//       {/* LEFT FILTER PANEL */}
//       <div className="w-1/4 max-h-screen overflow-y-auto p-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-bold mb-4">Filters</h2>

//         {/* Budget Filter */}
//         <FilterSection title="Budget (Lakh)">
//           <div className="flex flex-col gap-2">
//             <div className="flex items-center justify-between">
//               <span className="text-sm">Min: {minBudget} Lakh</span>
//               <input
//                 type="range"
//                 min="0"
//                 max="75"
//                 value={minBudget}
//                 onChange={(e) => setMinBudget(Number(e.target.value))}
//                 className="w-2/3"
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-sm">Max: {maxBudget} Lakh</span>
//               <input
//                 type="range"
//                 min="0"
//                 max="200"
//                 value={maxBudget}
//                 onChange={(e) => setMaxBudget(Number(e.target.value))}
//                 className="w-2/3"
//               />
//             </div>
//           </div>
//         </FilterSection>

//         {/* Model Year Filter */}
//         <FilterSection title="Model Year">
//           <div className="flex flex-col gap-2">
//             <div className="flex items-center justify-between">
//               <span className="text-sm">From: {minYear}</span>
//               <input
//                 type="range"
//                 min="2000"
//                 max="2025"
//                 value={minYear}
//                 onChange={(e) => setMinYear(Number(e.target.value))}
//                 className="w-2/3"
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-sm">To: {maxYear}</span>
//               <input
//                 type="range"
//                 min="2000"
//                 max="2025"
//                 value={maxYear}
//                 onChange={(e) => setMaxYear(Number(e.target.value))}
//                 className="w-2/3"
//               />
//             </div>
//           </div>
//         </FilterSection>

//         {/* KM Driven Filter */}
//         <FilterSection title="KM Driven">
//           <div className="flex flex-col gap-2">
//             <div className="flex items-center justify-between">
//               <span className="text-sm">Min: {minKm} km</span>
//               <input
//                 type="range"
//                 min="0"
//                 max="100000"
//                 step="1000"
//                 value={minKm}
//                 onChange={(e) => setMinKm(Number(e.target.value))}
//                 className="w-2/3"
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-sm">Max: {maxKm} km</span>
//               <input
//                 type="range"
//                 min="0"
//                 max="300000"
//                 step="1000"
//                 value={maxKm}
//                 onChange={(e) => setMaxKm(Number(e.target.value))}
//                 className="w-2/3"
//               />
//             </div>
//           </div>
//         </FilterSection>

//         {/* Brand & Model Filter */}
//         <FilterSection title="Brand & Model">
//           <div className="flex flex-col gap-4">
//             <div>
//               <h4 className="font-medium mb-1">Brand</h4>
//               <div className="flex flex-col flex-wrap gap-2">
//                 {BRANDS.map((b) => (
//                   <label key={b} className="text-sm flex items-center gap-1">
//                     <input
//                       type="checkbox"
//                       checked={selectedBrands.includes(b)}
//                       onChange={() =>
//                         toggleCheckbox(b, selectedBrands, setSelectedBrands)
//                       }
//                     />
//                     {b}
//                   </label>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h4 className="font-medium mb-1">Model</h4>
//               <div className="flex flex-wrap gap-2">
//                 {MODELS.map((m) => (
//                   <label key={m} className="text-sm flex items-center gap-1">
//                     <input
//                       type="checkbox"
//                       checked={selectedModels.includes(m)}
//                       onChange={() =>
//                         toggleCheckbox(m, selectedModels, setSelectedModels)
//                       }
//                     />
//                     {m}
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </FilterSection>

//         {/* Fuel Type Filter */}
//         <FilterSection title="Fuel Type">
//           <div className="flex flex-wrap gap-2">
//             {FUEL_TYPES.map((fuel) => (
//               <label key={fuel} className="text-sm flex items-center gap-1">
//                 <input
//                   type="checkbox"
//                   checked={selectedFuelTypes.includes(fuel)}
//                   onChange={() =>
//                     toggleCheckbox(fuel, selectedFuelTypes, setSelectedFuelTypes)
//                   }
//                 />
//                 {fuel}
//               </label>
//             ))}
//           </div>
//         </FilterSection>

//         {/* Transmission Filter */}
//         <FilterSection title="Transmission">
//           <div className="flex flex-wrap gap-2">
//             {TRANSMISSIONS.map((trans) => (
//               <label key={trans} className="text-sm flex items-center gap-1">
//                 <input
//                   type="checkbox"
//                   checked={selectedTransmissions.includes(trans)}
//                   onChange={() =>
//                     toggleCheckbox(
//                       trans,
//                       selectedTransmissions,
//                       setSelectedTransmissions
//                     )
//                   }
//                 />
//                 {trans}
//               </label>
//             ))}
//           </div>
//         </FilterSection>

//         {/* Colors Filter */}
//         <FilterSection title="Colors">
//           <div className="flex flex-wrap gap-2">
//             {COLOR_OPTIONS.map((color) => (
//               <label key={color} className="text-sm flex items-center gap-1">
//                 <input
//                   type="checkbox"
//                   checked={selectedColors.includes(color)}
//                   onChange={() =>
//                     toggleCheckbox(color, selectedColors, setSelectedColors)
//                   }
//                 />
//                 {color}
//               </label>
//             ))}
//           </div>
//         </FilterSection>
//       </div>

//       {/* RIGHT CONTENT AREA: Car Listings */}
//       <div className="w-3/4">
//         <div className="mb-4">
//           <h1 className="text-2xl font-bold">
//             {filteredCars.length} Used Cars Found
//           </h1>
//           <div className="mt-2">
//             <label className="mr-2 font-medium">Sort By:</label>
//             <select
//               className="border p-2 rounded"
//               onChange={(e) => setSortBy(e.target.value)}
//               value={sortBy}
//             >
//               <option>Best Match</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Newest Year First</option>
//               <option>Oldest Year First</option>
//             </select>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-6">
//           {filteredCars.map((car) => (
//             <div
//               key={car.id}
//               className="p-4 border rounded-lg shadow hover:shadow-lg transition"
//             >
//               <img
//                 src={car.image}
//                 alt={`${car.brand} ${car.model}`}
//                 className="w-full h-40 object-cover mb-2 rounded"
//               />
//               <p className="font-bold text-lg">
//                 {car.brand} {car.model} ({car.year})
//               </p>
//               <p className="text-gray-600">
//                 ₹{(car.price / 100000).toFixed(2)} Lakh
//               </p>
//               <p className="text-sm text-gray-500">
//                 {car.kmDriven.toLocaleString()} km
//               </p>
//               <p className="text-sm text-gray-500">
//                 Fuel: {car.fuelType} • Transmission: {car.transmission} • Color: {car.color}
//               </p>
//               <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded text-sm">
//                 Get Seller Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllUsedcars;



import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import sampleCar from "../../assets/images/Common/mahindra.webp";
import Navbar from "../../Components/Common/Navbar";

// Example filter options
const BRANDS = ["Maruti", "Toyota", "Hyundai", "Honda"];
const MODELS = ["Swift", "Fortuner", "Creta", "City"];
const FUEL_TYPES = ["Petrol", "Diesel", "CNG", "Electric"];
const TRANSMISSIONS = ["Manual", "Automatic"];
const COLORS = ["White", "Silver", "Black", "Red"];

// Sample car data
const allUsedCars = [
  {
    id: 1,
    title: "2018 Maruti Suzuki Swift VXI (2018-2019)",
    brand: "Maruti",
    model: "Swift",
    fuelType: "Petrol",
    transmission: "Manual",
    color: "White",
    location: "Bangalore",
    year: 2018,
    price: 535000, // in rupees
    kmDriven: 42000,
    image: sampleCar,
  },
  {
    id: 2,
    title: "2019 Toyota Fortuner 2.8 Sigma 4",
    brand: "Toyota",
    model: "Fortuner",
    fuelType: "Diesel",
    transmission: "Automatic",
    color: "Black",
    location: "Delhi",
    year: 2019,
    price: 1450000, // in rupees
    kmDriven: 60000,
    image: sampleCar,
  },
  {
    id: 3,
    title: "2021 Hyundai Creta SX (O)",
    brand: "Hyundai",
    model: "Creta",
    fuelType: "Petrol",
    transmission: "Manual",
    color: "Red",
    location: "Mumbai",
    year: 2021,
    price: 950000,
    kmDriven: 15000,
    image: sampleCar,
  },
  {
    id: 4,
    title: "2017 Honda City VX (2017-2018)",
    brand: "Honda",
    model: "City",
    fuelType: "Petrol",
    transmission: "Automatic",
    color: "Silver",
    location: "Kochi",
    year: 2017,
    price: 535000,
    kmDriven: 72000,
    image: sampleCar,
  },
  {
    id: 3,
    title: "2021 Hyundai Creta SX (O)",
    brand: "Hyundai",
    model: "Creta",
    fuelType: "Petrol",
    transmission: "Manual",
    color: "Red",
    location: "Mumbai",
    year: 2021,
    price: 950000,
    kmDriven: 15000,
    image: sampleCar,
  },
  {
    id: 4,
    title: "2017 Honda City VX (2017-2018)",
    brand: "Honda",
    model: "City",
    fuelType: "Petrol",
    transmission: "Automatic",
    color: "Silver",
    location: "Kochi",
    year: 2017,
    price: 535000,
    kmDriven: 72000,
    image: sampleCar,
  },
  {
    id: 3,
    title: "2021 Hyundai Creta SX (O)",
    brand: "Hyundai",
    model: "Creta",
    fuelType: "Petrol",
    transmission: "Manual",
    color: "Red",
    location: "Mumbai",
    year: 2021,
    price: 950000,
    kmDriven: 15000,
    image: sampleCar,
  },
  {
    id: 4,
    title: "2017 Honda City VX (2017-2018)",
    brand: "Honda",
    model: "City",
    fuelType: "Petrol",
    transmission: "Automatic",
    color: "Silver",
    location: "Kochi",
    year: 2017,
    price: 535000,
    kmDriven: 72000,
    image: sampleCar,
  },
];

// A simple collapsible filter section (optional)
const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b pb-2 mb-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </div>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
};

function AllUsedcars() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // Optional: read ?category= in URL if you want
  const selectedCategory = queryParams.get("category") || "all";

  // -------------------------
  // FILTER STATES
  // -------------------------
  // Single slider for "up to X" Budget (in Lakh)
  const [budget, setBudget] = useState(15); // up to 15 Lakh

  // Single slider for "up to X" Year
  const [maxYear, setMaxYear] = useState(2023);

  // Single slider for "up to X" KM Driven
  const [maxKm, setMaxKm] = useState(100000);

  // Checkboxes
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  // Sorting
  const [sortBy, setSortBy] = useState("Best Match");

  // Filtered cars
  const [filteredCars, setFilteredCars] = useState([]);

  // Toggle checkbox helper
  const toggleCheckbox = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((v) => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  // Price in Lakh => compare with "budget"
  const priceToLakh = (priceInRs) => priceInRs / 100000;

  // Check if a car passes all active filters
  const matchesFilters = (car) => {
    // Category-based filtering if needed
    if (selectedCategory !== "all") {
      // e.g. filter by bodyType or brand if you want
    }

    // Budget filter
    if (priceToLakh(car.price) > budget) return false;

    // Model Year filter (car's year <= maxYear)
    if (car.year > maxYear) return false;

    // KM Driven filter
    if (car.kmDriven > maxKm) return false;

    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(car.brand)) {
      return false;
    }

    // Model filter
    if (selectedModels.length > 0 && !selectedModels.includes(car.model)) {
      return false;
    }

    // Fuel Type
    if (selectedFuelTypes.length > 0 && !selectedFuelTypes.includes(car.fuelType)) {
      return false;
    }

    // Transmission
    if (
      selectedTransmissions.length > 0 &&
      !selectedTransmissions.includes(car.transmission)
    ) {
      return false;
    }

    // Color
    if (selectedColors.length > 0 && !selectedColors.includes(car.color)) {
      return false;
    }

    return true;
  };

  // FILTER + SORT whenever filters change
  useEffect(() => {
    let cars = allUsedCars.filter(matchesFilters);

    // Sorting
    switch (sortBy) {
      case "Price: Low to High":
        cars.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        cars.sort((a, b) => b.price - a.price);
        break;
      case "Newest Year First":
        cars.sort((a, b) => b.year - a.year);
        break;
      case "Oldest Year First":
        cars.sort((a, b) => a.year - b.year);
        break;
      default:
        // Best Match or unknown
        break;
    }

    setFilteredCars(cars);
  }, [
    budget,
    maxYear,
    maxKm,
    selectedBrands,
    selectedModels,
    selectedFuelTypes,
    selectedTransmissions,
    selectedColors,
    sortBy,
    selectedCategory,
  ]);

  return (
    <div className="px- ">
      <Navbar/>
    <div className="flex justify-end gap-4 px-44 py-4 pt-26 ">
      {/* LEFT FILTER PANEL */}
      <div className="w-1/4 max-h-screen overflow-y-auto scrollbar bg-white p-4 pb-22 shadow-md rounded fixed left-20 top-20">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>

        {/* Budget Slider */}
        <FilterSection title="Budget (in Lakh)">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-3/4"
            />
            <span className="text-sm">Up to {budget}L</span>
          </div>
        </FilterSection>

        {/* Model Year Slider */}
        <FilterSection title="Model Year">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="2000"
              max="2023"
              value={maxYear}
              onChange={(e) => setMaxYear(Number(e.target.value))}
              className="w-3/4"
            />
            <span className="text-sm">Up to {maxYear}</span>
          </div>
        </FilterSection>

        {/* KM Driven Slider */}
        <FilterSection title="KMs Driven">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="200000"
              step="1000"
              value={maxKm}
              onChange={(e) => setMaxKm(Number(e.target.value))}
              className="w-3/4"
            />
            <span className="text-sm">Up to {maxKm.toLocaleString()} km</span>
          </div>
        </FilterSection>

        {/* Brand Filter */}
        <FilterSection title="Brand">
          <div className="flex flex-wrap gap-2">
            {BRANDS.map((b) => (
              <label key={b} className="flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(b)}
                  onChange={() => toggleCheckbox(b, selectedBrands, setSelectedBrands)}
                />
                {b}
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Model Filter */}
        <FilterSection title="Model">
          <div className="flex flex-col flex-wrap gap-2">
            {MODELS.map((m) => (
              <label key={m} className="flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  checked={selectedModels.includes(m)}
                  onChange={() => toggleCheckbox(m, selectedModels, setSelectedModels)}
                />
                {m}
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Fuel Type */}
        <FilterSection title="Fuel Type">
          <div className="flex flex-col flex-wrap gap-2">
            {FUEL_TYPES.map((fuel) => (
              <label key={fuel} className="flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  checked={selectedFuelTypes.includes(fuel)}
                  onChange={() =>
                    toggleCheckbox(fuel, selectedFuelTypes, setSelectedFuelTypes)
                  }
                />
                {fuel}
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Transmission */}
        <FilterSection title="Transmission">
          <div className="flex flex-col flex-wrap gap-2">
            {TRANSMISSIONS.map((t) => (
              <label key={t} className="flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  checked={selectedTransmissions.includes(t)}
                  onChange={() =>
                    toggleCheckbox(t, selectedTransmissions, setSelectedTransmissions)
                  }
                />
                {t}
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Color */}
        <FilterSection title="Color">
          <div className="flex flex-col flex-wrap gap-2">
            {COLORS.map((c) => (
              <label key={c} className="flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  checked={selectedColors.includes(c)}
                  onChange={() => toggleCheckbox(c, selectedColors, setSelectedColors)}
                />
                {c}
              </label>
            ))}
          </div>
        </FilterSection>
      </div>

      {/* RIGHT CONTENT AREA */}
      <div className="w-3/4  ">
        {/* Top bar: total results + sorting */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">
            {filteredCars.length} Used Cars Found
          </h1>
          <div>
            <label className="mr-2 font-medium">Sort By:</label>
            <select
              className="border p-2 rounded"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              <option>Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Year First</option>
              <option>Oldest Year First</option>
            </select>
          </div>
        </div>

        {/* Car Listing - 2 columns, like reference */}
        <div className="grid grid-cols-2 gap-4">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-[#efefef7a] "
            >
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                {/* Car title, e.g. "2018 Maruti Suzuki Swift VXI (2018-2019)" */}
                <h2 className="font-semibold text-base mb-1">{car.title}</h2>
                {/* Location */}
                <p className="text-sm text-gray-500 mb-2">{car.location} | {car.kmDriven} km | {car.fuelType} </p>
                {/* Price */}
                <p className="font-bold text-red-600 mb-2">
                  Rs. {(car.price / 100000).toFixed(2)} Lakh
                </p>
                {/* Buttons: Make Offer & Get Seller Details */}
                <div className="flex gap-2">
                  <button className="bg-orange-600 text-white px-3 py-1 rounded text-sm">
                  Get Seller Details
                  </button>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default AllUsedcars;

