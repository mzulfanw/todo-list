import React from 'react'
import PropTypes from 'prop-types'

function Checkbox({
  name,
  value,
  onChange = () => { }
}) {
  return (
    <div>
      <input
        type='checkbox'
        name={name}
        className='bg-main border-main text-main focus:ring-main'
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func
}

export default Checkbox