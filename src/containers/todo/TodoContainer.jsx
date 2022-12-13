import React, { useEffect, useState } from 'react'
import HomeTodo from '@/components/pages/todo/HomeTodo'
import { deleteTodo, getTodo, postTodo } from '@/store/slices/todo'
import { useAppDispatch, useAppSelector } from '@/hooks'

function TodoContainer() {
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState(false)
  const selector = useAppSelector((state) => state.todo)

  useEffect(() => {
    dispatch({ type: getTodo.toString() })
  }, [dispatch])

  const handleSubmit = (payload) => {
    dispatch({
      type: postTodo.toString(),
      payload: payload
    })
  }

  const handleDelete = (payload) => {
    dispatch({
      type: deleteTodo.toString(),
      payload: payload
    })
    setModal(true)
  }

  return (
    <HomeTodo
      data={selector}
      modal={modal}
      setModal={setModal}
      handleTodo={handleSubmit}
      handleDelete={handleDelete}
    />
  )
}

export default TodoContainer