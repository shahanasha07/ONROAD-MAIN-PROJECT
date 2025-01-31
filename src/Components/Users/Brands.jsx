import React, { useEffect, useState } from 'react';
import benz from '../../assets/images/Common/benz.png';
import bmw from '../../assets/images/Common/bmw-logo.png';
import landrover from '../../assets/images/Common/land-rover-logo.png';
import mahindra from '../../assets/images/Common/mahindra.png';
import mg from '../../assets/images/Common/mg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Brands() {
  const [startIndex, setStartIndex] = useState(0);

  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); 
    return () => clearTimeout(timer); 
}, []);



  const brands = [
    { img: benz, name: 'Mercedes-Benz' },
    { img: bmw, name: 'BMW' },
    { img: landrover, name: 'Land Rover' },
    { img: mahindra, name: 'Mahindra' },
    { img: mg, name: 'MG' },
    { img: mg, name: 'MGdfd' },
    { img: landrover, name: 'Land Roveffdr' },
    { img: mahindra, name: 'Mahindrafffffffff' },
    { img: mg, name: 'MGfff' },
    { img: mg, name: 'MGaaaaa' },
  ];

  const visibleBrands = brands.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < brands.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };




  return (
    <div className="px-72">
      <h1 className="font-bold text-2xl py-12">Search Cars By Brand</h1>
      <div className="bg-amber-20 w-full pb-25 flex justify-between gap-4 relative overflow-hidden z-10">
  {visibleBrands.map((brand, i) => (
    <div 
    
      key={i} 
      className={`bg-[#D9D9D9] w-1/4 m-auto py-1 transition-transform duration-900 ease-out
        ${i === Math.floor(visibleBrands.length / 2) ? 'scale-125  drop-shadow-xl mb-2  text-sm ' : 'scale-100'} ${show ? 'transition-transform duration-900 ease-out': ''} `}
    >
      <img 
        src={brand.img} 
        alt={brand.name} 
        className={`w-2/3 m-auto grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out
          ${i === Math.floor(visibleBrands.length / 2) ? ' pt-7 ' : ''}`} 
      />  
      <h1 className="text-center">{brand.name}</h1>
    </div>
  ))}

  <div>
    <div className="relative top-[30vh] right-[35vw] z-99">
      <button
        onClick={handleNext}
        className={`bg-gray-200 w-10 h-10 absolute left-14 top- z-99 transform -translate-y-1/2 rounded-full flex items-center justify-center shadow-md transition-opacity duration-300 ease-in-out
          ${startIndex + 3 >= brands.length ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={startIndex + 3 >= brands.length}
      >
        <FontAwesomeIcon icon={faAngleRight} className="text-2xl" />
      </button>
      <button
        onClick={handlePrev}
        className={`bg-gray-200 w-10 h-10 absolute transform -translate-y-1/2 rounded-full flex items-center justify-center shadow-md z-10 transition-opacity duration-300 ease-in-out
          ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={startIndex === 0}
      >
        <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
      </button>
    </div>
  </div>
</div>

    </div>
  );
}

export default Brands;
