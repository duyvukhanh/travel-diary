const express = require('express')
const galleryHandlers = require('../modules/gallery')
const multer = require('multer')
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

const galleryRouter = new express.Router()

galleryRouter.get('/', galleryHandlers.findMany)

galleryRouter.get('/:id', galleryHandlers.findOne)

galleryRouter.post('/', galleryHandlers.create)

galleryRouter.put('/', upload.array('fileListUploaded', 20), galleryHandlers.update)

galleryRouter.delete('/:id', galleryHandlers.delete)

module.exports = galleryRouter