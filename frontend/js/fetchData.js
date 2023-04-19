
const url = `/api/albums`


export const fetchAlbums = async () => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.log('An error has occurred trying to fetch the data')
    }
    let albums = await response.json()
    return albums
  } catch (error) {
    console.error(error)
  }

}

export const fetchAlbum = async (title) => {
  try {
    const response = await fetch(url + "/" + title)
    if (!response.ok) {
      console.log('An error has occurred trying to fetch the data')
    }
    let album = await response.json()
    return album
  } catch (error) {
    console.error(error)
  }
}

export const addNewAlbum = async (album) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(album)
    })

    if (!response.ok) {
      console.log('An error has occurred trying to fetch the data')
    }

    const newAlbum = await response.json()
    console.log(newAlbum)
  } catch (error) {
    console.error('Error:', error)
  }
}


export const updateAlbum = async (album) => {
  try {
    const response = await fetch((url + '/' + album.id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(album)
    });

    if (!response.ok) {
      console.log('An error has occurred trying to fetch the data')
    }

    const updatedData = await response.json();
    console.log(updatedData)
  } catch (error) {
    console.error('Error:', error);
  }
}


export const deleteAlbum = async (album) => {
  try {
    const response = await fetch((url + '/' + album.id), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(album)
    })

    if (!response.ok) {
      console.log('An error has occurred trying to fetch the data')
    }

    const deleteData = await response.json()
    console.log(deleteData)
  } catch (error) {
    console.error('Error:', error)
  }
}



