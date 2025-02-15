import React, { useEffect, useState } from "react";
import bg from "../../assets/images/Common/bgg.png";
import car from "../../assets/images/Common/bmw.png";
import Navbar from "../../Components/Common/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import Featured from "../../Components/Users/Featured";
import Brands from "../../Components/Users/Brands";
import YourChoise from "../../Components/Users/YourChoise";
import OurService from "../../Components/Users/OurService";
import Footer from "../../Components/Common/Footer";
import { useInView } from "framer-motion";


function Home() {

  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); 
    return () => clearTimeout(timer); 
}, []);

  return (
    <div className="bg-gray-200 dark:bg-black dark:text-white">
      <Navbar />
      <div
        className="bg-gray-800 w-full h-screen flex flex-col justify-end items-center"
        style={{ background: `url(${bg})` }}
      >
        <div className="bg-red-40 w-2/4 h-auto ">
          <h1 className={`text-5xl/16 text-[#593636] text-center font-inter font-[800] itali transition-all duration-1000 ${show ? "translate-y-0" : "translate-x-3/4"
                  }`}>
            Your One-Stop Solution for All Car Needs!
          </h1>
          <p className={`text-2xl/8 text-[#593636] font-bold text-center px-28 pb-6 transition-all duration-700 ${show ? "translate-y-0" : "translate-x-3/4"
                  }`}>
            Discover cars, services, and insurance plans tailored to your needs.
          </p>
        </div>

        <div
        // ref={ref}
          className={`w-2/4 h-2/4 transition-all duration-1000 ${show ? "scale-100" : "scale-50"
                  }`}
          style={{
            background: `url(${car})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </div>
      <h1 className="text-center font-black text-5xl text-[#593636]  pt-6 uppercase dark:text-white ">
        Discover your car{" "}
      </h1>
      <div className="bg-gray-400 flex w-2/3 m-auto justify-between py-2 px-2 my-2 dark:bg-[#EEEEEE] dark:text-black">
        <div>
          <button className="bg-[#D9D9D9]  dark:bg-[#da291c] dark:text-white py-2 px-3 font-medium cursor-pointer">
            New Car
            <FontAwesomeIcon icon={faAngleDown} className="ml-3" />{" "}
          </button>
          <FontAwesomeIcon
            icon={faSearch}
            className="relative left-8 opacity-50 text-sm"
          />
          <input
            type="text"
            placeholder=" search for a car name"
            className="outline-none px-8 text-md "
          />
        </div>
        <button className="bg-[#593636] text-white py-2 px-8 font-medium dark:bg-[#da291c] ">
          <Link>Search</Link>
        </button>
      </div>

      <Featured />
      <Brands />

      {/* your choice */}
          <YourChoise/>
          <OurService/>

          {/* sell car with us */}
          <div className="bg-black text-white py-24 text-center">
            <h1 className="capitalize font-bold text-5xl">Selling Your Car Is Easy With US </h1>
            <p className="py-5 w-[48vw] m-auto text-xl">Then you are at the right place. ONROAD is India s premier platform for buying,
            selling, and servicing luxury and premium cars.</p>
            <button className="capitalize bg-[#D9D9D9] px-12 py-2 text-black rounded-sm font-bold mt-8 ">sell it now </button>
          </div>`

          <Footer/>
    </div>
  );
}

export default Home;
