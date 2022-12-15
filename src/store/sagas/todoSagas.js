import { call, put, takeEvery } from 'redux-saga/effects'
import {
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
} from '@/store/slices/todo'
import {
  getTodo as fetchTodo,
  postTodo as postTodoAction,
  deleteTodo as delTodo,
  getDetailTodo as getDetailTodoAction,
  updateTodo as updateTodoAction,
  postTodoItems,
  updateTodoItems as updateTodoItemsAct,
  deleteTodoItemsList
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

function* getDetailTodoSaga(action) {
  try {
    const res = yield call(getDetailTodoAction, action?.payload)

    yield put({
      type: getDetailTodoSuccess.toString(),
      payload: res?.data
    })
  } catch (err) {
    console.log(err)
  }
}

function* updateTodoSagas(action) {
  try {
    const res = yield call(updateTodoAction, action?.payload)

    if (res) {
      yield put({
        type: updateTodoSuccess.toString()
      })
    }
  } catch (err) {
    console.log(err)
  }
}

function* postTodoListSagas(action) {
  try {
    const res = yield call(postTodoItems, action?.payload)
    yield put({ type: postTodoListSuccess.toString() })
    yield put({ type: getDetailTodo.toString(), payload: res?.data.activity_group_id })
  } catch (err) {
    console.log(err)
  }
}

function* updateTodoListSaga(action) {
  try {
    const res = yield call(updateTodoItemsAct, action?.payload)
    yield put({ type: updateTodoItemsSuccess.toString() })
    yield put({ type: getDetailTodo.toString(), payload: res?.data.activity_group_id })
  } catch (err) {
    console.log(err)
  }
}

function* deleteTodoListSagas(action) {
  try {
    yield call(deleteTodoItemsList, action?.payload)
    yield put({ type: deleteTodoItemSucess.toString() })
    // yield put({ type: getDetailTodo.toString(), payload: res?.data.parent })
  } catch (err) {
    console.log(err)
  }
}

function* todoSaga() {
  yield takeEvery(getTodo.toString(), fetchTodosSagas)
  yield takeEvery(postTodo.toString(), postTodoSagas)
  yield takeEvery(deleteTodo.toString(), deleteTodoSagas)
  yield takeEvery(getDetailTodo.toString(), getDetailTodoSaga)
  yield takeEvery(updateTodo.toString(), updateTodoSagas)
  yield takeEvery(postTodoList.toString(), postTodoListSagas)
  yield takeEvery(updateTodoItems.toString(), updateTodoListSaga)
  yield takeEvery(deleteTodoItemList.toString(), deleteTodoListSagas)
}

export default todoSaga
