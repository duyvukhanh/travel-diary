const express = require('express')

const galleryRouter = require('./gallery')
const authRouter = require('./auth')

const router = new express.Router()

router.use('/api/auth', authRouter)
router.use('/api/gallery', galleryRouter)


module.exports = router