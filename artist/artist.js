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



const displayArtist = (album, artist) => {
    contenuto.innerHTML += /*html*/ `
    <div class="artist-name">
    <h1>${artist.name}</h1>
    </div>

  <div class="button-artist d-flex">
    <button class="btn btn-follow">Follow</button>
    <i class="bi bi-three-dots"></i>
  </div>

  <div id="discografia">
    <h3>Discografia</h3>
    <div class="row">
      <div class="col-md-2">
        <div class="card p-3">
          <img src="${album.cover_small}" class="card-img-top" alt="...">
          <div class="card-body">
            <div>
              <button class="btn btn-play me-2"></button>
            </div>
            <h5 class="card-text">${album.title}</h5>
            <p class="card-text">${album.release_date} • ${album.record_type}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    `
}

const bgArtist = () => {
    const bg = document.querySelector('.artist-name')
    bg.style.background = '${artist.picture_xl}'
}


window.onload = async function () {
  try{
    const artist = await getArtist(id)
    const album = await getAlbum(id)
    const tracklist = await getTracklist(id)
    displayArtist(artist, album, tracklist)
  } catch (error){
    console.log(error)
  }
}

// DA AGGIUNGERE LE FUNZIONI PER FARE LA RICERCA QUI SOTTO

