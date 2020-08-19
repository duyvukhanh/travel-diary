
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

export {
    changeEmail,
    changeFullname
}