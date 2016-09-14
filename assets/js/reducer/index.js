import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import count from './main'
import countSample from './sample'

export const allMethod = combineReducers({
  count,
  countSample,
  routing: routerReducer
})
