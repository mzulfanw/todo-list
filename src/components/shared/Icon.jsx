import React from 'react'
import PropTypes from 'prop-types'

function Icon({
  path,
  classes,
  maxWidth,
  ...others
}) {
  return (
    <img
      src={path}
      alt='icon'
      className={classes}
      style={{
        width: '100%',
        maxWidth: maxWidth || '48px',
        height: 'auto'
      }}
      {...others}
    />
  )
}

Icon.propTypes = {
  path: PropTypes.string,
  classes: PropTypes.string,
  maxWidth: PropTypes.string
}

export default Icon