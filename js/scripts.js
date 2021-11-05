"use strict";

// hamburger animation
const navToggler = document.getElementsByClassName("navbar-toggler")[0];
const navMenu = document.getElementsByClassName("navigation")[0];
let menuOpen = false;

navToggler.addEventListener("click", () => {
  if (!menuOpen) {
    navToggler.classList.add("open");
    navMenu.classList.add("show");
    menuOpen = true;
    console.log("Menu open");
    console.log(navToggler.classList);
  } else {
    navToggler.classList.remove("open");
    navMenu.classList.remove("show");
    menuOpen = false;
    console.log("Menu Close");
  }
});

const width = window.innerWidth;
function clearMobileShowClass() {
  if (width >= 992) {
    navToggler.classList.remove("open");
    navMenu.classList.remove("show");
    menuOpen = false;
  }
}

window.onresize = clearMobileShowClass;
