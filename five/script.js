const display = document.getElementById("text");

function addValue(value) {
  display.value += value;
}

function calculate() {
  display.value = eval(display.value);
}

function clear() {
  display.value = "0";
}

/* ----------------------------------------------- */

document.getElementById("one").onclick = function () {
  addValue("1");
  console.log("one");
};

document.getElementById("two").onclick = function () {
  addValue("2");
  console.log("two");
};

document.getElementById("three").onclick = function () {
  addValue("3");
  console.log("three");
};

document.getElementById("four").onclick = function () {
  addValue("4");
  console.log("four");
};

document.getElementById("five").onclick = function () {
  addValue("5");
  console.log("five");
};

document.getElementById("six").onclick = function () {
  addValue("6");
  console.log("six");
};

document.getElementById("seven").onclick = function () {
  addValue("7");
  console.log("seven");
};

document.getElementById("eight").onclick = function () {
  addValue("8");
  console.log("eight");
};

document.getElementById("nine").onclick = function () {
  addValue("9");
  console.log("nine");
};

document.getElementById("zero").onclick = function () {
  addValue("0");
  console.log("zero");
};

document.getElementById("add").onclick = function () {
  addValue("+");
  console.log("add");
};

document.getElementById("subtract").onclick = function () {
  addValue("-");
  console.log("minus");
};

document.getElementById("multiply").onclick = function () {
  addValue("*");
  console.log("multiply");
};

document.getElementById("divide").onclick = function () {
  addValue("/");
  console.log("divide");
};

document.getElementById("equal").onclick = function () {
  calculate();
  console.log("equal");
};

document.getElementById("clear").onclick = function () {
  clear();
};
