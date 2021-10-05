import { combineReducers } from 'redux'
import alert from './alert'
import items from './items'


export default combineReducers({
    alert,
    items,
})