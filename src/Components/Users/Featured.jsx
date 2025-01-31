import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import mahindra from "../../assets/images/Common/mahindra.webp";

function Featured() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 9; 
  const itemsPerView = 3;
  const maxIndex = totalItems - itemsPerView;

  const slideRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="px-72 py-8">
      <h1 className="font-bold text-2xl">Featured Cars</h1>
      <ul className="flex gap-6 capitalize mt-4">
        <li className="underline underline-offset-8 decoration-4 decoration-[#593636]">
          trending cars
        </li>
        <li>popular cars</li>
        <li>upcoming cars</li>
      </ul>

   
      <div className="relative w-full my-6 overflow-hidden z-10">
        <button
          onClick={slideLeft}
          className={`bg-gray-100 w-10 h-10 absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full flex items-center justify-center shadow-md z-10 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentIndex === 0}
        >
          <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 320}px)` }} 
          >
            {[...Array(totalItems)].map((_, index) => (
              <div key={index} className="bg-[#D9D9D9] w-[300px] flex-shrink-0 h-[45vh] rounded-lg">
                <div className="w-full h-3/5 rounded-t-lg bg-white flex items-center justify-center">
                  <img src={mahindra} alt="Car" className="w-4/5" />
                </div>
                <div className="px-6 py-4 leading-[1.8rem]">
                  <p>Mahindra XUV700</p>
                  <p className="font-bold">17.17 Lakh</p>
                  <button className="px-12 py-1 rounded-sm font-medium text-[#593636] border">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={slideRight}
          className={`bg-gray-100 w-10 h-10 absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full flex items-center justify-center shadow-md ${
            currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentIndex >= maxIndex}
        >
          <FontAwesomeIcon icon={faAngleRight} className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Featured;
