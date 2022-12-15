import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from '@/hooks/useForm'
import TodoForm from './TodoForm'
import DetailList from './DetailList'

function TodoDetail({
  data,
  handleUpdateTodo = () => { },
  handleCreateTodos = () => { },
  handleUpdateTodoItems = () => { }
}) {
  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = useState({
    id: data?.detail?.id,
    title: data?.detail?.title,
    priority: { id: 1, title: 'Very High', value: 'very-high' },
    listItem: ''
  })

  const validate = (fieldOfValues = values) => {
    const temp = { ...errors }

    if ('title' in fieldOfValues)
      temp.title = fieldOfValues.title

    if ('priority' in fieldOfValues)
      temp.priority = fieldOfValues.priority

    if ('listItem' in fieldOfValues)
      temp.listItem = fieldOfValues.listItem

    setErrors({
      ...temp
    })

    if (fieldOfValues === values)
      return Object.values(temp).every(x => x === '')
  }

  const {
    values,
    errors,
    setErrors,
    handleInputChange
  } = useForm(initialValues, true, validate)
  return (
    <Fragment>
      <TodoForm
        values={values}
        onChange={handleInputChange}
        handleUpdateTodo={handleUpdateTodo}
        handleCreateTodos={handleCreateTodos}
      />
      <DetailList
        list={data?.detail?.todo_items}
        handleUpdateTodoItems={handleUpdateTodoItems}
      />
    </Fragment>
  )
}

TodoDetail.propTypes = {
  data: PropTypes.object,
  handleUpdateTodo: PropTypes.func,
  handleCreateTodos: PropTypes.func,
  handleUpdateTodoItems: PropTypes.func
}

export default TodoDetail