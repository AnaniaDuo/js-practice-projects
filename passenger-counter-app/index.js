// initialize the count to 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  console.log("count is ", count);
}

let welcomeEl = document.getElementById("welcome-el");

let myName = "Anh";
let greeting = "Welcome, ";

welcomeEl.innerText = greeting + myName;

console.log("innerText", welcomeEl.innerText);

let saveEl = document.getElementById("save-el");

function save() {
  saveEl.innerText += ` ${count} - `;
  count = 0;
  countEl.innerText = count;
}
