import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line react/display-name
const Input = forwardRef(({
  name,
  value,
  title = '',
  onChange = () => { },
  ...others
}, ref) => {
  return (
    <>
      <p
        data-cy='modal-add-name-title'
        className='mb-[9px]'
      >
        {title}
      </p>
      <input
        type='text'
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
        {...others}
      />
    </>
  )
})

Input.propTypes = {
  name: PropTypes.name,
  value: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func
}

export default Input