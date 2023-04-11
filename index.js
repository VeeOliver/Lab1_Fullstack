const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
const app = express()
const albumRoutes = require('./routes/albumRoutes')
dotenv.config()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//helpful debugging middleware 
app.use((req, res, next) => {
  console.log(`${req.method}  ${req.url}  `, req.body)
  next()
})

app.use(express.static(path.join(__dirname, "frontend")))
app.use('/api/albums', albumRoutes)

/* app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
}) */

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