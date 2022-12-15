import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from '@/components/shared'
import Indicator from '@/components/shared/Indicator'

function DetailList({
  list,
  handleUpdateTodoItems = () => { }

}) {
  const [checked, setChecked] = useState()

  const handleUpdateTodo = (item) => {
    setChecked(item.is_active ? false : true)
    setChecked(!checked)
    const payload = {
      id: item.id,
      is_active: checked ? 1 : 0
    }
    handleUpdateTodoItems(payload)
  }

  return (
    <div
      className='pb-10'
    >
      {
        list?.length > 0 && (
          list?.map((item, index) => (
            <div
              className='bg-white shadow-md mb-4 h-[80px] flex items-center px-6'
              key={index}
            >
              <div className='flex gap-4 items-center justify-between'>
                <Checkbox
                  name='todoItems'
                  value={item.id}
                  onChange={() => { handleUpdateTodo(item) }}
                />
                <Indicator type={item.priority} />
                <span>{item.title}</span>
              </div>
            </div>
          ))
        )
      }
    </div>
  )
}

DetailList.propTypes = {
  list: PropTypes.array,
  values: PropTypes.object,
  handleUpdateTodoItems: PropTypes.func
}

export default DetailList