/*
OVERVIEW
- addEventListener
- innerHTML
- input.value
- localStorage
- how to grab url in chrome extension

*/

// variables
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
// render leads from local storage if any
renderLeadsFromStorage();

async function getCurrentTabUrl() {
  let queryOptions = { active: true, currentWindow: true };
  // `tabs` is an array; the first element is the active tab.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.url;
}

// delete event listener - use double click to make sure deleting all leads is the desired action
deleteBtn.addEventListener("dblclick", function () {
  myLeads = [];
  renderLeads(myLeads);
  localStorage.clear();
});

// add event listener
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  console.log(myLeads);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads(myLeads);

  // // first way to print out a list of all leads

  // let liChild = document.createElement("li");
  // liChild.textContent = inputEl.value;
  // ulEl.append(liChild);
});

// tab button listener
tabBtn.addEventListener("click", function () {
  // grab the current url - this does not work for chrome extension
  // let currentUrl = window.location.href;
  // quick way let input equals to the current url
  // inputEl.value = currentUrl;
  // inputBtn.click();

  // grab the current url

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let currentUrl = tabs[0].url;
    console.log("Current Tab URL:", currentUrl);
    myLeads.push(currentUrl);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
  });
});

// save input when pressing enter button
inputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    inputBtn.click();
  }
});

function renderLeadsFromStorage() {
  console.log("get here");
  let leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));
  if (leadsFromStorage) {
    myLeads = [...leadsFromStorage];
    renderLeads(myLeads);
  }
}

function renderLeads(leads) {
  let list = "";
  for (let i = 0; i < leads.length; i++) {
    list += `
    <li>
      <a href="${leads[i]}" target="_blank">${leads[i]}
      </a>
    </li>
    `;
  }
  ulEl.innerHTML = list;
}

// second way to print out a list of all lists

// for (let i = 0; i < myLeads.length; i++) {
//   ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
// }

// SOME PRACTICE
// let divEl = document.getElementById("container");
// divEl.innerHTML = "<button onclick='buy()'>Buy!</button";

// function buy() {
//   divEl.innerHTML += "<p>Thank you for buying!</p>";
// }
