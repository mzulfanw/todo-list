import { get } from '@/lib/interceptors'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  todo: []
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodo: (state) => {
      state.loading = true
    },
    getTodoSuccess: (state, action) => {
      state.loading = false
      state.todo = action.payload
    },
    getTodoFailed: (state) => {
      state.loading = false
    }
  }
})


export const { getTodo, getTodoSuccess, getTodoFailed } = todosSlice.actions
export default todosSlice.reducer

//* Async 
export function fetchTodos() {
  return async dispatch => {
    dispatch(getTodo())

    try {
      const res = await get('activity-groups?email=mzulfan303@gmail.com')
      dispatch(getTodoSuccess(res.data))
    } catch (err) {
      dispatch(getTodoFailed())
    }
  }
}