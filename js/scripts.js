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

// close nav menu when link clicked
const links = document.getElementsByClassName("nav-link");

for (let link of links) {
  link.addEventListener("click", () => {
    navToggler.classList.remove("open");
    navMenu.classList.remove("show");
    menuOpen = false;
    console.log("successful link click");
  });
}

// form validation

const form = document.getElementsByTagName("form")[0];
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formMessage = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
let nameStatus = null;
let emailStatus = null;
let messageStatus = null;

form.addEventListener("submit", function (event) {
  if (formName.validity.valueMissing) {
    event.preventDefault();
    formName.classList.add("error");
    nameError.innerHTML = "Field required";
    nameStatus = true;
    console.log("Form not submitted");
  }

  if (formEmail.validity.valueMissing) {
    event.preventDefault();
    formEmail.classList.add("error");
    emailError.innerHTML = "Field required";
    emailStatus = true;
  }

  if (formEmail.validity.typeMismatch) {
    event.preventDefault();
    formEmail.classList.add("error");
    emailError.innerHTML = "Please enter a valid email";
    emailStatus = true;
  }

  if (formMessage.validity.valueMissing) {
    event.preventDefault();
    formMessage.classList.add("error");
    messageError.innerHTML = "Field required";
    messageStatus = true;
  } else [console.log("Form submitted")];
});

formName.addEventListener("change", function () {
  if (nameStatus == true && formName.validity.valid) {
    formName.classList.remove("error");
    nameError.innerHTML = "";
    nameStatus = false;
  }
});

formEmail.addEventListener("change", function () {
  if (emailStatus == true && formEmail.validity.valid) {
    formEmail.classList.remove("error");
    emailError.innerHTML = "";
    emailStatus = false;
  }
});

formMessage.addEventListener("change", function () {
  if (messageStatus == true && formMessage.validity.valid) {
    formMessage.classList.remove("error");
    messageError.innerHTML = "";
    messageStatus = false;
  }
});
