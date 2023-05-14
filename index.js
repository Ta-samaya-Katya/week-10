// 1 задание:
// 1 вариант:
function showMessage() {
  console.log("Я учу JavaScript!");
}
showMessage();

// 2 вариант:
let showMessage2 = function () {
  console.log("Я учу JavaScript!");
};
showMessage2();

// 3 вариант:
let showMessage3 = () => console.log("Я учу JavaScript!");
showMessage3();

// 2 задание:
let elem = document.getElementById("elem");
let image = document.getElementById("elem-img");

function showPreviousImg() {
  image.src = "./assets/images/cat1.jpeg";
}

function showNextImg() {
  image.src = "./assets/images/cat2.jpeg";
}

// Задание со звездочкой:
let year = +prompt("Введите год");
function isLeap() {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)
  ) {
    alert("Високосный год.");
  } else {
    alert("Невисокосный год.");
  }
}
isLeap();
