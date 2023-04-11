
// create functions to use for get/put/post/delete
//getAllAlbums, getSingleAlbum, updateAlbum, deleteAlbum, addAlbum 
const Album = require('../models/albumModel')

const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find({});
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }

}

const getSingleAlbum = async (req, res) => {
  try {
    const { title } = req.params;
    const album = await Album.find({ "title": title });
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findByIdAndUpdate(id, req.body);
    //maybe search by title instead?
    if (!album) {
      return res.status(404).json({ message: `cannot find any album with ID ${id}` })
    }
    const updatedAlbum = await Album.findById(id);
    res.status(200).json(updatedAlbum);

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findByIdAndDelete(id);
    if (!album) {
      return res.status(404).json({ message: `cannot find any album with ID ${id}` })
    }
    res.status(200).json(album);

  } catch (error) {
    res.status(500).json({ message: error.message })
  }

}

const addAlbum = async (req, res) => {
  try {
    const album = await Album.create(req.body)
    res.status(200).json(album);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAllAlbums,
  getSingleAlbum,
  updateAlbum,
  deleteAlbum,
  addAlbum
} 