import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceBox({ mainheading, services }) {
  return (
    <div className="px-72 pt-18">
      <h1 className="text-blue-900 text-4xl font-bold text-center pb-8">
        
        {mainheading}
      </h1>
      <div className="bg-amber-2 w-full h-[30vh] flex gap-5 bg-[#D9D9D9 ">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            img={service.img} 
            heading={service.heading} 
            para={service.para} 
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceBox;
