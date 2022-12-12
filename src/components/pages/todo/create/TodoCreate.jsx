/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react'
import TodoList from './TodoList'
import TodoToolbar from './TodoToolbar'
import { useForm } from '@/hooks/useForm'

function TodoCreate() {
  const [initialValues, setInitialValues] = useState({
    status: false
  })

  const validate = (fieldOfValues = values) => {
    const temp = { ...errors }

    if ('status' in fieldOfValues)
      temp.status = !fieldOfValues.status

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
      <TodoToolbar />
      <TodoList
        values={values}
        onChange={handleInputChange}
      />
    </Fragment>
  )
}

export default TodoCreate