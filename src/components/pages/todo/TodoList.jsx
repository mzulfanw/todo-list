import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '@/lib/helper'
import { TRASH, WARNING } from '@/lib/iconConstant'
import { Icon, Modal, Button } from '@/components/shared'

function TodoList({
  todos,
  deleteTodo = () => { },
  handleChangePage = () => { }
}) {
  const [openModal, setopenModal] = useState(false)
  const [title, setTitle] = useState('')
  const [id, setId] = useState('')

  const handleDelete = () => {
    deleteTodo(id)
    setopenModal(false)
    const html = document.getElementById('mount')
    html.removeAttribute('style')
  }

  return (
    <div className='flex flex-wrap items-center gap-[26px] mt-[43px]'>
      {
        todos?.data?.length > 0 && (
          todos.data?.map((item, index) => (
            <div
              className='bg-white w-[230px] h-[234px] shadow-lg mb-10 rounded-xl cursor-pointer'
              key={index}
              data-cy={`activity-item`}
            >
              <div className='py-[22px] px-[27px]'>
                <div onClick={() => { handleChangePage(item?.id) }}>
                  <h5
                    className='font-bold text-lg'
                    data-cy='activity-item-title'
                  >
                    {item?.title}
                  </h5>
                </div>
                <div
                  className='flex items-center justify-between mt-32'
                >
                  <p
                    className='text-sm text-gray-400'
                    data-cy='activity-item-date'
                  >
                    {formatDate(item?.created_at)}
                  </p>
                  <Icon
                    path={TRASH}
                    maxWidth={16}
                    classes='cursor-pointer'
                    onClick={() => {
                      setopenModal(true)
                      setTitle(item?.title)
                      setId(item?.id)
                    }}
                    data-cy='activity-item-delete-button'
                  />
                </div>
              </div>
            </div>
          ))
        )
      }
      {
        todos?.data?.length === 0 && (
          <div data-cy='activity-empty-state'>
            <img
              src='/assets/image/activity-empty-state.svg '
              alt=''
            />
          </div>
        )
      }
      <Modal
        open={openModal}
        data-cy='modal-delete'
      >
        <div className='flex-col items-center justify-center text-center '>
          <div>
            <Icon
              path={WARNING}
              classes='block mx-auto mt-[30px]'
              maxWidth={68}
              data-cy='modal-delete-icon'
            />
            <p
              className='text-lg my-[46px] font-normal'
              data-cy='modal-delete-title'
            >
              Apakah anda yakin menghapus activity &nbsp;
              <strong>{`"${title}"`}</strong>
              ?
            </p>
          </div>
          <div className='flex justify-around'>
            <Button
              classes='bg-gray-200 w-[150px] h-[54px] font-bold font-poppins'
              // text='Batal'
              data-cy='modal-delete-cancel-button'
              onClick={() => {
                setopenModal(false)
              }}
            >
              <span>Batal</span>
            </Button>
            <Button
              classes='bg-sky-500 text-white w-[150px] h-[54px] font-bold font-poppins'
              // text='Hapus'
              data-cy='modal-delete-confirm-button'
              onClick={handleDelete}
            >
              <span>Hapus</span>
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.any,
  deleteTodo: PropTypes.func,
  handleChangePage: PropTypes.func
}

export default TodoList