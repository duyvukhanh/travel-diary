const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gallerySchema = new Schema({
    place: {
        type: String,
        required: [true, `place required`]
    },
    albumName: {
        type: String,
        required: [true, `album name required`]
    },
    owner: {
        // type: mongoose.Types.ObjectId,
        type: String,
        required: [true, `owner required`]
    },
    date: {
        type: String,
        required: [true, `date required`]
    },
    voted: {
        type: Number,
    },
    images: [
        {
            type: String,
        },
    ],
    videos: [
        {
            type: String,
        },
    ]
})

module.exports = gallerySchema