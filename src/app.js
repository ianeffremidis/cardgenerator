/* eslint-disable */

function deckBuilder() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["&hearts;", "&diams;", "&spades;", "&clubs;"];
  const cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
}
function randomCard(cards) {
  const random = Math.floor(Math.random() * 51);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
  //topsign
  const sign = document.getElementById("top");
  const newSign = document.createElement("div");
  newSign.innerHTML = cardSuit;
  newSign.setAttribute("id", "top");
  if (cardSuit == "&hearts;") {
    newSign.classList.add("sign");
  } else if (cardSuit == "&diams;") {
    newSign.classList.add("sign");
  } else if (cardSuit == "&spades;") {
    newSign.classList.add("signBlack");
  } else {
    newSign.classList.add("signBlack");
  }
  sign.parentNode.replaceChild(newSign, sign);
  //bottomsign
  const signlo = document.getElementById("bot");
  const newSignlo = document.createElement("div");
  newSignlo.innerHTML = cardSuit;
  newSignlo.setAttribute("id", "bot");
  if (cardSuit == "&hearts;") {
    newSignlo.classList.add("signlo");
  } else if (cardSuit == "&diams;") {
    newSignlo.classList.add("signlo");
  } else if (cardSuit == "&spades;") {
    newSignlo.classList.add("signloBlack");
  } else {
    newSignlo.classList.add("signloBlack");
  }
  signlo.parentNode.replaceChild(newSignlo, signlo);
  //number
  const number = document.getElementById("numb");
  const newNumber = document.createElement("div");
  newNumber.innerHTML = cardValue;
  newNumber.setAttribute("id", "numb");
  if (cardSuit == "&hearts;") {
    newNumber.classList.add("number");
  } else if (cardSuit == "&diams;") {
    newNumber.classList.add("number");
  } else if (cardSuit == "&spades;") {
    newNumber.classList.add("numberBlack");
  } else {
    newNumber.classList.add("numberBlack");
  }
  number.parentNode.replaceChild(newNumber, number);
}

const run = deckBuilder();

var bleep = new Audio();
bleep.src = "src/click.mp3";
function playSound(num) {
  bleep.play();
}

window.onload = function() {
  randomCard(run);
  const btn = document.getElementById("but");
  btn.addEventListener("click", () => {
    randomCard(run);
    playSound(1);
  });
  console.log("Hello Rigo from the console!");
};
