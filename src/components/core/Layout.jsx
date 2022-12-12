import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <main className='mt-11 container mx-auto  max-w-[1000px] '>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
