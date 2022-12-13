import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '@/lib/helper'
import { TRASH, WARNING } from '@/lib/iconConstant'
import { Icon, Modal, Button } from '@/components/shared'

function TodoList({
  todos,
  deleteTodo = () => { }
}) {
  const [openModal, setopenModal] = useState(false)
  const [title, setTitle] = useState('')
  const [id, setId] = useState('')

  const handleDelete = () => {
    deleteTodo(id)
    setopenModal(false)
  }

  return (
    <div className='flex flex-wrap items-center gap-[26px] mt-[43px]'>
      {
        todos?.data?.length > 0 && (
          todos.data?.map((item, index) => (
            <div
              className='bg-white w-[230px] h-[234px] shadow-lg mb-10 rounded-xl'
              key={index}
            >
              <div className='py-[22px] px-[27px]'>
                <div>
                  <h5 className='font-bold text-lg'>{item?.title}</h5>
                </div>
                <div
                  className='flex items-center justify-between mt-32'
                >
                  <p className='text-sm text-gray-text'>{formatDate(item?.created_at)}</p>
                  <Icon
                    path={TRASH}
                    maxWidth={16}
                    classes='cursor-pointer'
                    onClick={() => {
                      setopenModal(true)
                      setTitle(item?.title)
                      setId(item?.id)
                    }}
                  />
                </div>
              </div>
            </div>
          ))
        )
      }
      {
        todos?.data?.length === 0 && (
          <div>
            <img
              src='/assets/image/activity-empty-state.svg '
              alt=''
            />
          </div>
        )
      }
      <Modal
        open={openModal}

      >
        <div className='flex-col items-center justify-center text-center '>
          <div>
            <Icon
              path={WARNING}
              classes='block mx-auto mt-[30px]'
              maxWidth={68}
            />
            <p
              className='text-lg my-[46px] font-normal'
            >
              Apakah anda yakin menghapus activity &nbsp;
              <strong>{`"${title}"`}</strong>
              ?
            </p>
          </div>
          <div className='flex justify-around'>
            <Button
              classes='bg-cancel w-[150px] h-[54px] font-bold font-poppins'
              text='Batal'
              onClick={() => {
                setopenModal(false)
              }}
            />
            <Button
              classes='bg-delete text-white w-[150px] h-[54px] font-bold font-poppins'
              text='Hapus'
              onClick={handleDelete}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.any,
  deleteTodo: PropTypes.func
}

export default TodoList