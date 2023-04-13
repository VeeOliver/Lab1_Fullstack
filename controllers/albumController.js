
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
    if (album.length == 0) {
      return res.status(404).json(`cannot find any album with title '${title}'`)
    }
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateAlbum = async (req, res) => {
  try {
    const { id } = req.params
    const album = await Album.findOneAndUpdate({ id }, req.body, { new: true });
    if (!album) {
      return res.status(404).json({ message: `cannot find any album to update with this ID No.: ${id}` })
    }
    const updatedAlbum = await Album.findOne({ id });
    res.status(200).json(updatedAlbum);

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findOneAndDelete({ id });
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
    console.log(" this is the request " + req.body)
    const { id } = req.body;
    console.log(`this is the ${id}`)
    const album = await Album.findOne({ "id": id });
    if (album) {
      console.log("entered the if statment" + album)
      return res.status(409).json(`This Album is already in the database`)
    }
    console.log('this is what the server is finding' + album)
    const newAlbum = await Album.create(req.body)
    res.status(200).json(newAlbum);

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