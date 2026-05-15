"use strict";
const allButtonCont = document.querySelector(".keys");
const calcDisplay = document.querySelector(".display");
console.log(allButtonCont, calcDisplay);

allButtonCont.addEventListener("click", (e) => {
  console.log(e.target);
  if (!e.target.classList.contains("key")) return;
  if (e.target.classList.contains("action")) {
    if (e.target.textContent.toLowerCase() === "ac") {
      calcDisplay.value = "";
      return;
    } else if (e.target.textContent.toLowerCase() === "del") {
      calcDisplay.value = calcDisplay.value.slice(0, -1);
      return;
    } else if (e.target.textContent === "%") {
      if (calcDisplay.value === "") return;
      calcDisplay.value += "%";
      return;
    }
  }
  if (e.target.classList.contains("equals")) {
    let sanitizeVal = calcDisplay.value;
    sanitizeVal = sanitizeVal.replaceAll("×", "*");
    sanitizeVal = sanitizeVal.replaceAll("÷", "/");
    sanitizeVal = sanitizeVal.replaceAll("%", "/100");
    calcDisplay.value = eval(sanitizeVal);
    return;
  }
  if (calcDisplay.value.startsWith("0")) {
    calcDisplay.value = calcDisplay.value.slice(1);
  }
  calcDisplay.value += e.target.textContent;
});
