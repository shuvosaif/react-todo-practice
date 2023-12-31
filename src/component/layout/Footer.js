import React from 'react'
import fb from '../../asset/fb.avif'
import wts from '../../asset/wts.avif'
import ubr from '../../asset/ubr.png'

export const Footer = () => {
  return (
    <div className='col-span-12 h-[13vh] bg-gray-400'>
      <div className='flex flex-row'>
        <div className=' basis-1/4 flex justify-between  items-center'>
          <img src={fb} alt='Logo' className='h-12 m-auto p-2' />
          <img src={wts} alt='Logo' className='h-12 m-auto p-2 ' />
          <img src={ubr} alt='Logo' className='h-12 m-auto p-2' />
        </div>
        <div className='basis-3/4 p-3'>
          <p className='text-start text-purple-700 p-3  text-xl text '>
            © 2024 Innovexa Solution, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
