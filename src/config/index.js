const ACTION_TYPES = {
    UI_CHANGE_EMAIL: 'UI_CHANGE_EMAIL',
    UI_CHANGE_FULLNAME: 'UI_CHANGE_FULLNAME',
    CHANGE_UI: 'CHANGE_UI',
}

const BASE_URL = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:9000'

const API_PATHS = {
    LOGIN: 'http://localhost:9000/api/auth/login/',
    REGISTER: 'http://localhost:9000/api/auth/sign-up/',
    GET_USER: 'http://localhost:9000/api/auth/',
    UPDATE_USER: 'http://localhost:9000/api/auth/',
    GALLERY_GET_MANY: 'http://localhost:9000/api/gallery',
    GALLERY_GET_ONE: 'http://localhost:9000/api/gallery/',
    GALLERY_CREATE: 'http://localhost:9000/api/gallery/'

}

export {
    ACTION_TYPES,
    BASE_URL,
    API_PATHS
}