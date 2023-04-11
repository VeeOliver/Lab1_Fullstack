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
          <img src="/imgs/music.png" alt="line art of a CD with music note and heart" height=50px width=50px>
          <p class"title"> ${album.title}</p>
        </div>
        `
  })
  document.querySelector("#albumCard").innerHTML = html
}

showAlbums()