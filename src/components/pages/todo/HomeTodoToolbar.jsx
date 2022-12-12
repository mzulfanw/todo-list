import React from 'react'
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'
import { Button, Menu } from '@/components/shared'
import { PLUS } from '@/lib/iconConstant'

function HomeTodoToolbar() {
  return (
    <div
      className='flex items-center justify-between'
    >
      <Button
        text='Tambah'
        isIcon
        icon={PLUS}
      />
      <Menu
        text='here'
        isIcon
        icon=''
      />
    </div>
  )
}

HomeTodoToolbar.propTypes = {}

export default HomeTodoToolbar