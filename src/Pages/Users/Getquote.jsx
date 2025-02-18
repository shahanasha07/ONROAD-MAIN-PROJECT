import React, { useState } from "react";
import mahindra from "../../assets/images/Common/mahindra.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faAngleUp,
  faCircleInfo,
  faPen,
  faPhone,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Components/Common/Footer";
import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Common/Navbar";
import EMI from "../../Components/Users/EMI";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";

function Getquote() {
  const [showDetails, setShowDetails] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const location = useLocation();
  const car = location.state?.car;

  if (!car) return <p>No car data found!</p>;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const variants = [
    {
      name: "XUV700 MX Petrol MT 5 STR",
      price: "Rs. 17.17 Lakh",
      details: "1997 Cc, Petrol, Manual, 197 Bhp",
    },
    {
      name: "XUV700 MX Petrol MT 5 STR",
      price: "Rs. 17.17 Lakh",
      details: "1997 Cc, Petrol, Manual, 197 Bhp",
    },
    {
      name: "XUV700 MX Petrol MT 5 STR",
      price: "Rs. 17.17 Lakh",
      details: "1997 Cc, Petrol, Manual, 197 Bhp",
    },
    {
      name: "XUV700 MX Petrol MT 5 STR",
      price: "Rs. 17.17 Lakh",
      details: "1997 Cc, Petrol, Manual, 197 Bhp",
    },
    {
      name: "XUV700 MX Petrol MT 5 STR",
      price: "Rs. 17.17 Lakh",
      details: "1997 Cc, Petrol, Manual, 197 Bhp",
    },
    {
      name: "XUV700 MX Petrol MT 5 STR",
      price: "Rs. 17.17 Lakh",
      details: "1997 Cc, Petrol, Manual, 197 Bhp",
    },
  ];

  const dealers = [
    { name: "Eram Motors", address: "Perinthalmanna Rd, Tirurkad" },
    { name: "Eram Motors", address: "633, Parambilangadi, Cherushola (P O)" },
  ];

  const faqs = [
    { question: `What Is The On Road Price Of ${car.name} Base Model?` },
    { question: `What Is The On Road Price Of ${car.name}  Top Model?` },
    { question: `What Is The Real World Mileage Of ${car.name} ?` },
    { question: `What Is The Seating Capacity In ${car.name} ?` },
    { question: `What Are The Dimensions Of ${car.name} ?` },
    { question: `Is ${car.name}  Available In 4×4 Variant?` },
    { question: `How Many Airbags Does ${car.name}  Get?` },
  ];

  const answers = [
    {
      answer: `The on-road price of the ${car.name}  base model varies by location. Please check with your nearest dealership for the exact price.`,
    },
    {
      answer: `The on-road price of the ${car.name}  top model depends on your city and variant. Contact your local dealer for accurate pricing.`,
    },
    {
      answer: `The real-world mileage of the ${car.name}  ranges from 12 to 17 km/l, depending on driving conditions and fuel type.`,
    },
    {
      answer: `The ${car.name}  is available in both 5-seater and 7-seater configurations.`,
    },
    {
      answer: `The ${car.name}  has a length of 4695 mm, a width of 1890 mm, a height of 1755 mm, and a wheelbase of 2750 mm.`,
    },
    {
      answer: `Yes, the ${car.name}  is available with an AWD (All-Wheel Drive) variant, which provides better off-road capability.`,
    },
    {
      answer: `The ${car.name}  comes equipped with up to 7 airbags, depending on the variant.`,
    },
  ];

  const [isEmiopen, setIsEmiOpen] = useState(false);

  const toggleEmi = () => {
    setIsEmiOpen(!isEmiopen);
  };

  return (
    <div>
      <Navbar />

      <div className="px-4 md:px-18 py-4 text-lg pt-24">
        <h1 className="text-2xl sm:text-4xl font-bold">
          {car.name} Price in Malappuram
        </h1>
        <p className="sm:py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <ul className="capitalize flex gap-4 md:gap-8 text-sm md:text-md flex-wrap justify-cente">
          <li
            className="cursor-pointer font-medium"
            onClick={() => scrollToSection("onroad-price")}
          >
            On-road Price
          </li>
          <li
            className="cursor-pointer font-medium"
            onClick={() => scrollToSection("price-list")}
          >
            Price List
          </li>
          <li
            className="cursor-pointer font-medium"
            onClick={() => scrollToSection("dealers")}
          >
            Dealers
          </li>
          <li
            className="cursor-pointer font-medium"
            onClick={() => scrollToSection("faqs")}
          >
            FAQs
          </li>
        </ul>
        <hr className="text-gray-300 mt-1" />
        <div className="bg-amber-10 border rounded-md sm:h-[70vh flex flex-col sm:flex-row  gap-2 sm:gap-8 sm:pt-8 pb-4 px-8 my-6">
          <div className="bg-amber-3 border border-gray-300 rounded-sm w-1/3  h-10 flex gap-2 px-1 py-1 text-white absolute">
            <div className="w-1/3 text-center bg-gray-400 rounded-sm">
              images
            </div>
            <div className="w-1/3 text-center bg-gray-400 rounded-sm">
              coloures
            </div>
            <div className="w-1/3 text-center bg-gray-400 rounded-sm">
              360 &deg; View
            </div>
          </div>
          <div
            className="border border-gray-400 w-1/2 sm:w-full lg:w-full md:h-[55vh] rounded-xl mt-16"
            style={{
              background: `url(${car.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div id="onroad-price" className="sm:leading-8  bg-pink-20">
            <p className="font-bold text-xl">{car.name} price</p>
            <p className="text-sm opacity-60 py-2">
              {car.name} price starts from ₹ {car.price} and goes up to ₹ 32.75
              Lakh. XUV700 EMI starts from ₹ 28,367.{" "}
            </p>
            <div className="bg-red-20 flex ">
              <div className="w-1/2 px-4 border border-gray-300 py-2 rounded-l-sm">
                <p className="opacity-50">Variant</p>
                <p className="font-medium text-sm">
                  MX Petrol MT 5 STR{" "}
                  <FontAwesomeIcon icon={faAngleRight} className="opacity-40" />{" "}
                </p>
              </div>
              <div className="w-1/2 px-4 border border-gray-300 py-2 rounded-r-sm">
                <p className="opacity-50">city</p>
                <p className="font-medium text-sm">
                  Bangalore{" "}
                  <FontAwesomeIcon icon={faAngleRight} className="opacity-40" />{" "}
                </p>
              </div>
            </div>
            <p className="font-bold text-xl py-2">{car.price} </p>
            <p className="opacity-80">
              On Road Price,{" "}
              {/* <span className="underline decoration-dotted underline-offset-4">
                Malappuram
              </span>{" "} */}
              Bangalore
              <FontAwesomeIcon
                icon={faPen}
                className="text-xs ml-2 opacity-90"
              />
           
            </p>
            <div className="bg-[#d9d9d96d] w-full h-[20vh] rounded-md text-sm px-2 md:px-4 py-2 mt-2 ">
              <div className="bg-amber-3 border border-gray-300 rounded-sm flex gap-2 px-1 py-1  bg-white">
                <div className="w-1/2 py-1 text-center bg-gray-400 rounded-sm text-white">
                  Monthly EMI
                </div>
                <div className="w-1/2 py-1 text-center  rounded-sm">
                  Price Breakup
                </div>
              </div>
              <div className="flex py-3">
                <div className="flex-1">
                  <p>
                    XUV700 MX Petrol MT 5 STR EMI
                    <p className="font-bold">
                      28,367
                      <span className="text-sm opacity-50 font-normal">
                        {" "}
                        for 5 Years
                      </span>
                    </p>
                  </p>
                </div>
                <button className="border px-8 rounded-sm ">
                  GET EMI Offers
                </button>
              </div>
              <hr className="text-gray-300" />

              <button className=" font-medium py-2 w-full" onClick={toggleEmi}>
                EmI Calculator
              </button>
              <button>Get Festive Offers</button>
            </div>

            {isEmiopen &&(
               <div className="fixed inset-0 bg-black/75 bg-opacity-60 flex items-center justify-center z-[99] ">
               <div className="relative bg-white p- rounded-lg max-w-3xl w-full">
                 <button
                   onClick={toggleEmi}
                   className="absolute top-2 right-2 bg-gray-50 px-2  rounded-full"
                 >
                   X
                 </button>
                 <EMI />
               </div>
             </div> 
            )}
          </div>
        </div>

        {/* Price Section */}
        <div id="price-list">
          <h1 className="font-bold text-2xl py-2 ">
            {car.name} On Road Price in Malappuram
          </h1>
          <p>
            Variant:{" "}
            <span className="underline decoration-dotted underline-offset-4">
              E 1.5 Petrol
            </span>{" "}
            <FontAwesomeIcon icon={faPen} />{" "}
          </p>

          {/* Price Breakdown */}
          <div className="border border-gray-400 rounded-xl px-4 py-4 leading-9 max-w-5xl my-4">
            <p className="flex justify-between">
              <span>
                Ex-Showroom Price{" "}
                <FontAwesomeIcon icon={faCircleInfo} className="opacity-80" />
              </span>{" "}
              <span>Rs. 11,10,900</span>
            </p>

            {/* Individual Registration Section */}
            <p className="flex justify-between">
              <span className=" underline  decoration-dotted underline-offset-4">
                Individual Registration{" "}
                <FontAwesomeIcon icon={faPen} className="opacity-80" />
              </span>{" "}
              <span>Rs. 1,74,635</span>
            </p>

            {/* Detailed Breakdown Below Individual Registration */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                showDetails
                  ? "max-h-[500px] opacity-100 bg-[#f6f6f6d6] "
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="flex justify-between ">
                RTO Charges <span>Rs. 2,17,850</span>
              </p>
              <hr className="text-gray-300 " />
              <p className="flex justify-between ">
                Total Registration Charges <span>Rs. 2,17,850</span>
              </p>
            </div>

            <p className="flex justify-between">
              <span>
                Insurance{" "}
                <FontAwesomeIcon icon={faCircleInfo} className="opacity-80" />
              </span>
              <span>Rs. 53,761</span>
            </p>

            {/* Other Charges Section */}
            <p className="flex justify-between">
              Other Charges <span>Rs. 13,109</span>
            </p>

            {/* Detailed Breakdown Below Other Charges */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                showDetails
                  ? "max-h-[500px] opacity-100 bg-[#f6f6f6d6] "
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="flex justify-between ">
                Tax Collected at Source (TCS) <span>Rs. 11,000</span>
              </p>
              <p className="flex justify-between ">
                Hypothecation Charges <span>Rs. 1,500</span>
              </p>
              <p className="flex justify-between ">
                FASTag <span>Rs. 500</span>
              </p>
            </div>

            {/* Toggle Button */}
            <p
              className="cursor-pointer text-blue-600 mt-4"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails
                ? "Hide Detailed Price Breakup"
                : "Show Detailed Price Breakup"}
              <FontAwesomeIcon icon={showDetails ? faAngleUp : faAngleDown} />
            </p>

            {/* Always Visible On-Road Price */}
            <hr className="text-gray-300" />
            <h1 className="flex justify-between font-bold text-sm sm:text-2xl py-4">
              On Road Price in Malappuram<span>Rs. 13,52,405</span>
            </h1>
            <button className="bg-[#D9D9D9] px-6 py-2 font-medium rounded-lg lg:w-1/3">
              Get January Offers
            </button>
          </div>
        </div>

        {/* Contact */}

        <div className="border border-gray-400 flex flex-col items-start sm:flex-row md:items-center sm:gap-8 py-4 max-w-5xl px-6">
          <FontAwesomeIcon icon={faTag} className="text-3xl md:text-5xl" />
          <ul className="leading-8 lg:leading-12">
            <li className="lg:text-3xl font-bold">Contact {car.name} India</li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> 08068441441
            </li>
            <li className="">
              Get in touch for the best buying option from your authorized
              dealer
            </li>
          </ul>
          <button className="bg-[#D9D9D9] px-12 py-3 rounded-md font-medium text-sm">
            Get the best deal
          </button>
        </div>

        <div className="py-8 rounded-lg max-w-5xl ">
          <h1 className="sm:text-2xl font-bold mb-4">
            {car.name} Price In Malappuram (Variant Price List)
          </h1>

          {/* Filter Buttons */}
          <div className="flex gap-1 sm:gap-3 mb-4">
            {["Petrol", "Diesel", "Manual", "Automatic(TC)"].map((filter) => (
              <button
                key={filter}
                className=" text-sm px-2 sm:px-4 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-200"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Variants Table */}
          <div className="border border-gray-300 rounded-md overflow-hidden md:px-8 bg-[#EEE] text-sm sm:text-lg">
            <div className="grid grid-cols-2 p-3 font-semibold ">
              <span>Variants</span>
              <span className="text-right">Price in Malappuram</span>
            </div>

            {variants
              .slice(0, showMore ? variants.length : 4)
              .map((variant, index) => (
                <div
                  key={index}
                  className="border-t border-gray-300 p-3 grid grid-cols-2"
                >
                  <div>
                    <p className="font-medium">{variant.name}</p>
                    <p className="text-sm text-gray-500">{variant.details}</p>
                  </div>
                  <p className="text-right font-semibold">{variant.price}</p>
                </div>
              ))}
          </div>

          {/* View More Button */}
          <button
            className="w-full  text-blue-600 font-medium bg-[#EEE] p-6 rounded-b-lg border border-t-0 border-gray-300 rounded-t-sm "
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "View Less Variants" : "View More Variants"}
          </button>
        </div>

        {/* delears */}

        <div
          id="dealers"
          className="bg-[#EEE] p-4 rounded-lg shadow-md max-w-5xl"
        >
          <h2 className="sm:text-2xl font-bold mb-4">
            {car.name} Dealers In Malappuram
          </h2>
          {dealers.map((dealer, index) => (
            <div key={index} className="bg-white p-3 mb-2 rounded-lg shadow">
              <h3 className="font-semibold">{dealer.name}</h3>
              <p className="text-sm text-gray-600">{dealer.address}</p>
            </div>
          ))}
        </div>

        {/* FAQS */}

        <div
          id="faqs"
          className="bg-[#EEE] p-4 rounded-lg shadow-md mt-4 max-w-5xl"
        >
          <h2 className="text-lg font-bold mb-2">FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white text-left p-3 rounded-lg shadow flex justify-between items-center text-sm md:text-lg"
              >
                {faq.question}
                <FontAwesomeIcon
                  icon={openIndex === index ? faAngleUp : faAngleDown}
                />
              </button>
              {openIndex === index && (
                <p className="p-3 text-gray-600 bg-gray-200 rounded-lg mt-1">
                  {answers[index].answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Getquote;
