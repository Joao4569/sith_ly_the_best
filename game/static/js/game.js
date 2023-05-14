let cardData;

fetch('/static/data/cardData.json')
  .then(response => response.json())
  .then(data => {
    cardData = data;
    console.log('Card data:', cardData); // Debug: Log cardData to console
  })
  .catch(error => console.error('Error fetching card data:', error));

// import cardData from "../cardData.json" assert { type: "json" };

const wrapper = document.getElementById("wrapper");
const container = document.getElementById("container");
const easyMode = document.getElementById("easy");
const mediumMode = document.getElementById("medium");
const hardMode = document.getElementById("hard");

let clicks = 0;
let choiceOne = "";
let choiceTwo = "";
let timerActive = false;

export function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function init(mode) {
  console.log('Initializing game with mode:', mode); // Debug: Log game mode to console
  easyMode.remove();
  mediumMode.remove();
  hardMode.remove();
  let cardArray = cardData;
  let newArr = [...cardArray];

  if (mode === "easy") {
    newArr = cardArray.slice(0, 12);
    wrapper.style.gridTemplateColumns = `repeat(4, 1fr)`;
  }

  if (mode === "medium") {
    newArr = cardArray.slice(0, 20);
    wrapper.style.gridTemplateColumns = `repeat(5, 1fr)`;
  }

  console.log('New card array:', newArr); // Debug: Log new card array to console

  const shuffledCards = shuffleArray(newArr);

  shuffledCards.forEach((card) => {
    const element = document.createElement("div");

    element.classList.add("flip-card");

    const html = `
    <div data-name=${card.data} class="flip-card-inner">
      <div class="flip-card-front">
        <img
          class="card-image"
          src="/static/assets/images/cardfront.jpg"
          alt="front card image"
        />
      </div>
      <div class="flip-card-back">
        <img
          class="card-image"
          src="/static/assets/images/${card.image}"
          alt="${card.name}"
        />
        <div class="name-container">
          <span class="name">${card.name}</span>
        </div>
      </div>
    </div>
  `;

    element.innerHTML = html;

    element.addEventListener("click", flipCard);
    wrapper.appendChild(element);
  });
}

function gameTimer(delay) {
  return new Promise((resolve) => {
    timerActive = true;
    setTimeout(() => {
      resolve();
      timerActive = false;
    }, delay);
  });
}

function endGame(timeSpent, moves) {
  // Update the form's input fields with the game results
  document.getElementById('timeSpent').value = timeSpent;
  document.getElementById('moves').value = moves;

  // Submit the form
  document.getElementById('endGameForm').submit();
}

async function flipCard(e) {
  const element = e.target.closest(".flip-card-inner");

  if (timerActive) return;
  if (element.classList.contains("isFlipped")) return;
  element.classList.toggle("isFlipped");

  if (clicks === 0) {
    choiceOne = element.dataset.name;
  }

  if (clicks === 1) {
    choiceTwo = element.dataset.name;
  }

  clicks++;

  if (clicks === 2) {
    if (choiceOne === choiceTwo) {
      const cards = document.querySelectorAll(`[data-name=${choiceOne}]`);

      cards.forEach((card) => card.classList.add("fixed"));
    }

    await gameTimer(1000);

    const allCards = document.querySelectorAll(".flip-card-inner");
    allCards.forEach((card) => card.classList.remove("isFlipped"));

    clicks = 0;
    choiceOne = "";
    choiceTwo = "";
  }

  const { name } = element.dataset;
}

easyMode.addEventListener("click", () => {
  console.log('Easy mode clicked'); // Debug: Log button click to console
  container.classList.remove("container-hidden");
  wrapper.classList.remove("hidden");
  init("easy");
});

mediumMode.addEventListener("click", () => {
  console.log('Medium mode clicked'); // Debug: Log button click to console
  container.classList.remove("container-hidden");
  wrapper.classList.remove("hidden");
  init("medium");
});

hardMode.addEventListener("click", () => {
  console.log('Hard mode clicked'); // Debug: Log button click to console
  container.classList.remove("container-hidden");
  wrapper.classList.remove("hidden");
  init("hard");
});
