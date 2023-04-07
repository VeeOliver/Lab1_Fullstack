const express = require('express')
const router = express.Router()
const { getAllAlbums, getSingleAlbum, addAlbum, updateAlbum, deleteAlbum } = require('../controllers/albumController')

router.route('/')
  .get(getAllAlbums)

router.route('/:title')
  .get(getSingleAlbum)
  .put(updateAlbum)
  .post(addAlbum)
  .delete(deleteAlbum)

module.exports = router 