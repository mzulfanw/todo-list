import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailTodo, updateTodo, postTodoList, updateTodoItems } from '@/store/slices/todo'
import { useAppDispatch, useAppSelector } from '@/hooks'
import TodoDetail from '@/components/pages/todo/detail/TodoDetail'

function TodoDetailContainer() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.todo)

  useEffect(() => {
    dispatch({
      type: getDetailTodo.toString(),
      payload: id
    })
  }, [id, dispatch])

  const handleUpdateTodo = (payload) => {
    dispatch({
      type: updateTodo.toString(),
      payload
    })
  }

  const handleCreateTodos = (payload) => {
    dispatch({
      type: postTodoList.toString(),
      payload: payload
    })
  }

  const handleUpdateTodoItems = (payload) => {
    dispatch({
      type: updateTodoItems.toString(),
      payload: payload
    })
  }

  return (
    <TodoDetail
      data={selector}
      handleUpdateTodo={handleUpdateTodo}
      handleCreateTodos={handleCreateTodos}
      handleUpdateTodoItems={handleUpdateTodoItems}
    />
  )
}

export default TodoDetailContainer