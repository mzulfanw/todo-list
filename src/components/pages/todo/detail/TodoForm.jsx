/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Modal, Icon, Listbox } from '@/components/shared'
import { useOutsideClick } from '@/hooks'
import { PLUS, CLOSE, EDIT, BACK } from '@/lib/iconConstant'
import { IndicatorList } from '@/lib/constants'
import { useNavigate } from 'react-router-dom'

function TodoForm({
  values,
  onChange = () => { },
  handleUpdateTodo = () => { },
  handleCreateTodos = () => { }
}) {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  const [onEdit, setOnEdit] = useState(false)

  const handleUpdate = () => {
    setOnEdit(!onEdit)
    const payload = {
      id: values.id,
      newActivity: values.title
    }
    handleUpdateTodo(payload)
  }

  const handleCreate = () => {
    const payload = {
      activity_group_id: values.id,
      title: values.listItem,
      priority: values.priority.value
    }
    handleCreateTodos(payload)
  }

  // const ref = useOutsideClick(handleUpdate)

  // const handleProgation = (e) => {
  //   e.stopPropagation()
  // }

  return (
    <Fragment>
      <div
        className='flex items-center justify-between pb-4'
      >
        <div className='flex gap-8'>
          <Icon
            path={BACK}
            maxWidth={30}
            classes='cursor-pointer'
            data-cy='todo-back-button'
            onClick={() => navigate(-1)}
          />
          <div
            // onClick={handleProgation}
            className={'border-b-2'}
          >
            {
              onEdit ? (
                <Input
                  name='title'
                  onChange={onChange}
                  value={values.title}
                  // ref={ref}
                  className={`bg-gray-100 border-none focus:autofill:ring-0`}
                  data-cy='todo-title'
                />
              ) : (
                <Input
                  name='title'
                  // onChange={onChange}
                  value={values.title}
                  // ref={ref}
                  className={`bg-gray-100 border-none focus:autofill:ring-0`}
                  data-cy='todo-title'
                />
              )
            }

          </div>
          <Icon
            path={EDIT}
            classes='cursor-pointer'
            data-cy='todo-title-edit-button'
            maxWidth={30}
            onClick={handleUpdate}
          />
        </div>
        <div>
          <Button
            text='Tambah'
            isIcon
            icon={PLUS}
            onClick={() => { setOpenModal(true) }}
            data-cy='todo-add-button'
          />
        </div>
      </div>
      {/* Modal */}
      <Modal
        open={openModal}
        width='max-w-xl'
        data-cy='modal-add'
      // onClose={() => { setOpenModal(false) }}
      >
        {/* Modal Header */}
        <div
          className='flex items-center justify-between'
        >
          <h4
            data-cy='modal-add-title'
            className='text-2xl'
          >
            Tambah List Item
          </h4>
          <Icon
            path={CLOSE}
            maxWidth={20}
            data-cy='modal-add-close-button'
            classes='cursor-pointer'
            onClick={() => { setOpenModal(false) }}
          />
        </div>
        {/* Modal Header End */}
        <hr className='mt-10' />
        {/* Modal Body */}
        <div
          className='flex-col mt-14'
        >
          <div className='mb-6'>
            <Input
              className='w-full border-gray focus:ring-main'
              data-cy='modal-add-name-input'
              title='NAMA LIST ITEM'
              placeholder='Tambahkan nama list item'
              name='listItem'
              value={values.listItem}
              onChange={onChange}
            />
          </div>
          <div
            className='mb-6'
          >
            <Listbox
              options={IndicatorList}
              value={values.priority}
              label='PRIORITY'
              name='priority'
              onChange={onChange}
            />
          </div>
        </div>
        <div
          className='flex items-end justify-end'
        >
          <Button
            classes='bg-sky-500 text-white'
            onClick={handleCreate}
          >
            <span>Simpan</span>
          </Button>
        </div>
        {/* Modal Body End */}
      </Modal>
      {/* End Of Modal */}
    </Fragment>
  )
}

TodoForm.propTypes = {
  values: PropTypes.object,
  onChange: PropTypes.func,
  handleUpdateTodo: PropTypes.func,
  handleCreateTodos: PropTypes.func
}

export default TodoForm