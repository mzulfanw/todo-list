import React from 'react'
import HomeTodoToolbar from './HomeTodoToolbar'
import PropTypes from 'prop-types'
import TodoList from './TodoList'
import { Modal, Icon } from '@/components/shared'
import { SUCCESS } from '@/lib/iconConstant'
import { useNavigate } from 'react-router-dom'

function HomeTodo({
  data,
  modal,
  setModal = () => { },
  handleTodo = () => { },
  handleDelete = () => { }
}) {
  const navigate = useNavigate()

  const post = () => {
    const payload = {
      title: 'New Activity',
      email: 'mzulfan303@gmail.com'
    }
    handleTodo(payload)
  }

  const handleChangePage = (id) => {
    navigate(`/detail/${id}`)
  }
  return (
    <>
      {
        modal === true && (
          <Modal
            open={true}
            onClose={() => {
              setModal(false)
            }}
          >
            <div className='flex gap-3'>
              <Icon
                path={SUCCESS}
                maxWidth={18}
              />
              <p>Activity berhasil dihapus</p>
            </div>
          </Modal>
        )
      }
      <HomeTodoToolbar
        handleTodo={post}
      />
      <TodoList
        todos={data?.todo}
        deleteTodo={handleDelete}
        handleChangePage={handleChangePage}
      />
    </>
  )
}

HomeTodo.propTypes = {
  data: PropTypes.object,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  handleTodo: PropTypes.func,
  handleDelete: PropTypes.func
}

export default HomeTodo