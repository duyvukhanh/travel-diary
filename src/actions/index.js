
import { ACTION_TYPES } from '../config'
import userInfo from '../reducers/userInfo'

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

export {
    changeEmail,
    changeFullname,
    changeUserInfo,
}