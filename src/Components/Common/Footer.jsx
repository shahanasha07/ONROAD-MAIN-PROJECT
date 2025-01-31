import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-[#D9D9D9]  py-10">
      <div className="container mx-auto px-12 grid md:grid-cols-4 gap-">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">ONROAD</h2>
     
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="  text-gray-400 hover:text-black">Home</a></li>
            <li><a href="#" className=" text-gray-400 hover:text-black">New cars</a></li>
            <li><a href="#" className=" text-gray-400 hover:text-black">Used cars</a></li>
            <li><a href="#" className=" text-gray-400 hover:text-black">Service</a></li>
            <li><a href="#" className=" text-gray-400 hover:text-black">Exchange</a></li>
            <li><a href="#" className=" text-gray-400 hover:text-black">Insurance</a></li>
            <li><a href="#" className=" text-gray-400 hover:text-black">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className=" text-gray-400 hover:text-black">9567322588 </a></li>
            <li><a href="#" className=" text-gray-400 hover:text-black">onroad@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 ">
            <li><a href="#" className="text-gray-400 hover:text-black">whatsApp</a></li>
            <li><a href="#" className="text-gray-400 hover:text-black">Twitter</a></li>
            <li><a href="#" className="text-gray-400 hover:text-black">Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:text-black">Instagram</a></li>
          </ul>
        </div>

       

      </div>
        <hr className='opacity-10 mt-8'/>
      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} ONROAD. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer