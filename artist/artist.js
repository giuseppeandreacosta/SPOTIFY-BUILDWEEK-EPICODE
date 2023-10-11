// QUERY STRING
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
let contenuto = document.querySelector('#album-image .row')

// FUNZIONE CHE VA A POPOLARE LA PAGINA CON L'ALBUM SELEZIONATO
const getAlbum = async (id) => {
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`)
        const album = await response.json()
        return album
    } catch (error) {
        console.log(error)
    }
}

const getArtist = async (id) => {
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`)
        const artist = await response.json()
        return artist
    } catch (error) {
        console.log(error)
    }
}

const getTracklist = async (id) => {
    try {
        const response = await fetch(`https://api.deezer.com/album/${id}/tracks`)
        const tracks = await response.json()
        return tracks
    } catch (error) {
        console.log(error)
    }
}

const displayAlbum = (album, artist, tracks) => {
    contenuto.innerHTML += /*html*/ `
    <div id="title-album d-flex">
    <div>
      <img src="${album.cover_medium}" alt="">
    </div>
    <div>
      <p>Album</p>
      <h1>${album.title}</h1>
      <p>${artist.picture_small} ${artist.name} • ${album.release_date} • ${tracks.total} ${timeStampFromDuration(album.duration)}</p>
    </div>
  </div>

  <div class="button-artist d-flex">
    <button class="btn btn-play me-2"></button>
    <i class="bi bi-suit-heart-fill"></i>
    <i class="bi bi-arrow-down-circle"></i>
    <i class="bi bi-three-dots"></i>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Titolo</th>
        <th scope="col">Artista</th>
        <th scope="col"><i class="bi bi-clock"></i></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">${tracks.data.track_position}</th>
        <td>${tracks.data.title}</td>
        <td>${artist.name}</td>
        <td>${timeStampFromDuration(tracks.data.duration)}</td>
      </tr>
    </tbody>
  </table>
    
    `
}

// DA AGGIUNGERE LE FUNZIONI PER FARE LA RICERCA QUI SOTTO

