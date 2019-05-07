// a função combineReducers combina todos os reducers em 1 unico
import { combineReducers } from 'redux'
import favorites from './favorites'

export default combineReducers({
  favorites
})
