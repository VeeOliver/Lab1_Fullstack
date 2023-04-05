const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.use(express.json())


app.get('/', (req, res) => {
  res.send("Server started")
})

mongoose.
  connect('mongodb+srv://administrator:j1GSDdw1m3UloG0y@cluster0.th8cigl.mongodb.net/Albums?retryWrites=true&w=majority')
  .then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
      console.log('Server is running on port 3000...')
    })

  }).catch((error) => {
    console.log(error)
  })