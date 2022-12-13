import { all } from '@redux-saga/core/effects'
import todoSaga from './todoSagas'

export default function* rootSaga() {
  yield all([
    todoSaga()
  ])
}