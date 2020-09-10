
import { ACTION_TYPES } from '../config'

const changeEmail = (email) => {
    return {
        type: ACTION_TYPES.UI_CHANGE_EMAIL,
        email
    }
}

const changeFullname = (fullname) => {
    return {
        type: ACTION_TYPES.UI_CHANGE_FULLNAME,
        fullname
    }
}

const changeUserInfo = (userInfo) => {
    return {
        type: ACTION_TYPES.CHANGE_UI,
        userInfo
    }
}

const changeNavState = (navState) => {
    return {
        type: ACTION_TYPES.NAV_CHANGE_STATE,
        navState
    }
}



export {
    changeEmail,
    changeFullname,
    changeUserInfo,
    changeNavState,
}