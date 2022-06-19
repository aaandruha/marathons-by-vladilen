const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");

const colors = [
  "#deda19",
  "#42b66c",
  "#6c53d6",
  "#8da0dd",
  "#e05510",
  "#1c4103",
  "#f13ce9",
  "#781829",
  "#dd9172",
  "#d6b6d4",
  "#4f76c5",
];

let time = 0;
let score = 0;
let intervalId = null;

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

//DEBUG
//startGame();

function startGame() {
  intervalId = setInterval(decreaseTime, 1000);
  score = 0;
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function showResult() {
  board.style.display = "inline";
  board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`;
  timeEl.parentNode.classList.add("hide");
  const restartBtn = document.createElement("button");
  restartBtn.innerHTML = "Начать заново";
  restartBtn.addEventListener("click", (event) => {
    board.innerHTML = "";
    board.style.display = "flex";
    screens[1].classList.remove("up");
    timeEl.parentNode.classList.remove("hide");
  });
  board.append(restartBtn);
}

function finishGame() {
  clearInterval(intervalId);
  showResult();
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  const color = getRandomColor();
  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${x}px`;
  circle.style.left = `${y}px`;
  circle.style.background = `${color}`;
  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
