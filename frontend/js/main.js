import { fetchAlbum, fetchAlbums } from "./fetchData.js"


const showAlbums = async () => {
  console.log("we fetch data here")
  //let html = `<h2> this is a test</h2>`

  const albums = await fetchAlbums()
  console.log(albums)

  let html = " "
  albums.forEach(album => {
    html +=
      `
      <tr>
        <td class="id">${album.id}</td>
        <td class="title">${album.title}</td>
        <td class="artist">${album.artist}</td>
        <td class="year">${album.year}</td>
        <td><button class="update">Update</button></td>
        <td><button class="remove">Remove</button></td>
        <td><button class="view" id="${album.title}">Details</button></td>
      </tr>
        `
  })
  document.querySelector("#albumLibrary").innerHTML = html
  document.querySelectorAll(`.view`).forEach(btn => {
    btn.addEventListener('click', e => {
      console.log('we are in the view event listener')
      showAlbum(e.target.getAttribute('id'))
    })
  })
}

showAlbums()

const showAlbum = async (title) => {

  let selected = await fetchAlbum(title)

  let html = " "

  selected.forEach(album => {
    html +=
      `<div class="album">
         <div class="imgContainer">
          <img src="/imgs/music.png" alt="line art of a CD with music note and heart" height=100px width=100px>
          </div>
          <p class"id">ID: ${album.id}</p>
          <p class"title">TITLE: ${album.title}</p>
          <p class"artist">ARTIST: ${album.artist}</p>
          <p class"year">YEAR: ${album.year}</p>
          <div class="btns">
         <button class="back">Back</button>
          </div>
        </div>
       `
  })
  document.querySelector("#albumLibrary").innerHTML = html

  document.querySelector(`.back`).addEventListener('click', e => {
    console.log('we are in the back event listener')
    showAlbums()
  })

}
