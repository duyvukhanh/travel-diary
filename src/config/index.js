const ACTION_TYPES = {
    UI_CHANGE_EMAIL: 'UI_CHANGE_EMAIL',
    UI_CHANGE_FULLNAME: 'UI_CHANGE_FULLNAME',
    CHANGE_UI: 'CHANGE_UI',
    NAV_CHANGE_STATE: 'NAV_CHANGE_STATE',
}

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080'

// const API_PATHS = {
//     LOGIN: 'https://travel-diaryz.herokuapp.com/api/auth/login/',
//     REGISTER: 'https://travel-diaryz.herokuapp.com/api/auth/sign-up/',
//     GET_USER: 'https://travel-diaryz.herokuapp.com/api/auth/',
//     GET_MANY_USER: 'https://travel-diaryz.herokuapp.com/api/auth',

//     UPDATE_USER: 'https://travel-diaryz.herokuapp.com/api/auth/',
//     GALLERY_GET_MANY: 'https://travel-diaryz.herokuapp.com/api/gallery',
//     GALLERY_GET_ONE: 'https://travel-diaryz.herokuapp.com/api/gallery/',
//     GALLERY_CREATE: 'https://travel-diaryz.herokuapp.com/api/gallery/',
//     GALLERY_UPDATE: 'https://travel-diaryz.herokuapp.com/api/gallery/',
//     GALLERY_DELETE: 'https://travel-diaryz.herokuapp.com/api/gallery/',

// }

const API_PATHS = {
    LOGIN: 'http://localhost:8080/api/auth/login/',
    REGISTER: 'http://localhost:8080/api/auth/sign-up/',
    GET_USER: 'http://localhost:8080/api/auth/',
    GET_MANY_USER: 'http://localhost:8080/api/auth',

    UPDATE_USER: 'http://localhost:8080/api/auth/',
    GALLERY_GET_MANY: 'http://localhost:8080/api/gallery',
    GALLERY_GET_ONE: 'http://localhost:8080/api/gallery/',
    GALLERY_CREATE: 'http://localhost:8080/api/gallery/',
    GALLERY_UPDATE: 'http://localhost:8080/api/gallery/',
    GALLERY_DELETE: 'http://localhost:8080/api/gallery/',

    GET_IMAGE: 'http://localhost:8080/images/'

}

export {
    ACTION_TYPES,
    BASE_URL,
    API_PATHS
}