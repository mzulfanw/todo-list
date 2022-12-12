import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

function Button({
  text,
  isIcon = false,
  icon,
  onClick = () => { }
}) {
  return (
    <Fragment>
      {
        isIcon && (
          <button
            className='bg-main text-white rounded-3xl py-2.5 px-5'
            onClick={onClick}
          >
            <div
              className='flex items-center justify-between gap-2'
            >
              <Icon path={icon} maxWidth={14} />
              <p className='font-poppins'>{text}</p>
            </div>
          </button>

        )
      }
    </Fragment >
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isIcon: PropTypes.bool,
  icon: PropTypes.any,
  onClick: PropTypes.func
}

export default Button