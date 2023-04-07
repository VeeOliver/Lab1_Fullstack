const mongoose = require('mongoose')

// create schema for album with id, title, artist name and year
const albumSchema = mongoose.Schema(
  {
    _id: {
      type: Number,
      required: [true, "Please give this album an id number"]
    },
    title: {
      type: String,
      required: [true, "Please enter the title of the album"]
    },
    artist: {
      type: String,
      required: [true, "Please enter the name of the artist"]
    },
    year: {
      type: Number,
      required: [true, "Please enter the album year"]
    }
  },
  {
    timestamps: true
  }
)

const Album = mongoose.model('Album', albumSchema)

module.exports = Album