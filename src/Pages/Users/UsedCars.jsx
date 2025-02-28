import React, { useState } from 'react';
import bg from '../../assets/images/Users/bg-usedcar.jpg';
import Navbar from '../../Components/Common/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import UsedBycity from '../../Components/Users/UsedBycity';
import Brands from '../../Components/Users/Brands'
import Featured from '../../Components/Users/Featured';
import Footer from '../../Components/Common/Footer';
import SellYourCar from '../../Components/Users/SellYourCar';

function UsedCars() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        className='w-full h-[60vh] text-white relative flex items-center justify-center'
        style={{
          background: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        {/* Text Content */}
        <div className='absolute z-10 text-white text-center px-4'>
          <h1 className='font-bold text-5xl capitalize'>Explore Pre-Owned Cars!</h1>
          <p className='text-white text-lg mt-2'>Discover thousands of quality second-hand cars available for sale</p>
        </div>

        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black/1 backdrop-blur-[3px] "></div>
      </div>

      {/* Search Box Section */}
      <div className='flex flex-col items-center mt-[-50px] relative z-9'>
        <div className='bg-white shadow-lg rounded-lg p-4 w-2/3  '>
          <h1 className='text-xl font-medium pl-1 pb-2'>Find Second Hand Cars</h1>
          <div className='flex items-center justify-between gap- w-full p-3 text-lg border border-gray-300 rounded-lg'>

            <input
              type="text"
              placeholder='Bangalore'
              className=' focus:outline-none w-full'
            />

            <button className='bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600'>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="mt-3 flex gap-6 pl-1">
            <button className="font-medium hover:underline">Sell Your Car</button>
            <button className="font-medium hover:underline">Check Value of Your Car</button>
          </div>
        </div>

      </div>
      <div className='px-56 py-8'>
        <p className='text-sm font-light'>
          Discover India's largest selection of pre-owned cars, with 6,984 listings available. Browse a diverse range of second-hand models like Elite i20, Creta, Swift, City, Grand i10, i10, and Kwid.
          Whether you're looking for a budget-friendly option starting at Rs. 50,000 or a premium upgrade, find the perfect car in top cities like Mumbai, Bangalore, Delhi, Chennai, and more.
          {expanded && (
            <>
              provide verified listings, competitive prices, and hassle-free transactions. Our trusted platform offers instant car valuations, ensuring a seamless experience whether you're buying or selling a car.
              Choose from a variety of financing options, certified dealers, and doorstep services to make your purchase effortless.
            </>
          )}
        </p>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="  font-medium mt-2 hover:underline transition-all duration-1000"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>


        <UsedBycity />

      </div>
      <Brands heading='Second Hand Cars Of Your Choice' showhr />
      <Featured showCategory={false} />
      <SellYourCar/>
      <Footer/>
    </div>
  );
}

export default UsedCars;
