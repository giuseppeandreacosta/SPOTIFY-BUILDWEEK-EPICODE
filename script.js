const searchIcon = document.querySelector(".o");
const searchInput = document.querySelector("#search-input");

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

//fetch
// const apiUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/${id}";
// const cardContainer = document.getElementById("albumContainer");
// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     const cardContainer = document.getElementById("albumContainer");

//     data.forEach((item) => {
//       const card = document.createElement("div");
//       card.classList.add("card");

//       const cardContent = `
//         <img src="${item.cover_medium}" class="card-img-top" alt="${item.cover_medium}">
//         <div class="card-body">
//           <h5 class="card-text">${item.title}</h5>
//           <span class="fs-6">${item.name}</span>
//         </div>
//       `;

//       card.innerHTML = cardContent;
//       cardContainer.appendChild(card);
//     });
//   })
//   .catch((error) => {
//     console.error("Errore nella chiamata API:", error);
//   });

//PROVA PER ID RANDOM
function generateRandomId() {
  const randomNumber = Math.floor(Math.random() * 1000); 
  return randomNumber;
}
const randomId = generateRandomId();
const apiUrl = `https://striveschool-api.herokuapp.com/api/deezer/album/${randomId}`;
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore nella richiesta");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); 
  })
  .catch((error) => {
    console.error("Errore:", error);
  });
