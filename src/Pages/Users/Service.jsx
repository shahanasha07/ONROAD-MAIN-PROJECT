import React from 'react';
import serviceBg from '../../assets/images/Common/serv.jpg';
import ServiceBox from '../../Components/Users/ServiceBox';
import trusted from "../../assets/images/Common/shield.png";
import Affordable from "../../assets/images/Common/save-money.png";
import repair from "../../assets/images/Common/maintenance.png";
import locationLogo from "../../assets/images/Common/pin-mark.png";
import detailing from "../../assets/images/Common/car-detailing.png";
import Oil from "../../assets/images/Common/oil.png";
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer'
import { Link } from 'react-router-dom';

const servicesWhyChooseUs = [
  { img: trusted, heading: 'Trusted Providers', para: 'Verified professionals for quality service.' },
  { img: Affordable, heading: 'Affordable Prices', para: 'Cost-effective solutions without compromising quality.' },
  { img: repair, heading: 'Customer Support', para: '24/7 assistance for all your service needs.' },
];

const servicesFeatured = [
  { img: locationLogo, heading: 'Car Repair', para: 'Expert mechanics to fix any car issue.' },
  { img: detailing, heading: 'Car Detailing', para: 'Professional cleaning and restoration services.' },
  { img: Oil, heading: 'Oil Change', para: 'Quick and reliable oil change services.' },
];
const nearbyProviders = [
  { name: 'AutoFix Garage', location: 'City A', distance: '3', services: 'Engine, Tires, Wash' },
  { name: 'AutoFix Garage', location: 'City A', distance: '3', services: 'Engine, Tires, Wash' },
  { name: 'AutoFix Garage', location: 'City A', distance: '3', services: 'Engine, Tires, Wash' },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};


function Service() {
  return (
    <div className='w-full  bg-[#E5E5E5] '>
      <Navbar />
      <div
        className='w-full h-[70vh] relative bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${serviceBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className='text-7xl/20 font-bold w-1/2 '>Find Car Services Near You</h1>
          <p className='text-2xl py-4 '>Get your car serviced, repaired, or detailed by trusted providers in your area.</p>
          <button className="capitalize bg-blue-950 px-8 py-2 rounded-sm font-bold mt-8 ml-2 cursor-pointer" onClick={() => scrollToSection("providers")}>Get Started </button>
        </div>
      </div>

      <ServiceBox mainheading='Why Choose Us?' services={servicesWhyChooseUs} />
      <ServiceBox mainheading='Featured Services' services={servicesFeatured} />

      <div 
      id='providers'
      className="bg-blue-950 text-white py-24 text-center mt-6">
        <h1 className="capitalize font-bold text-5xl">Search for Providers </h1>
        <p className="py-5 w-[48vw] m-auto text-xl">Enter your location to find the best service providers near you.</p>
        <div className=' bg-blue-950 justify-center px-8'>
          <input type="text" placeholder='search for your nearby location' className='border px-8  w-1/3 ml-4 py-2 rounded-sm' />
          <button className="capitalize bg-[#D9D9D9] px-6 py-2 text-black rounded-sm font-bold mt-8 ml-2">Search </button>
        </div>

      </div>


      <div
        className="w-[80%] mx-auto mt-10 px-32">
        <h2 className="text-4xl font-bold text-blue-900 text-center">Nearby Service Providers</h2>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {nearbyProviders.map((provider, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-2xl shadow-[#848484] ">
              <h3 className="text-xl font-bold text-blue-900">{provider.name}</h3>
              <p className="text-gray-700">{provider.location}</p>
              <p className="font-bold">Distance: {provider.distance}</p>
              <p className="text-gray-600">Services: <span className="text-blue-700">{provider.services}</span></p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md font-bold"><Link to={'/service-booking'}>Book Now</Link> </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="text-blue-900 font-bold">View More</button>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Service;



