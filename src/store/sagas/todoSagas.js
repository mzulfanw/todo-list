import { call, put, takeEvery } from 'redux-saga/effects'
import {
  getTodo,
  getTodoSuccess,
  getTodoFailed,
  postTodo,
  postTodoSuccess,
  deleteTodo,
  deleteTodoSuccess
} from '@/store/slices/todo'
import {
  getTodo as fetchTodo,
  postTodo as postTodoAction,
  deleteTodo as delTodo
} from './actions/todoAction'

function* fetchTodosSagas(action) {
  try {
    const res = yield call(fetchTodo, action?.payload)

    yield put({
      type: getTodoSuccess.toString(),
      payload: res?.data
    })
  } catch (err) {
    yield put({
      type: getTodoFailed.toString()
    })
  }
}

function* postTodoSagas(action) {
  try {
    yield call(postTodoAction, action?.payload)

    yield put({ type: postTodoSuccess.toString() })

    yield put({ type: getTodo.toString() })
  } catch (err) {
    console.log(err)
  }
}

function* deleteTodoSagas(action) {
  try {
    yield call(delTodo, action?.payload)

    yield put({ type: deleteTodoSuccess.toString() })

    yield put({ type: getTodo.toString() })
  } catch (err) {
    console.log(err)
  }
}

function* todoSaga() {
  yield takeEvery(getTodo.toString(), fetchTodosSagas)
  yield takeEvery(postTodo.toString(), postTodoSagas)
  yield takeEvery(deleteTodo.toString(), deleteTodoSagas)
}

export default todoSaga
