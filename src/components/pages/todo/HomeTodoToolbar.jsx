import React from 'react'
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'
import { Button, Menu } from '@/components/shared'
import { PLUS } from '@/lib/iconConstant'

function HomeTodoToolbar({
  handleTodo = () => { }
}) {
  return (
    <div
      className='flex items-center justify-between'
    >
      <Button
        text='Tambah'
        isIcon
        icon={PLUS}
        onClick={handleTodo}
      />
      <Menu
        text='here'
        isIcon
        icon=''
      />
    </div>
  )
}

HomeTodoToolbar.propTypes = {
  handleTodo: PropTypes.func
}

export default HomeTodoToolbar