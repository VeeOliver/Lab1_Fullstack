const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
//const albumRoutes = require('./routes/albumRoutes')
dotenv.config()


app.use(express.json)
app.use(express.urlencoded({ extended: false }))


//app.use('/api/albums', albumRoutes)
app.get('/', (req, res) => {
  res.send("Server started")
})

mongoose.
  connect(process.env.CONNECTIONURL)
  .then(() => {
    console.log('connected to MongoDB')
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })

  }).catch((error) => {
    console.log(error)
  })