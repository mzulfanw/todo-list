import { del, get, post } from '@/lib/interceptors'

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