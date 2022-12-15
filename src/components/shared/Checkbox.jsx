import React from 'react'
import PropTypes from 'prop-types'

function Checkbox({
  name,
  value,
  onChange = () => { },
  ...others
}) {

  const convertParams = (name, value) => ({
    target: {
      name, value
    }
  })

  return (
    <div>
      <input
        type='checkbox'
        name={name}
        className=' border-slate-300 text-sky-500 focus:ring-sky-500'
        value={value}
        onChange={e => {
          onChange(convertParams(name, e.target.value))
        }}
        {...others}
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