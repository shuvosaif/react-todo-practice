import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='col-span-3 h-[75vh] bg-blue-400'>
      <div className=' '>
        <p className='text-center text-amber-300 font-serif text-lg pt-10  '>
          Activities List
        </p>
      </div>
      <br />
      <div className=''>
        <Link
          to='/addTask'
          className='block w-full h-full text-lg hover:bg-amber-400 text-white rounded p-3 border'
        >
          Add Task
        </Link>
        <Link
          to='/showTask'
          className='block w-full h-full text-lg hover:bg-amber-400 text-white rounded p-3 border '
        >
          Show Task
        </Link>
      </div>
    </div>
  )
}
