const searchIcon = document.querySelector(".o");
const searchInput = document.querySelector("#search-input");

searchIcon.addEventListener('click', () => {
  searchInput.style.display = "block";
  searchIcon.style.display = "none";
  searchInput.style.width = "150px";
  searchInput.style.border = "2px solid #81b71a";
  searchInput.focus();
});

searchInput.addEventListener("blur", () => {
    if(searchInput.value === '') {
       searchIcon.style.display = "block";
       searchInput.style.display = "none";
       searchInput.style.width = "0";
    }
});

