// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika humberger menu di klick
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
// ketika humberger menu di klick
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//klik di luar sidebar untuk menghilangkan nav
const humberger = document.querySelector("#humberger-menu");
const seacrhButton = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!seacrhButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
