let num1 = 100;
let num2 = 10;

document.getElementById("num1-el").innerText = num1;
document.getElementById("num2-el").innerText = num2;

let resultEl = document.getElementById("result-el");
function add() {
  let result = num1 + num2;
  resultEl.innerText = result;
}

function subtract() {
  let result = num1 - num2;
  resultEl.innerText = result;
}

function divide() {
  let result = num1 / num2;
  resultEl.innerText = result;
}

function multiply() {
  let result = num1 * num2;
  resultEl.innerText = result;
}
