const searchIcon = document.querySelector(".o");
const searchInput = document.querySelector("#search-input");
const cardContainer = document.getElementById("albumContainer");

const contenuto = document.querySelector("#artist-container .row");



searchIcon.addEventListener("click", () => {
  searchInput.style.display = "block";
  searchIcon.style.display = "none";
  searchInput.style.width = "150px";
  searchInput.style.border = "2px solid #00FF00";
  searchInput.focus();
});

searchInput.addEventListener("blur", () => {
  if (searchInput.value === "") {
    searchIcon.style.display = "block";
    searchInput.style.display = "none";
    searchInput.style.width = "0";
  }
});

const getResult = async (query) => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayResult = (result, contenuto) => {
  const songs = result.data;
  for (let i = 0; i < 1; i++) {
    const song = songs[i];
    console.log(song);
    contenuto.innerHTML += /*html*/ `
      <div class="card col-md-2 p-3 align-items-center" id="${song.id}">
        <img src="${song.artist.picture_small}" class="card-img-top" alt="...">
        <div class="card-body">
          <a href="../artist/artist.html?id=${song.artist.id}"><h6 class="card-text">${song.artist.name}</h6></a>
          <p class="card-text">${song.artist.type}</p>
        </div>
      </div>
  `;
  }
};

const searchArtist = async () => {
  const query = searchInput.value.trim();

  if (query.length > 0) {
    const result = await getResult(query);
    contenuto.innerHTML = "";
    displayResult(result, contenuto);
  } else {
    contenuto.innerHTML = "";
  }
};
searchIcon.addEventListener("click", () => {
    searchInput.style.display = "block";
    searchIcon.style.display = "none";
    searchInput.style.width = "150px";
    searchInput.style.border = "2px solid #00FF00";
    searchInput.focus();
});

searchInput.addEventListener("blur", () => {
    if (searchInput.value === "") {
        searchIcon.style.display = "block";
        searchInput.style.display = "none";
        searchInput.style.width = "0";
    }
});

async function fetchAlbums() {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/");
        if (!response.ok) {
            throw new Error("Errore nella richiesta");
        }
        const data = await response.json();

        // Assicurati che data.albums sia un array prima di iterarlo
        if (!Array.isArray(data.albums)) {
            throw new Error("Dati non validi restituiti dall'API");
        }

        data.albums.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const cardContent = `
                <img src="${item.cover_medium}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-text">${item.title}</h5>
                    <span class="fs-6">${item.artist.name}</span>
                </div>
            `;

            card.innerHTML = cardContent;
            cardContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Errore nella chiamata API:", error);
    }
}

fetchAlbums();

function searchInPlaceholder() {
    const searchValue = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const title = card.querySelector(".card-text").textContent.toLowerCase();
        const artist = card.querySelector(".fs-6").textContent.toLowerCase();

        if (title.includes(searchValue) || artist.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", searchInPlaceholder);






const timeRange = document.getElementById("time-range");
const volumeRange = document.getElementById("volume-range");

function updateRangeBackground(rangeElement) {
    const percentage = (rangeElement.value - rangeElement.min) / (rangeElement.max - rangeElement.min) * 100;
    rangeElement.style.background = `linear-gradient(to right, #00FF00 0%, #00FF00 ${percentage}%, #555 ${percentage}%, #555 100%)`;
}

timeRange.addEventListener("input", () => {
    updateRangeBackground(timeRange);
});

volumeRange.addEventListener("input", () => {
    updateRangeBackground(volumeRange);
});
