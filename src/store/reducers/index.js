import { combineReducers } from 'redux'
import alert from './alert'
import allItems from './items'
import oneItem from './item'


export default combineReducers({
    alert,
    allItems,
    oneItem,
})