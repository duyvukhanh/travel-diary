const express = require('express')
const authRouter = new express.Router()
const authHandlers = require('../modules/auth')
const multer  = require('multer')
// const upload = multer({ dest: './server/images' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/images')      //you tell where to upload the files,
    },
    filename: function (req, file, cb) {
        cb(null,  'image-' + Date.now() + '.jpg')
    }
})

const upload = multer({storage: storage,
    onFileUploadStart: function (file) {
      console.log(file.originalname + ' is starting ...')
    },
});

authRouter.post('/login', authHandlers.login)

authRouter.post('/sign-up', authHandlers.signUp)

authRouter.get('/:id', authHandlers.findOne)

authRouter.get('/', authHandlers.findMany)

authRouter.put('/',upload.single('fileUploaded'), authHandlers.updateProfile)


module.exports = authRouter