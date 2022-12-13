import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'

function Modal({
  open = false,
  onClose = () => { },
  children
}) {
  return (
    <Transition
      appear
      show={open}
      as={Fragment}
    >
      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-auto '
        onClose={onClose}
      >
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-modal bg-opacity-50' />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
              {/* <Dialog.Title
                as='h3'
                className='text-lg font-medium leading-6'
              >
                Modal
              </Dialog.Title> */}
              {children}
              {/* <div className='mt-2'>
                <p className='text-sm border-t pt-2'>
                  This is a dialog box
                </p>
              </div>

              <div className='mt-4'>
                <button
                  type='button'
                  className='inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300'
                  onClick={onClose}
                >
                  Close
                </button>
              </div> */}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
}

export default Modal