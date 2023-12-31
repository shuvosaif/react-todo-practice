import React from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <div className='grid grid-col-12'>
      <Header />
      <Sidebar />
      <div className='col-span-9 h-[75vh] bg-gray-300 '>{children}</div>
      <Footer />
    </div>
  )
}
