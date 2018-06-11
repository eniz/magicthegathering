import { combineReducers } from 'redux';
import cards from './cards'
import cardDetail from './cardDetail'

export default combineReducers({
  cards,
  cardDetail,
})
