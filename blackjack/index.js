let card1 = "";
let card2 = "";
let cards = [card1, card2];

let isAlive = true;
let hasBlackjack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let newCardEl = document.getElementById("new-card-el");
let startGameEl = document.getElementById("start-game-el");
cardEl.innerText = "Cards: " + card1 + " " + card2;

function sum(cards) {
  let sum = 0;
  for (let i = 0; i < cards.length; i++) {
    sum += cards[i];
  }
  return sum;
}

function getRandom2to11() {
  return Math.floor(Math.random() * 10) + 2;
}

function start() {
  newCardEl.classList.remove("hidden");
  card1 = getRandom2to11();
  card2 = getRandom2to11();
  cards = [card1, card2];

  isAlive = true;
  hasBlackjack = false;
  message = "";
  messageEl = document.getElementById("message-el");
  cardEl = document.getElementById("card-el");
  sumEl = document.getElementById("sum-el");
  cardEl.innerText = "Cards: " + card1 + " " + card2;
  renderCards();
}

function renderCards() {
  let sumResult = sum(cards);
  if (sumResult <= 20) {
    message = "Want to draw a new card?";
  } else if (sumResult === 21) {
    message = "You've got a blackjack!";
    hasBlackjack = true;
    newCardEl.classList.add("hidden");
  } else {
    message = "You're out of the game!";
    isAlive = false;
    newCardEl.classList.add("hidden");
  }
  sumEl.innerText = `Sum: ${sumResult}`;
  messageEl.innerText = message;
}

function drawCard() {
  let newCard = getRandom2to11();
  cards.push(newCard);
  cardEl.innerText += ` ${newCard}`;
  renderCards();
}
