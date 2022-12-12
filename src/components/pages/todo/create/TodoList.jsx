import React from 'react'
import { Checkbox } from '@/components/shared'

const data = [
  {
    id: 1,
    text: 'Telur Ayam'
  },
  {
    id: 2,
    text: 'Telur Ayam'
  }
]

function TodoList() {
  return (
    <>
      {
        data?.map((item, index) => (
          <div
            className='bg-white shadow-md mb-10 h-[80px] flex items-center px-2'
            key={index}
          >
            <Checkbox

            />
            <p>{item.text}</p>
          </div>
        ))
      }
    </>
  )
}

export default TodoList