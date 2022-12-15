import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Indicator from './Indicator'
import Button from './Button'
import Icon from './Icon'
import { OPEN } from '@/lib/iconConstant'

function Listbox({
  options,
  value,
  label,
  name,
  onChange = () => { }
}) {
  const [isOpen, setIsOpen] = useState(false)
  const found = options?.find(val => val.id === value.id)
  const mapped = options?.filter(val => val.id !== value.id)

  const convertParams = (name, value) => ({
    // console.log(value)
    target: {
      name, value
    }
  })

  return (
    <>
      <p>{label}</p>
      <Button
        classes='bg-white border rounded-none flex items-center justify-between mt-2 lg:mt-4 px-4 lg:px-6 w-40 lg:w-48 h-12 lg:h-14 rounded-md transition outline-none border border-neutral-400 hover:border-primary-500 focus:border-primary-500'
        name='here'
        onClick={() => { setIsOpen(state => !state) }}
        data-cy='modal-add-priority-dropdown'
      >
        {
          found && (
            <>
              <Indicator type={found.title} />
              <p>{found.title}</p>
              <Icon
                path={OPEN}
                maxWidth={20}
              />
            </>
          )
        }
      </Button>
      {
        isOpen && (
          <div
            className='flex flex-col absolute w-40 lg:w-48 h-72  border mt-2 divide-neutral-300 bg-white'
          >
            {
              mapped.map((value, index) => (
                <Button
                  key={index}
                  id={value.id}
                  name={name}
                  classes='flex items-center h-full w-full px-4 lg:px-6 cursor-pointer hover:bg-neutral-100'
                  onClick={() => {
                    onChange(convertParams(name, value))
                  }}
                >
                  <Indicator type={value.title} />
                  <span>{value.title}</span>
                </Button>
              ))
            }
          </div>
        )
      }
    </>
  )
}

Listbox.propTypes = {
  options: PropTypes.array,
  value: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export default Listbox