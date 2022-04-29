const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];

const btnOpenMenu = document.getElementById("open-menu");
btnOpenMenu.addEventListener("click", function () {
  hamburgerMenu.style = "display: block";
});

const btnCloseMenu = document.getElementById("close-menu");
btnCloseMenu.addEventListener("click", function () {
  hamburgerMenu.style = "display: none";
});
