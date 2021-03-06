const mongoose = require('mongoose')

const userInfoSchema = require('./schema')
const COLLECTION_NAME = 'users'
const MODEL_NAME = 'users'

const userInfoModel = mongoose.model(MODEL_NAME, userInfoSchema, COLLECTION_NAME)
userInfoModel.collection.dropIndexes(function (err, results) {
    // Handle errors
});
// productModel.countDocuments()
// productModel.find()
// productModel.findOne()
// productModel.create()
// productModel.findByIdAndUpdate()
// productModel.findByIdAndRemove()

module.exports = userInfoModel