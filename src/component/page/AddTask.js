import React from 'react'

export const AddTask = () => {
  return (
    <div className=''>
      <div className=' '>
        <div className=''>
          <div className=''>
            <h1 className=' text-2xl italic '>Add Different Task Here</h1>
          </div>
          <div className=''>
            <input
              class='placeholder-red-300 border border-blue-400 text-center rounded p-4 '
              placeholder='Please Insert Task'
            />
          </div>
        </div>
        <div className='col-start-3 col-end-7'>
          <button
            type='submit'
            class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
