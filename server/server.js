require('./connect-mongo')

const db = require('./connect-mongo')

const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const path = require('path')
const cors = require('cors')


// const staticFolderPath = path.join(__dirname, 'public')

const app = express()
const port = 8080
app.use(cors())

app.use(bodyParser.json())

// app.use('/', express.static(staticFolderPath))

app.use(router)

app.use((err, req, res, next) => {
  let message = err.message
  let stack = err.stack
  res.status(400)
    .json({ message, stack })
})

app.listen(port, (err) => console.log(err || 'Server open at port ' + port))
