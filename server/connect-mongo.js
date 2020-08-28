const mongoose = require('mongoose')


const connectionString = `mongodb://admin:admin123@ds113732.mlab.com:13732/travel-diary`

mongoose.connect(
  connectionString,
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if(err) {
      console.error('Can not to mongodb!')
      console.error(err)
    } else {
      console.log('Connected to MongoDB!')
    }
  }
)