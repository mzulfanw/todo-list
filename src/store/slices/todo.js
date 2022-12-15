import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  todo: [],
  modal: false,
  detail: {}
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
    },
    getDetailTodo: (state) => {
      state.loading = true
    },
    getDetailTodoSuccess: (state, action) => {
      state.loading = false
      state.detail = action?.payload
    },
    updateTodo: (state) => {
      state.loading = true
    },
    // eslint-disable-next-line no-unused-vars
    updateTodoSuccess: (state, action) => {
      state.loading = false
    },
    postTodoList: (state) => {
      state.loading = true
    },
    postTodoListSuccess: (state) => {
      state.loading = false
    },
    updateTodoItems: (state) => {
      state.loading = true
    },
    updateTodoItemsSuccess: (state) => {
      state.loading = false
    },
    deleteTodoItemList: (state) => {
      state.loading = true
    },
    deleteTodoItemSucess: (state) => {
      state.loading = false
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
  deleteTodoSuccess,
  getDetailTodo,
  getDetailTodoSuccess,
  updateTodo,
  updateTodoSuccess,
  postTodoList,
  postTodoListSuccess,
  updateTodoItems,
  updateTodoItemsSuccess,
  deleteTodoItemList,
  deleteTodoItemSucess
} = todosSlice.actions
export default todosSlice.reducer

