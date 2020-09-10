import { ACTION_TYPES } from '../config'

// const initialState = JSON.parse(localStorage.getItem('currentUser')) || {}
// 1 : home 2 : gallery 3 : profile 4 : about
const initialState = 1


const currentNavState = (state = initialState, payload) => {
    switch(payload.type) {
        case ACTION_TYPES.NAV_CHANGE_STATE: {
            let navState = payload.navState
            return navState
        }
        
        default : {
            return state
        }
    }
}

export default currentNavState

