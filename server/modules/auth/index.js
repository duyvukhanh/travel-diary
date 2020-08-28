const userInfoModel = require('./model')
const { signToken, verifyToken } = require("./jwt")

const handlers = {
    async login(req, res, next) {
        try {
            let { email, password } = req.body

            if (!email) {
                throw new Error("email required")
            }

            if (!password) {
                throw new Error("password required")
            }

            let user = await userInfoModel.findOne({
                email
            })
            password = require('crypto').createHash('md5').update(password).digest('hex')
            if (!user || password !== user.password) {
                throw new Error("wrong email or password")
            }
            let userPayload = user.toObject()
            delete userPayload.password
            // userPayload.accessToken = signToken(userPayload)

            res.json(userPayload)

        } catch (err) {
            next(err)
        }
    },

    async signUp(req, res, next) {
        try {
            let { email, password, displayName } = req.body
            password = require('crypto').createHash('md5').update(password).digest('hex')

            if (!email) {
                throw new Error("email required")
            }

            if (!password) {
                throw new Error("password required")
            }

            if (password.length < 6) {
                throw new Error("password must be at least 6 characters")
            }

            if (!displayName) {
                throw new Error("displayName required")
            }

            let user = {
                email,
                password,
                displayName,
                userImg: 'default',
                voted: 0,
                userFacebook: "",
                userInstagram: "",
                bio: "",
                gallery: [],
                voteFor: [],
                roles: ["user"]
            }
            await userInfoModel.create(user)
            res.json(user)

        } catch (err) {
            next(err)
        }
    },
    async updateProfile(req, res, next) {
        try {
            let data = req.body
            let id = req.body._id
            let file = req.file
            if (file) {
                let fileNameArr = file.path.split('/')
                let fileName = fileNameArr[fileNameArr.length - 1]
                console.log(fileName)
                data.userImg = fileName
            }
            
            if (!id) {
                throw new Error(`Require 'id' to update!`)
            }
            let user = await userInfoModel.findByIdAndUpdate(
                id,
                data,
                { new: true }
            )
            let userPayload = user.toObject()
            delete userPayload.password
            res.json(userPayload)

        } catch (err) {
            next(err)
        }
    },
    async findOne(req, res, next) {
        try {
            let id = req.params.id
            let user = await userInfoModel.findById(id)
            let userPayload = user.toObject()
            delete userPayload.password
            res.json(userPayload)
        } catch (err) {
            next(err)
        }
    },
}

module.exports = handlers