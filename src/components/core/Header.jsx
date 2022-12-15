import React from 'react'

function Header() {
  return (
    <div
      className='h-[105px] bg-sky-500 text-white'
    >
      <div
        className='max-w-[1000px] lg:pl-[220px] md:pl-[220px] pl-[80px] pt-[38px]'
        data-cy='header-background'
      >
        <h2
          data-cy='header-title'
          className='font-bold text-base'
        >
          TO DO LIST APP
        </h2>
      </div>
    </div>
  )
}

export default Header