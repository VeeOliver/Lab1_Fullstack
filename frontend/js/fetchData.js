const url = `http://localhost:3000/api/albums`


export const fetchAlbums = async () => {
  console.log("we get into this method")
  const response = await fetch(url)
  if (!response.ok) {
    console.log('An error has occurred trying to fetch the data')
  }
  let albums = await response.json()
  return albums
  /* await fetch(url)
    .then(res => res.json())
    .then(data => {

    })
    
    .catch(error => console.log(error)) */
  //const albums = await axios.get(url)
  /*   console.log(albums.data)
    return data */
}

