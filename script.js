"use strict";

const inputElement = document.querySelectorAll(".input");
const inputLabel = document.querySelectorAll(".input-label");

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

if (input.value !== "") {
  inputLabel[index].classList.add("has-content");
}
