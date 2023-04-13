import { fetchAlbum, fetchAlbums, addNewAlbum, deleteAlbum, updateAlbum } from "./fetchData.js"


document.querySelector(`.add`).addEventListener('click', e => {

  let html = `
  <h2> Add New Album </h2>
  <label for="id">ID No.</label><br>
  <input type="text" id="id" name="id" required=true<br>
  <br></br>
  <label for="title">Title</label><br>
  <input type="text" id="title" name="title" required=true<br>
  <br></br>
  <label for="artist">Artist</label><br>
  <input type="text" id="artist" name="artist" required=true<br>
  <br></br>
  <label for="year">Year</label><br>
  <input type="text" id="year" name="year" required=true<br>
  <br></br>
   <button type="submit" class="submit">Submit</button>
  <button class="cancel">Cancel</button>
  `
  document.querySelector("#albumLibrary").innerHTML = html

  document.querySelector(`.submit`).addEventListener('click', e => {
    console.log('we are in the submit event listener')
    let newAlbum = {
      id: parseInt(document.getElementById('id').value),
      title: document.getElementById('title').value,
      artist: document.getElementById('artist').value,
      year: parseInt(document.getElementById('year').value)
    }

    addNewAlbum(newAlbum).then(() => {
      showAlbums()
    })
  })

  document.querySelector(`.cancel`).addEventListener('click', e => {
    console.log('we are in the cancel event listener')

    showAlbums()
  })
})

const showAlbums = async () => {
  console.log("we fetch data here")

  const albums = await fetchAlbums()
  console.log(albums)

  let html =
    `    
  <thead>
      <tr>
        <th>ID No.</th>
        <th>Title</th>
        <th>Artist</th>
        <th>Year</th>
        <th>Update</th>
        <th>Delete</th>
        <th>View</th>
      </tr>
    </thead>`
  albums.forEach(album => {
    html +=
      `
    <tbody>
      <tr>
        <td class="id">${album.id}</td>
        <td class="title">${album.title}</td>
        <td class="artist">${album.artist}</td>
        <td class="year">${album.year}</td>
        <td><button class="update" id="${album.id}">Update</button></td>
        <td><button class="remove" id="${album.id}" title="${album.title}" artist="${album.artist}"year="${album.year}">Remove</button></td>
        <td><button class="view" id="${album.title}">Details</button></td>
      </tr>
       </tbody>
        `
  })
  document.querySelector("#albumLibrary").innerHTML = html
  document.querySelectorAll(`.view`).forEach(btn => {
    btn.addEventListener('click', e => {
      console.log('we are in the view event listener')
      showAlbum(e.target.getAttribute('id'))
    })
  })

  document.querySelectorAll(`.remove`).forEach(btn => {
    btn.addEventListener('click', e => {
      console.log('we are in the delete event listener')
      let toDelete = {
        id: parseInt(e.target.getAttribute('id')),
        title: e.target.getAttribute('title'),
        artist: e.target.getAttribute('artist'),
        year: parseInt(e.target.getAttribute('year'))
      }

      document.querySelector('body').innerHTML += `
      <div id="myModal" class="myModal">
         <div class="modal-content">
          <p>Are you sure you want to delete this entry?</p>
          <button id="${toDelete}"class="yes">Delete</button>
          <button class="no">Cancel</button>
      </div>
      </div>
      `
      document.querySelector(`.no`).addEventListener('click', e => {
        document.querySelector(`.myModal`).remove()
        showAlbums()
      })
      document.querySelector(`.yes`).addEventListener('click', e => {
        deleteAlbum(toDelete).then(() => {
          document.querySelector(`.myModal`).remove()
          showAlbums()
        })

      })

    })
  })

  document.querySelectorAll(`.update`).forEach(btn => {
    btn.addEventListener('click', e => {
      updateForm(e.target.getAttribute('id'))
    })
  })
}

const updateForm = (id) => {
  let html = `
  <h2> Update Album </h2>
  <label for="title">Title</label><br>
  <input type="text" id="title" name="title" required=true<br>
  <br></br>
  <label for="artist">Artist</label><br>
  <input type="text" id="artist" name="artist" required=true<br>
  <br></br>
  <label for="year">Year</label><br>
  <input type="text" id="year" name="year" required=true<br>
  <br></br>
   <button type="update" class="update">Update</button>
  <button class="cancel">Cancel</button>
  `
  document.querySelector("#albumLibrary").innerHTML = html
  document.querySelector(`.cancel`).addEventListener('click', e => {
    console.log('we are in the cancel event listener')

    showAlbums()
  })

  document.querySelector(`.update`).addEventListener('click', e => {
    console.log('we are in the update event listener')
    let update = {
      id: id,
      title: document.getElementById('title').value,
      artist: document.getElementById('artist').value,
      year: parseInt(document.getElementById('year').value)
    }

    updateAlbum(update).then(() => {
      showAlbums()
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
