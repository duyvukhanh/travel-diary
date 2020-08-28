const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const userInfoSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator(email) {
                let isValidEmail = EMAIL_REGEX.test(email)
                // if (isValidEmail) {
                //     return true
                // } else {
                //     return "not an email"
                // }
                return isValidEmail
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
    },
    userImg: {
        type: String,
    },
    backgroundImg: {
        type: String,
    },
    voted: {
        type: Number,
    },
    userFacebook: {
        type: String
    },
    userInstagram: {
        type: String
    },
    bio: {
        type: String
    },
    gallery: [
        {
            type: String,
        }
    ],
    votedFor: [
        {
            type: String,
        }
    ],
    roles: [
        {
            type: String,
            enum: ["admin","user"]
        }
    ]
})

module.exports = userInfoSchema