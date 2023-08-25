const openButton = document.querySelector("#openButton");
const closeButton = document.querySelector("#closeButton");
const body = document.body;
const fullscreenMenu = document.querySelector("#fullscreen-menu");

openButton.addEventListener("click", e => {
    e.preventDefault();
    fullscreenMenu.style.display = "flex";
})

closeButton.addEventListener("click", e => {
    e.preventDefault();
    fullscreenMenu.style.display = "none";
})