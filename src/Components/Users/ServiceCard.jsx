import React from 'react'

function ServiceCard(props) {
  return (
    <div>
        <div className=" h-full rounded-2xl shadow-xl border-1 py-4 border-[#D9D9D9] transition-all hover:bg-blue-950 ">
          <div className="h-[13vh] w-1/2 m-auto bg-amber-2 ">
            <img src={props.img} alt="" className="w-2/3 m-auto " />
          </div>
          <div className="h-[15vh] bg-amber-5 text-center capitalize">
            <h1 className="font-bold text-xl text-blue-900 hover:text-white">
              {props.heading}
            </h1>
            <p className="text-gray-500">
              {props.para}
            </p>
          </div>
        </div>
    </div>
  )
}

export default ServiceCard