
"use strict";

let balance = document.querySelector(".balance");

function cookCoffee(price, name) {
  if (balance.value >= price) {
    balance.value -= price;
    balance.style.backgroundColor = "";
    changeDisplayText("Ваш " + name + " готовится");
    startCookig();
  } else {
    changeDisplayText("недостаточно средств");
    balance.style.backgroundColor = "rgb(225, 50, 50)";
  }
}



function startCookig() {
  changeProgress(100);
  setTimeout(function() {
    changeDisplayText("ваш кофе готов!");
  }, 5000)
}


let interval = setInterval(function() {
  changeDisplayText("кофе: " + Date.now());
}, 4000);

setTimeout(function() {
  clearInterval(interval);
  console.log("интервал очищен");
}, 1000);



function changeProgress(percent) {
  let progress = document.querySelector(".progress-bar");
  progress.style.width = percent + "%";
  progress.style.transition = "width 5s";
}







function changeDisplayText(text) {
  let displayText = document.querySelector(".display-text");
  if (text.length > 25) {
    displayText.innerHTML = text.slice(0, 25) + "...";
  } else {
    displayText.innerHTML = text;
  }
}
