import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@/components/shared'
import { PLUS } from '@/lib/iconConstant'

function HomeTodoToolbar({
  handleTodo = () => { }
}) {
  return (
    <div
      className='flex items-center justify-between'
    >
      <h1
        className='text-3xl font-bold'
        data-cy='activity-title'
      >Activity</h1>
      <Button
        text='Tambah'
        isIcon
        icon={PLUS}
        onClick={handleTodo}
        data-cy='activity-add-button'
      />
    </div>
  )
}

HomeTodoToolbar.propTypes = {
  handleTodo: PropTypes.func
}

export default HomeTodoToolbar