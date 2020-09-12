require('./connect-mongo')

const db = require('./connect-mongo')

const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const path = require('path')
const cors = require('cors')
const clientPaths = ['/', '/about', '/album', '/gallery' , '/profile','/login','/register']


const STATIC_PATH = path.resolve(__dirname, '../build')

const app = express()
const port = process.env.PORT || 8080;
app.use(cors())

app.use(bodyParser.json())


clientPaths.map(clientPath => app.use(clientPath, express.static(STATIC_PATH)))
app.use(router)

app.use((err, req, res, next) => {
  let message = err.message
  let stack = err.stack
  res.status(400)
    .json({ message, stack })
})

app.listen(port, (err) => console.log(err || 'Server open at port ' + port))
