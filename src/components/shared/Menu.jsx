import React from 'react'
import { Menu as HMenu } from '@headlessui/react'
import { SORT } from '@/lib/iconConstant'
import PropTypes from 'prop-types'
import Icon from './Icon'

function Menu({
  isIcon = false,
  text
}) {
  return (
    <HMenu as='div' className='relative'>
      <HMenu.Button
        className='px-2 py-2.5 rounded-full border-gray border-solid border-2'
      >
        {
          isIcon ? (
            <Icon path={SORT} maxWidth={14} />
          ) : text
        }

      </HMenu.Button>
      <HMenu.Items
        className='absolute mt-1 right-0 border-gray border-solid border-2'
      >
        <HMenu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-main'}`}
              href='/account-settings'
            >
              Account settings
            </a>
          )}
        </HMenu.Item>
      </HMenu.Items>
    </HMenu>
  )
}

Menu.propTypes = {
  isIcon: PropTypes.bool,
  text: PropTypes.string
}

export default Menu