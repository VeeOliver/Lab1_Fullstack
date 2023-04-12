
const url = `http://localhost:3000/api/albums`


export const fetchAlbums = async () => {
  console.log("we get into this method")
  const response = await fetch(url)
  if (!response.ok) {
    console.log('An error has occurred trying to fetch the data')
  }
  let albums = await response.json()
  return albums
}

export const fetchAlbum = async (id) => {
  console.log("we get into single album method")
  const response = await fetch(url + "/" + id)
  if (!response.ok) {
    console.log('An error has occurred trying to fetch the data')
  }
  let album = await response.json()
  return album
}

