import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className=' w-full fixed flex justify-between px-8 py-3 bg-gray-50'>
            <h1 className='font-extrabold text-xl'>ONROAD</h1>
            <ul className='flex gap-5 text-lg font-semibold'>
                <li><Link to={'/'} > New cars</Link> </li>
                <li><Link to={'/'} > Used cars</Link> </li>
                <li><Link to={'/'} >Service</Link> </li>
                <li><Link to={'/'} >Exchange</Link> </li>
                <li><Link to={'/'} >Insurance</Link> </li>
                <li><Link to={'/'} >Contact</Link> </li>
            </ul>
            <button className='bg-[#D9D9D9] font-extrabold  px-6 py-1 '>Sign up</button>
        </nav>
    </div>
  )
}

export default Navbar