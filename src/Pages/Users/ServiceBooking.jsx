// import React, { useState } from "react";

// const ServiceBooking = () => {
//   const [formData, setFormData] = useState({
//     provider: "",
//     service: "",
//     name: "",
//     contact: "",
//     date: "",
//     time: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-xl font-bold text-center text-blue-700">Book Your Service</h2>
//         <p className="text-sm text-center text-gray-600 mb-4">
//           Fill in the details below to book a car service with your preferred provider.
//         </p>
        
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-gray-700">Select Provider:</label>
//             <select name="provider" className="w-full p-2 border rounded" onChange={handleChange}>
//               <option value="">-- choose a provider --</option>
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-gray-700">Select Service:</label>
//             <select name="service" className="w-full p-2 border rounded" onChange={handleChange}>
//               <option value="">-- choose a service --</option>
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-gray-700">Your Name:</label>
//             <input type="text" name="name" placeholder="Enter your name" className="w-full p-2 border rounded" onChange={handleChange} />
//           </div>
          
//           <div>
//             <label className="block text-gray-700">Contact Number:</label>
//             <input type="text" name="contact" placeholder="Enter your contact number" className="w-full p-2 border rounded" onChange={handleChange} />
//           </div>
          
//           <div>
//             <label className="block text-gray-700">Preferred Date:</label>
//             <input type="date" name="date" className="w-full p-2 border rounded" onChange={handleChange} />
//           </div>
          
//           <div>
//             <label className="block text-gray-700">Preferred Time:</label>
//             <select name="time" className="w-full p-2 border rounded" onChange={handleChange}>
//               <option value="">-- : --</option>
//             </select>
//           </div>
          
//           <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
//             Confirm Booking
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ServiceBooking;





import React from "react";

function ServiceBooking() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-center text-blue-700">Book Your Service</h2>
        <p className="text-sm text-center text-gray-600 mb-4">
          Fill in the details below to book a car service with your preferred provider.
        </p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Select Provider:</label>
            <select className="w-full p-2 border rounded">
              <option>-- choose a provider --</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700">Select Service:</label>
            <select className="w-full p-2 border rounded">
              <option>-- choose a service --</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700">Your Name:</label>
            <input type="text" placeholder="Enter your name" className="w-full p-2 border rounded" />
          </div>
          
          <div>
            <label className="block text-gray-700">Contact Number:</label>
            <input type="text" placeholder="Enter your contact number" className="w-full p-2 border rounded" />
          </div>
          
          <div>
            <label className="block text-gray-700">Preferred Date:</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          
          <div>
            <label className="block text-gray-700">Preferred Time:</label>
            <select className="w-full p-2 border rounded">
              <option>-- : --</option>
            </select>
          </div>
          
          <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default ServiceBooking;

