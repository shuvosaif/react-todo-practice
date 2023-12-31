import React from 'react'

export const ShowTask = () => {
  return (
    <div className=''>
      <div className=''>
        <h1 className=''>All Listed Tasked</h1>
      </div>
      <div className='grid grid-cols-6 gap-4 m-4 p-4 bg-gray-300  rounded '>
        <div class='col-start-3 col-span-4 '>Task 01</div>
        <div class='col-start-3 col-span-4 '>Task 02</div>
        <div class='col-start-3 col-span-4 '>Task 03</div>
        <div class='col-start-3 col-span-4 '>Task 04</div>
      </div>
    </div>
  )
}
