"use strict";

const inputElement = document.querySelectorAll(".input");
const inputLabel = document.querySelectorAll(".input-label");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");

inputElement.forEach((input, index) => {
  input.addEventListener("input", function () {
    if (inputElement.textContent !== "") {
      inputLabel[index].classList.add("has-content");
      inputElement[index].style.outline = "solid 1px #bc7af9";
    } else {
      inputLabel[index].classList.remove("has-content");
    }
  });
});

passwordInput.addEventListener("input", function () {
  confirmInput.addEventListener("input", function () {
    if (passwordInput.value === confirmInput.value) {
      passwordInput.style.outline = "#007361 2px solid";
      confirmInput.style.outline = "#007361 2px solid";
    } else {
      passwordInput.classList.add("no-password");
      confirmInput.classList.add("no-password");
      passwordInput.style.outline = "none";
      confirmInput.style.outline = "none";
    }
  });
});
