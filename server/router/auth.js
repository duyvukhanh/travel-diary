const express = require('express')
const authRouter = new express.Router()
const authHandlers = require('../modules/auth')
const multer  = require('multer')
const upload = multer({ dest: './src/images' })

authRouter.post('/login', authHandlers.login)

authRouter.post('/sign-up', authHandlers.signUp)

authRouter.get('/:id', authHandlers.findOne)

authRouter.put('/',upload.single('fileUploaded'), authHandlers.updateProfile)


module.exports = authRouter