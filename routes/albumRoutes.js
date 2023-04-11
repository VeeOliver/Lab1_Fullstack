const express = require('express')
const router = express.Router()
const { getAllAlbums, getSingleAlbum, addAlbum, updateAlbum, deleteAlbum } = require('../controllers/albumController')

router.route('/')
  .get(getAllAlbums)
  .post(addAlbum)

router.route('/:title')
  .get(getSingleAlbum)

router.route('/:id') 
  .put(updateAlbum)
  .delete(deleteAlbum)

module.exports = router 