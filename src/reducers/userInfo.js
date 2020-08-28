import { ACTION_TYPES } from '../config'

const initialState = JSON.parse(localStorage.getItem('currentUser')) || {}

const userInfo = (state = initialState, payload) => {
    switch(payload.type) {
        case ACTION_TYPES.UI_CHANGE_EMAIL: {
            let email = payload.email
            return {
                ...state,
                email
            }
        }
        case ACTION_TYPES.UI_CHANGE_FULLNAME: {
            let fullname = payload.fullname
            return {
                ...state,
                fullname
            }
        }
        case ACTION_TYPES.CHANGE_UI: {
            return payload.userInfo
        }

        default : {
            return state
        }
    }
}

export default userInfo

