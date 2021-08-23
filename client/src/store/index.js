import {
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
// eslint-disable-next-line camelcase
import data_Reducer from './slice'

const reducer = combineReducers({
  data: data_Reducer
})

const store = configureStore({
  reducer
})

export default store
