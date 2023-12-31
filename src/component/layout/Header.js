import React from 'react'
import logo from '../../asset/download.jpg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='col-span-12 h-[12vh] bg-gray-300 '>
      {/* <h1 className=" justify-center p-5 bg-yellow-300 w-4/12 h-[2vh] m-auto rounded text-center "> TO DO APPLICATION</h1> */}
      <div className='  h-full flex  justify-between items-center   '>
        <div className=' bg-sky-500 '>
          <img src={logo} alt='Logo' className='h-12' />
        </div>
        <div className=' w-full text-lg font-semibold bg-sky-500   rounded flex  justify-between items-center  '>
          <div>
            <h1 className='p-3 ml-16 text-white hover:bg-red-500 rounded transition-all duration-1000 text-center text-2xl italic font-serif'>
              TO DO APPLICATION
            </h1>
          </div>
          <div className='flex gap-3 mr-6'>
            <Link
              to='/about'
              class='text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              About
            </Link>
            <Link
              to='/contact'
              class='text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Contact
            </Link>
          </div>
        </div>
        <div className=''></div>
      </div>
    </div>
  )
}
