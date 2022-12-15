import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, Icon, Modal } from '@/components/shared'
import Indicator from '@/components/shared/Indicator'
import { TRASH, WARNING } from '@/lib/iconConstant'
import { useAppDispatch } from '@/hooks'
import { deleteTodoItemList, getDetailTodo } from '@/store/slices/todo'
import { useParams } from 'react-router-dom'
function DetailList({
  item,
  handleUpdateTodoItems = () => { }
}) {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const [checked, setChecked] = useState(item?.is_active ? false : true)
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTile] = useState('')
  const [idItem, setIdChild] = useState('')

  const handleUpdateTodo = (item) => {
    setChecked(!checked)
    const payload = {
      id: item.id,
      is_active: checked ? 1 : 0
    }
    handleUpdateTodoItems(payload)
  }

  const handleDeleteList = async (id, title) => {
    setTile(title)
    setIdChild(id)
    setIsOpen(true)
  }

  const sync = () => {
    dispatch({
      type: getDetailTodo.toString(),
      payload: id
    })
  }

  const handleDelete = () => {
    dispatch({
      type: deleteTodoItemList.toString(),
      payload: idItem
    })
    setIsOpen(false)
    setTimeout(() => {
      sync()
    }, 3000)
  }





  return (
    <Fragment>
      <div
        className='bg-white shadow-md mb-4 h-[80px] flex items-center px-6 justify-between'
      >
        <div className='flex gap-4 items-center justify-between'>
          <Checkbox
            name='todoItems'
            value={item.id}
            checked={checked}
            onChange={() => { handleUpdateTodo(item) }}
          />
          <Indicator type={item.priority} />
          <span>{item.title}</span>
        </div>
        <div>
          <Icon
            path={TRASH}
            classes='cursor-pointer'
            onClick={() => { (handleDeleteList(item.id, item.title)) }}
          />
        </div>
      </div>
      <Modal
        open={isOpen}
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
              Apakah anda yakin menghapus item &nbsp;
              <strong>{`"${title}"`}</strong>
              ?
            </p>
          </div>
          <div className='flex justify-around'>
            <Button
              classes='bg-gray-200 w-[150px] h-[54px] font-bold font-poppins'
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <span>Batal</span>
            </Button>
            <Button
              classes='bg-red-500 text-white w-[150px] h-[54px] font-bold font-poppins'
              // text='Hapus'
              onClick={handleDelete}
            >
              <span>Hapus</span>
            </Button>
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}

DetailList.propTypes = {
  item: PropTypes.object,
  handleUpdateTodoItems: PropTypes.func
}

export default DetailList