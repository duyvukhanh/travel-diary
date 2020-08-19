const ACTION_TYPES = {
    UI_CHANGE_EMAIL: 'UI_CHANGE_EMAIL',
    UI_CHANGE_FULLNAME: 'UI_CHANGE_FULLNAME',
}

const BASE_URL = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:9000'

const API_PATHS = {
    DATA: '/apis/data'
}

export {
    ACTION_TYPES,
    BASE_URL,
    API_PATHS
}