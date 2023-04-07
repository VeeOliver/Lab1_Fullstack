const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const port = 3000

dotenv.config()

//app.use(express.json)
app.use((req, res, next) => {
  console.log(`${req.method}  ${req.url}  `, req.body)
  next()
})

app.get('/', (req, res) => {
  res.send("Server started")
})

/* app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 */
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