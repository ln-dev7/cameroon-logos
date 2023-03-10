const overlay = document.querySelector(".overlay");
const cardUpload = document.querySelector(".card-upload");
const cardDownload = document.querySelector(".card-download");
// ----------------------------------------------------------------------------
const btnUpload = document.querySelector(".header-right .upload");
btnUpload.addEventListener("click", () => {
  overlay.classList.add("overlay-active");
  cardUpload.classList.remove("hide");
  cardDownload.classList.add("hide");
  document
  .querySelector(".card-upload__close")
  .addEventListener("click", () => {
    overlay.classList.remove("overlay-active");
  });
});
// ----------------------------------------------------------------------------
const logos = document.querySelectorAll(".logo");
logos.forEach((logo) => {
  logo.addEventListener("click", () => {
    overlay.classList.add("overlay-active");
    cardDownload.classList.remove("hide");
    cardUpload.classList.add("hide");
  });

  document
    .querySelector(".card-download__close")
    .addEventListener("click", () => {
      overlay.classList.remove("overlay-active");
    });
});
// ----------------------------------------------------------------------------
// const menuClose = document.querySelector(".menu-close");
// const menuOpen = document.querySelector(".header-left-menu");
// const menu = document.querySelector(".menu");

// menuOpen.addEventListener("click", () => {
//   menu.classList.add("menu-open");
// });
// menuClose.addEventListener("click", () => {
//   menu.classList.remove("menu-open");
// });
// ----------------------------------------------------------------------------
