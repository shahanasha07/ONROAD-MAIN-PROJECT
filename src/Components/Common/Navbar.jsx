import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

function Navbar() {
  return (
    <div>
        <nav className=' w-full fixed flex justify-between px-8 py-3 bg-gray-50  z-99 dark:bg-black dark:text-white'>
            <h1 className='font-extrabold text-xl'>ONROAD</h1>
            <ul className='flex gap-5 text-lg font-semibold'>
                <li><Link to={'/'} > New cars</Link> </li>
                <li><Link to={'/used-cars'} > Used cars</Link> </li>
                <li><Link to={'/service'} >Service</Link> </li>
                <li><Link to={'/'} >Exchange</Link> </li>
                <li><Link to={'/'} >Insurance</Link> </li>
                <li><Link to={'/'} >Contact</Link> </li>
            </ul>
            <div className='flex'>
              <input type="search" name="" id="" placeholder='search' className='border border-gray-500 outline-none px-2 w-[20vw] rounded-sm' />
            <button className=' dark:bg-[#da291c] font-extrabold  px-6 py-1 '> <Link to={'/signup'}> <FontAwesomeIcon icon={faUser}/></Link> </button>
            {/* <ThemeToggle/> */}
            </div>
        </nav>
    </div>
  )
}

export default Navbar