import React from "react";
import bg from "../assets/images/Common/bgg.png";
import car from "../assets/images/Common/bmw.png";
import Navbar from "../Components/Common/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import mahindra from '../assets/images/Common/mahindra.webp'

function Home() {
  return (
    <div className="bg-gray-200 pb-24">
      <Navbar />
      <div
        className="bg-gray-800 w-full h-screen flex flex-col justify-end items-center"
        style={{ background: `url(${bg})` }}
      >

        <div
          className="bg-red-40 w-2/4 h-auto "
        >
          <h1 className="text-5xl/16 text-[#593636]  text-center font-inter font-[800] itali">Your One-Stop Solution for All Car Needs!</h1>
          <p className="text-2xl/8 text-[#593636] font-bold text-center px-28 pb-6">Discover cars, services, and insurance plans
            tailored to your needs.</p>
        </div>

        <div
          className=" w-2/4 h-2/4 mb-"
          style={{
            background: `url(${car})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
          }}
        ></div>
      </div>
      <h1 className="text-center font-black text-5xl text-[#593636] pt-6 uppercase"  >Discover your car </h1>
      <div className="bg-gray-400 flex w-2/3 m-auto justify-between py-2 px-2 my-2">
        <div >
          <button className="bg-[#D9D9D9] py-2 px-3 font-medium cursor-pointer">New Car<FontAwesomeIcon icon={faAngleDown} className="ml-3" /> </button>
          <FontAwesomeIcon icon={faSearch} className="relative left-8 opacity-50 text-sm" />
          <input type="text" placeholder=" search for a car name" className="outline-none px-8 text-md " />
        </div>
        <button className="bg-[#593636] text-white py-2 px-8 font-medium"><Link>Search</Link></button>
      </div>
      {/* featured cars */}
      <div className="px-46 py-18">
        <h1 className="font-bold text-2xl">Featured Cars</h1>
        <ul className="flex gap-6  capitalize mt-4 ">
          <li className="underline underline-offset-8 decoration-4 decoration-[#593636]">trending cars</li>
          <li>popular cars</li>
          <li>upcoming cars</li>
        </ul>


        <div className=" w-full h-[45vh] flex gap-4 px-4 my-6 relative">
          <div className="bg-[#D9D9D9] w-1/3 h-full rounded-lg " >
            <div className="w-full h-3/5 rounded-t-lg bg-white">
              <img src={mahindra} alt="" className="m-auto" />
            </div>
            <div className="px-6 py-4 leading-[1.8rem]">
              <p className="">Mahindra XUV700 </p>
              <p className="font-bold">17.17Lakh</p>
              <button className="px-12 rounded-sm font-medium text-[#593636] border">Get quote</button>
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-1/3 h-full rounded-lg " >
            <div className="w-full h-3/5 rounded-t-lg bg-white">
              <img src={mahindra} alt="" className="m-auto" />
            </div>
            <div className="px-6 py-4 leading-[1.8rem]">
              <p className="">Mahindra XUV700 </p>
              <p className="font-bold">17.17Lakh</p>
              <button className="px-12 rounded-sm font-medium text-[#593636] border">Get quote</button>
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-1/3 h-full rounded-lg " >
            <div className="w-full h-3/5 rounded-t-lg bg-white">
              <img src={mahindra} alt="" className="m-auto" />
            </div>
            <div className="px-6 py-4 leading-[1.8rem]">
              <p className="">Mahindra XUV700 </p>
              <p className="font-bold">17.17Lakh</p>
              <button className="px-12 rounded-sm font-medium text-[#593636] border">Get quote</button>
            </div>
            <div className="bg-gray-100 w-10 h-10 absolute top-1/2 right-[-5px] rounded-full">
            <FontAwesomeIcon icon={faAngleRight} className="relative left-3 top-2 text-2xl "/>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
  );
}

export default Home;
