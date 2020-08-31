const express = require('express')
const galleryHandlers = require('../modules/gallery')
const multer  = require('multer')
const upload = multer({ dest: './src/images' })
const galleryRouter = new express.Router()

galleryRouter.get('/', galleryHandlers.findMany)

galleryRouter.get('/:id', galleryHandlers.findOne)

galleryRouter.post('/', galleryHandlers.create)

galleryRouter.put('/',upload.array('fileListUploaded', 20), galleryHandlers.update)

galleryRouter.delete('/:id', galleryHandlers.delete)

module.exports = galleryRouter