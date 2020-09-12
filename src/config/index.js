const ACTION_TYPES = {
    UI_CHANGE_EMAIL: 'UI_CHANGE_EMAIL',
    UI_CHANGE_FULLNAME: 'UI_CHANGE_FULLNAME',
    CHANGE_UI: 'CHANGE_UI',
    NAV_CHANGE_STATE: 'NAV_CHANGE_STATE',
}

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080'

const API_PATHS = {
    LOGIN: 'https://travel-diaryz.herokuapp.com/api/auth/login/',
    REGISTER: 'https://travel-diaryz.herokuapp.com/api/auth/sign-up/',
    GET_USER: 'https://travel-diaryz.herokuapp.com/api/auth/',
    GET_MANY_USER: 'https://travel-diaryz.herokuapp.com/api/auth',

    UPDATE_USER: 'https://travel-diaryz.herokuapp.com/api/auth/',
    GALLERY_GET_MANY: 'https://travel-diaryz.herokuapp.com/api/gallery',
    GALLERY_GET_ONE: 'https://travel-diaryz.herokuapp.com/api/gallery/',
    GALLERY_CREATE: 'https://travel-diaryz.herokuapp.com/api/gallery/',
    GALLERY_UPDATE: 'https://travel-diaryz.herokuapp.com/api/gallery/',
    GALLERY_DELETE: 'https://travel-diaryz.herokuapp.com/api/gallery/',

}

export {
    ACTION_TYPES,
    BASE_URL,
    API_PATHS
}