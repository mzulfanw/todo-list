import { del, get, post, patch } from '@/lib/interceptors'

/**
 * Get todo 
 * 
 * @returns
 */
export const getTodo = () => {
  return get(`activity-groups?email=mzulfan303@gmail.com`)
}

/**
 * Post Todo
 * 
 * @param {*} payload 
 * @returns
 */
export const postTodo = (payload) => {
  return post(`activity-groups`, payload)
}

/**
 * Delete todo 
 * 
 * @param {*} payload 
 * @returns
 */
export const deleteTodo = (payload) => {
  return del(`activity-groups/${payload}`)
}

/**
 * Get Detail Todo
 * 
 * @param {*} payload 
 * @returns
 */
export const getDetailTodo = (payload) => {
  return get(`activity-groups/${payload}`)
}

/**
 * Update Todo 
 * 
 * @param {object} payload 
 * @returns
 */
export const updateTodo = (payload) => {
  const { id, newActivity } = payload
  return patch(`activity-groups/${id}`, newActivity)
}

/**
 * Post Todo Items
 * 
 * @param {*} payload 
 * @returns
 */
export const postTodoItems = (payload) => {
  return post(`todo-items`, payload)
}

/**
 * Update Todo Items 
 * 
 * @param {*} payload 
 * @returns
 */
export const updateTodoItems = (payload) => {
  const { id, is_active } = payload
  return patch(`todo-items/${id}`, { is_active })
}


/**
 * Delete Todo Items
 * 
 * @param {*} payload 
 * @returns
 */
export const deleteTodoItemsList = (payload) => {
  return del(`todo-items/${payload}`)
}