// import cardData from "/static/data/cardData.json"
// assert {
//   type: "json"
// };

const cardData = [{
    name: "Darth Maul",
    data: "maul",
    image: "maul.jpg"
  },
  {
    name: "Darth Maul",
    data: "maul",
    image: "maul.jpg"
  },
  // {
  //   "name": "Darth Sidious",
  //   "data": "sidious",
  //   "image": "sidious.jpg"
  // },
  // {
  //   "name": "Darth Sidious",
  //   "data": "sidious",
  //   "image": "sidious.jpg"
  // },
  // {
  //   "name": "Darth Vader",
  //   "data": "vader",
  //   "image": "vader.jpg"
  // },
  // {
  //   "name": "Darth Vader",
  //   "data": "vader",
  //   "image": "vader.jpg"
  // },
  // {
  //   "name": "Luke SkyWalker",
  //   "data": "luke",
  //   "image": "luke.jpg"
  // },
  // {
  //   "name": "Luke SkyWalker",
  //   "data": "luke",
  //   "image": "luke.jpg"
  // },
  // {
  //   "name": "Qui Gon Jinn",
  //   "data": "qui-gon",
  //   "image": "qui-gon.jpg"
  // },
  // {
  //   "name": "Qui Gon Jinn",
  //   "data": "qui-gon",
  //   "image": "qui-gon.jpg"
  // },
  // {
  //   "name": "Obi Wan Kenobi",
  //   "data": "obi-wan",
  //   "image": "obi-wan.jpg"
  // },
  // {
  //   "name": "Obi Wan Kenobi",
  //   "data": "obi-wan",
  //   "image": "obi-wan.jpg"
  // },
  // {
  //   "name": "Mace Windu",
  //   "data": "mace-windu",
  //   "image": "mace-windu.jpg"
  // },
  // {
  //   "name": "Mace Windu",
  //   "data": "mace-windu",
  //   "image": "mace-windu.jpg"
  // },
  // {
  //   "name": "Boba Fett",
  //   "data": "boba-fett",
  //   "image": "boba-fett.jpg"
  // },
  // {
  //   "name": "Boba Fett",
  //   "data": "boba-fett",
  //   "image": "boba-fett.jpg"
  // },
  // {
  //   "name": "Han Solo",
  //   "data": "han-solo",
  //   "image": "han-solo.jpg"
  // },
  // {
  //   "name": "Han Solo",
  //   "data": "han-solo",
  //   "image": "han-solo.jpg"
  // },
  // {
  //   "name": "R2 D2",
  //   "data": "r2d2",
  //   "image": "r2d2.jpg"
  // },
  // {
  //   "name": "R2 D2",
  //   "data": "r2d2",
  //   "image": "r2d2.jpg"
  // },
  // {
  //   "name": "C3PO",
  //   "data": "c3po",
  //   "image": "c3po.jpg"
  // },
  // {
  //   "name": "C3PO",
  //   "data": "c3po",
  //   "image": "c3po.jpg"
  // },
  // {
  //   "name": "Anakin Skywalker",
  //   "data": "anakin",
  //   "image": "anakin.jpg"
  // },
  // {
  //   "name": "Anakin Skywalker",
  //   "data": "anakin",
  //   "image": "anakin.jpg"
  // },
  // {
  //   "name": "Chewbacca",
  //   "data": "chewbacca",
  //   "image": "chewbacca.webp"
  // },
  // {
  //   "name": "Chewbacca",
  //   "data": "chewbacca",
  //   "image": "chewbacca.webp"
  // },
  // {
  //   "name": "Princess Leia",
  //   "data": "leia",
  //   "image": "leia.jpg"
  // },
  // {
  //   "name": "Princess Leia",
  //   "data": "leia",
  //   "image": "leia.jpg"
  // },
  // {
  //   "name": "Yoda",
  //   "data": "yoda",
  //   "image": "yoda.jpg"
  // },
  // {
  //   "name": "Yoda",
  //   "data": "yoda",
  //   "image": "yoda.jpg"
  // }
]

const wrapper = document.getElementById("wrapper");
const easyMode = document.getElementById("easy");
const mediumMode = document.getElementById("medium");
const hardMode = document.getElementById("hard");
const testMode = document.getElementById("test"); // test button

let clicks = 0;
let totalClicks = 0;
let choiceOne = "";
let choiceTwo = "";
let timerActive = false;
let startTime;
let elapsedTime = 0;
let timerInterval;

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
  easyMode.remove();
  mediumMode.remove();
  hardMode.remove();
  testMode.remove(); // remove test button
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

  // If test mode, only take the first card and duplicate it
  if (mode === "test") {
    newArr = [cardArray[0], cardArray[0]];
    wrapper.style.gridTemplateColumns = `repeat(2, 1fr)`;
  }

  wrapper.classList.add("visible");

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

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    document.getElementById('totalTime').innerText = (elapsedTime / 1000).toFixed(2);
  }, 100);
}

function stopTimer() {
  clearInterval(timerInterval);
  endGame(elapsedTime, totalClicks)
}


function endGame(time, moves) {
  // Update the form's input fields with the game results
  const totalTime = document.getElementById('timeSpent')
  const totalMoves = document.getElementById('moves')
  const gameMode = document.getElementById('gameMode')

  console.log(totalTime, totalMoves, gameMode)





  gameMode.value = 'easy'
  totalMoves.value = moves
  totalTime.value = time
  // Submit the form
  document.getElementById('endGameForm').submit();
}

async function flipCard(e) {
  const element = e.target.closest(".flip-card-inner");

  if (timerActive) return;
  if (element.classList.contains("isFlipped")) return;

  // start the timer on the first click
  if (totalClicks === 0) {
    startTimer();
  }

  element.classList.toggle("isFlipped");
  totalClicks++;
  document.getElementById('totalClicks').innerText = totalClicks;

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

    // Check if all cards are matched
    const matchedCards = document.querySelectorAll('.flip-card-inner.fixed');
    if (matchedCards.length === allCards.length) {
      // All cards are matched, stop the timer
      stopTimer();
    }
  }

  const {
    name
  } = element.dataset;
}

easyMode.addEventListener("click", () => init("easy"));
mediumMode.addEventListener("click", () => init("medium"));
hardMode.addEventListener("click", () => init("hard"));
testMode.addEventListener("click", () => init("test")); // test button listener