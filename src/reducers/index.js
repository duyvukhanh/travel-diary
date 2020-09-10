import { combineReducers } from 'redux'
import userInfo from './userInfo'
import currentNavState from './currentNavState'

export default combineReducers({
    userInfo,
    currentNavState,
})