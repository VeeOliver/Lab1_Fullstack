import { fetchAlbums } from "./fetchData.js"


const showAlbums = async () => {
  console.log("we fetch data here")
  //let html = `<h2> this is a test</h2>`

  const albums = await fetchAlbums()
  console.log(albums)

  let html = " "
  albums.forEach(album => {
    html +=
      `
        <div class="album">
         <div class="imgContainer">
          <img src="/imgs/music.png" alt="line art of a CD with music note and heart" height=100px width=100px>
          </div>
          <p class"id">ID: ${album.id}</p>
          <p class"title">TITLE: ${album.title}</p>
          <p class"artist">ARTIST: ${album.artist}</p>
          <p class"year">YEAR: ${album.year}</p>
          <div class="btns">
          <button class="update">Update</button> <button class="remove">Remove</button>
          </div>
        </div>
        `
  })
  document.querySelector("#albumLibrary").innerHTML = html
}

showAlbums()