import React, { useEffect } from 'react'
import HomeTodo from '@/components/pages/todo/HomeTodo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '@/store/slices/todo'

function TodoContainer() {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.todo)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])
  return (
    <HomeTodo
      data={selector}
    />
  )
}

export default TodoContainer