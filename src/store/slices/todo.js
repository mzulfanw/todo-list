import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  todo: [],
  modal: false
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
      state.todo = action?.payload
    },
    getTodoFailed: (state) => {
      state.loading = false
    },
    postTodo: (state) => {
      state.loading = true
    },
    postTodoSuccess: (state) => {
      state.loading = false
    },
    deleteTodo: (state) => {
      state.loading = true
      state.modal = false
    },
    deleteTodoSuccess: (state) => {
      state.loading = false
      state.modal = true
    }
  }
})


export const {
  getTodo,
  getTodoSuccess,
  getTodoFailed,
  postTodo,
  postTodoSuccess,
  deleteTodo,
  deleteTodoSuccess
} = todosSlice.actions
export default todosSlice.reducer

