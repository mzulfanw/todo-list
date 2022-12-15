import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

function Button({
  text,
  isIcon = false,
  icon,
  classes,
  onClick = () => { },
  children,
  ...others
}) {
  return (
    <Fragment>
      {
        isIcon ? (
          <button
            className='bg-sky-500 text-white rounded-3xl py-2.5 px-5'
            onClick={onClick}
            type='submit'
            {...others}
          >
            <div
              className='flex items-center justify-between gap-2'
            >
              <Icon path={icon} maxWidth={14} />
              <p className='font-poppins'>{text}</p>
            </div>
          </button>
        ) : (
          <button
            className={`rounded-3xl py-2.5 px-5 ${classes}`}
            onClick={onClick}
            type='button'
            {...others}
          >
            {children}
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
  classes: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Button