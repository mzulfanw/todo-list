import { combineReducers } from '@reduxjs/toolkit'
import todosSlice from './todo'

const reducers = combineReducers({
  todo: todosSlice
})

export default reducers