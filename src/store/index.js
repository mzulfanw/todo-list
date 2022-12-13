import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import slices from './slices'
import rootSaga from './sagas'

const sagasMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagasMiddleware]

const store = configureStore({
  reducer: slices,
  middleware,
  devTools: true

})

sagasMiddleware.run(rootSaga)

export default store