const cardDataElement = document.getElementById("card-data");
const wrapper = document.getElementById("wrapper");
const modeSelector = document.getElementById("mode-selector");
const scoreContainer = document.getElementById("score-container");
const statusElement = document.getElementById("game-status");
const timeElement = document.getElementById("totalTime");
const movesElement = document.getElementById("totalMoves");

const MODE_CARD_COUNTS = {
  easy: 12,
  medium: 20,
  hard: 30,
};

let firstCard = null;
let secondCard = null;
let boardLocked = false;
let matchedCards = 0;
let moves = 0;
let selectedMode = null;
let startTime = 0;
let timerInterval = null;

export function shuffleArray(cards, random = Math.random) {
  const shuffled = [...cards];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

function elapsedMilliseconds() {
  return Math.max(1, Math.round(performance.now() - startTime));
}

function updateTimer() {
  timeElement.textContent = (elapsedMilliseconds() / 1000).toFixed(2);
}

function createCard(card) {
  const cardElement = document.createElement("button");
  cardElement.type = "button";
  cardElement.className = "flip-card";
  cardElement.setAttribute("aria-label", "Hidden card");

  const inner = document.createElement("span");
  inner.className = "flip-card-inner";
  inner.dataset.name = card.data;

  const front = document.createElement("span");
  front.className = "flip-card-front";
  const frontImage = document.createElement("img");
  frontImage.className = "card-image";
  frontImage.src = wrapper.dataset.cardBack;
  frontImage.alt = "Star Wars card back";
  front.appendChild(frontImage);

  const back = document.createElement("span");
  back.className = "flip-card-back";
  const backImage = document.createElement("img");
  backImage.className = "card-image";
  backImage.src = card.image;
  backImage.alt = card.name;

  const name = document.createElement("span");
  name.className = "name-container";
  const nameText = document.createElement("span");
  nameText.className = "name";
  nameText.textContent = card.name;
  name.appendChild(nameText);
  back.append(backImage, name);

  inner.append(front, back);
  cardElement.appendChild(inner);
  cardElement.addEventListener("click", () => flipCard(cardElement, inner));
  return cardElement;
}

function startGame(mode) {
  const allCards = JSON.parse(cardDataElement.textContent);
  const cardCount = MODE_CARD_COUNTS[mode];

  selectedMode = mode;
  modeSelector.hidden = true;
  scoreContainer.style.display = "flex";
  statusElement.textContent = `${mode[0].toUpperCase()}${mode.slice(1)} mode — find all matching pairs.`;
  wrapper.className = `wrapper visible mode-${mode}`;

  shuffleArray(allCards.slice(0, cardCount)).forEach((card) => {
    wrapper.appendChild(createCard(card));
  });

  startTime = performance.now();
  timerInterval = window.setInterval(updateTimer, 100);
}

function finishGame() {
  window.clearInterval(timerInterval);
  const timeSpent = elapsedMilliseconds();
  timeElement.textContent = (timeSpent / 1000).toFixed(2);
  statusElement.textContent = "Complete! Saving your score…";
  boardLocked = true;

  document.getElementById("timeSpent").value = timeSpent;
  document.getElementById("moves").value = moves;
  document.getElementById("gameMode").value = selectedMode;

  window.setTimeout(() => {
    document.getElementById("endGameForm").submit();
  }, 500);
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  boardLocked = false;
}

function resolveTurn() {
  const firstInner = firstCard.querySelector(".flip-card-inner");
  const secondInner = secondCard.querySelector(".flip-card-inner");
  const isMatch = firstInner.dataset.name === secondInner.dataset.name;

  if (isMatch) {
    firstInner.classList.add("fixed");
    secondInner.classList.add("fixed");
    firstCard.disabled = true;
    secondCard.disabled = true;
    matchedCards += 2;
    resetTurn();

    if (matchedCards === MODE_CARD_COUNTS[selectedMode]) {
      finishGame();
    }
    return;
  }

  window.setTimeout(() => {
    firstInner.classList.remove("is-flipped");
    secondInner.classList.remove("is-flipped");
    firstCard.setAttribute("aria-label", "Hidden card");
    secondCard.setAttribute("aria-label", "Hidden card");
    resetTurn();
  }, 750);
}

function flipCard(cardElement, inner) {
  if (boardLocked || cardElement === firstCard || inner.classList.contains("fixed")) {
    return;
  }

  inner.classList.add("is-flipped");
  cardElement.setAttribute(
    "aria-label",
    inner.querySelector(".flip-card-back img").alt,
  );

  if (!firstCard) {
    firstCard = cardElement;
    return;
  }

  secondCard = cardElement;
  boardLocked = true;
  moves += 1;
  movesElement.textContent = moves;
  resolveTurn();
}

modeSelector.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => startGame(button.dataset.mode));
});
