const searchIcon = document.querySelector(".o");
const searchInput = document.querySelector("#search-input");

searchIcon.addEventListener("click", () => {
  searchInput.style.display = "block";
  searchIcon.style.display = "none";
  searchInput.focus();
});

searchInput.addEventListener("blur", () =>{
    if(searchInput.value === "") {
       searchIcon.style.display = "block";
       searchInput.style.display = "none";
    }
});

