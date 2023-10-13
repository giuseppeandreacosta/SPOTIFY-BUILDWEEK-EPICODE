// QUERY STRING
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
let contenuto = document.querySelector('#album-image .row')
let contenuto2 = document.querySelector('.row .albums')


const getArtist = async (id) => {
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`)
        const artist = await response.json()
        return artist
    } catch (error) {
        console.log(error)
    }
}




const displayArtist = (artist) => {
  const song = artist.data
    contenuto.innerHTML += /*html*/ `
    <div class="artist-name">
    <img src="${artist.picture_xl}" class="artist-img img-fluid">
    <h1 id="${artist.id}">${artist.name}</h1>
    </div>
    `
}

const getTracks = async (id) => {
  try{
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=6`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const displayTracks = (data) => {
  const song = data.data
  console.log(song)
  console.log(data)
  contenuto2.innerHTML = song.map(song => /*html*/ `

      
        <div class="card p-3 col-md-2 align-items-center" id="${song.album.id}">
          <img src="${song.album.cover_small}" class="card-img-top" alt="...">
          <div class="card-body">
            <a href="../album/album.html?id=${song.album.id}" style="text-decoration: none; color:white;"><h6 class="card-text">${song.album.title}</h6></a>
            <p class="card-text">${song.album.type}</p>
          </div>
        </div>
  `
  ).join('')
}



window.onload = async function () {
  try{
    const artist = await getArtist(id)
    displayArtist(artist)
    const song = await getTracks(id)
    displayTracks(song)
    
  } catch (error){
    console.log(error)
  }
}

// DA AGGIUNGERE LE FUNZIONI PER FARE LA RICERCA QUI SOTTO
