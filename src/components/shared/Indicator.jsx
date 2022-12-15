/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'

const Indicator = ({ type, ...other }) => {
  switch (type) {
    case 'Very High':
    case 'very-high':
      return <span className='w-3 h-3 rounded-full mr-4 lg:mr-6 bg-red-500' {...other} />
    case 'High':
    case 'high':
      return <span className='w-3 h-3 rounded-full mr-4 lg:mr-6 bg-yellow-500' {...other} />
    case 'Medium':
    case 'normal':
      return <span className='w-3 h-3 rounded-full mr-4 lg:mr-6 bg-green-500' {...other} />
    case 'Low':
    case 'low':
      return <span className='w-3 h-3 rounded-full mr-4 lg:mr-6 bg-blue-500' {...other} />
    case 'Very Low':
    case 'very-low':
      return <span className='w-3 h-3 rounded-full mr-4 lg:mr-6 bg-purple-500' {...other} />

    default:
      return null
  }
}

Indicator.propTypes = {
  type: PropTypes.string
}

export default Indicator