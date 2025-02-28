import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRupeeSign, faUserCheck, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SellYourCar = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-5xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-gray-800">Want to Sell Your Car?</h2>
      <p className="text-gray-600 mt-2">
        Over 3.5 million used car buyers visit every month looking for a used car!
      </p>

      {/* Features Section */}
      <div className="flex justify-between items-center mt-4 text-gray-700">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faClock} className="text-2xl" />
          <p className="text-sm mt-1">Sell car faster</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faRupeeSign} className="text-2xl " />
          <p className="text-sm mt-1">Get best deal</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faUserCheck} className="text-2xl " />
          <p className="text-sm mt-1">Verified buyers</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faCalendarCheck} className="text-2xl" />
          <p className="text-sm mt-1">90 days ad validity</p>
        </div>
      </div>

      {/* CTA Button */}
      <Link to={'/sell-car'}>
      <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md text-lg font-semibold hover:bg-red-700 transition-all cursor-pointer">
        Sell Your Car
      </button>
      </Link>
    </div>
  );
};

export default SellYourCar;

