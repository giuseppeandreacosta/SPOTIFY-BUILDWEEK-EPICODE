const searchIcon = document.querySelector(".o");
const searchInput = document.querySelector("#search-input");

const contenuto = document.querySelector("#artist-container .row")


searchIcon.addEventListener('click', () => {
  searchInput.style.display = "block";
  searchIcon.style.display = "none";
  searchInput.style.width = "150px";
  searchInput.style.border = "2px solid #81b71a";
  searchInput.focus();
});

searchInput.addEventListener("blur", () => {
  if (searchInput.value === '') {
    searchIcon.style.display = "block";
    searchInput.style.display = "none";
    searchInput.style.width = "0";
  }
});



const getResult = async () => {
  try{
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    const data = await response.json()
    return data
  } catch (error){
    console.log(error)
  }
}

const displayResult = (result) => {
  
  
  contenuto.innerHTML = result.slice(0, 14) /*html*/ `
  
  `
}