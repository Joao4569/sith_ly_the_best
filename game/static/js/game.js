// import cardData from "/static/data/cardData.json"
// assert {
//   type: "json"
// };

const cardData = [{
    name: "Darth Maul",
    data: "maul",
    image: "https://static.wikia.nocookie.net/39d40b7f-b284-4e4a-a536-85b30dcf3014/scale-to-width/755"
  },
  {
    name: "Darth Maul",
    data: "maul",
    image: "https://static.wikia.nocookie.net/39d40b7f-b284-4e4a-a536-85b30dcf3014/scale-to-width/755"
  },
  {
    name: "Darth Sidious",
    data: "sidious",
    image: "https://static.wikia.nocookie.net/starwars/images/1/1a/Palpatine-ME.png/revision/latest/scale-to-width-down/500?cb=20170726055920"
  },
  {
    name: "Darth Sidious",
    data: "sidious",
    image: "https://static.wikia.nocookie.net/starwars/images/1/1a/Palpatine-ME.png/revision/latest/scale-to-width-down/500?cb=20170726055920"
  },
  {
    name: "Darth Vader",
    data: "vader",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_67b709e4.jpeg?region=0,0,1536,864&width=960"
  },
  {
    name: "Darth Vader",
    data: "vader",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_67b709e4.jpeg?region=0,0,1536,864&width=960"
  },
  {
    name: "Luke SkyWalker",
    data: "luke",
    image: "https://external-preview.redd.it/_8P3-0Of0if_RvbgnISCij5GUGlEBrzs6V6L_3nz2Js.jpg?auto=webp&v=enabled&s=0f2606d735e68dff23bfc948092859ec7f258085"
  },
  {
    name: "Luke SkyWalker",
    data: "luke",
    image: "https://external-preview.redd.it/_8P3-0Of0if_RvbgnISCij5GUGlEBrzs6V6L_3nz2Js.jpg?auto=webp&v=enabled&s=0f2606d735e68dff23bfc948092859ec7f258085"
  },
  {
    name: "Qui Gon Jinn",
    data: "qui-gon",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5cd007ce-da58-4a35-965e-56a1412972a0/dcy8q64-49f3297e-2636-47b2-b970-2fd4e5874108.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVjZDAwN2NlLWRhNTgtNGEzNS05NjVlLTU2YTE0MTI5NzJhMFwvZGN5OHE2NC00OWYzMjk3ZS0yNjM2LTQ3YjItYjk3MC0yZmQ0ZTU4NzQxMDguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.T1wtV6RL6o9q-fMte99yV-oxXHdTrapQiDvAaMolZU8"
  },
  {
    name: "Qui Gon Jinn",
    data: "qui-gon",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5cd007ce-da58-4a35-965e-56a1412972a0/dcy8q64-49f3297e-2636-47b2-b970-2fd4e5874108.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVjZDAwN2NlLWRhNTgtNGEzNS05NjVlLTU2YTE0MTI5NzJhMFwvZGN5OHE2NC00OWYzMjk3ZS0yNjM2LTQ3YjItYjk3MC0yZmQ0ZTU4NzQxMDguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.T1wtV6RL6o9q-fMte99yV-oxXHdTrapQiDvAaMolZU8"
  },
  {
    name: "Obi Wan Kenobi",
    data: "obi-wan",
    image: "https://lumiere-a.akamaihd.net/v1/images/60be600e2ac3f40001acd6b0-image_0639c0fb.jpeg?region=0,0,1536,864&width=960"
  },
  {
    name: "Obi Wan Kenobi",
    data: "obi-wan",
    image: "https://lumiere-a.akamaihd.net/v1/images/60be600e2ac3f40001acd6b0-image_0639c0fb.jpeg?region=0,0,1536,864&width=960"
  },
  {
    name: "Mace Windu",
    data: "mace-windu",
    image: "https://static.wikia.nocookie.net/starwars/images/e/ea/Mace_Windus_Lightsaber_SWD.png/revision/latest/scale-to-width-down/499?cb=20190403045557"
  },
  {
    name: "Mace Windu",
    data: "mace-windu",
    image: "https://static.wikia.nocookie.net/starwars/images/e/ea/Mace_Windus_Lightsaber_SWD.png/revision/latest/scale-to-width-down/499?cb=20190403045557"
  },
  {
    name: "Boba Fett",
    data: "boba-fett",
    image: "https://lumiere-a.akamaihd.net/v1/images/the-book-of-boba-fett-chapter-7-cargo-hold_tall-1_a354c7a0.jpeg?region=0,0,1536,864&width=960"
  },
  {
    name: "Boba Fett",
    data: "boba-fett",
    image: "https://lumiere-a.akamaihd.net/v1/images/the-book-of-boba-fett-chapter-7-cargo-hold_tall-1_a354c7a0.jpeg?region=0,0,1536,864&width=960"
  },
  {
    name: "Han Solo",
    data: "han-solo",
    image: "https://i.pinimg.com/564x/49/35/57/4935576c475291a4b9f0fdc13da9edfc.jpg"
  },
  {
    name: "Han Solo",
    data: "han-solo",
    image: "https://i.pinimg.com/564x/49/35/57/4935576c475291a4b9f0fdc13da9edfc.jpg"
  },
  {
    name: "R2 D2",
    data: "r2d2",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ead955b9-37d5-45fe-8d76-32de76e1c3d1/danprzg-ed7679ab-65b2-45e5-8d42-685282621cf4.jpg/v1/fill/w_900,h_1273,q_75,strp/r2d2__2016__colours_by_steveandrew_danprzg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3MyIsInBhdGgiOiJcL2ZcL2VhZDk1NWI5LTM3ZDUtNDVmZS04ZDc2LTMyZGU3NmUxYzNkMVwvZGFucHJ6Zy1lZDc2NzlhYi02NWIyLTQ1ZTUtOGQ0Mi02ODUyODI2MjFjZjQuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RqBOQ1diIePca5EJjq5uDLKdo7eNSXPO6u5m9M66x1w"
  },
  {
    name: "R2 D2",
    data: "r2d2",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ead955b9-37d5-45fe-8d76-32de76e1c3d1/danprzg-ed7679ab-65b2-45e5-8d42-685282621cf4.jpg/v1/fill/w_900,h_1273,q_75,strp/r2d2__2016__colours_by_steveandrew_danprzg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3MyIsInBhdGgiOiJcL2ZcL2VhZDk1NWI5LTM3ZDUtNDVmZS04ZDc2LTMyZGU3NmUxYzNkMVwvZGFucHJ6Zy1lZDc2NzlhYi02NWIyLTQ1ZTUtOGQ0Mi02ODUyODI2MjFjZjQuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RqBOQ1diIePca5EJjq5uDLKdo7eNSXPO6u5m9M66x1w"
  },
  {
    name: "C3PO",
    data: "c3po",
    image: "https://preview.redd.it/pgq45t30p7p81.jpg?width=695&format=pjpg&auto=webp&v=enabled&s=af6938194c857d903e89a3f2a704692f5ccb83c8"
  },
  {
    name: "C3PO",
    data: "c3po",
    image: "https://preview.redd.it/pgq45t30p7p81.jpg?width=695&format=pjpg&auto=webp&v=enabled&s=af6938194c857d903e89a3f2a704692f5ccb83c8"
  },
  {
    name: "Anakin Skywalker",
    data: "anakin",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcf66d9d-86b4-476c-bc3f-c4c20b84aa45/dctq988-9968dc49-bfe2-41a9-afc9-dec02378d92d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjZjY2ZDlkLTg2YjQtNDc2Yy1iYzNmLWM0YzIwYjg0YWE0NVwvZGN0cTk4OC05OTY4ZGM0OS1iZmUyLTQxYTktYWZjOS1kZWMwMjM3OGQ5MmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.49u4vZkpiaD3b1ZfNGoV6PoatYXmrwh9FkgqVoN96vU"
  },
  {
    name: "Anakin Skywalker",
    data: "anakin",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcf66d9d-86b4-476c-bc3f-c4c20b84aa45/dctq988-9968dc49-bfe2-41a9-afc9-dec02378d92d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjZjY2ZDlkLTg2YjQtNDc2Yy1iYzNmLWM0YzIwYjg0YWE0NVwvZGN0cTk4OC05OTY4ZGM0OS1iZmUyLTQxYTktYWZjOS1kZWMwMjM3OGQ5MmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.49u4vZkpiaD3b1ZfNGoV6PoatYXmrwh9FkgqVoN96vU"
  },
  {
    name: "Chewbacca",
    data: "chewbacca",
    image: "https://i.pinimg.com/564x/67/a9/b4/67a9b412f3f6a588025091f1067fa4ab.jpg"
  },
  {
    name: "Chewbacca",
    data: "chewbacca",
    image: "https://i.pinimg.com/564x/67/a9/b4/67a9b412f3f6a588025091f1067fa4ab.jpg"
  },
  {
    name: "Princess Leia",
    data: "leia",
    image: "https://cdna.artstation.com/p/assets/images/images/001/067/750/large/ryan-valle-leia-copyright.jpg?1439333682"
  },
  {
    name: "Princess Leia",
    data: "leia",
    image: "https://cdna.artstation.com/p/assets/images/images/001/067/750/large/ryan-valle-leia-copyright.jpg?1439333682"
  },
  {
    name: "Yoda",
    data: "yoda",
    image: "https://static.wikia.nocookie.net/d288e257-785a-4c4f-83d4-8359cdcb1f7e/scale-to-width/755"
  },
  {
    name: "Yoda",
    data: "yoda",
    image: "https://static.wikia.nocookie.net/d288e257-785a-4c4f-83d4-8359cdcb1f7e/scale-to-width/755"
  }
]

const scorecontainer = document.getElementById('score-container')
const wrapper = document.getElementById("wrapper");
const easyMode = document.getElementById("easy");
const mediumMode = document.getElementById("medium");
const hardMode = document.getElementById("hard");

window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});


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

  scorecontainer.style.display = 'flex'

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
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Star_Wars_Destiny_CCG_card_back.jpg/220px-Star_Wars_Destiny_CCG_card_back.jpg"
          alt="front card image"
        />
      </div>
      <div class="flip-card-back">
        <img
          class="card-image"
          src=${card.image}
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

function calculateScore(timeSpent, numMoves, mode) {
  const TIME_WEIGHT = 1;
  const MOVE_WEIGHT = 2;

  const score =
    ((1 / timeSpent) * TIME_WEIGHT + (1 / numMoves) * MOVE_WEIGHT) * 10000;


  if (mode === "medium") {
    return score * 2;
  }
  if (mode === "hard") {
    return score * 4;
  } else {
    return score;
  }
}



function endGame(time, moves) {
  // Update the form's input fields with the game results
  const totalTime = document.getElementById('timeSpent')
  const totalMoves = document.getElementById('moves')
  const gameMode = document.getElementById('gameMode')
  const gameScore = document.getElementById('score')


  console.log(totalTime, totalMoves, gameMode)


  const score = calculateScore(time, moves, 'easy')


  console.log(score)
  gameMode.value = 'easy'
  totalMoves.value = moves
  totalTime.value = time
  gameScore.value = score
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