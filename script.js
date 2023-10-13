const searchIcon = document.querySelector(".o");
const searchInput = document.querySelector("#search-input");

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
          <a class="artistPage" href="../artist/artist.html?id=${song.artist.id}"><h6 class="card-text">${song.artist.name}</h6></a>
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
