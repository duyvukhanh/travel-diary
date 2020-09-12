const mongoose = require('mongoose')

const gallerySchema = require('./schema')
const COLLECTION_NAME = 'gallery'
const MODEL_NAME = 'gallery'

const galleryModel = mongoose.model(MODEL_NAME, gallerySchema, COLLECTION_NAME)
galleryModel.collection.dropIndexes(function (err, results) {
    // Handle errors
});
// productModel.countDocuments()
// productModel.find()
// productModel.findOne()
// productModel.create()
// productModel.findByIdAndUpdate()
// productModel.findByIdAndRemove()

module.exports = galleryModel